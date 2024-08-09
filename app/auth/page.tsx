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
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
                <h2 className="text-2xl font-bold text-center mb-6">Account</h2>
                <form className="space-y-4">
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Name"
                        className="input-field"
                    />
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email"
                        className="input-field"
                    />
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Password"
                        className="input-field"
                    />
                    <div className="flex flex-col gap-4">
                        <button type="button" onClick={() => handleSubmit('sign-up')} className="text-white bg-blue-700">
                            Sign Up
                        </button>
                        <button type="button" onClick={() => handleSubmit('login')} className="text-white bg-blue-700">
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
