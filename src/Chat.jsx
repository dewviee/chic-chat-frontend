import React, {useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Chat = () => {
  const { roomID } = useParams();
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [socket, setSocket] = useState(null); // Declare socket variable

  // Connect to the websocket server
  useEffect(() => {
    const newSocket = new WebSocket(`ws://localhost:8080/room/${roomID}`);
    setSocket(newSocket); // Set the socket in state
  
    newSocket.onclose = (event) => {
      console.log(event.code)
    }

    return () => {
      newSocket.close();
    };
  }, [roomID]);
  
  // Listen for messages
  useEffect(() => {
    if (socket) { // Check if socket is defined
      socket.onmessage = (event) => {
        const receivedMessage = JSON.parse(event.data);
        setMessages((prevMessages) => [...prevMessages, receivedMessage]);
      };

      return () => {
        socket.close();
      };
    }
  }, [socket]);

  const sendMessage = () => {
    if (socket && message) { // Check if socket is defined and message is not empty
      const data = {
        "sender": "username",
        "message": message
      }
      socket.send(JSON.stringify(data));
      setMessage("");
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <div className=''>
      <center>
      <div>
        {messages.map((msg, index) => (
          <div key={index}>
            <>{msg.sender}: {msg.message}</>
          </div>
        ))}
      </div>
      {/* DELETE THIS BR tag WHEN WORK WITH CSS BECAUSE I'm BAD*/}
      <br></br> 
      <div className="">
        <input
          type="text"
          placeholder="Enter your message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyPress}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
      </center>
    </div>
  );
};

export default Chat;
