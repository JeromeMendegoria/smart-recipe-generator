import DishesCards from "./DishesCards"
import Footer from "./Footer"

const Contents = () => {

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