import React from "react";

const Logo = () => {
    return(
        <div className="flex flex-row">
            <img className="h-10 w-10 mt-3 ml-5" src="/assets/images/logo.png" alt="Logo" />
            <p className="mt-4 ml-2 font-['Inter'] font-semibold text-[22px] 
            text-white">ChicChat</p>
        </div>
    )
}

export default Logo;