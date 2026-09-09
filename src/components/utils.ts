export function formatLongDate(iso: string) {
  return new Date(iso)
    .toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    })
    .toUpperCase();
}

export const formatShortDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

export function getTimeAgo(isoDateString: string): string {
  const date = new Date(isoDateString);
  const now = new Date();

  const diffMs = now.getTime() - date.getTime();
  const diffSeconds = Math.floor(diffMs / 1000);

  // Handle future dates or invalid input gracefully
  if (isNaN(diffSeconds)) {
    return "Invalid date";
  }
  if (diffSeconds < 0) {
    return "Just now";
  }

  const intervals: { label: string; seconds: number }[] = [
    { label: "Year", seconds: 31536000 },
    { label: "Month", seconds: 2592000 },
    { label: "Week", seconds: 604800 },
    { label: "Day", seconds: 86400 },
    { label: "Hour", seconds: 3600 },
    { label: "Minute", seconds: 60 },
  ];

  for (const interval of intervals) {
    const count = Math.floor(diffSeconds / interval.seconds);
    if (count >= 1) {
      return `${count} ${interval.label}${count > 1 ? "s" : ""} Ago`;
    }
  }

  return "Just now";
}
