// import React from 'react';

// type ChatMessageProps = {
//   text: string;
//   sender: 'user' | 'bot';
// };

// const ChatMessage: React.FC<ChatMessageProps> = ({ text, sender }) => {
//   const isUser = sender === 'user';
//   return (
//     <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
//       <div className={`${isUser ? 'p-2 max-w-xs  bg-green-600' : 'bg-gray-800'} p-2 rounded mb-2`}>
//         {text}
//       </div>
//     </div>
//   );
// };

// export default ChatMessage;


import React from 'react';

interface ChatMessageProps {
  text: string;
  sender: 'user' | 'bot';
};

const ChatMessage: React.FC<ChatMessageProps> = ({ text, sender }) => {
  const isUser = sender === 'user';
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-2`}>
      <div className={`p-2 max-w-xs rounded ${isUser ? 'bg-green-600' : 'bg-gray-800'}`}>
        {text}
      </div>
    </div>
  );
};

export default ChatMessage;
