import './style.css'
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import ChatWindow from './ChatWindow';

function ChatApp() {
  const [selectedChat, setSelectedChat] = useState(null);

  const handleChatSelect = (chat) => {
    setSelectedChat(chat);
  };

  return (
    <div className="chat-app">
      <Sidebar onChatSelect={handleChatSelect} />
      <ChatWindow selectedChat={selectedChat} />
    </div>
  );
}

export default ChatApp;

