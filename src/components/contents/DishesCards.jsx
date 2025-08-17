import { useEffect, useState } from "react"
import { fetchDishByName } from "../../services/dishService"
import { setActiveUI } from "../../slice/activeUISlice" 
import { setActiveDish } from "../../slice/activeDishSlice"
import { useDispatch, useSelector } from "react-redux"

const DishesCards = ({ data }) => {
  const [show, setShow] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    setShow(false)
    const id = setTimeout(() => setShow(true), 10)
    return () => clearTimeout(id)
  }, [data])

  const handleDishClick= async (dishName) => {
    try {
      const dishData = await fetchDishByName(dishName)

      dispatch(setActiveDish(dishData))
      dispatch(setActiveUI("activeDishesUI"))
    } catch (err) {
      console.log("error fetching dish", err)
    }
  }

  return (
    <div className="flex flex-col mt-[20px] gap-[10px] h-screen overflow-y-scroll hide-scrollbar">
      {data?.map((items, index) => (
        <div          
          key={index}
          onClick={() => handleDishClick(items.title)}
          className={`bg-[#f7f1e3] min-h-[100px] gap-[.5rem] py-[0.3rem] px-[.5rem] rounded-[10px] shadow-md
                      transition-all duration-500 ease-out will-change-transform
                      ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}
                      motion-reduce:transition-none motion-reduce:transform-none cursor-pointer`}
          style={{ transitionDelay: `${index * 100}ms` }}
        >
          <h2 className="text-[1.2rem] font-[900]">{items.title}</h2>
          <p className="text-[.8rem]">{items.description}</p>
        </div>
      ))}
    </div>
  )
}

export default DishesCards
