import DishesCards from "./contents/DishesCards"
import Recents from "./contents/Recent"
import Saved from "./contents/Saved"
import IngredientsUI from "./contents/AddIngredients"
import Footer from "./Footer"
import { useDispatch, useSelector } from "react-redux"
import { setActiveUI } from "../slice/activeUISlice" 

const Contents = () => {
    // const activeUI = useSelector((state) => state.activeUI)
    // const dispatch = useDispatch()

    // let content;
    // switch(activeUI) {
    //     case "recent":
    //         content = <Recents />
    //         break;
    //     case "saved":
    //         content = <Saved />
    //         break;
    //     case "ingredients":
    //         content = <IngredientsUI />
    //         break;
    //     case "search":
    //         content = <DishesCards />
    //         break;
    //     default:
    //         dispatch(setActiveUI("character"))
    // }

    // return (
    //     <div className="hide-scrollbar h-[50vh] flex flex-col justify-between overflow-scroll">
    //         <div className="flex flex-col gap-[0.4rem] pt-[15px]">
    //             {content}
    //         </div>
    //         <Footer />
    //     </div>
    // )
}

export default Contents