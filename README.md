\# 📡 Real-Time Chat Application with Socket.IO



This is a full-stack real-time chat application built using \*\*React\*\*, \*\*Node.js\*\*, and \*\*Socket.IO\*\*. It enables users to send and receive messages instantly, with support for future extensions like private rooms, typing indicators, and read receipts.



---



\## 🚀 Features



✅ Real-time messaging using Socket.IO  

✅ Socket.IO integration with both client and server  

✅ Basic React-based user interface  

✅ Functional broadcast of messages to all users  

✅ Message list with real-time updates  

🔄 Automatically clears input after sending  

📦 Modular project structure ready for scaling



---



\## 🗂️ Project Structure



```bash

socketio-chat/

├── client/                 # React front-end

│   ├── public/             # Static HTML root

│   ├── src/

│   │   ├── components/     # UI components (ChatBox, MessageList)

│   │   ├── context/        # Context for socket sharing

│   │   ├── pages/          # Chat room page

│   │   ├── socket/         # Socket.IO client setup

│   │   └── App.jsx         # Main React entry

│   └── package.json        # Frontend dependencies

├── server/                 # Node.js + Socket.IO backend

│   ├── socket/             # Socket.IO setup

│   ├── server.js           # Express + HTTP server

│   └── package.json        # Backend dependencies

└── README.md               # Project documentation

```



---



\## 📦 Installation \& Setup



\### 📁 Cloned the repository

done as instructed.



The client will be served on `http://localhost:5173` and the backend on `http://localhost:3001`.



---



\## 💬 How It Works



\- Each client connects to the Socket.IO server on load.

\- Messages sent via the chat box are emitted to the server.

\- The server listens for `chat-message` and broadcasts it to all connected clients.

\- Each client updates the UI in real time.



---



\## 🧠 Technologies Used



\- \*\*Frontend\*\*: React, Vite, JSX

\- \*\*Backend\*\*: Node.js, Express, Socket.IO

\- \*\*Other\*\*: JavaScript, HTML, CSS



---



\## 🛠️ Future Enhancements

i will add the following



\- ✅ Private and public chat rooms

\- ✅ User authentication (JWT)

\- ✅ Typing indicators

\- ✅ Read receipts

\- ✅ User online/offline status

\- ✅ Persistent chat with MongoDB



---





\## 🌍 Deployment

NOT YET DEPLOYED

\## 🧑‍💻 Author



\*\*Kelvin Kariuki (Nivlek)\*\*  

📧 kelvinkk24816@gmail.com  





