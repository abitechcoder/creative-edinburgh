export const ITEM_PER_PAGE = 10;

type RouteAccessMap = {
  [key: string]: string[];
};

export const routeAccessMap: Record<string, string[]> = {
  "/app/admin(.*)": ["admin"],
  "/app/student(.*)": ["student"],
  "/app/teacher(.*)": ["teacher"],
  "/app/directories": ["admin"],
  "/app/sectors": ["admin"],
  "/app/users": ["admin"],
  "/app/events": ["admin"],
  "/app/announcement": ["admin"],
  "/app/subscription": ["admin"],
};
