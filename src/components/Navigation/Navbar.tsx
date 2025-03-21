import Link from "next/link";
import Image from "next/image";
import { useAuthStore } from "@/lib/stores/use-auth-store";

import '@/app/globals.css'

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
                        <button className="flex items-center space-x-2 hover:bg-[#831843] hover:cursor-pointer p-1 rounded-lg text-white">
                            <Image src="/home.svg" alt="home icon" width={24} height={24} />
                            <span>Home</span>
                        </button>
                    </Link>
                    {
                        /** 
                         * Check if the user is logged in if not logged in display button for login  
                         * and if logged in display button for profile page
                        */
                    }
                    {user ? (
                        <Link href="/profile">
                            <button className="flex items-center space-x-2 hover:bg-[#831843] hover:cursor-pointer p-1 rounded-lg text-white">
                                <Image src="/user.svg" alt="user svg" width={24} height={24} />
                                <span>Profile</span>
                            </button>
                        </Link>
                    ) : (
                        <Link href="/login">
                            <button className="flex items-center space-x-2 hover:bg-[#831843] hover:cursor-pointer p-1 rounded-lg text-white">
                                <Image className="svg-icon" src="/login.svg" alt="login svg" width={24} height={24} />
                                <span>Login</span>
                            </button>
                        </Link>
                    )}    

                </div>
            </div>
        </main>
    )
}