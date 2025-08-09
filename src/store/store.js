// store.js
import { configureStore } from "@reduxjs/toolkit";
import activeUIReducer from "../slice/activeUISlice";

const store = configureStore({
    reducer: {
        activeUI: activeUIReducer,
    }
})

export default store