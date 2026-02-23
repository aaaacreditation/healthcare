'use client';

import React, { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { Loader2, ShieldCheck } from 'lucide-react';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        const result = await signIn('credentials', {
            email,
            password,
            redirect: false,
        });

        if (result?.error) {
            setError('Invalid email or password');
            setIsLoading(false);
        } else {
            router.push('/dashboard');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="w-full max-w-md p-8">
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
                    <div className="flex flex-col items-center mb-8">
                        <div className="p-3 bg-[#0a4373] rounded-xl mb-4">
                            <ShieldCheck className="h-8 w-8 text-white" />
                        </div>
                        <h1 className="text-2xl font-bold text-gray-900">AAA Dashboard</h1>
                        <p className="text-sm text-gray-500 mt-1">Enter your credentials to continue</p>
                    </div>

                    {error && (
                        <div className="mb-6 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md text-sm">
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="login-email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                            <input
                                type="email"
                                id="login-email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0a4373] focus:border-transparent outline-none transition-all"
                                placeholder="admin@aaa-accreditation.org"
                            />
                        </div>
                        <div>
                            <label htmlFor="login-password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                            <input
                                type="password"
                                id="login-password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0a4373] focus:border-transparent outline-none transition-all"
                                placeholder="••••••••"
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full h-12 text-base font-semibold rounded-lg inline-flex items-center justify-center text-white bg-[#0a4373] hover:bg-[#08365d] disabled:opacity-60 transition-colors"
                        >
                            {isLoading ? (
                                <>
                                    <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                                    Signing in...
                                </>
                            ) : 'Sign In'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
