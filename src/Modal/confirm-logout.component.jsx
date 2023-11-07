import React from "react";
import { Link, useNavigate} from "react-router-dom";

const ConfirmLogout = ({ closeModal }) => {
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem("access_token");
        navigate("/login"); // Navigate to the login page
      };
    return(
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div
                className="fixed inset-0 bg-black opacity-50"
                onClick={closeModal}
            ></div>
            <div className="relative w-full max-w-[90%] sm:max-w-[60%] md:max-w-[40%] lg:max-w-md">
                <div className="relative bg-white rounded-3xl">
                    <div className="p-6 text-center">
                        <h3 className="font-inter mb-5 text-lg md:text-xl lg:text-2xl font-normal 
                        text-black drop-shadow-[1px_5px_2px_rgba(0,0,0,0.40)]">
                        Are you sure you want to logout?
                        </h3>

                        <div className="flex flex-row justify-center items-center space-x-2 
                        md:space-x-10 mt-4 md:mt-10">
                            <Link to={"/login"}>
                            <button
                                className="items-center text-center font-inter font-medium text-sm md:text-md text-white 
                                bg-gradient-to-r from-green to-blue
                                rounded-3xl inline-flex px-8 md:px-12 py-2.5 md:py-2.5 mr-0 md:mr-2 mb-2 md:mb-0" 
                                type="button" 
                                onClick={handleLogout}
                            >
                                Yes
                            </button>
                            </Link>
                            <button
                                className="font-inter font-medium text-sm md:text-md text-white 
                                bg-gradient-to-r from-orange to-pink 
                                rounded-3xl px-8 md:px-12 py-2.5 md:py-2.5 mr-0 md:mr-2 mb-2 md:mb-0" 
                                type="button" 
                                onClick={closeModal}
                            >
                                No
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default ConfirmLogout;