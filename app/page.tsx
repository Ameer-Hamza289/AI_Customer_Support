"use client";
import { useState } from "react";
import Head from "next/head";
import ChatContainer from "@/components/ChatContainer";
import ChatMessage from "@/components/ChatMessage";
import { FaUserCircle } from "react-icons/fa";
import { ChatResponse, Message } from "@/types/page";

export default function Home() {
  const [messages, setMessages] = useState<Message[]>([
    { text: "How are you?", sender: "bot" },
    {
      text: "Write me an essay about ancient Rome, their civilization and culture and what food was the best considered item among them?",
      sender: "user",
    },
    { text: "How are you?", sender: "bot" },
  ]);

  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);

  async function sendMessage(message: string): Promise<string> {
    const response = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
    });
    const data: ChatResponse = await response.json();

    return data.message;
  }
  const handleSendMessage = async (text: string) => {
    setMessages([...messages, { text, sender: "user" }]);
    const aiResponse: string = await sendMessage(text);
    // the above set message is not added for some reason
    setMessages([...messages, { text: aiResponse, sender: "bot" }]);
  };

  const handleLogout = () => {
    // Implement logout functionality here
    console.log("Logged out");
  };

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
            <ChatMessage
              key={index}
              text={message.text}
              sender={message.sender}
            />
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
