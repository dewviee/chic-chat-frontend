import React from "react";
import { IoPersonCircleSharp } from 'react-icons/io5';

const ProfilePicture = () => {
    return(
        <div
            className="!absolute right-5 mt-3 justify-self-end"
            type="button"
            >
            <IoPersonCircleSharp size={80} color="white"/>
        </div>
    )

}

export default ProfilePicture;