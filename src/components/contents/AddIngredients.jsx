import { useDispatch, useSelector } from "react-redux";
import { addIngredient, deleteIngredient } from "../../slice/ingredientSlice";
import { useState } from "react";

const AddIngredientsUI = () => {
  const [value, setValue] = useState("")
  const dispatch = useDispatch();
  const ingredients = useSelector((state) => state.ingredients);

  const handleAdd = () => {
	const trimmedValue = value.trim();
    if (!trimmedValue) return;

    const newIngredient = {
      id: Date.now(),
      name: value
    };

    dispatch(addIngredient(newIngredient));
	setValue("")
  };

  const handleDelete = (id) => {
    dispatch(deleteIngredient(id));
  };

  return (
  <>
      <div className="w-auto border border-gray-500 flex px-2.5 py-[10px] justify-between rounded-[20px]">
      <input type="text" name="ingredients" id="ingredients" className="flex-1 outline-none text-[.7rem]"
      value={value} onChange={(e) => setValue(e.target.value)} 
      maxLength={30} placeholder="Make sure to add seasomings.."/>
        <button onClick={handleAdd}><i className="fa-solid fa-plus w-[30px] cursor-pointer"></i></button>
    </div>
      <ul className="flex flex-col gap-[.7rem] mt-[20px]">
      {ingredients.map((ing) => (
        <li key={ing.id} className="flex justify-between items-center border border-gray-600 px-3.5 py-3 rounded-[25px] font-[700] bg-[#f7f1e3]">
          <div>
            {ing.name}
          </div>
          <button onClick={() => handleDelete(ing.id)} className="cursor-pointer">
            <i className="fa-solid fa-trash"></i>
          </button>
        </li>
      ))}
      </ul>
  </>
);
};


export default AddIngredientsUI