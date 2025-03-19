"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginFormData, loginSchema } from "@/lib/validations/auth";
import { useAuthLogin } from "@/hooks/use-auth-login";


export function LoginForm() {
    const { isLoading, login } = useAuthLogin();

    const form = useForm<LoginFormData>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    })

    return (
        <form onSubmit={form.handleSubmit(login)} className="dark:text-white dark:bg-gray-800 w-90 p-8 rounded-lg">
            <h1 className="text-2xl">Login to your account</h1>
            <div className="flex flex-col items-left justify-start space-y-4 pb-4 pt-2">
                <label>Email</label>
                <input
                    type="email"
                    placeholder="Email"
                    className="dark:bg-gray-700 dark:border-gray-600 p-2 rounded-md"
                    {...form.register("email")}
                />
                <label>Password</label>
                <input
                    type="password"
                    placeholder="Password"
                    className="dark:bg-gray-700 dark:border-gray-600 p-2 rounded-md"
                    {...form.register("password")}
                />
            </div>
            
            <div className="flex justify-center pb-4">
                <button type="submit" disabled={isLoading} className="flex items-center justify-center bg-[#3D5AFE] hover:bg-deep-purple-700 w-40 p-2 rounded-md">
                    {isLoading ? "Loading..." : "Sign In"}
                </button>
            </div>
            
            <h2 className="text-center">Don&apos;t have an account? <a href="/register" className="text-blue-500">Register</a></h2>
        </form>
    )
}