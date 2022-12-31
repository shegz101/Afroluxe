import React from "react";
import logo from '../assets/logo.png';
import twittericon from "../assets/twitterlogo.png";
import instagramicon from "../assets/instagramlogo.png";
import facebookicon from "../assets/facebooklogo.png";

const Footer = () => {
    return (
        <div className="mt-10 h-[400px] bg-[#13131E]">
            <div className="w-[95%] ml-[2.5%] mr-[2.5%] mt-5 pt-[70px] grid grid-cols-5 text-[#FFFFFF]">
                <div className="flex flex-col w-[80px] items-center">
                    {/* logo */}
                    <div className="h-[50px] w-[45px] ml-4">
                        <img src={logo}  alt='logo'/>
                    </div>
                    {/* website name */}
                    <div className="h-[20px] w-[80px] font-normal text-3xl text-[#FFFFFF]">
                        <p>Afroluxe</p>
                    </div>
                </div>

                <div>
                    <p className="text-2xl font-bold">Navigation</p>
                    <ul className="py-1 font-semibold">
                        <li className="py-1">About Us</li>
                        <li className="py-1">Hairstylist</li>
                        <li className="py-1">FAQ</li>
                    </ul>
                </div>

                <div>
                    <p className="text-2xl font-bold">Category</p>
                    <ul className="py-1 font-semibold">
                        <li className="py-1">Braid</li>
                        <li className="py-1">Natural hair</li>
                        <li className="py-1">Hair cut</li>
                        <li className="py-1">Dreadlocs</li>
                    </ul> 
                </div>

                <div>
                    <p className="text-2xl font-bold">Legal</p>
                    <ul className="py-1 font-semibold">
                        <li className="py-1">Terms of use</li>
                        <li className="py-1">Privacy policy</li>
                        <li className="py-1">Terms and conditions</li>
                    </ul> 
                </div>

                <div>
                    <p className="text-[18px] font-bold pb-3">Subscribe to our news letter</p>
                    <div className="flex flex-row h-[45px] rounded">
                        <input type="text" placeholder="Enter email" className="rounded-l outline-none"/>
                        <button className="rounded-r bg-[#8c4600] text-[#FFFFFF] font-medium">Submit</button>
                    </div>
                </div>
            </div>

            {/* social icons */}
            <div className="items-center flex flex-row space-x-4 justify-center mt-10">
                <div>
                    <img src={instagramicon} alt="instagram icon"/>
                </div>
                <div>
                    <img src={twittericon} alt="twitter icon"/>
                </div>
                <div>
                    <img src={facebookicon} alt="facebook icon"/>
                </div>
            </div>

            <hr className="text-[#FFFFFF] h-2 mt-5"/>

            <p className="text-[#FFFFFF] font-medium text-sm text-center pt-3">2021 Afroluxe. All rights reserved.</p>
        </div>
    )
}

export default Footer;