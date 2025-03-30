import React from 'react';

const ChatHistory = ({ history, loadChat }) => {
  return (
    <div className="w-1/4 bg-purple-900 p-4 text-white h-screen overflow-y-auto">
      <h2 className="text-xl font-bold mb-4">Chat History</h2>
      {history.length === 0 ? (
        <p className="text-gray-300">No past chats</p>
      ) : (
        history.map((chat, index) => (
          <button 
            key={index} 
            className="block w-full text-left bg-purple-800 p-3 rounded-lg mb-2 hover:bg-purple-700"
            onClick={() => loadChat(index)}
          >
            {chat.timestamp}
          </button>
        ))
      )}
    </div>
  );
};

export default ChatHistory;