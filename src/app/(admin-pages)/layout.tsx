"use client";

import useAuthorize from "@/hooks/use-authorized";
import { Loader } from "lucide-react";

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isLoading } = useAuthorize({ requiredRole: "admin" });

  if (isLoading) {
    return (
      <div className="flex h-screen w-screen items-center justify-center">
        <Loader className="animate-spin" />
      </div>
    );
  }

  return <>{children}</>;
}