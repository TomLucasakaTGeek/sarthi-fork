import './style.css'
import React from 'react';
import { chats } from './ChatList'; // Replace with your chat data

function Sidebar({ onChatSelect }) {
  
  return (
    <div className="sidebar">
      
      <input type="text" placeholder="Search..." className="search" />
      
      <ul>
        {chats.map((chat) => (
          <li key={chat.id} className="chat-item" onClick={() => onChatSelect(chat)}>
            
            <img src={chat.profilePic} alt="image" className="avatar" />
            
            <div className="chat-info">
              <span className="name">{chat.name}</span>
              <p className="last-message">{chat.lastMessage}</p>
            </div>

          </li>
          
        ))}
      </ul>

    </div>
  );
}

export default Sidebar;
