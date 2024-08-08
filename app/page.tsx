// 'use client'
// import { useState } from 'react';
// import Head from 'next/head';
// import ChatContainer from './components/ChatContainer';
// import ChatMessage from './components/ChatMessage';

// export default function Home() {
//   const [messages, setMessages] = useState([
//     { text: 'How are you?', sender: 'bot' },
//     { text: 'Write me an essay about ancient Rome', sender: 'user' },
//     { text: 'How are you?', sender: 'bot' },
//   ]);

//   const handleSendMessage = (text: string) => {
//     setMessages([...messages, { text, sender: 'user' }]);
//   };

//   return (
//     <div className="min-h-screen bg-black text-white flex flex-col">
//       <Head>
//         <title>Chat AI</title>
//       </Head>

//       <header className="flex justify-between p-4 bg-gray-800">
//         <h1 className="text-lg font-bold">Chat AI</h1>
//         <button className="bg-gray-700 p-2 rounded">UPGRADE</button>
//       </header>

//       <main className="flex-grow flex flex-col items-center p-4 ">
//         <ChatContainer onSendMessage={handleSendMessage}>
//           {messages.map((message, index) => (
//             <ChatMessage key={index} text={message.text} sender={message.sender} />
//           ))}
//         </ChatContainer>
//       </main>

//       <footer className="p-4 bg-gray-800 flex justify-between">
//         <button className="bg-gray-700 p-2 rounded">NEW CHAT</button>
//         <button className="bg-gray-700 p-2 rounded">SUPPORT</button>
//         <button className="bg-gray-700 p-2 rounded">RATE APP</button>
//         <button className="bg-gray-700 p-2 rounded">LOG OUT</button>
//       </footer>
//     </div>
//   );
// }

'use client'
import { useState } from 'react';
import Head from 'next/head';
import ChatContainer from './components/ChatContainer';
import ChatMessage from './components/ChatMessage';
import { FaUserCircle } from 'react-icons/fa';

export default function Home() {
  const [messages, setMessages] = useState([
    { text: 'How are you?', sender: 'bot' },
    { text: 'Write me an essay about ancient Rome', sender: 'user' },
    { text: 'How are you?', sender: 'bot' },
  ]);

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleSendMessage = (text: string) => {
    setMessages([...messages, { text, sender: 'user' }]);
  };

  const handleLogout = () => {
    // Implement logout functionality here
    console.log('Logged out');
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
        <ChatContainer onSendMessage={handleSendMessage}>
          {messages.map((message, index) => (
            <ChatMessage key={index} text={message.text} sender={message.sender} />
          ))}
        </ChatContainer>
      </main>

      <footer className="p-4 bg-gray-800 flex justify-between">
        <button className="bg-gray-700 p-2 rounded">NEW CHAT</button>
        <button className="bg-gray-700 p-2 rounded">SUPPORT</button>
        <button className="bg-gray-700 p-2 rounded">RATE APP</button>
        <button className="bg-gray-700 p-2 rounded">LOG OUT</button>
      </footer>
    </div>
  );
}
