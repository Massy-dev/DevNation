import { authMiddleware } from "@clerk/nextjs/server";

export default authMiddleware({
  publicRoutes: [
    "/",
    "/api/webhook/clerk",
    "/api/webhook(.*)",
    "/api/uploadthing",
    "/api/trpc(.*)",
  ],
  ignoredRoutes: [
    "/api/webhook/clerk",
    "/api/webhook(.*)",
    "/api/uploadthing",
    "/api/trpc(.*)",
  ],
  debug: true
});

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};