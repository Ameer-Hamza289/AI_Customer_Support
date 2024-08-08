// 'use client';

// import React, { useState, KeyboardEvent } from 'react';
// import ChatMessage from './ChatMessage';

// type ChatContainerProps = {
//   children: React.ReactNode;
//   onSendMessage: (text: string) => void;
// };

// const ChatContainer: React.FC<ChatContainerProps> = ({ children, onSendMessage }) => {
//   const [input, setInput] = useState('');

//   const handleSend = () => {
//     if (input.trim()) {
//       onSendMessage(input);
//       setInput('');
//     }
//   };

//   const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
//     if (e.key === 'Enter') {
//       e.preventDefault(); // Prevents the default action (new line in input)
//       handleSend();
//     }
//   };

//   return (
//     <div className="flex flex-col items-center p-4">
//       <div className="w-[750px] h-[750px] border rounded-lg overflow-hidden flex flex-col"> {/* Changed dimensions here */}
//         <div className="flex-grow p-4 bg-gray-900 overflow-y-auto"> {/* Added overflow-y-auto for scrolling */}
//           {children}
//         </div>
//         <div className="bg-gray-800 p-4 flex">
//           <input
//             type="text"
//             placeholder="Type here..."
//             className="flex-grow p-2 bg-gray-700 rounded text-white"
//             value={input}
//             onChange={(e) => setInput(e.target.value)}
//             onKeyDown={handleKeyDown}
//           />
//           <button className="bg-green-600 p-2 rounded ml-2" onClick={handleSend}>
//             Send
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ChatContainer;






'use client';

import React, { useState, KeyboardEvent } from 'react';
import ChatMessage from './ChatMessage';

type ChatContainerProps = {
  children: React.ReactNode;
  onSendMessage: (text: string) => void;
};

const ChatContainer: React.FC<ChatContainerProps> = ({ children, onSendMessage }) => {
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      onSendMessage(input);
      setInput('');
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // Prevents the default action (new line in input)
      handleSend();
    }
  };

  return (
    <div className="flex flex-col items-center p-4">
      <div className="w-[750px] h-[750px] border rounded-lg overflow-hidden flex flex-col"> {/* Changed dimensions here */}
        <div className="flex-grow p-4 bg-gray-900 overflow-y-auto"> {/* Added overflow-y-auto for scrolling */}
          {children}
        </div>
        <div className="bg-gray-800 p-4 flex">
          <input
            type="text"
            placeholder="Type here..."
            className="flex-grow p-2 bg-gray-700 rounded text-white"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
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
