import Navbar from "../components/Navbar";
import mainPageLogo from "../assets/mainPageLogo-1.avif";
import mainPagePhoto from "../assets/FrontPage-Photo.png";
import { FaApple } from "react-icons/fa";
import { IoLogoAndroid } from "react-icons/io";
import "../index.css";

// importing all the images necessary for the second page:
import img1 from "../assets/Second Page Icon/1.png";
import img2 from "../assets/Second Page Icon/2.png";
import img3 from "../assets/Second Page Icon/3.png";
import img4 from "../assets/Second Page Icon/4.png";
import img5 from "../assets/Second Page Icon/5.png";
import img6 from "../assets/Second Page Icon/6.png";
import img7 from "../assets/Second Page Icon/7.png";
import img8 from "../assets/Second Page Icon/8.png";
import img9 from "../assets/Second Page Icon/9.png";
import img10 from "../assets/Second Page Icon/10.png";
import img11 from "../assets/Second Page Icon/11.avif";
import img12 from "../assets/Second Page Icon/12.png";
import img13 from "../assets/Second Page Icon/13.png";
import img14 from "../assets/Second Page Icon/14.webp";

const InitialPage = () => {
    return (
        <section className="flex flex-col w-full">
            <section className="fixed w-full z-50 bg-white">
                <Navbar />
                <div className="flex items-center justify-center mt-1">
                    <hr className="h-1 w-[90%] bg-black"></hr>
                </div>
            </section>
            <section className="flex items-center justify-center m-7 h-screen">
                <div className="flex items-center justify-center flex-col lg:justify-around md:flex-row transition-all gap-14 w-full md:w-[90%]">
                    <div className="flex flex-col gap-5 p-3 w-[90%] md:w-[50%] shadow-2xl rounded-2xl">
                        <img src={mainPageLogo} className="w-20" />
                        <div className="flex flex-col justify-start gap-5 w-full">
                            <h1 className="text-4xl font-bold font-sans sm:w-[60%] md:w-[70%] lg:w-[80%]">India's Most-loved Payments App</h1>
                            <p className="text-md font-semibold md:text-xl sm:w-[60%] md:w-[70%] lg:w-[80%]">Recharge & pay bills, book flight & movie tickets, open a savings account, invest in stocks & mutual funds, and do a lot more.</p>
                        </div>
                        <div className="flex items-center justify-between w-full lg:w-[70%] h-12 rounded-full bg-black cursor-pointer transition-all">
                            <h1 className="font-bold text-white ml-5">Download Paytm App</h1>
                            <div className="flex mr-5">
                                <FaApple className="text-white text-3xl " />
                                <IoLogoAndroid className="text-white text-3xl" />
                            </div>
                        </div>
                    </div>
                    <div className="w-[100%] md:w-[50%] flex items-center justify-center md:justify-center md:items-center md:flex">
                        <img src={mainPagePhoto} className="h-80 md:h-full" />
                    </div>
                </div>
            </section>
            <section className="flex items-center justify-center w-full flex-col h-screen">
                <div className="flex items-center flex-col justify-center w-full h-[50%] bg-sky-500 p-10">
                    <h1 className="text-4xl font-bold font-sans w-[90%]">Recharge & Pay Bills on Paytm.</h1>
                    <div className="flex items-center flex-col justify-center w-full">
                        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-7">
                            <div className="flex items-center flex-col justify-center hover:rounded-lg hover:shadow-2xl transition-all hover:bg-gray-200">
                                <img src={img1} className="h-20 w-20" />
                                <h1>Recharge</h1>
                                <h1>Prepaid</h1>
                                <h1>Mobile</h1>
                            </div>
                            <div className="flex flex-col items-center justify-center hover:rounded-lg hover:shadow-2xl transition-all hover:bg-gray-200">
                                <img src={img2} className="h-20 w-20" />
                                <h1>Pay</h1>
                                <h1>Electricity</h1>
                                <h1>Bills</h1>
                            </div>
                            <div className="flex flex-col items-center justify-center hover:rounded-lg hover:shadow-2xl transition-all hover:bg-gray-200">
                                <img src={img3} className="h-20 w-20" />
                                <h1>Recharge</h1>
                                <h1>DTH</h1>
                                <h1>Connection</h1>
                            </div>
                            <div className="flex flex-col items-center justify-center hover:rounded-lg hover:shadow-2xl transition-all hover:bg-gray-200">
                                <img src={img4} className="h-20 w-20" />
                                <h1>Book</h1>
                                <h1>Gas</h1>
                                <h1>Cylinder</h1>
                            </div>
                            <div className="flex flex-col items-center justify-center hover:rounded-lg hover:shadow-2xl transition-all hover:bg-gray-200">
                                <img src={img5} className="h-20 w-20" />
                                <h1>Pay</h1>
                                <h1>Broadband &</h1>
                                <h1>Landline Bill</h1>
                            </div>
                            <div className="flex flex-col items-center justify-center hover:rounded-lg hover:shadow-2xl transition-all hover:bg-gray-200">
                                <img src={img6} className="h-20 w-20" />
                                <h1>Pay</h1>
                                <h1>Education</h1>
                                <h1>Fee</h1>
                            </div>
                            <div className="flex flex-col items-center justify-center hover:rounded-lg hover:shadow-2xl transition-all hover:bg-gray-200">
                                <img src={img7} className="h-20 w-20" />
                                <h1>All</h1>
                                <h1>Payment</h1>
                                <h1>Services</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center flex-col w-full">
                    <h1 className="text-4xl font-bold font-sans">Buy and Book on Paytm.</h1>
                    <div className="flex items-center justify-center">
                        <div className="flex flex-col items-center justify-center hover:rounded-lg hover:shadow-2xl transition-all hover:bg-gray-200">
                            <img src={img8} className="h-20 w-20" />
                            <h1>Recharge</h1>
                            <h1>Prepaid</h1>
                            <h1>Mobile</h1>
                        </div>
                        <div className="flex flex-col items-center justify-center hover:rounded-lg hover:shadow-2xl transition-all hover:bg-gray-200">
                            <img src={img9} className="h-20 w-20" />
                            <h1>Pay</h1>
                            <h1>Electricity</h1>
                            <h1>Bills</h1>
                        </div>
                        <div className="flex flex-col items-center justify-center hover:rounded-lg hover:shadow-2xl transition-all hover:bg-gray-200">
                            <img src={img10} className="h-20 w-20" />
                            <h1>Recharge</h1>
                            <h1>DTH</h1>
                            <h1>Connection</h1>
                        </div>
                        <div className="flex flex-col items-center justify-center hover:rounded-lg hover:shadow-2xl transition-all hover:bg-gray-200">
                            <img src={img11} className="h-20 w-20" />
                            <h1>Book</h1>
                            <h1>Gas</h1>
                            <h1>Cylinder</h1>
                        </div>
                        <div className="flex flex-col items-center justify-center hover:rounded-lg hover:shadow-2xl transition-all hover:bg-gray-200">
                            <img src={img12} className="h-20 w-20" />
                            <h1>Pay</h1>
                            <h1>Broadband &</h1>
                            <h1>Landline Bill</h1>
                        </div>
                        <div className="flex flex-col items-center justify-center hover:rounded-lg hover:shadow-2xl transition-all hover:bg-gray-200">
                            <img src={img13} className="h-20 w-20" />
                            <h1>Pay</h1>
                            <h1>Education</h1>
                            <h1>Fee</h1>
                        </div>
                        <div className="flex flex-col items-center justify-center hover:rounded-lg hover:shadow-2xl transition-all hover:bg-gray-200">
                            <img src={img14} className="h-20 w-20" />
                            <h1>All</h1>
                            <h1>Payment</h1>
                            <h1>Services</h1>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default InitialPage;