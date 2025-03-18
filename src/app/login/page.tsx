// This is the login page for the application.
'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        // Prevent the default form submission
        e.preventDefault();

        // Reset the error message
        setErrorMessage('');

        // Send the request to the server
        try {
            const response = await axios.post('api/auth', { email, password });
            const { token } = response.data;
            
            // Save the token to the local storage
            localStorage.setItem('token', token);

            // Redirect the user to the home page (now authenticated)
            router.push('/');

        } catch {
            setErrorMessage('Invalid email or password');
        }
    };

    // The page layout
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
            <div className="w-full max-w-md">
                <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
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
                    <button type="submit" className="w-full bg-blue-600 py-2 rounded-lg hover:bg-blue-500">
                        Login
                    </button>
                    <p className='pt-4 text-center'>
                        Don&apos;t have an account? <a href="/signup" className="text-blue-400 hover:text-blue-300">Sign Up</a>
                    </p>
                    {errorMessage && <p className="text-red-500 mt-4">{errorMessage}</p>}
                </form>
            </div>
        </div>
    );
}
