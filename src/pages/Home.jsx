import { useState } from "react"
import Header from "../components/Header"
import Character from "../components/Character"
import Contents from "../components/Contents"
import { useSelector } from "react-redux" 

const Home = () => {
    const activeUI = useSelector((state) => state.activeUI)

    return (
        <section className="flex flex-col h-screen pt-[20px] pb-[20px] pl-[20px] pr-[20px]">
            <Header />
            {activeUI == "character" ? <Character /> : <Contents />}
        </section>
    )
}

export default Home