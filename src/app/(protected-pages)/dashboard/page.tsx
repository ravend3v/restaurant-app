"use client";

import { LogoutInfo } from "@/components/auth/logout-info";

export default function DashboardPage() {

    return (
        <div className="flex dark:bg-[#16161D] flex-col items-center justify-center h-screen">
            <h1 className="text-white text-4xl">Dashboard</h1>

            <LogoutInfo />
        </div>
    )
}