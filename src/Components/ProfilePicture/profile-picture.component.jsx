import React from "react";
import { Link } from "react-router-dom";
import { IoPersonCircleSharp } from 'react-icons/io5';

const ProfilePicture = () => {
    return(
        <Link to={"/profile"}>
            <div
                className="!absolute right-5 mt-3 justify-self-end"
                type="button"
                >
                <IoPersonCircleSharp size={80} color="white"/>
            </div>
        </Link>
    )

}

export default ProfilePicture;