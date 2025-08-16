import { useDispatch, useSelector } from "react-redux";
import emptyIcon from "../../assets/empty.png";
import DishesCards from "./DishesCards";
import { useEffect } from "react";
import fetchPossibleRecipes from "../../services/fetchPossibleRecipesServices.js";


const WhatCanCook = () => {
    const dispatch = useDispatch()
    const possibleRecipes = useSelector((state) => state.possibleRecipe ?? []);
    const ingredients = useSelector((state) => state.ingredients ?? []);
    const hasRecipes = Array.isArray(possibleRecipes) && possibleRecipes.length > 0;

    useEffect(() => {
      if(ingredients.length > 0) {
        dispatch(fetchPossibleRecipes(ingredients))
      }
    }, [dispatch, ingredients]) 

    console.log("recipes", possibleRecipes) // but this one says empty array
    return (
      <section className=" h-screen">
        {ingredients.length === 0 ? (
          <div className="flex justify-center items-center h-[60vh]">
            <img src={emptyIcon} alt="empty icon" className="w-[200px] h-[200px]" />
          </div>
        ) : (
          <>
            {!hasRecipes ? (
              <p>No recipes yet.</p>
            ) : (
              <DishesCards data={possibleRecipes} />
            )}
          </>
        )}
      </section>
    );
  };
  
  export default WhatCanCook;