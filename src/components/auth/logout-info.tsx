"use client";

import { useAuthLogout } from "@/hooks/use-auth-logout";

export function LogoutInfo() {
    const { isLoading, logout } = useAuthLogout();

    return (
        <div className="mt-4">
            <button onClick={logout} disabled={isLoading} className="bg-[#3D5AFE] hover:bg-deep-purple-700 text-white w-40 p-2 rounded-md">
                {isLoading ? "Loading..." : "Logout"}
            </button>
        </div>
    )
}
