// Import nacessary modules
import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/utils/supabaseClient";

export async function GET(req: NextRequest) {
    // Token
    const token = req.headers.get('authorization')?.split(' ')[1];

    // Check if token is valid
    if (!token) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Get user data
    const { data, error } = await supabase.auth.getUser(token);

    if (error) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    return NextResponse.json({ message: 'You are authorized', user: data.user }, {status: 200 });
}
