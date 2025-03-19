import { LoginForm } from "@/components/auth/login-form";

export default function LoginPage() {
    console.log("LoginPage rendered");
    return (
        <div className="flex dark:bg-[#16161D] flex-col items-center justify-center h-screen">
            <LoginForm />
        </div>
    )
}