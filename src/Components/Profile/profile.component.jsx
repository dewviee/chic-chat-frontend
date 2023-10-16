import React, { useState } from "react";
import { IoPersonCircleSharp } from 'react-icons/io5';
import { BiSolidEdit } from 'react-icons/bi';

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
            <div className="flex flex-row">
                <img className="h-10 w-10 mt-3 ml-5" src="/assets/images/logo.png" alt="Logo" />
                <p className="mt-4 ml-2 font-['Inter'] font-semibold text-[22px] text-white">ChicChat</p>
            </div>

            <div className="flex flex-col flex-1 justify-center items-center">
                <form className="w-0 h-0 sm:max-w-[60%] md:w-[45rem] md:h-[38rem] mb-20 flex flex-col items-center justify-center 
                rounded-[60px] bg-transparent md:bg-greylight shadow-[16px_19px_14px_-0_rgba(0,0,0,0.25)] relative" action="#" method="POST">

                    <div className="flex flex-row">
                        <IoPersonCircleSharp size={180} color="white" />
                        <button type="button">
                        <BiSolidEdit size={40} md:size={50} color="white" className="mt-32 md:mt-0 md:absolute top-4 right-4" />
                        </button>
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
                    
                        {isModalOpen && (
                            <div className="fixed inset-0 flex items-center justify-center z-50">
                                <div
                                    className="fixed inset-0 bg-black opacity-50"
                                    onClick={closeModal}
                                ></div>
                                <div className="relative w-full max-w-[90%] sm:max-w-[60%] md:max-w-[40%] lg:max-w-md">
                                    <div className="relative bg-white rounded-3xl">
                                        <div className="p-6 text-center">
                                            <h3 className="font-['Inter'] mb-5 text-lg md:text-xl lg:text-2xl font-normal 
                                            text-black drop-shadow-[1px_5px_2px_rgba(0,0,0,0.40)]">
                                            Are you sure you want to logout?
                                            </h3>

                                            <div className="flex flex-row justify-center items-center space-x-2 
                                            md:space-x-10 mt-4 md:mt-10">
                                                <button
                                                    className="items-center text-center font-['Inter'] font-medium text-sm md:text-md text-white 
                                                    bg-gradient-to-r from-green to-blue
                                                    rounded-3xl inline-flex px-8 md:px-12 py-2.5 md:py-2.5 mr-0 md:mr-2 mb-2 md:mb-0" 
                                                    type="button" 
                                                    onClick={closeModal}
                                                >
                                                    Yes
                                                </button>
                                                <button
                                                    className="font-['Inter'] font-medium text-sm md:text-md text-white 
                                                    bg-gradient-to-r from-orange to-pink 
                                                    rounded-3xl px-8 md:px-12 py-2.5 md:py-2.5 mr-0 md:mr-2 mb-2 md:mb-0" 
                                                    type="button" 
                                                    onClick={closeModal}
                                                >
                                                    No
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Profile;
