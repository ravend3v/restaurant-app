import { PasswordResetForm } from "@/components/auth/password-reset-form";

export default function ResetPasswordPage() {
    return (
        <div className="flex dark:bg-[#16161D] flex-col items-center justify-center h-screen">
            <PasswordResetForm />
        </div>
    )
}