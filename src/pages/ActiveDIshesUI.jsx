import { useDispatch, useSelector } from "react-redux"
import Footer from "../components/Footer"
import { setActiveUI } from "../slice/activeUISlice"
import { clearActiveDish } from "../slice/activeDishSlice"
import StepCards from "../components/contents/StepCards"

const ActiveDishesUI = () => {
    const dispatch = useDispatch()
    const activeDish = useSelector((state) => state.activeDish)

    if(!activeDish) return

    const handleBack = () => {
        dispatch(clearActiveDish())
        dispatch(setActiveUI("character"))
    }

    return (
        <section className="p-[20px] pb-0 h-[100vh] flex flex-col">
            <header>
                <div className="flex justify-between">
                    {/* dynamic base on passed title on dishes card*/}
                    <h2 className="text-[1.4rem] font-[800] font-headers">{activeDish[0].dishname}</h2>
                    <i className="fa-solid fa-arrow-left font-[700] text-[1.3rem]"
                     onClick={() => handleBack()}></i>
                </div>
                <nav className="flex gap-1 mt-1">
                    <button className="text-[.8rem] bg-blue-800 py-0.5 px-2.5 rounded-[5px] text-white font-[600]">Save this dish</button>
                    <button className="text-[.8rem] bg-blue-800 py-0.5 px-2.5 rounded-[5px] text-white font-[600]">start Cooking</button>
                </nav>
            </header>
            <div className="flex-1 pt-20px overflow-y-scroll hide-scrollbar">
                <StepCards data={activeDish} /> 
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