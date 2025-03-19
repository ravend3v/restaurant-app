// src/hooks/use-auth-reset.ts
import { ResetPasswordFormData } from "@/lib/validations/auth";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface UseAuthReset {
  isLoading: boolean;
  resetPassword: (data: ResetPasswordFormData) => Promise<void>;
}

export function useAuthReset(): UseAuthReset {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  async function resetPassword(data: ResetPasswordFormData) {
    try {
      setIsLoading(true);
      const response = await fetch("/api/auth/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error);
      }

      router.push("/auth/login");
      router.refresh();
    } catch (error) {
        console.error("Reset password error", error);
    } finally {
        setIsLoading(false);
    }
  }

  return { isLoading, resetPassword };
}