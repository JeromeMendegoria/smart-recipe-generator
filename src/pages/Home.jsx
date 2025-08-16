import Header from "../components/Header"
import Character from "../components/Character"
import DishesCards from "../components/contents/DishesCards"
import { useSelector } from "react-redux" 

const Home = () => {
    const {queryResult, loading} = useSelector((state) => state.query)

    return (
        <section className="flex flex-col h-screen p-[20px]">
            <Header />

            {loading ? (<div className="flex justify-center items-center flex-1">
                    <div className="loader">loadding</div> 
                </div>) : queryResult.length <= 0 ? <Character /> : <DishesCards data={queryResult}/>}
        </section>
    )
}

export default Home