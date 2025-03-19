// src/lib/utils/auth-utils.ts

import { createClientSupabaseClient } from "@/lib/supabase/client";
import { useAuthStore } from "@/lib/stores/use-auth-store";
import { useRouter } from "next/navigation";
import { useCallback } from "react";


export function useSignOu() {
    const router = useRouter();
    const { setLoading, clearSession } = useAuthStore();
    const supabase = createClientSupabaseClient();

    const signOut = useCallback(async () => {
        try  {
            setLoading(true);
            await supabase.auth.signOut();
            clearSession();
            router.replace("/login");
            router.refresh();
        } catch (error) {
            console.error("Sign out error", error);
        } finally {
            setLoading(false);
        }
    }, [supabase, clearSession, setLoading, router]);

    return signOut;
}

export function useAuthSession() {
    const { user, isLoading } = useAuthStore();

    return {
        session: user ? { user } : null,
        isLoading,
    };
}