import { createSlice } from "@reduxjs/toolkit"

const loadFromLocalStorage = () => {
    try {
        const saved = localStorage.getItem("possibleRecipes")
        return saved ? JSON.parse(saved) : []
    } catch (err) {
        console.error("Error loading possible recipes:", err)
        return []
    }
};

const saveToLocalStorage = (recipes) => {
    try {
        localStorage.setItem("possibleRecipes", JSON.stringify(recipes))
    } catch (err) {
        console.error("Error saving possible recipes:", err)
    }
};

const possibleRecipeSlice = createSlice({
    name: "possibleRecipes",
    initialState: loadFromLocalStorage(),
    reducers: {
        
        setPossibleRecipes: (state, action) => {
            saveToLocalStorage(action.payload)
            return action.payload
        },
        clearPossibleRecipes: () => {
            saveToLocalStorage([])
            return []
        }
    }
})

export const { setPossibleRecipes, clearPossibleRecipes } = possibleRecipeSlice.actions
export default possibleRecipeSlice.reducer
