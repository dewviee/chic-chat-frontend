import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";

const Chat = () => {
    const [username, setUsername] = useState(""); // State variable for username
    const { roomID } = useParams();
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);
    const [socket, setSocket] = useState(null); // Declare socket variable

    // Connect to the websocket server
    useEffect(() => {
        if (username == ""){
        const inputUsername = prompt("Please enter something:", "Default Text")
        setUsername(inputUsername)
        }              
        const hostname = `${import.meta.env.VITE_SERVER_HOST}`
        const port = import.meta.env.VITE_SERVER_PORT
        const newSocket = new WebSocket(`ws://${hostname}:${port}/room/${roomID}`);
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
                console.log(receivedMessage)
            };

            return () => {
                socket.close();
            };
        }
    }, [socket]);

    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
          handleSendMessage();
        }
    };

    const handleSendMessage = () => {
        if (socket && message) { // Check if socket is defined and message is not empty
            const data = {
              "sender": username,
              "message": message
            }
            socket.send(JSON.stringify(data));
            setMessage("");
        }
    }

    const onMessageChange = (event) => {
        setMessage(event.target.value);
    }
    return (
        <div className="flex flex-col min-h-screen">
            <div className="flex flex-row">
                <img className="h-10 w-10 mt-3 ml-5" src="/assets/images/logo.png" alt="Logo" />
                <p className="mt-4 ml-2 font-['Inter'] font-semibold text-[22px] text-white">ChicChat</p>
            </div>
            <div className="flex justify-center mt-auto">
                {/* <!-- chat box --> */}
                <div className="w-[70rem] h-[35rem] flex flex-col rounded-t-lg drop-shadow-[10px_5px_5px_rgba(0,0,0,0.25)] overflow-auto touch-pan-y">
                    <div className="flex items-center justify-between p-8 rounded-t-[2rem] bg-gradient-to-r from-orange to-pink"></div>
                    <div className="flex-1 px-4 py-4 overflow-y-auto bg-white">
                        {messages.map((msg, index) => {
                        if (msg.sender == username) {
                            const isUserMessage = msg.sender === username;
                            return (
                            <div key={index}>
                                {isUserMessage && (index ===0 || messages[index-1].sender !== username) &&(
                                    <a className="font-['Inter'] block text-xs px-2 mb-1">{username}</a>
                                )}
                                <div className="flex items-center mb-2">
                                    <div className="p-2 py-4 mb-2 relative 
                                    rounded-3xl bg-gradient-to-r from-orange to-pink text-white">
                                        <div key={index}>{msg.message}</div>
                                        {/* <!-- arrow --> */}
                                        <div className="absolute left-0 top-1/2 transform -translate-x-1/2 rotate-45 w-2 h-2 bg-gradient-to-r from-orange to-pink"></div>
                                    </div>
                                </div>
                            </div>)
                        }
                        else {
                            return (
                                <div key={index}>
                                   
                                    <div className="flex items-end flex-col mb-4">
                                        {index === 0 || messages[index - 1].sender !== msg.sender && (
                                            <div><a className="font-['Inter'] block text-xs px-2 mb-1">{msg.sender}</a></div>
                                        )}
                                        <div className="mb-2 p-2 py-4 relative rounded-3xl bg-[#CACACA] text-gray-800">
                                            <div>{msg.message}</div>
            
                                            {/* <!-- arrow --> */}
                                            <div className="absolute right-0 top-1/2 transform translate-x-1/2 rotate-45 w-2 h-2 bg-[#CACACA]"></div>
                                            {/* <!-- end arrow --> */}
                                        </div>
                                    </div>
                                </div>
                            );                            
                        }
                        })}
                    </div>

                    <div className="flex justify-center p-4 bg-gradient-to-r from-orange to-pink">
                        <div>
                            <button className="mt-2 hover:bg-indigo-50 rounded-full mx-8" type="button">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                </svg>
                            </button>
                        </div>

                        <div>
                            <input className="w-[40rem] h-10 mx-8 rounded-full"  
                            type="text" value={message} onChange={onMessageChange} onKeyDown={handleKeyPress}
                            placeholder="   type to send message"  autoFocus />
                        </div>

                        {/* <!-- chat send action --> */}

                        <div>
                            <button className="shadow-inner font-['Inter'] p-2 py-2 px-8 
                            rounded-full bg-white hover:bg-indigo-50 mx-8" 
                            type="button"  onClick={handleSendMessage}>Send</button>
                        </div>

                        {/* <!-- end chat send action --> */}

                    </div>
                </div>

                    {/* <!-- end chat box --> */}
                </div>
            </div>
    );
};

export default Chat;
