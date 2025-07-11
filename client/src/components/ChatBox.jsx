import React, { useState, useContext } from 'react';
import { SocketContext } from '../context/SocketContext';

export default function ChatBox() {
    const [message, setMessage] = useState('');
    const { socket } = useContext(SocketContext);

    const sendMessage = () => {
        if (message.trim()) {
            socket.emit('chat-message', message);
            setMessage('');
        }
    };

    return (
        <div>
            <input 
                type="text" 
                value={message} 
                onChange={(e) => setMessage(e.target.value)} 
                onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
            />
            <button onClick={sendMessage}>Send</button>
        </div>
    );
}
