// src/lib/stores/use-auth-store.ts

import { User } from "@supabase/supabase-js";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface AuthState {
    user: User | null;
    role: string | null;
    isLoading: boolean;
    setUser: (user: User | null, role: string | null) => void;
    setLoading: (isLoading: boolean) => void;
    clearSession: () => void;
}

export const useAuthStore = create<AuthState>() (
    persist(
        (set) => ({
            user: null,
            role: null,
            isLoading: true,
            setUser: (user, role) => set({ user, role }),
            setLoading: (isLoading) => set({ isLoading }),
            clearSession: () => set({ user: null, role: null, isLoading: false }),
        }),
        {
            name: "auth-storage",
            storage: createJSONStorage(() => sessionStorage),
        }
    )
)
