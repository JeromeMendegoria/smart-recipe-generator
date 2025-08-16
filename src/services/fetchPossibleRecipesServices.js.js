import { setPossibleRecipes } from "../slice/possibleRecipeSlice";

let lastIngredientsHash = null;
const fetchPossibleRecipes = (ingredients) => async (dispatch) => {

    try {
        const ingredientsHash = JSON.stringify(ingredients);

        if (lastIngredientsHash === ingredientsHash) {
            console.log("No ingredient changes, skipping fetch.");
            return;
        }

        lastIngredientsHash = ingredientsHash;

        const res = await fetch("http://localhost:3000/ingredients", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ ingredients }),
        });
        if (!res.ok) throw new Error("Failed to fetch recipes");

        const data = await res.json();

        console.log(data) // have json response on backend

        dispatch(setPossibleRecipes(data));
    } catch (err) {
        console.error("Error fetching possible recipes:", err);
    }
};

export default fetchPossibleRecipes