// This is the application's signup page. It allows users to create a new account.

'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/utils/supabaseClient';

export default function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        // Prevent the default form submission
        e.preventDefault();

        // Reset the error message
        setErrorMessage('');

        // Check if the passwords match
        if (password !== confirmPassword) {
            setErrorMessage('Passwords do not match');
            return;
        }

        // Send the request to Supabase
        try {
            const { error } = await supabase.auth.signUp({ email, password });
            if (error) throw error;

            // Redirect the user to the info page
            router.push('/signup-info');
        } catch (error) {
            setErrorMessage((error as Error).message);
        }
    };

    // The page layout
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
            <div className="w-full max-w-md">
                <h1 className="text-2xl font-bold mb-6 text-center">Sign Up</h1>
                <form onSubmit={handleSubmit} className="bg-gray-800 p-8 rounded-lg shadow-md">
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full px-3 py-2 text-white rounded-lg"
                        />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="password" className="block text-sm font-medium mb-2">Password</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="w-full px-3 py-2 text-white rounded-lg"
                        />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="confirmPassword" className="block text-sm font-medium mb-2">Confirm Password</label>
                        <input
                            type="password"
                            id="confirm-password"
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                            className="w-full px-3 py-2 text-white rounded-lg"
                        />
                    </div>

                    <button type="submit" className="w-full bg-blue-600 py-2 rounded-lg hover:bg-blue-500">
                        Sign Up
                    </button>
                    <p className='pt-4 text-center'>
                        Already have an account? <a href="/login" className="text-blue-400 hover:text-blue-300">Login</a>
                    </p>
                    {errorMessage && <p className="text-red-500 mt-4">{errorMessage}</p>}
                </form>
            </div>
        </div>
    );
}