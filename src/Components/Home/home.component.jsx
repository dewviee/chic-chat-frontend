import React from "react";
import { IoPersonCircleSharp } from 'react-icons/io5';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-row">
        <img className="h-10 w-10 mt-3 ml-5" src="/assets/images/logo.png" alt="Logo" />
        <p className="mt-4 ml-2 font-['Inter'] font-semibold text-[22px] text-white">ChicChat</p>
        <button
            className="!absolute right-5 mt-3 justify-self-end"
            type="button"
            >
            <IoPersonCircleSharp size={80} color="white"/>
        </button>
      </div>

      <div className="flex flex-col flex-1 justify-center items-center mb-20">
        <img className="w-[20rem]" src="/assets/images/homePic.png" alt="HomePicture" />

        <div className="flex flex-row">
          <div>
            <input
              className="w-full sm:w-[30rem] md:w-[50rem] h-16 pl-5 font-['Inter'] text-2xl
              rounded-full pr-20 justify-self-end"
              type="text"
              placeholder="Room Code"
              autoFocus
            />
          </div>
          <div className="ml-5">
            <button className="bg-indigo-50 rounded-full" type="button">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16"
                fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="5"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </button>
          </div>
        </div>

        <div>
          <button className="font-['Inter'] text-white h-16 py-3 px-16 mt-10
            rounded-full bg-gradient-to-r from-orange to-pink mx-8"
            type="button">CONFIRM</button>
        </div>

      </div>
    </div>
  );
};

export default Home;
