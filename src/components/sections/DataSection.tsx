type FetcherMap = Record<string, () => Promise<any>>;

type ResolvedData<T extends FetcherMap> = {
  [K in keyof T]: Awaited<ReturnType<T[K]>>;
};

export async function DataSection<T extends FetcherMap>({
  fetchers,
  renderer,
}: {
  fetchers: T;
  renderer: (data: ResolvedData<T>) => React.ReactNode;
}) {
  const keys = Object.keys(fetchers) as (keyof T)[];
  const results = await Promise.all(keys.map((k) => fetchers[k]()));

  const data = keys.reduce((acc, key, i) => {
    acc[key] = results[i];
    return acc;
  }, {} as ResolvedData<T>);

  return <>{renderer(data)}</>;
}
