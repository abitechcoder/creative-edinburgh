export const ITEM_PER_PAGE = 12;

type RouteAccessMap = {
  [key: string]: string[];
};

export const routeAccessMap: RouteAccessMap = {
  "/app/admin(.*)": ["admin", "partner"],
  "/app/directories(.*)": ["admin", "partner"],
  "/app/member(.*)": ["member"],
  "/app/sectors(.*)": ["admin", "partner"],
  "/app/users(.*)": ["admin", "partner"],
  "/app/events(.*)": ["admin", "partner", "member"],
  "/app/announcements(.*)": ["admin", "partner", "member"],
  "/app/subscription": ["admin", "partner", "member"],
};

export const defaultColors = [
  "#4f46e5", // Indigo
  "#ec4899", // Pink
  "#10b981", // Emerald
  "#f59e0b", // Amber
  "#3b82f6", // Blue
  "#e11d48", // Rose
  "#14b8a6", // Teal
  "#8b5cf6", // Violet
  "#f43f5e", // Red
  "#6366f1", // Indigo
  "#22c55e", // Green
  "#eab308", // Yellow
  "#06b6d4", // Cyan
  "#d946ef", // Fuchsia
  "#ef4444", // Bright Red
  "#0ea5e9", // Sky Blue
  "#a855f7", // Purple
  "#84cc16", // Lime
  "#fb923c", // Orange
  "#3f6212", // Olive Green
];

export const defaultColors2 = [
  "#0ea5e9", // Sky Blue
  "#a855f7", // Purple
  "#f43f5e", // Red
  "#10b981", // Emerald
  "#f59e0b", // Amber
  "#ec4899", // Pink
  "#06b6d4", // Cyan
  "#e11d48", // Rose
  "#14b8a6", // Teal
  "#84cc16", // Lime
  "#fb923c", // Orange
  "#3f6212", // Olive Green
  "#eab308", // Yellow
  "#4f46e5", // Indigo
  "#22c55e", // Green
  "#d946ef", // Fuchsia
  "#ef4444", // Bright Red
  "#3b82f6", // Blue
];
