import React from "react";
import { Link, NavLink } from "react-router-dom"
export default function Navbar() {
    return (
        <nav className="flex fixed h-[90px] max-[830px] top-7 w-screen">
            <div className="w-[50%] flex items-center">

                <div className="px-2 pl-10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"><g fill="none" fillRule="evenodd"><circle cx="24" cy="24" r="24" fill="#FFF" /><path fill="#0B0D17" d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z" /></g></svg>
                </div>

                <div className="w-[80%] h-[2px] bg-white/30 ml-20 "></div>
            </div>
            <ul className="flex justify-evenly items-center px-20 bg-white/10 backdrop-filter backdrop-blur-xl text-white w-[60%]">
                <li>
                    <NavLink
                        to='/'
                        className={({ isActive }) => ` py-7 nav-text border-b-[3px]   ${isActive ? "border-b-white" : "border-b-transparent hover:border-b-white/60"}  `}>
                        <b>00</b> HOME
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/destination"
                        className={({ isActive }) => ` py-7 nav-text border-b-[3px]  ${isActive ? "border-b-white" : "border-b-transparent hover:border-b-white/60"}  `}>
                        <b>01</b> Destination
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/crew"
                        className={({ isActive }) => ` py-7 nav-text border-b-[3px]   ${isActive ? "border-b-white" : "border-b-transparent hover:border-b-white/60"}  `}>
                        <b>02</b> CREW
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/technology"
                        className={({ isActive }) => ` py-7 nav-text border-b-[3px]   ${isActive ? "border-b-white" : "border-b-transparent hover:border-b-white/60"}  `}>
                        <b>03</b> TECHNOLOGY
                    </NavLink>
                </li>
            </ul>
        </nav>

    )
}