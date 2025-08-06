import char from "../assets/happy-reaction.png"

const Footer = () => {
    
    return (
        <footer className="fixed bottom-[-50px] left-1/2 transform -translate-x-1/2 w-[90%] flex gap-[1.5rem] border-t border-gray-400 pt-[10px]">
            <img src={char} alt="grace ai" className="w-[160px]" />
            <div className="w-[46%] font-julius flex flex-col">
                <p className="text-[2rem] text-white font-[900]">00 : 00</p>
                <p className="text-[1.2rem] text-white font-[700] mb-1.5">10 : 00</p>
                <p className=" text-[.7rem] text-justify">Hmm... looks like we’re a few ingredients short of a recipe! 🥲 Want to add more to your list?</p>
            </div>
        </footer>
    )
}

export default Footer