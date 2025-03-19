// src/lib/providers/auth-provider.tsx
"use client";

import { useEffect } from "react";
import { useAuthStore } from "@/lib/stores/use-auth-store";
import { createClientSupabaseClient } from "@/lib/supabase/client";

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const { setUser, setLoading } = useAuthStore();
    const supabase = createClientSupabaseClient();

    useEffect(() => {

        supabase.auth.getSession().then(({ data: { session } }) => {
            if (session) {
                setUser(session.user);
            }
            setLoading(false);
        });

        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange((_, session) => {
            setUser(session?.user ?? null);
            setLoading(false);
        })

        return () => {
            subscription?.unsubscribe();
        }
    }, [setUser, setLoading, supabase.auth])

    return <>{children}</>;
}