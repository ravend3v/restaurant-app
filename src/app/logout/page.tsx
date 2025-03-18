'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Logout() {
    const router = useRouter();

    useEffect(() => {
        localStorage.removeItem('token');
        router.push('/');
    }, [router]);

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
            <p>Logging out...</p>
        </div>
    );
}