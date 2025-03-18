// This is the sign up error page. It is displayed when there is an error during the sign up process.

'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

export default function SignupError() {
    const router = useRouter();

    const handleRetry = () => {
        router.push('/signup');
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
            <div className="w-full max-w-md text-center">
                <h1 className="text-2xl font-bold mb-6">Sign Up Error</h1>
                <p className="mb-4">There was an error during the sign up process. Please try again.</p>
                <button
                    onClick={handleRetry}
                    className="bg-blue-600 py-2 px-4 rounded-lg hover:bg-blue-500"
                >
                    Retry Sign Up
                </button>
            </div>
        </div>
    );
}