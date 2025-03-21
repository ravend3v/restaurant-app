import Link from "next/link";
import { useAuthStore } from "@/lib/stores/use-auth-store";

export default function Navbar() {
    const { user } = useAuthStore();

    return (
        <main>
            <div className="flex items-center justify-between p-4">
                <div className="flex items-center bg-black p-4 rounded-xl">
                    <p>Logo</p>
                </div>
                <div className="flex items-center space-x-4 bg-black/55 p-4 rounded-xl">
                    <Link href="/">
                        <button className=" hover:bg-[#831843] hover:cursor-pointer p-1 rounded-lg text-white">Home</button>
                    </Link>
                    {
                        /** 
                         * Check if the user is logged in if not logged in display button for login  
                         * and if logged in display button for profile page
                        */
                    }
                    {user ? (
                        <Link href="/profile">
                            <button className="hover:bg-[#831843] hover:cursor-pointer p-1 rounded-lg text-white">Profile</button>
                        </Link>
                    ) : (
                        <Link href="/login">
                            <button className="hover:bg-[#831843] hover:cursor-pointer p-1 rounded-lg text-white">Login</button>
                        </Link>
                    )}    

                </div>
            </div>
        </main>
    )
}