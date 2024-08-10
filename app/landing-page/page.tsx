"use client";

import Link from "next/link";

export default function landingPage() {
  return (
    <div className="bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Connect Effortlessly, Chat Seamlessly
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Real-time messaging, AI-powered responses, and a seamless user
            experience—chat smarter, not harder.
          </p>
          <Link href="/auth">
            <span className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold text-lg">
              Get Started
            </span>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Why Choose Our Chat App?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-700 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">
                Real-time Messaging
              </h3>
              <p>
                Instant communication without delays, ensuring your
                conversations are smooth and efficient.
              </p>
            </div>
            <div className="p-6 bg-gray-700 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">
                AI-Powered Assistance
              </h3>
              <p>
                Get quick answers and support from our AI-powered chat system.
              </p>
            </div>
            <div className="p-6 bg-gray-700 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">
                User-Friendly Interface
              </h3>
              <p>
                Enjoy a clean, intuitive design that makes chatting easy and
                fun.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Step 1</h3>
              <p>Sign Up or Log In to get started.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Step 2</h3>
              <p>Connect with your contacts or start a new chat.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Step 3</h3>
              <p>
                Enjoy seamless, real-time communication with our powerful chat
                interface.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            What Our Users Say
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 bg-gray-700 rounded-lg shadow-lg">
              <p>
                "This chat app has revolutionized the way our team communicates.
                The AI responses are a game-changer!"
              </p>
              <p className="mt-4 font-semibold">- Ameer Hamza</p>
            </div>
            <div className="p-6 bg-gray-700 rounded-lg shadow-lg">
              <p>
                "I love the real-time messaging and user-friendly design. It's
                so easy to use!"
              </p>
              <p className="mt-4 font-semibold">- SUBHAN </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Ready to Get Started?
          </h2>
          <Link href="/auth">
            <span className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold text-lg">
              Sign Up Today
            </span>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-center">
        <p className="text-gray-400">
          © 2024 Your Chat App. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}
