import Header from "../components/Header"
import Character from "../components/Character"
import DishesCards from "../components/contents/DishesCards"
import LoadingText from "../components/contents/LoadingScreen"
import Footer from "../components/Footer"
import { useSelector } from "react-redux" 

const Home = () => {
    const {queryResult, loading} = useSelector((state) => state.query)

    return (
        <section className="flex flex-col h-screen p-[20px] pb-0">
            <Header />
            <div className="flex-1 overflow-y-scroll hide-scrollbar">
                {loading ? ( <LoadingText />) : queryResult.length <= 0 ? <Character /> : <DishesCards data={queryResult}/>}
            </div>
            {queryResult.length > 0 && <Footer />}
        </section>
    )
}

export default Home