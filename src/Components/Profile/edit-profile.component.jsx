import React from "react";
import Logo from "../Logo/logo.componnet";

const EditProfile = () => {

    return(
        <div className="flex flex-col min-h-screen">
            <Logo />

            <div className="flex flex-col flex-1 justify-center items-center">
                <form className="w-0 h-0 sm:max-w-[60%] md:w-[45rem] md:h-[38rem] mb-20 flex flex-col items-center justify-center 
                rounded-[60px] bg-transparent md:bg-greylight shadow-[16px_19px_14px_-0_rgba(0,0,0,0.25)] relative" action="#" method="POST">

                    <div className="flex flex-col items-center justify-center">
                        <label className="cursor-pointer text-blue-500">
                            <img className="h-40 w-40 mt-3" src="/assets/images/userPic.png" alt="UserPic" />
                            <input className="hidden" type="file" />
                        </label>
        
                        <div className="flex flex-row mt-8 md:mt-10">

                            <div className="flex flex-col">
                                <p className="font-['Inter'] font-light text-2xl text-white mr-3 mt-2 self-end whitespace-nowrap">Name :</p>
                                <p className="font-['Inter'] font-light text-2xl text-white mr-3 mt-11 self-end whitespace-nowrap">E-mail :</p>
                                <p className="font-['Inter'] font-light text-2xl text-white mr-3 mt-12 self-end whitespace-nowrap">
                                {window.innerWidth <= 768 ? "Tel. :" : "Phone Number :"}
                                </p>
                            </div>

                            <div className="flex flex-col">
                                <input
                                id="name"
                                name="name"
                                type="name"
                                autoComplete="name"
                                required
                                className="w-full sm:w-[18rem] md:w-96 border rounded-full md:rounded-2xl py-4 px-5 font-['Inter'] 
                                text-black leading-tight focus:outline-none focus:shadow-md bg-white"
                                />

                                <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="w-full sm:w-[18rem] md:w-96 border rounded-full md:rounded-2xl py-4 px-5 mt-6 font-['Inter'] 
                                text-black leading-tight focus:outline-none focus:shadow-md bg-white"
                                />

                                <input
                                id="phoneNumber"
                                name="phoneNumber"
                                type="number"
                                autoComplete="phoneNumber"
                                required
                                className="w-full sm:w-[18rem] md:w-96 border rounded-full md:rounded-2xl py-4 px-5 mt-6 font-['Inter'] 
                                text-black leading-tight focus:outline-none focus:shadow-md bg-white"
                                />
                            </div>
                        </div>
                        
                        <button
                        className="font-['Inter'] text-white py-4 px-16 mt-16 md:mt-12 rounded-full 
                        bg-gradient-to-r from-orange to-pink mx-8"
                        type="button"
                        >
                        CONFIRM
                        </button>
                    
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EditProfile;