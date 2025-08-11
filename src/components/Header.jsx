import { useState } from "react"
import logo from "../assets/favicon.png"
import inputIcon from "../assets/input-icon.png"
import fetchDishes from "../services/handleSearch"
import { useDispatch } from "react-redux"
import { setActiveUI } from "../slice/activeUISlice" 

const Header = () => {
    const [search, setSearch] = useState("")
    const dispatch = useDispatch()

    const handleSearch = () => {
        dispatch(fetchDishes(search));
        setSearch("")
    };

    return (
        <header>
            <div className="flex gap-[.5rem] items-center">
                <img src={logo} alt="Logo" className="w-[40px] h-[40px]"/>
                <h1 className="font-headers font-[700] text-[1.3rem]">How to cook</h1>
            </div>
            <nav>
                <div className="flex justify-between items-center gap-[.5rem] border border-gray-600 p-[10px] mt-[20px] rounded-[20px]">
                    <img src={inputIcon} alt="input icon" className="w-[30px] h-[30px] "/>
                    <input type="text" name="search" id="search" placeholder="Search dishes.." className="flex-1 outline-hidden"
                            value={search} onChange={(e) => setSearch(e.target.value)} 
                            onKeyDown={(e) => {
                                if(e.key === "Enter") {
                                    handleSearch
                                }
                            }}/>

                    <i className="fa-solid fa-magnifying-glass cursor-pointer" onClick={handleSearch}></i>
                </div>
                <ul className="flex gap-[.5rem] mt-[20px]">
                    <li className="text-[0.7rem] border  border-gray-600  py-[0.2rem] px-3.5 rounded-[10px]" 
                        onClick={() => dispatch(setActiveUI("recent"))}>Recent</li>
                    <li className="text-[0.7rem] border  border-gray-600  py-[0.2rem] px-3.5 rounded-[10px]" 
                        onClick={() => dispatch(setActiveUI("saved"))}>Saved</li>
                    <li className="text-[0.7rem] border  border-gray-600  py-[0.2rem] px-3.5 rounded-[10px]"
                        onClick={() => dispatch(setActiveUI("ingredients"))}>Based on Ingredients</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header