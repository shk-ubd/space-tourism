import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom"
import logo from "/logo.svg"
import cross from "/assets/shared/icon-close.svg"
import hamburger from "/assets/shared/icon-hamburger.svg"
import { useSpaceContext } from "../../context/spaceContext";
export default function Navbar() {
    const {hamburgerDisplay, navigationDisplay, hideNavigation, showNavigation} = useSpaceContext()
console.log({hamburgerDisplay, navigationDisplay, hideNavigation, showNavigation});

    return (
        <>

            <nav className={`fixed top-0 lg:top-6 w-screen p-6 flex items-center justify-between ${hamburgerDisplay ? "items-center " : " "}`}>

                {/* LEFT ICON */}
                <Link to="/" onClick={hideNavigation} className="block">
                    <img src={logo} className="h-10 w-10 md:h-12 md:w-12 lg:h-12 lg:w-12 xl:h-12 xl:w-12" alt="" />
                </Link>




                {/* Hamburger */}
                <div onClick={showNavigation} className={` ${hamburgerDisplay ? "block md:hidden lg:hidden" : "hidden"} `}>
                    <img src={hamburger} className="w-[24px] h-[21px]" alt="" />
                </div>


                {/* Horizontal Line */}

                <div className="h-[2px] w-[95vw] bg-white/30 hidden lg:block"></div>






            </nav>


            {/* RIGHT NAV */}
            <div className={` ${navigationDisplay ? "opacity-1 right-0" : "z-10 opacity-0  right-[-100%] "} md:right-0  md:opacity-100 md:w-[60vw] lg:w-[55vw] md:max-w-[450px] md:h-24 md:pb-0 md:pt-8 md:pl-0 lg:max-w-[830px] lg:p-0 lg:top-6  fixed transition-all duration-300 ease-in w-[70vw] max-w-[300px] bg-white/10 backdrop-filter backdrop-blur-xl text-white py-4 pl-4  pr-0"`}>
                <div onClick={hideNavigation} className="grid place-items-end p-4 pr-6 md:hidden lg:hidden">
                    <img src={cross} className="w-5 h-5" alt="" />
                </div>
                <ul className=" h-[100vh] flex flex-col gap-6 py-4 pl-8 md:flex-row md:h-full md:p-0 lg:pt-2 md:gap-0 md:justify-evenly">
                    <li>
                        <NavLink
                            onClick={hideNavigation}
                            to='/'
                            className={({ isActive }) => `transition-all py-1 lg:py-7 nav-text border-r-4 md:border-r-0 md:border-b-2 md:h-full block w-[100%]  ${isActive ? "border-r-white md:border-b-white" : "border-r-transparent md:border-b-transparent md:hover:border-b-white/60 "}  `}>
                            <b className="md:hidden lg:inline">00</b> HOME
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            onClick={hideNavigation}
                            to="/destination"
                            className={({ isActive }) => `transition-all py-1 lg:py-7 nav-text border-r-4 md:border-r-0 md:border-b-2 md:h-full block w-[100%]  ${isActive ? "border-r-white md:border-b-white" : "border-r-transparent md:border-b-transparent md:hover:border-b-white/60"}  `}>
                            <b className="md:hidden lg:inline">01</b> DESTINATION
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            onClick={hideNavigation}
                            to="/crew"
                            className={({ isActive }) => `transition-all py-1 lg:py-7 nav-text border-r-4 md:border-r-0 md:border-b-2 md:h-full block w-[100%]  ${isActive ? "border-r-white md:border-b-white" : "border-r-transparent md:border-b-transparent md:hover:border-b-white/60"}  `}>
                            <b className="md:hidden lg:inline">02</b> CREW
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            onClick={hideNavigation}
                            to="/technology"
                            className={({ isActive }) => `transition-all py-1 lg:py-7 nav-text border-r-4 md:border-r-0 md:border-b-2 md:h-full block w-[100%]  ${isActive ? "border-r-white md:border-b-white" : "border-r-transparent md:border-b-transparent md:hover:border-b-white/60"}  `}>
                            <b className="md:hidden lg:inline">03</b> TECHNOLOGY
                        </NavLink>
                    </li>
                </ul>
            </div>
        </>

    )
}