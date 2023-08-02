/*
  Now that Clerk is installed and mounted in your application, it’s time to decide which pages are public and which need to hide behind authentication. 
  We do this by creating a middleware.ts file at the root folder (or inside src/ if that is how you set up your app).
*/
import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
