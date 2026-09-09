// A map of "keys" to async functions that fetch data.
// Example: { user: () => fetchUser(), posts: () => fetchPosts() }
type FetcherMap = Record<string, () => Promise<any>>;

// Takes a FetcherMap and produces a new type where each key maps to the
// *resolved* value of its fetcher function (i.e. what the Promise returns),
// instead of the function itself.
// Example: if T = { user: () => Promise<User> }, ResolvedData<T> = { user: User }
type ResolvedData<T extends FetcherMap> = {
  [K in keyof T]: Awaited<ReturnType<T[K]>>;
};

// A React Server Component that:
// 1. Takes a set of named data-fetching functions ("fetchers")
// 2. Runs them all in parallel
// 3. Passes the resolved results to a "renderer" function so the caller
//    decides how to display the data
//
// This lets you write something like:
//
// <DataSection
//   fetchers={{ user: fetchUser, posts: fetchPosts }}
//   renderer={({ user, posts }) => <Profile user={user} posts={posts} />}
// />
//
// and get full type-safety: `renderer` knows `user` is a `User` and
// `posts` is whatever `fetchPosts` resolves to, with no manual typing.
export async function DataSection<T extends FetcherMap>({
  fetchers,
  renderer,
}: {
  fetchers: T;
  renderer: (data: ResolvedData<T>) => React.ReactNode;
}) {
  // Get the names of all the fetchers (e.g. ["user", "posts"])
  const keys = Object.keys(fetchers) as (keyof T)[];

  // Call every fetcher function and wait for all of them to finish
  // at the same time (in parallel), rather than one after another.
  const results = await Promise.all(keys.map((k) => fetchers[k]()));

  // Rebuild an object that maps each key back to its resolved result.
  // e.g. keys = ["user", "posts"], results = [userData, postsData]
  //      -> { user: userData, posts: postsData }
  const data = keys.reduce((acc, key, i) => {
    acc[key] = results[i];
    return acc;
  }, {} as ResolvedData<T>);

  // Hand the fully-resolved data off to the caller's render function,
  // and render whatever React elements it returns.
  return <>{renderer(data)}</>;
}
