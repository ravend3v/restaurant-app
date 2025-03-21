import { useAuthStore } from "@/lib/stores/use-auth-store";
import { useRouter } from "next/navigation"; // Updated import
import { useEffect, useState } from "react";

interface UseAuthorizeOptions {
    requiredRole?: string;
    redirectTo?: string;
}

export default function useAuthorize(options: UseAuthorizeOptions = {}) {
    const { redirectTo = "/unauthorized", requiredRole } = options;
    const { role, user, isLoading: authLoading } = useAuthStore();
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (authLoading) {
            setIsLoading(true);
            return;
        }

        if (!user || (requiredRole && role !== requiredRole)) {
            router.push(redirectTo);
        } else {
            setIsLoading(false);
        }
    }, [authLoading, user, role, requiredRole, redirectTo, router]);

    return { isLoading };
}