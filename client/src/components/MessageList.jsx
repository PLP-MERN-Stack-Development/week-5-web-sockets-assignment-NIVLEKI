import React from 'react';

export default function MessageList({ messages }) {
    return (
        <ul>
            {messages.map((msg, idx) => <li key={idx}>{msg}</li>)}
        </ul>
    );
}
