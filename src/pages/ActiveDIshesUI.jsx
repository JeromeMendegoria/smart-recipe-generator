import { useDispatch } from "react-redux"
import Footer from "../components/Footer"
import { setActiveUI } from "../slice/activeUISlice"

const ActiveDishesUI = () => {
    const dispatch = useDispatch()

    return (
        <section className="p-[20px] pb-0 h-[100vh] flex flex-col">
            <header>
                <div className="flex justify-between">
                    {/* dynamic base on passed title on dishes card*/}
                    <h2 className="text-[1.4rem] font-[800] font-headers">Adobong Baboy</h2>
                    <i className="fa-solid fa-arrow-left font-[700] text-[1.3rem]"
                     onClick={() => dispatch(setActiveUI("character"))}></i>
                </div>
                <nav className="flex gap-1 mt-1">
                    <button className="text-[.8rem] bg-blue-800 py-0.5 px-2.5 rounded-[5px] text-white font-[600]">Save this dish</button>
                    <button className="text-[.8rem] bg-blue-800 py-0.5 px-2.5 rounded-[5px] text-white font-[600]">start Cooking</button>
                </nav>
            </header>
            <div className="flex-1 pt-20px overflow-y-scroll hide-scrollbar">
                {/* contents */}
            </div>
            <div className="flex justify-end gap-1 text-[.8rem] mb-1">
                <button className="bg-[#f4a69d] text-white font-[800] py-1.5 px-2.5 rounded-[5px]">Stopped Cooking</button>
                <button className="bg-[#f4a69d] text-white font-[800] py-1.5 px-2.5 rounded-[5px]">Done Cooking</button>
            </div>
            <Footer />
        </section>
    )
}

export default ActiveDishesUI