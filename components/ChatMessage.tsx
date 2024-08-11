import React from 'react';
interface ChatMessageProps {
  text: string;
  sender: 'user' | 'assistant';
};

const ChatMessage: React.FC<ChatMessageProps> = ({ text, sender }) => {
  const isUser = sender === 'user';
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-6`}>
      <div className={`p-2 max-w-xl rounded ${isUser ? 'bg-green-600' : 'bg-gray-800'}`}>
        {text}
      </div>
    </div>
  );
};

export default ChatMessage;
