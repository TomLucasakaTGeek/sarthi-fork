import ChatWindow from './ChatWindow';
import Sidebar from './Sidebar';
import './style.css'
import React, { useState } from 'react';

function ChatApp() {
    const [chatSelect, setchatSelect] = useState(null)
    function click() {
        setchatSelect(chatSelect)
    }

    <div classname='ChatApp'>
        <Sidebar click={chatSelect}/>
        <ChatWindow chatSelect={chatSelect}/>
    </div>
}

export default ChatApp;

