import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { routeAccessMap } from "./lib/settings";
import { NextResponse } from "next/server";

const matchers = Object.keys(routeAccessMap).map((route) => ({
  matcher: createRouteMatcher([route]),
  allowedRoles: routeAccessMap[route],
}));

export default clerkMiddleware((auth, req) => {
  const url = new URL(req.url);
  const currentPath = url.pathname;

  // ✅ 1. Allow all non-/app paths (public pages)
  if (!currentPath.startsWith("/app")) {
    return NextResponse.next();
  }

  // ✅ 2. Allow the login page (unauthenticated route inside /app)
  if (currentPath === "/app" || currentPath === "/app/login") {
    return NextResponse.next();
  }

  const { sessionClaims } = auth();
  const role = (sessionClaims?.metadata as { role?: string })?.role;

  console.log("➡️ currentPath:", currentPath);
  console.log("🧑 Role:", role);

  // ✅ 3. If not logged in, redirect to home
  if (!role) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  // ✅ 4. Role access check
  for (const { matcher, allowedRoles } of matchers) {
    if (matcher(req) && !allowedRoles.includes(role)) {
      console.log("⛔ Not allowed:", currentPath);
      return NextResponse.rewrite(new URL("/unauthorized", req.url));
    }
  }

  // ✅ 5. If route is unknown inside /app, redirect to /app/role
  const knownPaths = Object.keys(routeAccessMap);
  const isKnown = knownPaths.some((route) =>
    new RegExp(`^${route.replace("(.*)", ".*")}$`).test(currentPath)
  );

  if (!isKnown) {
    const fallback = `/app/${role}`;
    if (currentPath !== fallback) {
      return NextResponse.redirect(new URL(fallback, req.url));
    }
  }

  return NextResponse.next();
});

export const config = {
  matcher: [
    "/((?!_next|.*\\.(?:html?|css|js|json|jpg|jpeg|png|gif|svg|ico|woff|woff2|ttf|eot|map)).*)",
    "/(api|trpc)(.*)",
  ],
};
