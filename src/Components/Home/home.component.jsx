import React, { useEffect, useState } from "react";
import { Link, useNavigate} from "react-router-dom";
import Logo from "../Logo/logo.componnet";
import ProfilePicture from "../ProfilePicture/profile-picture.component";
import toast, { Toaster } from 'react-hot-toast';
import axios from "axios";

const Home = () => {
  const protocol = import.meta.env.VITE_SERVER_PROTOCOL
  const hostname = import.meta.env.VITE_SERVER_HOST
  const port = import.meta.env.VITE_SERVER_PORT
  const navigate = useNavigate();
  const [roomCode, setRoomCode] = useState("");

  useEffect(() => {
    if (!localStorage.getItem("access_token")) {
      navigate("/login")
    }
  }, []);

  function isNumericString(inputString) {
    // Use a regular expression to check if the string consists of only numeric characters
    return /^\d+$/.test(inputString);
  }

  const handleConnectToRoom = () => {
    if (isNumericString(roomCode)) {
      axios.get(`${protocol}://${hostname}:${port}/room/${roomCode}/check`)
      .then((res) => {
        toast.success(`Connecting to Room ${roomCode}`)
        
        setTimeout(() => {
          navigate(`/room/${roomCode}`);
        }, 1000);
      })
      .catch((err) => {
        if (err.response.status === 404) {
          toast.error("Room not found. Please create a room first")
        }
        if (err.response.status === 409) {
          toast.error("Room is full!. Please create a new room")
        }
      })
      
    }else {
      toast.error("Invalid Room Code. Must be numeric")
    }
  }

  const handleCreateRoom = () => {
    const roomNumber = generateRandomRoomNumber();
    toast.success(`Creating Room ${roomNumber}`)
    setTimeout(() => {
      navigate(`/room/${roomNumber}`);
    }, 1000);
  }

  function generateRandomRoomNumber() {
    // Generate a random number between 100,000 and 999,999
    return Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <div><Toaster/></div>
      <div className="flex flex-row">
       <Logo />
       <ProfilePicture />
      </div>

      <div className="flex flex-col flex-1 justify-center items-center mb-20">
        <img className="w-[20rem]" src="/images/homePic.png" alt="HomePicture" />

        <div className="flex flex-row">
          <div>
            <input
              className="w-full sm:w-[30rem] md:w-[50rem] h-16 pl-5 font-inter text-2xl
              rounded-full pr-20 justify-self-end"
              type="text"
              placeholder="Room Code"
              value={roomCode}
              onChange={(e) => setRoomCode(e.target.value)}
              autoFocus
            />
          </div>
          {/* <Link to={"/createroom"}> */}
            <div className="ml-5">
              <button onClick={handleCreateRoom}
              className="bg-indigo-50 rounded-full" type="button">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16"
                  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="5"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </button>
            </div>
          {/* </Link> */}
        </div>

        <div>
            <button className="font-inter text-white h-16 py-3 px-16 mt-10
              rounded-full bg-gradient-to-r from-orange to-pink mx-8"
              type="button" onClick={handleConnectToRoom}>CONFIRM</button>
        </div>

      </div>
    </div>
  );
};

export default Home;
