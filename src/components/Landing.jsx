import React from "react";
import Header from "./Header";
import Hairstylist from "../assets/Hairstylist.png";
import searchservice from "../assets/searchservices.png";
import bookappointment from "../assets/bookappointment.png";
import chooseprofessional from "../assets/chooseprofessional.png";
import braids from "../assets/braids.png";
import buzzcut from "../assets/Buzzcut.png";
import cornrows from "../assets/cornrows.png";
import naturalhair from "../assets/naturalhair.png";
import dreadlocks from "../assets/dreadlocks.png";
import bgimage from "../assets/bgwhychooseus.png";
import whychooseus from "../assets/whychooseus.png";
import quoteicon from "../assets/quoteicon.png";
import leftarrow from "../assets/left arrow.png"
import rightarrow from "../assets/right arrow.png";
import Footer from "./Footer";

const Landing = () => {
    return ( 
        <div>
            <Header/>
            {/* section for the landing image */}
            <div className="w-full">
                <header className="landing_page_image" style={{backgroundSize: 'cover', 
                    backgroundImage: `url('${Hairstylist}')`,
                    backgroundPosition: "center center",
                    }}>
                    
                    <div className="text-center">
                        <p className='pt-[15%] text-6xl font-medium'>Explore and book Hairstylists near you</p>
                    </div>
                </header>
            </div>
            
            {/* input fields section */}
            <div className="w-[70%] h-[100px] bg-[#eeebeb] mt-[-50px] mb-8 relative z-10 ml-[15%] mr-[15%] space-x-4 pl-9 
            pr-9 pt-8 rounded flex flex-row shadow-black">
                {/* search product field */}
                <div>
                    <input type="text" className="w-[335px] h-10 outline-none rounded" placeholder="Services or products"/>
                </div>
                    
                {/* location search field */}
                <div>
                    <input type="text" className="w-[335px] h-10 outline-none rounded" placeholder="Enter a location"/>
                    <p></p>
                </div> 

                <div>
                    <button className="h-10 w-[150px] text-[#FFFFFF] bg-[#13181E] rounded text-sm">Search</button>
                </div>
            </div>

            {/* How it works section */}
            <div className="bg-[#F6F4F4] h-[300px] w-full">
                <p className="text-[#242424] text-center pt-5 text-2xl">How it works</p>

                <div className="flex flex-row w-[90%] mr-[5%] ml-[5%] mt-4 space-x-6 justify-center">
                    {/* search services */}
                    <div className="work-description h-[200px] w-[30%] bg-[#FFFFFF] items-center flex flex-col pt-5 pl-5 pr-5">
                        <div className="border-[3px] rounded-[50%] border-[#A06233] w-[50px] h-[50px] mt-3">
                            <img src={searchservice} className="w-7 ml-2 mt-2" alt="search services logo"/>
                        </div>
                        <div className="text-[#242424] font-medium text-xl mt-3">
                            <p>Search services</p>
                        </div>
                        <div className="text-[#3A3A3A] mt-3 items-center text-center text-[16px]">
                            <p>Find the service you need and choose your preferred location</p>
                        </div>
                    </div>

                    {/* choose a professional */}
                    <div className="work-description h-[200px] w-[30%] bg-[#FFFFFF] items-center flex flex-col pt-5 pl-5 pr-5">
                        <div className="border-[3px] rounded-[50%] border-[#A06233] w-[50px] h-[50px] mt-3">
                            <img src={chooseprofessional} className="w-7 ml-2 mt-2" alt="search services logo"/>
                        </div>
                        <div className="text-[#242424] font-medium text-xl mt-3">
                            <p>Choose a Professional</p>
                        </div>
                        <div className="text-[#3A3A3A] mt-3 items-center text-center text-[16px]">
                            <p>View profiles, read clients reviews and choose the best professionals for your needs</p>
                        </div>
                    </div>

                    {/* book an appointment */}
                    <div className="work-description h-[200px] w-[30%] bg-[#FFFFFF] items-center flex flex-col pt-5 pl-5 pr-5">
                        <div className="border-[3px] rounded-[50%] border-[#A06233] w-[50px] h-[50px] mt-3">
                            <img src={bookappointment} className="w-7 ml-2 mt-2" alt="search services logo"/>
                        </div>
                        <div className="text-[#242424] font-medium text-xl mt-3">
                            <p>Book appointment</p>
                        </div>
                        <div className="text-[#3A3A3A] mt-3 items-center text-center text-[16px]">
                            <p>See availability and book appointments instantly anytime</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Hair styles Category */}
            <div>
                <p className="text-[#242424] text-center pt-5 text-2xl mb-4">Find by category</p>

                {/* Category Images */}
                <div className="w-[70%] ml-[15%] mr-[15%] grid grid-cols-3 gap-2">
                    <div className="h-[440px] " style={{backgroundSize: 'cover', 
                    backgroundImage: `url('${naturalhair}')`,
                    backgroundPosition: "center center",
                    }}>
                        <div className="text-center my-[60%]">
                            <p className='text-center font-bold text-[#FFFFFF] text-2xl'>Natural Hair</p>
                        </div>
                    </div>

                    <div className="h-[400px]" style={{backgroundSize: 'cover', 
                    backgroundImage: `url('${braids}')`,
                    backgroundPosition: "center center",
                    }}>
                        <div className="text-center my-[50%]">
                            <p className='text-center font-bold text-[#FFFFFF] text-2xl'>Braids</p>
                        </div>
                    </div>

                    <div className="h-[400px]" style={{backgroundSize: 'cover', 
                    backgroundImage: `url('${buzzcut}')`,
                    backgroundPosition: "center center",
                    }}>
                        <div className="text-center my-[50%]">
                            <p className='text-center font-bold text-[#FFFFFF] text-2xl'>Buzz cut</p>
                        </div>
                    </div>

                    <div className="h-[410px]" style={{backgroundSize: 'cover', 
                    backgroundImage: `url('${cornrows}')`,
                    backgroundPosition: "center center",
                    }}>
                        <div className="text-center my-[50%]">
                            <p className='text-center font-bold text-[#FFFFFF] text-2xl'>Cornrows</p>
                        </div>
                    </div>

                    <div className="col-span-2 h-[450px] mt-[-40px]" style={{backgroundSize: 'cover', 
                    backgroundImage: `url('${dreadlocks}')`,
                    backgroundPosition: "center center",
                    }}>
                       <div className="text-center my-[30%]">
                            <p className='text-center font-bold text-[#FFFFFF] text-2xl'>Dreadlocks</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Why choose us section */}
            <div className="mt-[60px] w-[90%] ml-[5%] mr-[5%] flex flex-row">
                {/* images overlap */}
                <div className="flex flex-row w-[45%]">
                    <img src={bgimage} className="h-[400px] mt-[50px]" alt="overlap image"/>
                    <img src={whychooseus} className="absolute h-[500px] ml-8" alt="why choose us"/>
                </div>

                {/* why choose us text */}
                <div className="flex flex-col px-5 w-[50%] mt-8">
                    <div>
                        <p className="text-[#242424] text-3xl mb-4">Why choose us?</p>
                    </div>
                    <div>
                        <p className="text-[#3A3A3A] text-xl mb-4">
                            We offer online bookings for the most interactive hairstylists in the business. 
                            Our platform allows you to see upcoming appointments, book your hair appointment with ease, 
                            and keep track of your favorites. With more than thousand trusted users across Europe and 
                            more added every week, we have your hair needs covered no matter where you live. 
                            This is why we’ve created an easy-to-use platform to make booking simple and secure for everyone – customers and hairstylists alike.
                        </p>
                    </div>
                    <div className="mt-3">
                        <button className="h-10 w-[150px] text-[#FFFFFF] bg-[#13181E] rounded text-sm">Learn more</button>
                    </div>
                </div>
            </div>

            {/* Testimonails - what clients are saying */}
            <div className="bg-[#F6F4F4] h-[630px] w-full mt-[100px]">
                <div className="mt-4 text-center">
                    <p className="text-[#242424] text-4xl mb-4 pt-8">What clients are saying about us</p>
                </div>

                <div className="flex flex-row space-x-4 justify-end mr-[5%]">
                    <img src={leftarrow} alt="left arrow for navigation"/>
                    <img src={rightarrow} alt="right arrow for navigation"/>
                </div>

                <div className="flex flex-row w-[90%] mt-8 ml-[5%] mr-[5%] space-x-8 justify-between">
                    <div className="work-description h-[425px] w-[620px] bg-[#FFFFFF] items-center flex flex-col pt-5 pl-5 pr-5">
                        <div className="mt-3">
                            <img src={quoteicon} className="w-7 ml-2 mt-8" alt="quote icon"/>
                        </div>
                        <div className="text-[#242424] text-xl mt-8">
                            <p>
                                Easy to use and well understood by my team. 
                                Saves time in booking and easier to manage client files. 
                                It does absolutely everything I need it to do and the customer service is outstanding!
                            </p>
                        </div>
                        <div className="text-[#3A3A3A] mt-8 items-center text-center text-[16px] font-medium">
                            <p>-- Iman</p>
                        </div>
                    </div>

                    <div className="work-description h-[425px] w-[620px] bg-[#FFFFFF] items-center flex flex-col pt-5 pl-5 pr-5">
                        <div className="mt-3">
                            <img src={quoteicon} className="w-7 ml-2 mt-8" alt="search services logo"/>
                        </div>
                        <div className="text-[#242424] text-xl mt-8">
                            <p>
                                Easy to use and well understood by my team. 
                                Saves time in booking and easier to manage client files. 
                                It does absolutely everything I need it to do and the customer service is outstanding!
                            </p>
                        </div>
                        <div className="text-[#3A3A3A] mt-8 items-center text-center text-[16px] font-medium">
                            <p>-- Jane</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}
 
export default Landing;