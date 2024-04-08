
import { authMiddleware } from "@clerk/nextjs";
import { NextResponse } from "next/server";
// See https://clerk.com/docs/references/nextjs/auth-middleware
// for more information about configuring your Middleware

 
export default authMiddleware({
    publicRoutes: ['/',"/api/get-wallpaper","/api/get-user-info"],
});
 
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)","/(api|trpc)(.*)"],
};