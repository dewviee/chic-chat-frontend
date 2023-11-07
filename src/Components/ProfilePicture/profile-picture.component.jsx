import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import { IoPersonCircleSharp } from 'react-icons/io5';
import axios from "axios";
import { jwtDecode } from "jwt-decode";

const ProfilePicture = () => {
    const protocol = import.meta.env.VITE_SERVER_PROTOCOL
    const hostname = import.meta.env.VITE_SERVER_HOST
    const port = import.meta.env.VITE_SERVER_PORT

    const [profilePicture, setProfilePicture] = useState("");
    
    useEffect(() => {
        const userProfile = jwtDecode(localStorage.getItem("access_token"));
        axios.get(`${protocol}://${hostname}:${port}/user/${userProfile.id}`
        ).then((res) => {
            let picturePath = 
            res.data.user.profile_picture || "/images/userPic.png"
            if (picturePath != "/images/userPic.png") {
                const temp = picturePath.split("/");
                picturePath = temp[temp.length - 1]
                picturePath = `${protocol}://${hostname}:${port}/user/picture/${picturePath}`
            }
            
            setProfilePicture(picturePath);
        })
        .catch((err) => {})
     }, []);
    return(
        <Link to={"/profile"}>
            <div
                className="!absolute right-5 mt-3 justify-self-end"
                type="button"
                >
                {
                    profilePicture ? 
                    (<img className="h-[70px] w-[70px] rounded-full" src={profilePicture}/>) : 
                    (<IoPersonCircleSharp size={80} color="white"/>)
                }
                
            </div>
        </Link>
    )

}

export default ProfilePicture;