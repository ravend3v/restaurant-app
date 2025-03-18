// This is the sign up info page. It is displayed affter sign up to info that a link has been sent to the email.

import React from 'react';

export default function SignupInfo() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
            <div className="w-full max-w-md text-center">
                <h1 className="text-2xl font-bold mb-6">You have successfuly signed up</h1>
                <a href="/login" className="text-blue-400 hover:text-blue-300">Go to Login</a>
            </div>
        </div>
    );
}