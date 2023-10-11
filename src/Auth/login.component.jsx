import React from "react";

const Login = () => {
    return(
        <div>
            <p className="font-['Inter'] font-semibold text-[22px] text-white">ChicChat</p>
            <div className="flex justify-center">
                <form className="block w-[627px] h-[588px] rounded-[60px] bg-greylight shadow-[16px_19px_14px_-0_rgba(0,0,0,0.25)]" action="#" method="POST">
                    <p className="font-['Inter'] font-semibold text-[52px] text-center mt-[20px] drop-shadow-[6px_5px_5px_rgba(0,0,0,0.25)]">LOGIN</p>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        placeholder="Username"
                        className="block w-[411px] h-[64px] rounded-[20px]"
                        />
                        <button type="button" className="rounded-[40px] bg-gradient-to-r from-orange-500 to-pink-500">
                            Login
                        </button>
                </form>
            </div>
        </div>
    )
}

export default Login;