import React from 'react';

type ChatMessageProps = {
  text: string;
  sender: 'user' | 'bot';
};

const ChatMessage: React.FC<ChatMessageProps> = ({ text, sender }) => {
  const isUser = sender === 'user';
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div className={`${isUser ? 'bg-green-600' : 'bg-gray-800'} p-2 rounded mb-2`}>
        {text}
      </div>
    </div>
  );
};

export default ChatMessage;
