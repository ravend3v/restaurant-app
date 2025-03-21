import { createServerSupabaseClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";

export async function POST() {
    try {
        const supabase = await createServerSupabaseClient();
        const { error } = await supabase.auth.signOut();

        if (error) throw error;

        const response = NextResponse.json({ message: "Successfully logged out" });
        response.headers.set('Set-Cookie', 'sb-access-token=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT; HttpOnly; Secure; SameSite=Strict');

        return response;
    } catch (error) {
        console.log("Logout error", error);
        return NextResponse.json(
            { error: error instanceof Error ? error.message : "Failed to logout" },
            { status: 400 }
        );
    }
}