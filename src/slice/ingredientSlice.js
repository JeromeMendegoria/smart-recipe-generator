import { createSlice } from "@reduxjs/toolkit";

const loadFromLocalStorage = () => {
    try {
        const saved = localStorage.getItem("ingredients")
        return saved ? JSON.parse(saved) : []
    } catch (err) {
        console.error("Error loading from localStorage", err);
        return []
    }
}

const saveToLocalStorage = (ingredients) => {
    try {
        localStorage.setItem("ingredients", JSON.stringify(ingredients))
    } catch (err) {
        console.error("Error saving to localStorage", err);
    }
}

const ingredientsSlice = createSlice({
  name: "ingredients",
  initialState: loadFromLocalStorage(),
  reducers: {
    addIngredient: (state, action) => {
      state.push(action.payload);
      saveToLocalStorage(state)
    },
    deleteIngredient: (state, action) => {
      const updatedState = state.filter((ingredient) => ingredient.id !== action.payload);
      saveToLocalStorage(updatedState)
      return updatedState
    },
  },
});

export const { addIngredient, deleteIngredient } = ingredientsSlice.actions;
export default ingredientsSlice.reducer;
