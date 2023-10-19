import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoPersonCircleSharp } from 'react-icons/io5';
import { BiSolidEdit } from 'react-icons/bi';
import Logo from "../Logo/logo.componnet";
import ConfirmLogout from "../../Modal/confirm-logout.component";

const Profile = () => {

    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
        document.getElementById("popup-modal");
    };

    const closeModal = () => {
        setModalOpen(false);
        document.getElementById("popup-modal");
    };

    return (
        <div className="flex flex-col min-h-screen">
            <Logo />

            <div className="flex flex-col flex-1 justify-center items-center">
                <form className="w-0 h-0 sm:max-w-[60%] md:w-[45rem] md:h-[38rem] mb-20 flex flex-col items-center justify-center 
                rounded-[60px] bg-transparent md:bg-greylight shadow-[16px_19px_14px_-0_rgba(0,0,0,0.25)] relative" action="#" method="POST">

                    <div className="flex flex-row">
                        <IoPersonCircleSharp size={180} color="white" />
                        <Link to={"/editprofile"}>
                            <BiSolidEdit size={40} md:size={50} color="white" className="mt-32 md:mt-0 md:absolute top-4 right-4" />
                        </Link>
                    </div>

                    <div className="flex flex-col items-center justify-center">
                        <p className="mt-4 ml-2 font-['Inter'] font-light text-4xl text-white 
                        drop-shadow-[5px_2px_5px_rgba(0,0,0,0.8)] whitespace-nowrap">Miss. ChicChat</p>

                        <div className="flex flex-row mt-16 md:mt-12">

                            <div className="flex flex-col">
                                <p className="font-['Inter'] font-light text-2xl text-white mr-3 mt-2 self-end whitespace-nowrap">E-mail :</p>
                                <p className="font-['Inter'] font-light text-2xl text-white mr-3 mt-11 self-end whitespace-nowrap">
                                {window.innerWidth <= 768 ? "Tel. :" : "Phone Number :"}
                                </p>
                            </div>

                            <div className="flex flex-col">
                                <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="w-full sm:w-[18rem] md:w-96 border rounded-full md:rounded-2xl py-4 px-5 font-['Inter'] 
                                text-black leading-tight focus:outline-none focus:shadow-md bg-[#C6C6C6]"
                                />

                                <input
                                id="phoneNumber"
                                name="phoneNumber"
                                type="number"
                                autoComplete="phoneNumber"
                                required
                                className="w-full md:w-96 border rounded-full md:rounded-2xl py-4 px-5 mt-6 font-['Inter'] 
                                text-black leading-tight focus:outline-none focus:shadow-md bg-[#C6C6C6]"
                                />
                            </div>
                        </div>
                        
                        <button
                        className="font-['Inter'] text-white py-4 px-16 mt-8 md:mt-16 rounded-full 
                        bg-gradient-to-r from-orange to-pink mx-8"
                        type="button"
                        onClick={openModal}
                        >
                        LOGOUT
                        </button>
                    
                        {isModalOpen && <ConfirmLogout closeModal={closeModal} />}
       
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Profile;
