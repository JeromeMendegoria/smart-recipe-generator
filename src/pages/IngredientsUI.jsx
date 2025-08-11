import Footer from "../components/Footer"
import AddIngredientsUI from "../components/contents/AddIngredients"
import WhatCanCook from "../components/contents/WhatCanCook"
import { useDispatch } from "react-redux"
import { setActiveUI } from "../slice/activeUISlice" 
import { useState } from "react"

const IngredientsUI = () => {
    const [ active, setActive ] = useState("what_can_cook")
    const dispatch = useDispatch()

    return (
        <section className="p-[20px] flex flex-col h-screen pb-0">
            <nav>
                <div className="flex justify-between items-center mb-[10px]">
                    <h2 className="font-headers font-[700] text-[1.3rem]">Based on Ingridients</h2>
                    <i className="fa-solid fa-arrow-left font-[700] text-[1.3rem]"
                     onClick={() => dispatch(setActiveUI("character"))}></i>
                </div>
                <div className="mb-[20px] text-[.8rem] flex gap-[.3rem]">
                    {/* fetch what can cook */}
                    <button className="border px-2.5 py-1 rounded-[10px]"
                    onClick={() => setActive("what_can_cook")}>What I can cook</button>
                    {/* show ingridients */}
                    <button className="border px-2.5 py-1 rounded-[10px]"
                    onClick={() => setActive("my_ingredients")}>My Ingredients</button>
                </div>
            </nav>
            <div className=" overflow-y-scroll flex-1 hide-scrollbar">
                {active == "what_can_cook" ?  <WhatCanCook /> : <AddIngredientsUI />}
            </div>
            <Footer />
        </section>
    )
}

export default IngredientsUI