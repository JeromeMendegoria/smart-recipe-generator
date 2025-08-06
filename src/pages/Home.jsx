import { useState } from "react"
import Header from "../components/Header"
import Character from "../components/Character"
import Contents from "../components/Contents"

const Home = () => {

    return (
        <section className="flex flex-col h-screen pt-[20px] pb-[20px] pl-[20px] pr-[20px]">
            <Header />
            {/* if no search yet */}
            {/* <Character /> */}
            {/*  with search result */}
            <Contents />
        </section>
    )
}

export default Home