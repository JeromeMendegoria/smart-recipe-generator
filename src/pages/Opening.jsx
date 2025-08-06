import { useState } from "react"
import logo from "../assets/favicon.png"

const Opening = () => {
    const [active, setActive] = useState(true) 

    return (
        <section className="h-screen ">
            <div className="flex flex-col justify-center items-center pt-[40%]">
                <img src={logo} alt="Logo" className="w-[60%]"/>
                <h1 className="text-[2.7rem] font-headers text-black font-[600]">How to cook</h1>
            </div>
        </section>
    )
}

export default Opening