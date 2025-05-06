import { authMiddleware } from "@clerk/nextjs/server";

export default authMiddleware({
  publicRoutes: [
    "/",
    "/api/webhook/clerk",
    "/api/webhook(.*)",
    "/api/uploadthing",
    "/api/trpc(.*)",
    "/sign-in",
    "/sign-up",
    "/sso-callback"
  ],
  ignoredRoutes: [
    "/api/webhook/clerk",
    "/api/webhook(.*)",
    "/api/uploadthing",
    "/api/trpc(.*)",
  ],
  debug: true,
  afterAuth(auth, req, evt) {
    // Handle users who aren't authenticated
    if (!auth.userId && !auth.isPublicRoute) {
      const signInUrl = new URL('/sign-in', req.url);
      signInUrl.searchParams.set('redirect_url', req.url);
      return Response.redirect(signInUrl);
    }
  }
});

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};