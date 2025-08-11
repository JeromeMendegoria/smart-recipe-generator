import { useSelector } from "react-redux" 

const DishesCards = () => {
    const queryResult = useSelector((state) => state.queryResult)

    return (
        <div className="flex flex-col mt-[20px] gap-[10px] h-screen overflow-y-scroll hide-scrollbar">
          {queryResult.map((items) => (
             <div className="bg-[#f7f1e3] min-h-[100px] gap-[.5rem] py-[0.3rem] px-[.5rem] rounded-[10px]">
                <h2 className="text-[1.2rem] font-[900]">{items.title}</h2>
                <p className="text-[.8rem]">{items.description}</p>
             </div>
          ))}
        </div>
    )
}

export default DishesCards