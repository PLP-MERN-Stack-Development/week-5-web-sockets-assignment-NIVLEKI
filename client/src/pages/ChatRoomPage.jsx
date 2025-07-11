import React, { useEffect, useState } from 'react';
import ChatBox from '../components/ChatBox';
import MessageList from '../components/MessageList';
import { SocketContext } from '../context/SocketContext';
import { socket } from '../socket/socketClient';

export default function ChatRoomPage() {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        socket.on('chat-message', (msg) => {
            setMessages((prev) => [...prev, msg]);
        });

        return () => socket.off('chat-message');
    }, []);

    return (
        <SocketContext.Provider value={{ socket }}>
            <h2>Chat Room</h2>
            <MessageList messages={messages} />
            <ChatBox />
        </SocketContext.Provider>
    );
}
