// src/hooks/use-auth-logout.ts

import { useAuthStore } from "@/lib/stores/use-auth-store";
import { useRouter } from "next/navigation";

interface UseAuthLogout {
  isLoading: boolean;
  logout: () => Promise<void>;
}

export function useAuthLogout(): UseAuthLogout {
  const { setUser, setLoading, isLoading } = useAuthStore();
  const router = useRouter();

  async function logout() {
    try {
      setLoading(true);

      // Debugging
      console.log("Logging out...");
      
      const response = await fetch("/api/auth/logout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error);
      }

      setUser(null);

      // Debugging
      console.log("Redirecting to /login");

      router.push("/login");

      

    } catch (error) {
        console.error("Logout error", error);
    } finally {
      setLoading(false);
    }
  }

  return { isLoading, logout };
}