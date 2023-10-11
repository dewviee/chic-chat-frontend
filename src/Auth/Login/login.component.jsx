import React from "react";

const Login = () => {
    return(
        <div className="flex flex-col min-h-screen">
            <div className="flex flex-row">
                <img className="h-10 w-10 mt-3 ml-5" src="/assets/images/logo.png" alt="Logo" />
                <p className="mt-4 ml-2 font-['Inter'] font-semibold text-[22px] 
                text-white">ChicChat</p>
            </div>
            <div className="flex items-center justify-center">
                <form className="block w-[30rem] h-[30rem] 
                rounded-[60px] bg-greylight shadow-[16px_19px_14px_-0_rgba(0,0,0,0.25)] relative" 
                action="#" method="POST">

                    <p className="font-['Inter'] font-semibold text-[3rem] text-center mt-4
                    bg-gradient-to-r from-orange to-pink text-transparent bg-clip-text
                    drop-shadow-[6px_5px_5px_rgba(0,0,0,0.9)]">LOGIN</p>

                    <div className="flex flex-col items-center justify-center">

                        <input
                            id="username"
                            name="username"
                            type="usernamee"
                            autoComplete="username"
                            required
                            placeholder="Username"
                            className="w-80 border rounded-2xl py-4 px-5 mt-4
                            text-gray-700 leading-tight focus:outline-none focus:shadow-md"
                            />

                        <input
                            id="password"
                            name="password"
                            type="password"
                            autoComplete="password"
                            required
                            placeholder="Password"
                            className="w-80 border rounded-2xl py-4 px-5 mt-6
                            text-gray-700 leading-tight focus:outline-none focus:shadow-md"
                            />


                            <div>
                                <button class="font-['Inter'] text-white py-3 px-16 mt-6
                                rounded-full bg-gradient-to-r from-orange to-pink mx-8" 
                                type="button">Login</button>
                            </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;