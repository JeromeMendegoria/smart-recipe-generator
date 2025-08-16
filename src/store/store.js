import { configureStore } from "@reduxjs/toolkit";
import activeUIReducer from "../slice/activeUISlice";
import ingredientReducer from"../slice/ingredientSlice"
import queryReducer from "../slice/querySlice"
import possibleRecipeReducer from "../slice/possibleRecipeSlice"

const store = configureStore({
    reducer: {
        activeUI: activeUIReducer,
        ingredients: ingredientReducer,
        query: queryReducer,
        possibleRecipe: possibleRecipeReducer
        
    }
})

export default store