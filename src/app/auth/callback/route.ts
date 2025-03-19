// src/auth/callback/route.ts

import { createServerSupabaseClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";
import { type NextRequest } from "next/server";

export async function GET(req: NextRequest) {
    const requestUrl = new URL(req.url)
    const code = requestUrl.searchParams.get("code")

    if (code) {
        const supabase = await createServerSupabaseClient()
        await supabase.auth.exchangeCodeForSession(code)
    }

    // URL to redirect to after successful login
    return NextResponse.redirect(new URL("/dashboard", req.url))
}