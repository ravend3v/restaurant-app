// src/hooks/use-auth-login.ts
import { useAuthStore } from "@/lib/stores/use-auth-store";
import { LoginFormData } from "@/lib/validations/auth";
import { useRouter } from "next/navigation";

interface UseAuthLogin {
  isLoading: boolean;
  login: (data: LoginFormData) => Promise<void>;
}

export function useAuthLogin(): UseAuthLogin {
  const { setUser, setLoading, isLoading } = useAuthStore();
  const router = useRouter();

  async function login(data: LoginFormData) {
    try {
      setLoading(true);
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error);
      }

      const { data: responseData } = await response.json();
      setUser(responseData.user, responseData.user.role);

      router.push("/");
    } catch (error) {
      console.error("Login error", error);
    } finally {
      setLoading(false);
    }
  }

  return { isLoading, login };
}