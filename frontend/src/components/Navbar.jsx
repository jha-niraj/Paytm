import "../index.css"
import mainLogo from "../assets/MainLogo.svg";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const handleVisibilityDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    }
    return (
        <section>
            <div className="flex items-center justify-around gap-5 md:h-24 w-full"> 
                <div className="flex items-center justify-start">
                    <button className="md:hidden cursor-pointer text-4xl focus:outline-none" onClick={handleVisibilityDropdown}>
                        &#9776;
                    </button>
                    <Link to="/" className="flex items-center justify-center">
                        <img src={mainLogo} />
                    </Link>
                </div>
                <div className="md:flex items-center justify-center h-full w-[55%] hidden">
                    <ul className="md:flex items-center md:flex-row flex-col justify-center gap-2 md:gap-5 w-full text-xl font-sans font-bold h-[80%]">
                        <li className="h-full flex items-center">Paytm for Consumer</li>
                        <li className="h-full flex items-center">Paytm for Business</li>
                        <li className="h-full flex items-center">Investor Relations</li>
                        <li className="h-full flex items-center">Company</li>
                        <li className="h-full flex items-center">Career</li>
                    </ul>
                </div>
                <div className="flex items-center justify-center gap-2">
                    <Link to="/signup">
                        <button className="md:flex items-center justify-around w-28 h-10 rounded-full bg-sky-500 text-white font-bold text-left hover:bg-blue-500 hidden">
                            <span className="relative left-1">Sign Up</span>
                            <div className="w-8 h-8 bg-blue-900 rounded-full flex items-center justify-center">
                                <FaUser />
                            </div>
                        </button>
                    </Link>
                    <Link to="/signin">
                        <button className="flex items-center justify-around w-28 h-10 rounded-full bg-sky-500 text-white font-bold text-left hover:bg-blue-500">
                            <span className="relative left-1">Sign In</span>
                            <div className="w-8 h-8 bg-blue-900 rounded-full flex items-center justify-center">
                                <FaUser />
                            </div>
                        </button>
                    </Link>
                </div>
            </div>
            <div className={`bg-black w-full flex flex-col absolute top-0 ${dropdownVisible ? "block" : "hidden"} ${dropdownVisible ? "navbar-enter navbar-enter-active" : "navbar-exit navbar-exit-active"}`}>
                <button className={`text-7xl text-white flex justify-start items-center ml-10 animation-all duration-300 ease-in-out`} onClick={handleVisibilityDropdown}>&times;</button>
                <nav className="flex flex-col min-h-screen items-center justify-start py-8" aria-label="mobile">
                    <a href="#home" className="w-full text-4xl text-center py-6 text-white hover:opacity-90">Paytm For Customers</a>
                    <a href="#home" className="w-full text-4xl text-center py-6 text-white hover:opacity-90">Paytm For Business</a>
                    <a href="#home" className="w-full text-4xl text-center py-6 text-white hover:opacity-90">Inverstor Relations</a>
                    <a href="#home" className="w-full text-4xl text-center py-6 text-white hover:opacity-90">Company</a>
                    <a href="#home" className="w-full text-4xl text-center py-6 text-white hover:opacity-90">Career</a>
                </nav>
            </div>
        </section>
    )
}

export default Navbar;