import Header from "../components/Header"
import Character from "../components/Character"
import DishesCards from "../components/contents/DishesCards"
import { useSelector } from "react-redux" 

const Home = () => {
    const activeUI = useSelector((state) => state.activeUI)
    const queryResult = useSelector((state) => state.queryResult)

    console.log(typeof queryResult)
    console.log(queryResult)

    return (
        <section className="flex flex-col h-screen p-[20px]">
            <Header />

            {queryResult.length <= 0 ? <Character /> : <DishesCards />}
            
        </section>
    )
}

export default Home