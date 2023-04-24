// import "./App.css";
import io from "socket.io-client";
import { useState } from "react";
import Chat2 from "./Chat2";

const socket = io.connect("http://localhost:3001");

function App() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);

  const joinRoom = () => {
    if (username !== "" && room !== "") {
      socket.emit("join_room", room);
      setShowChat(true);
    }
  };

  return (
    <div className="App">
      {!showChat ? (
        <div className="joinChatContainer">
          <h3>Join A Chat</h3>
          <input
            type="text"
            placeholder="Name..."
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Room ID..."
            onChange={(event) => {
              setRoom(event.target.value);
            }}
          />
          <button onClick={joinRoom}>Join A Room</button>
        </div>
      ) : (
        <Chat2 socket={socket} username={username} room={room} />
      )}
    </div>
  );
}

export default App;

// import { useState, useEffect, useCallback } from "react";
// import io from "socket.io-client";
// import { nanoid } from "nanoid";

// import Chat from "./components/Chat/Chat";
// import ChatForm from "./components/ChatForm/ChatForm";
// import SigninChatForm from "./components/SigninChatForm/SigninChatForm";

// const socket = io.connect("http://localhost:3001");

// function MainChat() {
//   const [nickname, setNickname] = useState("");
//   const [messages, setMessages] = useState([]);

//   useEffect(()=> {
//     socket.on("chat-message", message => {
//       setMessages(prevMessages => {
//         const newMessage = {
//           id: nanoid(),
//           type: "user",
//           message,
//         }

//         return [newMessage, ...prevMessages]
//       });
//     })
//   }, [])

//   const addNickname = useCallback(({ name }) => setNickname(name), []);

//   const addMessage = useCallback(({ message }) => {
//     setMessages(prevMessages => {
//       const newMessage = {
//         id: nanoid(),
//         type: "you",
//         message,
//       }

//       return [newMessage, ...prevMessages]
//     });

//     socket.emit("chat-message", message);
//   }, [])

//   return (
//     <div className="App">
//       {!nickname && <SigninChatForm onSubmit={addNickname} />}
//       {nickname && <ChatForm onSubmit={addMessage} />}
//       {nickname && <Chat items={messages} />}
//     </div>
//   )
// }

// export default MainChat;
