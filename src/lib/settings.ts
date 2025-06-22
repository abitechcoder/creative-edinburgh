export const ITEM_PER_PAGE = 10

type RouteAccessMap = {
  [key: string]: string[];
};

export const routeAccessMap: RouteAccessMap = {
  "/app/admin(.*)": ["admin"],
  "/app/student(.*)": ["student"],
  "/app/teacher(.*)": ["teacher"],
  "/app/parent(.*)": ["parent"],
  "/app/list/teachers": ["admin", "teacher"],
  "/app/list/students": ["admin", "teacher"],
  "/app/list/parents": ["admin", "teacher"],
  "/app/list/subjects": ["admin"],
  "/app/list/classes": ["admin", "teacher"],
  "/app/list/exams": ["admin", "teacher", "student", "parent"],
  "/app/list/assignments": ["admin", "teacher", "student", "parent"],
  "/app/list/results": ["admin", "teacher", "student", "parent"],
  "/app/list/attendance": ["admin", "teacher", "student", "parent"],
  "/app/list/events": ["admin", "teacher", "student", "parent"],
  "/app/list/announcements": ["admin", "teacher", "student", "parent"],
};