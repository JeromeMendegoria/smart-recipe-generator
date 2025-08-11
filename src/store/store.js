import { configureStore } from "@reduxjs/toolkit";
import activeUIReducer from "../slice/activeUISlice";
import ingredientReducer from"../slice/ingredientSlice"
import queryReducer from "../slice/querySlice"

const store = configureStore({
    reducer: {
        activeUI: activeUIReducer,
        ingredients: ingredientReducer,
        queryResult: queryReducer
    }
})

export default store