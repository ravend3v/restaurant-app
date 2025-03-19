import { createServerSupabaseClient } from "./lib/supabase/server";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
    console.log("Middleware called for:", req.nextUrl.pathname);

    const response = NextResponse.next({
        request: {
            headers: req.headers,
        },
    });

    const supabase = await createServerSupabaseClient();

    const {
        data: { session },
    } = await supabase.auth.getSession();

    console.log("Session:", session);

    // Protected routes pattern
    const isProtectedRoute = req.nextUrl.pathname.startsWith("/profile");
    const isAuthRoute = req.nextUrl.pathname.startsWith("/auth");

    console.log("isProtectedRoute:", isProtectedRoute);
    console.log("isAuthRoute:", isAuthRoute);

    if (isProtectedRoute && !session) {
        console.log("Redirecting to /login");
        return NextResponse.redirect(new URL("/login", req.url));
    }

    if (isAuthRoute && session) {
        console.log("Redirecting to /dashboard");
        return NextResponse.redirect(new URL("/dashboard", req.url));
    }

    return response;
}

export const config = {
    matcher: [
      "/api/:path*",
      "/((?!api|_next/static|_next/image|favicon.ico).*)",
    ],
};