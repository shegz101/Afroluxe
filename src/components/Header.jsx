import React from "react";
import logo from '../assets/logo.png';
import web_name from '../assets/Afroluxe.png';

const Header = () => {
    return (
        <div className="flex flex-row justify-between h-[62px] w-full bg-[#eeebeb] pl-8 pr-8">
            {/* website logo and name */}
            <div className="flex flex-row mt-3">
                {/* logo */}
                <div className="h-[30px] w-[35px]">
                    <img src={logo}  alt='logo'/>
                </div>
                {/* website name */}
                <div className="h-[20px] w-[80px] mt-2 ml-2">
                    <img src={web_name} alt='website name'/>
                </div>
            </div>

            {/* sign up and login buttons */}
            <div className="mt-3 text-xs rounded font-medium">
                <button className="h-[35px] mr-3 w-[100px] bg-[#13181E] text-white" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Sign Up
                </button>
                <button className="h-[35px] w-[100px] bg-[#FFFFFF] text-[#13181E] border-[#13181E]">
                    Login
                </button>
            </div>
        </div>
    )
}

export default Header;