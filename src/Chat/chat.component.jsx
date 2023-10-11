import React from "react";

const Chat = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <div className="flex flex-row">
                <img className="h-10 w-10 mt-3 ml-5" src="/assets/images/logo.png" alt="Logo" />
                <p className="mt-4 ml-2 font-['Inter'] font-semibold text-[22px] text-white">ChicChat</p>
            </div>
            <div className="flex justify-center mt-auto">
                {/* <!-- chat box --> */}
                <div className="w-[70rem] h-[35rem] flex flex-col rounded-t-lg drop-shadow-[10px_5px_5px_rgba(0,0,0,0.25)] overflow-auto touch-pan-y">
                    <div className="flex items-center justify-between p-8 rounded-t-[2rem] bg-gradient-to-r from-orange to-pink"></div>
                    <div className="flex-1 px-4 py-4 overflow-y-auto bg-white">

                        {/* <!-- chat message --> */}
                        <a className="font-['Inter'] block text-xs px-2 mb-1">John Doe</a>
                        <div className="flex items-center mb-2">
                            <div className="p-2 py-4 mb-2 relative rounded-3xl bg-gradient-to-r from-orange to-pink text-white">
                                <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>

                                {/* <!-- arrow --> */}
                                <div className="absolute left-0 top-1/2 transform -translate-x-1/2 rotate-45 w-2 h-2 bg-gradient-to-r from-orange to-pink"></div>
                                {/* <!-- end arrow --> */}
                            </div>
                        </div>

                        {/* <!-- end chat message --> */}

                        {/* <!-- chat message --> */}
                        <div className="flex items-center flex-row-reverse mb-4">
                            <div className="mb-2 p-2 py-4 relative rounded-3xl bg-[#CACACA] text-gray-800">
                                <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>

                                {/* <!-- arrow --> */}
                                <div className="absolute right-0 top-1/2 transform translate-x-1/2 rotate-45 w-2 h-2 bg-[#CACACA]"></div>
                                {/* <!-- end arrow --> */}
                            </div>
                        </div>

                        {/* <!-- end chat message --> */}
                    </div>

                    <div class="flex justify-center p-4 bg-gradient-to-r from-orange to-pink">
                        <div>
                            <button class="mt-2 hover:bg-indigo-50 rounded-full mx-8" type="button">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                </svg>
                            </button>
                        </div>

                        <div>
                            <input class="w-[40rem] h-10 mx-8 rounded-full" type="text" value="" placeholder="  Aa" autofocus />
                        </div>

                        {/* <!-- chat send action --> */}

                        <div>
                            <button class="shadow-inner font-['Inter'] p-2 py-2 px-8 
                            rounded-full bg-white hover:bg-indigo-50 mx-8" 
                            type="button">Send</button>
                        </div>

                        {/* <!-- end chat send action --> */}

                        </div>
                    </div>

                    {/* <!-- end chat box --> */}
                </div>
            </div>
    );
};

export default Chat;
