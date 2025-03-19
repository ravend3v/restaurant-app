"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema, RegisterFormData } from "@/lib/validations/auth";
import { useAuthRegister } from "@/hooks/use-auth-register";


export function RegisterForm() {
    const { isLoading, register } = useAuthRegister();

    const form = useForm<RegisterFormData>({
        resolver: zodResolver(registerSchema),
        defaultValues: {
          email: "",
          password: "",
          confirmPassword: "",
        },
      })

    return (
        <form 
            onSubmit={form.handleSubmit(register)} 
            className="dark:text-white dark:bg-gray-800 w-96 p-4 rounded-lg">

            <h1 className="text-2xl">Sign Up</h1>
            <div className="flex flex-col items-left justify-start space-y-4 pb-4 pt-2">
                <label className="">Email</label>
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

                <label>Confirm Password</label>
                <input
                    type="password"
                    placeholder="Confirm Password"
                    className="dark:bg-gray-700 dark:border-gray-600 p-2 rounded-md"
                    {...form.register("confirmPassword")}
                />
            </div>
            
            <div className="flex justify-center pb-4">
                <button type="submit" disabled={isLoading} className="bg-[#3D5AFE] hover:bg-deep-purple-700 w-40 p-2 rounded-md">
                    {isLoading ? "Loading..." : "Sign Up"}
                </button>
            </div>
            <h2 className="text-center">Already have an account? <a href="/login" className="text-blue-500">Login</a></h2>
        </form>
    )
}