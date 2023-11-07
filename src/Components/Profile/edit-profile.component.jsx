import React,{useEffect, useState}from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo/logo.componnet";
import toast, { Toaster } from 'react-hot-toast';
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

const EditProfile = () => {
    const navigate = useNavigate();
    const protocol = import.meta.env.VITE_SERVER_PROTOCOL
    const hostname = import.meta.env.VITE_SERVER_HOST
    const port = import.meta.env.VITE_SERVER_PORT

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [profilePicture, setProfilePicture] = useState("");
    const [isDisabled, setIsDisabled] = useState(false);

    useEffect(() => {
        const userProfile = jwtDecode(localStorage.getItem("access_token"));
        axios.get(`${protocol}://${hostname}:${port}/user/${userProfile.id}`
        ).then((res) => {
            setUsername(res.data.user.username || "");
            setEmail(res.data.user.email || "");
            setPhoneNumber(res.data.user.phone || "");
        })
        .catch((err) => {})
     }, []);

    const handleFileChange = (event) => {
        const file = event.target.files[0];

        const formData = new FormData();
        formData.append("profile_picture", file);
        axios.post(
            `${protocol}://${hostname}:${port}/user/picture`, 
            formData,
            {
              headers: {
                "Content-Type": "multipart/form-data",
                "Authorization": `Bearer ${localStorage.getItem("access_token")}`,
              },
            }
        ).then((res) => {
            let picturePath = 
            res.data.user.profile_picture || "/images/userPic.png"
            if (picturePath != "/images/userPic.png") {
                const temp = picturePath.split("/");
                picturePath = temp[temp.length - 1]
                picturePath = `${protocol}://${hostname}:${port}/user/picture/${picturePath}`
            }
            
            setProfilePicture(picturePath);
            toast.success("Picture uploaded")
        }).catch((err) => {
            toast.error("Error uploading picture")
        })
    };

    const handleSubmit = () => {
        axios.put(`${protocol}://${hostname}:${port}/user`, {
            "id": jwtDecode(localStorage.getItem("access_token")).id,
            "username": username,
            "email": email,
            "phone": phoneNumber,
        }, {
            header: {
                "Authorization": `Bearer ${localStorage.getItem("access_token")}`,
            },
        }).then((res) => {
            setIsDisabled(true);
            toast.success("Profile updated")
            setTimeout(() => {
                // Perform the navigation here
               navigate("/profile"); // Replace with the desired route
              }, 1000);
        }).catch((err) => {
            toast.error("Error updating profile")
            console.log(err.respond.data)
        })
    }

    return(
        <div className="flex flex-col min-h-screen">
            <div><Toaster/></div>
            <Logo />

            <div className="flex flex-col flex-1 justify-center items-center">
                <form 
                    encType="multipart/form-data"
                className="w-0 h-0 sm:max-w-[60%] md:w-[45rem] md:h-[38rem] mb-20 flex flex-col items-center justify-center 
                rounded-[60px] bg-transparent md:bg-greylight shadow-[16px_19px_14px_-0_rgba(0,0,0,0.25)] relative" action="#" method="POST">

                    <div className="flex flex-col items-center justify-center">
                        <label className="cursor-pointer text-blue-500">
                            <img className="h-40 w-40 mt-3" src={profilePicture || "/images/userPic.png"} 
                            alt="UserPic" />
                            <input id="userPic"
                                name="userPic" type="file" accept="image/*" 
                                className="hidden" onChange={handleFileChange}/>
                        </label>
        
                        <div className="flex flex-row mt-8 md:mt-10">

                            <div className="flex flex-col">
                                <p className="font-inter font-light text-2xl text-white mr-3 mt-2 self-end whitespace-nowrap">Name :</p>
                                <p className="font-inter font-light text-2xl text-white mr-3 mt-11 self-end whitespace-nowrap">E-mail :</p>
                                <p className="font-inter font-light text-2xl text-white mr-3 mt-12 self-end whitespace-nowrap">
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
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="w-full sm:w-[18rem] md:w-96 border rounded-full md:rounded-2xl py-4 px-5 font-inter 
                                text-black leading-tight focus:outline-none focus:shadow-md bg-white"
                                />

                                <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full sm:w-[18rem] md:w-96 border rounded-full md:rounded-2xl py-4 px-5 mt-6 font-inter 
                                text-black leading-tight focus:outline-none focus:shadow-md bg-white"
                                />

                                <input
                                id="phoneNumber"
                                name="phoneNumber"
                                type="number"
                                autoComplete="phoneNumber"
                                required
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                className="w-full sm:w-[18rem] md:w-96 border rounded-full md:rounded-2xl py-4 px-5 mt-6 font-inter 
                                text-black leading-tight focus:outline-none focus:shadow-md bg-white"
                                />
                            </div>
                        </div>
                        
                        <button
                        className="font-inter text-white py-4 px-16 mt-16 md:mt-12 rounded-full 
                        bg-gradient-to-r from-orange to-pink mx-8"
                        type="button"
                        disabled={isDisabled}
                        onClick={handleSubmit}
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