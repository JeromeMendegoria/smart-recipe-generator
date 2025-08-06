import { useState } from "react";
import logo from "../assets/favicon.png"
import inputIcon from "../assets/input-icon.png"

const Header = () => {

    return (
        <header>
            <div className="flex gap-[.5rem] items-center">
                <img src={logo} alt="Logo" className="w-[40px] h-[40px]"/>
                <h1 className="font-headers font-[700] text-[1.3rem]">How to cook</h1>
            </div>
            <nav>
                <div className="flex justify-between items-center gap-[.5rem] border border-gray-600 p-[10px] mt-[20px] rounded-[20px]">
                    <img src={inputIcon} alt="input icon" className="w-[30px] h-[30px] "/>
                    <input type="text" name="search" id="search" placeholder="Search dishes.." className="flex-1 outline-hidden"/>
                    <i className="fa-solid fa-magnifying-glass "></i>
                </div>
                <ul className="flex gap-[.5rem] mt-[20px]">
                    <li className="text-[0.7rem] border  border-gray-600  py-[0.2rem] px-3.5 rounded-[10px]">Recent</li>
                    <li className="text-[0.7rem] border  border-gray-600  py-[0.2rem] px-3.5 rounded-[10px]">Saved</li>
                    <li className="text-[0.7rem] border  border-gray-600  py-[0.2rem] px-3.5 rounded-[10px]">Based on Ingredients</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header