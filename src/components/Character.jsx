import logo from "../assets/happy-reaction.png"

const Character = () => {
    return (
        <div className="flex justify-center items-center h-full pt-[20px] flex-1">
            <div className="flex flex-col justify-center items-center w-[90%]">
                <img src={logo} alt="grace AI" className="w-[200px]"/>
                <p className="text-center w-[80%] text-[.6rem] font-julius text-black ">Hi, I’m Grace, your AI chef in the kitchen. What are we cooking today? Let’s make something amazing.</p>
            </div>
        </div>
    )
}

export default Character 