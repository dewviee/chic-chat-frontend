import React from "react";
import { Link } from 'react-router-dom';
import Logo from "../../Logo/logo.componnet";

const Login = () => {
    return(
        <div className="flex flex-col min-h-screen">
           <Logo />

            {/* when responsive in phone will appearance */}
            <div className="md:hidden">
                    <p className="font-['Inter'] font-bold text-[3rem] text-center
                    bg-gradient-to-r from-orange to-pink text-transparent bg-clip-text
                    drop-shadow-[6px_5px_5px_rgba(0,0,0,0.7)] absolute inset-x-0 top-[9rem]">LOGIN</p>
            </div>

            <div className="flex flex-col flex-1 justify-center items-center">

                <form className="block w-[23rem] h-[20rem] md:w-[30rem] md:h-[30rem] mb-20 
                rounded-[60px] bg-greylight shadow-[16px_19px_14px_-0_rgba(0,0,0,0.25)] relative" 
                action="#" method="POST">

                    <div className="hidden md:block">
                        <p className="font-['Inter'] font-bold text-[3rem] text-center mt-10
                        bg-gradient-to-r from-orange to-pink text-transparent bg-clip-text
                        drop-shadow-[6px_5px_5px_rgba(0,0,0,0.7)]">LOGIN</p>
                    </div>

                    <div className="flex flex-col items-center justify-center">

                        <input
                            id="username"
                            name="username"
                            type="username"
                            autoComplete="username"
                            required
                            placeholder="Username"
                            className="w-80 border rounded-full md:rounded-2xl py-4 px-5 mt-16 md:mt-8
                            text-gray-700 leading-tight focus:outline-none focus:shadow-md"
                            />

                        <input
                            id="password"
                            name="password"
                            type="password"
                            autoComplete="password"
                            required
                            placeholder="Password"
                            className="w-80 border rounded-full md:rounded-2xl py-4 px-5 mt-6
                            text-gray-700 leading-tight focus:outline-none focus:shadow-md"
                            />

                            <div>
                                <Link to={"/"}>
                                    <button className="font-['Inter'] text-white py-4 px-16 mt-6
                                    rounded-full bg-gradient-to-r from-orange to-pink mx-8" 
                                    type="button">LOGIN</button>
                                </Link>
                            </div>

                            <div className="hidden md:block">
                                <div className="flex flex-row pt-8">
                                    <p className="font-['Inter'] font-semibold text-xl text-white">New user ?</p>
                                    <Link to="/register">
                                        <p className="font-['Inter'] font-semibold text-xl text-red-600 
                                        drop-shadow-[6px_3px_2px_rgba(0,0,0,0.8)] pl-2">Create an account.</p>
                                    </Link>
                                </div>
                            </div>
                    </div>
                </form>

                {/* when responsive in phone will appearance */}
                <div className="md:hidden">
                    <div className="flex flex-row justify-center items-center pt-8 absolute inset-x-0 bottom-[12rem]">
                        <p className="font-['Inter'] font-semibold text-xl text-white">New user ?</p>
                        <Link to="/register">
                            <p className="font-['Inter'] font-semibold text-xl text-red-600 
                            drop-shadow-[6px_3px_2px_rgba(0,0,0,0.8)] pl-2">Create an account.</p>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Login;