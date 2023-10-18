import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
    return(
        <Link to={"/"}>
            <div className="flex flex-row">
                <img className="h-10 w-10 mt-3 ml-5" src="/assets/images/logo.png" alt="Logo" />
                <p className="mt-4 ml-2 font-['Inter'] font-semibold text-[22px] 
                text-white">ChicChat</p>
            </div>
        </Link>
    )
}

export default Logo;