import './style.css'
import React from 'react';
import Message from './Message';
import SendMessage from './SendMessage';

function ChatWindow() {
    <>    
        <header>{chatSelect}</header>
        <Message>{chatSelect}</Message>
        <SendMessage/>
    </>

}

export default ChatWindow;
