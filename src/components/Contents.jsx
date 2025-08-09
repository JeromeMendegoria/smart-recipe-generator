import DishesCards from "./contents/DishesCards"
import Footer from "./Footer"
import { useDispatch, useSelector } from "react-redux"

const Contents = () => {
    const activeUI = useSelector((state) => state.activeUI)
    console.log(activeUI)

    return (
        <div className="hide-scrollbar h-[50vh] flex flex-col justify-between overflow-scroll">
            <div className="flex flex-col gap-[0.4rem] pt-[15px]">
                <DishesCards />
            </div>
            <Footer />
        </div>
    )
}

export default Contents