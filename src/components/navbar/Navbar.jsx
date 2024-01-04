import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom"
import logo from "/logo.svg"
import cross from "/assets/shared/icon-close.svg"
import hamburger from "/assets/shared/icon-hamburger.svg"
export default function Navbar() {

    const [hamburgerDisplay, setHamburgerDisplay] = useState(true)
    const [navigationDisplay, setNavigationDisplay] = useState(false)

    const showNavigation = () => {
        setHamburgerDisplay(false)
        setNavigationDisplay(true)
    }

    const hideNavigation = () => {
        setHamburgerDisplay(true)
        setNavigationDisplay(false)
    }

    return (
        <>

            <nav className={`fixed top-0 w-screen p-6 flex  justify-between ${hamburgerDisplay ? "items-center" : " "}`}>

                {/* LEFT ICON */}
                <div className="">
                    <img src={logo} className="w-10 h-10" alt="" />
                </div>




                {/* Hamburger */}
                <div onClick={showNavigation} className={` ${hamburgerDisplay ? "block" : "hidden"} `}>
                    <img src={hamburger} className="w-[24px] h-[21px]" alt="" />
                </div>






            </nav>


            {/* RIGHT NAV */}
             <div className={` ${navigationDisplay? "opacity-1 right-0":" opacity-0  right-[-100%]"}  fixed transition-all ease-in w-[70vw] bg-white/10 backdrop-filter backdrop-blur-xl text-white py-4 pl-4  pr-0"`}>
                <div onClick={hideNavigation} className="grid place-items-end p-4 pr-6">
                    <img src={cross} className="w-5 h-5" alt="" />
                </div>
            <ul className=" h-[100vh] flex flex-col gap-6 py-4 pl-8 ">
                    <li>
                        <NavLink
                            to='/'
                            className={({ isActive }) => `py-1 lg:py-7 nav-text border-r-4 block w-[100%]  ${isActive ? "border-r-white" : "border-r-transparent hover:border-r-white/60"}  `}>
                            <b>00</b> HOME
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/destination"
                            className={({ isActive }) => `py-1 lg:py-7 nav-text border-r-4 block w-[100%]  ${isActive ? "border-r-white" : "border-r-transparent hover:border-r-white/60"}  `}>
                            <b>01</b> DESTINATION
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/crew"
                            className={({ isActive }) => `py-2 lg:py-7 nav-text border-r-4 block w-[100%]  ${isActive ? "border-r-white" : "border-r-transparent hover:border-r-white/60"}  `}>
                            <b>02</b> CREW
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/technology"
                            className={({ isActive }) => `py-2 lg:py-7 nav-text border-r-4 block w-[100%]  ${isActive ? "border-r-white" : "border-r-transparent hover:border-r-white/60"}  `}>
                            <b>03</b> TECHNOLOGY
                        </NavLink>
                    </li>
                </ul>
            </div> 
        </>

    )
}