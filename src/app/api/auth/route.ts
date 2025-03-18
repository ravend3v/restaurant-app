import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/utils/supabaseClient';

export async function POST(req: NextRequest) {
    try {
        const { email, password } = await req.json();
        console.log('Received email:', email);

        const { data, error } = await supabase.auth.signInWithPassword({ email, password });

        if (error) {
            console.error('Supabase sign-in error:', error);
            return NextResponse.json({ error: error.message }, { status: 401 });
        }

        console.log('Sign-in successful:', data);
        return NextResponse.json({ token: data.session?.access_token }, { status: 200 });
    } catch (error) {
        console.error('Request handling error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}