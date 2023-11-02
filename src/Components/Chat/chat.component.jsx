import React, {useState, useEffect, useRef} from "react";
import { useParams } from "react-router-dom";
import { IoSendSharp } from 'react-icons/io5';
import { AiOutlinePicture } from 'react-icons/ai';
import axios from "axios";
import JSEncrypt from "jsencrypt";
import Logo from "../Logo/logo.componnet";
import ProfilePicture from "../ProfilePicture/profile-picture.component";


const Chat = () => {
    const protocol = import.meta.env.VITE_SERVER_PROTOCOL
    const hostname = import.meta.env.VITE_SERVER_HOST
    const port = import.meta.env.VITE_SERVER_PORT

    const [username, setUsername] = useState(""); // State variable for username
    const { roomID } = useParams();
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);

    const [socket, setSocket] = useState(null); // Declare socket variable
    const [isConnected, setIsConnected] = useState(false);

    const [userPublicKey, setUserPublicKey] = useState("");
    const [userPrivateKey, setUserPrivateKey] = useState("");
    const [otherPublicKey, setOtherPublicKey] = useState("");
    const chatContainerRef = useRef(null);

    // Connect to the websocket server
    useEffect(() => {
        if (username == ""){
        const inputUsername = prompt("Please enter something:", "Default Text")
            setUsername(inputUsername)
        }              

        axios.get(`${protocol}://${hostname}:${port}/room/${roomID}/check`)
            .then((res) => {
                // This is when room is found and not full. Continue to connect to websocket
                connectToRoom()
            }).catch((err) => {
                console.log(err.response.data.message)
                if (err.response.status == 409){
                    // This is when room is full. Alert user and return
                    alert("Room full!")
                    return
                } else if (err.response.status == 404){
                    // This is when room not found. Just continue to connect to websocket
                    connectToRoom()
                }
            })
    }, [roomID]);

    useEffect(() => {
        const encrypt = new JSEncrypt({default_key_size: 2048});
        setUserPublicKey(encrypt.getPublicKey());
        setUserPrivateKey(encrypt.getPrivateKey());
    }, []);

    const connectToRoom = () => {
        const newSocket = new WebSocket(`ws://${hostname}:${port}/room/${roomID}`);
        setSocket(newSocket); // Set the socket in state
    
        newSocket.onclose = (event) => {
            console.log(`WebSocket closed with code: ${event.code}`);
            console.log(`WebSocket closed with reason: ${event.reason}`);
        }
        return () => {
            newSocket.close();
        };
    }
    
    // Listen for messages
    useEffect(() => {
        if (socket) { // Check if socket is defined
            socket.onopen = () => {
                if (!isConnected){
                    const publicKeyData = getPublicKey()
                    socket.send(JSON.stringify(publicKeyData));
                    
                    const request_public_key = {
                        "sender": username,
                        "type": "request_public_key",
                    }
                    socket.send(JSON.stringify(request_public_key))
                    setIsConnected(true)
                }
            }   
            socket.onmessage = (event) => {
                const receivedData = JSON.parse(event.data);

                if (receivedData.type === "message"){
                    addMessage(receivedData)
                }else if (receivedData.type === "request_public_key" && receivedData.sender !== username){
                    const publicKeyData = getPublicKey()
                    socket.send(JSON.stringify(publicKeyData));
                }else if (receivedData.type === "public_key"){
                    if (receivedData.sender !== username){
                        setOtherPublicKey(receivedData.key)
                    }
                }
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
            const encrypt = new JSEncrypt({default_key_size: 2048});
            encrypt.setPublicKey(otherPublicKey);
            const encryptedMessage = encrypt.encrypt(message);
            const data = {
              "sender": username,
              "type": "message",
              "message": encryptedMessage
            }
            socket.send(JSON.stringify(data));


            setMessages((prevMessages) => [...prevMessages, {
                "sender": username,
                "type": "message",
                "message": message
            }]);
            setMessage("");   
        }
    }

    const onMessageChange = (event) => {
        setMessage(event.target.value);
    }

    // Function to scroll to the bottom of the chat container
    const scrollToBottom = () => {
        chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    };

    // Scroll to the bottom whenever new messages arrive or a new message is sent
    useEffect(scrollToBottom, [messages]);

    const getPublicKey = () => {
        const data = {
            "sender": username,
            "type": "public_key",
            "key": userPublicKey
        }
        return data
    }

    // function add message to the chat
    const addMessage = (data) => {
        const decrypt = new JSEncrypt({default_key_size: 2048});
        // if sender is user that use this browser, don't add message
        if (data.sender === username){
            return
        }
        // if sender is other user, decrypt message and add to chat
        decrypt.setPrivateKey(userPrivateKey);
        const decryptedMessage = decrypt.decrypt(data.message);
        data.message = decryptedMessage;
        setMessages((prevMessages) => [...prevMessages, data]);
        }

    return (
        <div className="flex flex-col min-h-screen">
            <div className="flex flex-row">
                <Logo />
                <ProfilePicture />
            </div>
            <div className="flex justify-center mt-auto">
                {/* <!-- chat box --> */}
                <div className="w-full md:w-[70rem] h-[45rem] flex flex-col
                 drop-shadow-[10px_5px_5px_rgba(0,0,0,0.25)]">
                    <div className="flex items-center justify-between p-8 
                    md:rounded-t-[2rem] rounded-none bg-gradient-to-r from-orange to-pink"></div>
                    <div className="flex-1 px-4 py-4 [&::-webkit-scrollbar]:hidden overflow-y-auto bg-white"
                    ref={chatContainerRef}>
                        {messages.map((msg, index) => {
                        if (msg.sender != username) {
                            return (
                            <div key={index}>
                                {(index === 0 || messages[index-1].sender !== messages[index].sender) &&(
                                    <a className="font-['Inter'] block text-xs px-2 mb-1">{msg.sender}</a>
                                )}
                                <div className="flex items-center mb-2">
                                    <div className="max-w-[80%] mx-4 p-2 py-4 mb-2 relative
                                    rounded-3xl bg-gradient-to-r from-orange to-pink text-white">

                                        <div className="break-words" key={index}>{msg.message}</div>

                                        {/* <!-- arrow --> */}
                                        <div className="absolute left-0 top-1/2 transform -translate-x-1/2 rotate-45 w-2 h-2 
                                        bg-gradient-to-r from-orange to-pink"></div>
                                        {/* <!-- end arrow --> */}

                                    </div>
                                </div>
                            </div>)
                        }
                        else {
                            return (
                                <div key={index}>
                                    <div className="flex items-end flex-col mb-4">
                                        <div className="max-w-[80%] mx-4 mb-2 p-2 py-4 relative rounded-3xl bg-[#CACACA] text-gray-800">
                                            <div className="break-words">{msg.message}</div>
                                            {/* <!-- arrow --> */}
                                            <div className="absolute right-0 top-1/2 transform translate-x-1/2 rotate-45 w-2 h-2 
                                            bg-[#CACACA]"></div>
                                            {/* <!-- end arrow --> */}
                                        </div>
                                    </div>
                                </div>
                            );                            
                        }
                        })}
                    </div>

                    <div className="flex justify-center p-4 bg-gradient-to-r from-orange to-pink">
                        <div className="mt-2 mr-4">
                            <label className="cursor-pointer text-blue-500">
                                <AiOutlinePicture size={40} color="white" />
                                <input className="hidden" type="file" />
                            </label>
                        </div>
                      

                        {/* <!-- chat send action --> */}
                        <div className="grid justify-items-stretch mt-2 md:mt-2 relative">
                            <input
                                className="w-full sm:w-[30rem] md:w-[50rem] h-10 pl-5 rounded-full pr-20 justify-self-end"
                                type="text"
                                value={message}
                                onChange={onMessageChange}
                                onKeyDown={handleKeyPress}
                                placeholder="Type to send message"
                                autoFocus
                            />
                            <button
                                className="!absolute right-5 mt-1 md:mt-1 justify-self-end"
                                type="button"
                                onClick={handleSendMessage}
                            >
                            <IoSendSharp size={30} color="red" />
                            </button>
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
