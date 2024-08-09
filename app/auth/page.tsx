'use client';
import { ChangeEvent, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AuthPage() {
    const [formData, setFormData] = useState({ name: '', email: '', password: '' });
    const router = useRouter();

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (type: 'sign-up' | 'login') => {
        console.log(`${type} clicked`);
        console.log(formData);

        // After successful login/signup
        router.push('/'); // Redirect to dashboard or another page
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 p-4">
            <div className="bg-white p-6 rounded-lg shadow-md max-w-sm w-full">
                <h2 className="text-2xl font-bold text-center mb-6">Account</h2>
                <form className="space-y-4">
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Name"
                        className="w-full p-3 bg-gray-200 rounded border border-gray-300"
                    />
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email"
                        className="w-full p-3 bg-gray-200 rounded border border-gray-300"
                    />
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Password"
                        className="w-full p-3 bg-gray-200 rounded border border-gray-300"
                    />
                    <p>If you have not account, Click on Sign Up</p>
                    <div className="flex flex-col gap-4">
                        <button
                            type="button"
                            onClick={() => handleSubmit('sign-up')}
                            className="w-full p-3 text-white bg-green-600 rounded hover:bg-gray-950"
                        >
                            Sign Up
                        </button>
                        <button
                            type="button"
                            onClick={() => handleSubmit('login')}
                            className="w-full p-3 text-white bg-green-600 rounded hover:bg-gray-950"
                        >
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
