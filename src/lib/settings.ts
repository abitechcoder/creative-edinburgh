export const ITEM_PER_PAGE = 10;

type RouteAccessMap = {
  [key: string]: string[];
};

export const routeAccessMap: RouteAccessMap = {
  "/app/admin(.*)": ["admin", "member"],
  "/app/directories": ["admin", "member"],
  "/app/sectors": ["admin"],
  "/app/users": ["admin"],
  "/app/events": ["admin"],
  "/app/announcements": ["admin"],
  "/app/subscription": ["admin"],
};
