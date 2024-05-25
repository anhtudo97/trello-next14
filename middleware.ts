import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isProtectedRoutes = createRouteMatcher([
    '/organization(.*)',
]);
const isPublicRoutes = createRouteMatcher([
    '/',
]);

export default clerkMiddleware((auth, req) => {
    const { userId, has, redirectToSignIn, orgId, } = auth();

    if (!userId && isProtectedRoutes(req)) {
        return redirectToSignIn({
            returnBackUrl: req.url
        });
    }

    if (userId && isPublicRoutes(req)) {
        let path = "/select-org";

        if (orgId) {
            path = `/organization/${orgId}`;
        }

        const orgSelection = new URL(path, req.url);
        return NextResponse.redirect(orgSelection);
    }

    if (userId && !orgId && req.nextUrl.pathname !== "/select-org") {

        const orgSelection = new URL("/select-org", req.url);
        return NextResponse.redirect(orgSelection);
    }
});


export const config = {
    matcher: [
        '/((?!.*\\..*|_next).*)', // Don't run middleware on static files
        '/', // Run middleware on index page
        '/(api|trpc)(.*)' // Run middleware on API routes
    ]
};