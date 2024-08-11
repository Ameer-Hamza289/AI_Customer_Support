
'use client';
import React, { useState, KeyboardEvent } from 'react';
interface ChatContainerProps {
  children: React.ReactNode;
  onSendMessage: (text: string) => void;
};

const ChatContainer: React.FC<ChatContainerProps> = ({ children, onSendMessage }) => {
  const [input, setInput] = useState<string>('');

  const handleSend = () => {
    if (input.trim()) {
      onSendMessage(input);
      setInput('');
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault(); 
      handleSend();
    }
  };

  return (
    <div className="flex flex-col items-center p-4">
      <div className="w-[750px] h-[750px] border rounded-lg overflow-hidden flex flex-col"> 
        <div className="flex-grow p-4 bg-gray-900 overflow-y-auto"> 
          {children}
        </div>
        <div className="bg-gray-800 p-4 flex">
          <textarea
            placeholder="Type here..."
            className="flex-grow p-2 bg-gray-700 rounded text-white resize-none h-12" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            rows={1} 
          />
          <button className="bg-green-600 p-2 rounded ml-2" onClick={handleSend}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatContainer;
