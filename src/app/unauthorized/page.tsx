"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const Unauthorized = () => {
    const router = useRouter();

    useEffect(() => {
        const timer = setTimeout(() => {
            router.push('/');
        }, 3000); // Wait for 3 seconds before redirecting

        return () => clearTimeout(timer);
    }, [router]);

    return (
        <main className="bg-black h-screen">
            <div className="flex flex-col items-center justify-center text-white h-full">
                <h1>You do not have access to this page</h1>
            </div>
        </main>
    );
};

export default Unauthorized;