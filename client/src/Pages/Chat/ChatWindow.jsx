import './style.css'
import React from 'react';
import Message from './Message';

function ChatWindow({selectedChat}) {
  if (!selectedChat) {
    return <div className="chat-window">Select a chat to start messaging. </div>
  }

  const messages = [
    // Replace with actual messages from your API
    { 
      sender: 'Senior Dev', 
      content: 'Hi there, how can I help you today?' 
    },
    { sender: 'Junior Dev', 
      content: 'Hi, I\'m struggling with a bug...' },
  ];

  return (
    <div className="chat-window">
      
      <header className="chat-header">
        <img src={selectedChat.profilePic} alt="Img" className="avatar" />
        <span className="name">{selectedChat.name}</span>
      </header>

      <ul className="message-list">
        {messages.map((message) => (
          <Message key={message.content} message={message} />
        ))}
      </ul>

      <SendMessage />

    </div>
  );
}

export default ChatWindow;
