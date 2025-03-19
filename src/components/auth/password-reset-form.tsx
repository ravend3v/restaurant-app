"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { resetPasswordSchema, ResetPasswordFormData } from "@/lib/validations/auth";
import { useAuthReset } from "@/hooks/use-auth-reset";
import Link from "next/link";

export function PasswordResetForm() {
    const { isLoading, resetPassword } = useAuthReset();

    const form = useForm<ResetPasswordFormData>({
        resolver: zodResolver(resetPasswordSchema),
        defaultValues: {
            email: "",
        },
    })

    return (
        <form
            onSubmit={form.handleSubmit(resetPassword)}
            className="flex flex-col items-left justify-start space-y-4 dark:text-white dark:bg-gray-800 w-96 p-4 rounded-lg">

            <h1>Reset Password</h1>
            <label className="">Email</label>
            <input
                type="email"
                placeholder="Email"
                className="dark:bg-gray-700 dark:border-gray-600 p-2 rounded-md"
                {...form.register("email")}
            />

            <button type="submit" disabled={isLoading} className="bg-[#3D5AFE] hover:bg-deep-purple-700">
                {isLoading ? "Loading..." : "Reset Password"}
            </button>
            <h2>Remember your password? <Link href="/login"><a className="text-blue-500">Login</a></Link></h2>
        </form>
    )
}