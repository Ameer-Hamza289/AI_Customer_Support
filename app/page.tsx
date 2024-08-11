'use client'
import { useEffect, useState } from 'react';
import Head from 'next/head';
import ChatContainer from '@/components/ChatContainer';
import ChatMessage from '@/components/ChatMessage';
import { FaUserCircle } from 'react-icons/fa';

import { useRouter } from 'next/navigation';
import { onAuthStateChanged } from 'firebase/auth';
import { toast } from 'react-toastify';
import { useUser } from '@/context/userContext';
import Link from 'next/link';
import { ChatResponse, Message } from '@/types/page';



export default function Home() {

  const router = useRouter();
  const [messages, setMessages] = useState<Message[]>([
    { text: 'Hey, How can i assist you?', sender: 'assistant' }
  ]);

  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);


  async function sendMessage(message: string): Promise<string> {
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),
    });

    const data: ChatResponse = await response.json();
    return data.message;
  }

  const clearChat=()=>{
    setMessages([{ text: 'Hey, How can i assist you?', sender: 'assistant' }])
  }

  const handleSendMessage = async (text: string) => {
    const newMessages = [...messages, { text, sender: 'user' as 'user' }];
    setMessages(newMessages);
  
    const aiResponse = await sendMessage(text);
    // console.log(aiResponse, "response");
    setMessages([...newMessages, { text: aiResponse, sender: "assistant" }]);
  };
  const { user, loading, logout } = useUser();


  const handleLogout = async () => {
    try {
      await logout();
      clearChat();
      toast.success('Logout Successfully!');
      router.push('/auth');
    } catch (error) {
      toast.error('Error logging out');
    }
  };
  
  if (loading) return <div>Loading...</div>;
  if (!user) return (
    <div>
      <Link href={'/auth'}>
        <button>
          Please login
        </button>
      </Link>
    </div>

  )
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Head>
        <title>Chat AI</title>
      </Head>

      <header className="flex justify-between p-4 bg-gray-800 relative">
        <h1 className="text-lg font-bold">Chat AI</h1>
        <div className="relative">
          <FaUserCircle
            className="text-3xl cursor-pointer"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          />
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-gray-700 rounded-md shadow-lg z-10">
              <button
                className="w-full text-left px-4 py-2 text-sm text-white hover:bg-gray-600"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </header>

      <main className="flex-grow flex flex-col items-center p-4">
        <h2>if you have any query you can ask freely </h2>
        <ChatContainer onSendMessage={handleSendMessage}>
          {messages.map((message, index) => (
            <ChatMessage key={index} text={message.text} sender={message.sender} />
          ))}
        </ChatContainer>
      </main>

      <footer className="p-4 bg-gray-800 flex justify-between">
        {/* <button className="bg-green-600 p-2 rounded">NEW CHAT</button> */}
        {/* <button className="bg-green-600 p-2 rounded">SUPPORT</button> */}
        <button className="bg-green-600 p-2 rounded">RATE APP</button>
        <button className="bg-green-600 p-2 rounded">LOG OUT</button>
      </footer>
    </div>
  );
}
