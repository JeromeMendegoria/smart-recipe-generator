import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import fetchPossibleRecipes from "../../services/fetchPossibleRecipesServices.js";
import emptyIcon from "../../assets/empty.png";
import LoadingText from "./LoadingScreen.jsx";
import ErrorUI from "./ErrorUI.jsx";
import DishesCards from "./DishesCards";


const WhatCanCook = () => {
    const dispatch = useDispatch()
    const {data: possibleRecipes, loading, error} = useSelector((state) => state.possibleRecipe ?? []);
    const ingredients = useSelector((state) => state.ingredients ?? []);

    useEffect(() => {
      if(ingredients.length > 0) {
        dispatch(fetchPossibleRecipes(ingredients))
      }
    }, [dispatch, ingredients]) 
    
    return (
      <>
        {ingredients.length === 0 ? (
          <div className="flex justify-center items-center">
            <img src={emptyIcon} alt="empty icon" className="w-[200px] h-[200px]" />
          </div>
        ) : loading ? (
          <LoadingText />
        ) : error ? (
          <ErrorUI />
        ) : (
          <DishesCards data={possibleRecipes}/>
        )}
      </>
    );
  };
  
  export default WhatCanCook;