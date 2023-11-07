import React, {useState} from "react";
import { Link, useNavigate} from 'react-router-dom';
import Logo from "../../Logo/logo.componnet";
import toast, { Toaster } from 'react-hot-toast';
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();
  const protocol = import.meta.env.VITE_SERVER_PROTOCOL
  const hostname = import.meta.env.VITE_SERVER_HOST
  const port = import.meta.env.VITE_SERVER_PORT

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = () => {
    if (password !== confirmPassword) {
      toast.error("Password doesn't match")
      return
    }
    axios.post(`${protocol}://${hostname}:${port}/auth/register`, {
            "username": username,
            "email": email,
            "password": password,
        })
        .then((res) => {
            navigate("/login");
        })
        .catch((err) => {
            // toast.error("Invalid username or password")
            toast.error(err.response.data.msg)
            console.log(err.response)
        }); 
  }
  return(
    <div className="flex flex-col min-h-screen">
      <div><Toaster/></div>
            <Logo />

            {/* when responsive in phone will appearance */}
            <div className="md:hidden">
              <p className="font-inter font-bold text-[3rem] text-center mt-[3rem]
                bg-gradient-to-r from-orange to-pink text-transparent bg-clip-text
                drop-shadow-[6px_5px_5px_rgba(0,0,0,0.7)] absolute inset-x-0 top-20">REGISTER</p>
            </div>

            <div className="flex flex-col flex-1 justify-center items-center">

                <form className="block w-[23rem] h-[28rem] md:w-[35rem] md:h-[35rem] mb-30 md:mb-20 
                rounded-[60px] bg-greylight shadow-[16px_19px_14px_-0_rgba(0,0,0,0.25)] relative" 
                action="#" method="POST">

                <div className="hidden md:block">
                  <p className="font-inter font-bold text-[3rem] text-center mt-10
                  bg-gradient-to-r from-orange to-pink text-transparent bg-clip-text
                  drop-shadow-[6px_5px_5px_rgba(0,0,0,0.7)]">REGISTER</p>
                </div>

                    <div className="flex flex-col items-center justify-center mt-3 md:mt-0">

                        <input
                            id="username"
                            name="username"
                            type="username"
                            autoComplete="username"
                            required
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-80 md:w-96 border rounded-full md:rounded-2xl py-4 px-5 mt-6
                            text-gray-700 leading-tight focus:outline-none focus:shadow-md"
                            />

                        <input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                            placeholder="E-mail"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-80 md:w-96 border rounded-full md:rounded-2xl py-4 px-5 mt-6
                            text-gray-700 leading-tight focus:outline-none focus:shadow-md"
                            />

                        <input
                            id="password"
                            name="password"
                            type="password"
                            autoComplete="password"
                            required
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-80 md:w-96 border rounded-full md:rounded-2xl py-4 px-5 mt-6
                            text-gray-700 leading-tight focus:outline-none focus:shadow-md"
                            />

                        <input
                            id="confirmpassword"
                            name="confirmpassword"
                            type="password"
                            autoComplete="confirmpassword"
                            required
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="w-80 md:w-96 border rounded-full md:rounded-2xl py-4 px-5 mt-6
                            text-gray-700 leading-tight focus:outline-none focus:shadow-md"
                            />

                          <div className="flex flex-row justify-center items-center space-x-3 md:space-x-8 w-80 md:w-96 mt-10">
                            <Link to={"/login"}>
                              <button className="font-inter text-white py-4 px-8 md:px-14
                              rounded-full bg-gradient-to-r from-green to-blue" 
                              type="button">CANCEL</button>
                            </Link>

                            <button 
                            onClick={handleRegister}
                            className="font-inter text-white py-4 px-8 md:px-14
                            rounded-full bg-gradient-to-r from-orange to-pink" 
                            type="button">CONFIRM</button>
                          </div>
                    </div>
                </form>
            </div>
        </div>
  )
}

export default Register;