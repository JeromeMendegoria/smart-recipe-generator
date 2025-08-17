import { createSlice } from "@reduxjs/toolkit";

const loadFromLocalStorage = () => {
	try {
		const saved = localStorage.getItem("possibleRecipes");
		return saved ? JSON.parse(saved) : [];
	} catch (err) {
		console.error("Error loading possible recipes:", err);
		return [];
	}
};

const saveToLocalStorage = (recipes) => {
	try {
		localStorage.setItem("possibleRecipes", JSON.stringify(recipes));
	} catch (err) {
		console.error("Error saving possible recipes:", err);
	}
};

const possibleRecipeSlice = createSlice({
	name: "possibleRecipes",
	initialState: {
		data: loadFromLocalStorage(),
		loading: false,
		error: null,
	},
	reducers: {
		setLoading: (state, action) => {
			state.loading = action.payload;
		},
		setError: (state, action) => {
			state.error = action.payload;
			state.loading = false;
		},
		setPossibleRecipes: (state, action) => {
			state.data = action.payload;
			state.loading = false;
			state.error = null;
			saveToLocalStorage(action.payload);
		},
		clearPossibleRecipes: () => {
			state.data = [];
			state.loading = false;
			state.error = null;
			saveToLocalStorage([]);
		},
	},
});

export const {  setLoading, setError, setPossibleRecipes, clearPossibleRecipes } =
	possibleRecipeSlice.actions;
export default possibleRecipeSlice.reducer;
