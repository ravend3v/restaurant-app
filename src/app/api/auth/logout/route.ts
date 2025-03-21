import { createServerSupabaseClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";

export async function POST() {
    try {
        const supabase = await createServerSupabaseClient();
        const { error } = await supabase.auth.signOut();

        if (error) throw error;

        return NextResponse.json({ message: "Successfully logged out" });
    } catch (error) {
        console.log("Logout error", error);
        return NextResponse.json(
            { error: error instanceof Error ? error.message : "Failed to logout" },
            { status: 400 }
        );
    }
}