// src/lib/supabase/server.ts

import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';
import { Database } from './types';

export async function createServerSupabaseClient() {
    const cookiesStore = await cookies();

    return createServerClient<Database>(
        process.env.NEXT_PUBLIC_SUPABASE_URL as string,
        process.env.SUPABASE_SERVICE_KEY as string,
        {
            cookies: {
                getAll() {
                    return cookiesStore.getAll();
                },
                setAll(cookiesToSet) {
                    try {
                        cookiesToSet.forEach(({ name, value, options }) => 
                            cookiesStore.set(name, value, options)
                        );
                    } catch (error) {
                        console.error('Failed to set cookies', error);
                    }
                },
            },
        }
    );
}