import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo/logo.componnet";
import ProfilePicture from "../ProfilePicture/profile-picture.component";

const CreateRoom = () => {
    return(
        <div className="flex flex-col min-h-screen">
            <div className="flex flex-row">
                <Logo />
                <ProfilePicture />
            </div>

            <div className="flex flex-col flex-1 justify-center items-center">

                <form className="block w-[22rem] h-[20rem] md:w-[35rem] md:h-[22rem] mb-30 md:mb-20 
                rounded-[60px] bg-greylight shadow-[16px_19px_14px_-0_rgba(0,0,0,0.25)] relative" 
                action="#" method="POST">
                  <p className="font-inter font-bold text-[2rem] md:text-[3rem] text-center mt-10
                  bg-gradient-to-r from-orange to-pink text-transparent bg-clip-text
                  drop-shadow-[6px_5px_5px_rgba(0,0,0,0.7)]">Create Room</p>

                    <div className="flex flex-col items-center justify-center mt-3 md:mt-0">

                        <input
                            id="createPassword"
                            name="createPassword"
                            type="password"
                            autoComplete="password"
                            required
                            placeholder="Create Password"
                            className="w-[18rem] md:w-96 border rounded-full md:rounded-2xl py-4 px-5 mt-6
                            text-gray-700 leading-tight focus:outline-none focus:shadow-md"
                            />

                          <div className="flex flex-row justify-center items-center space-x-5 md:space-x-8 w-80 md:w-96 mt-6">
                            <Link to={"/"}>
                                <button className="font-inter text-white py-4 px-8 md:px-14
                                rounded-full bg-gradient-to-r from-green to-blue" 
                                type="button">CANCEL</button>
                            </Link>

                            <Link to={"/"}>
                                <button className="font-inter text-white py-4 px-8 md:px-14
                                rounded-full bg-gradient-to-r from-orange to-pink" 
                                type="button">CONFIRM</button>
                            </Link>
                          </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CreateRoom;