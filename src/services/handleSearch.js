import { setQueryResult, setLoading } from "../slice/querySlice";

const fetchDishes = (searchQuery) => async (dispatch) => {

	try {
		dispatch(setLoading(true))

		const res = await fetch("http://localhost:3000/search", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ query: searchQuery }),
		});
		const data = await res.json();

		console.log(data)

		dispatch(setQueryResult(data))

	} catch (err) {
		console.error("Error fetching dishes:", err);
		dispatch(setQueryResult([]));
	}
};

export default fetchDishes;


















// const SPOON_KEY = "763377dd60e948598b65714f3d32cdd9";
// const link =
// 	" https://api.spoonacular.com/recipes/716429/information?apiKey=YOUR-API-KEY&includeNutrition=true.";
// const INGR_EX = "https://img.spoonacular.com/ingredients_100x100/apple.jpg";

// https://img.spoonacular.com/recipes/{ID}-{SIZE}.{TYPE}, where {SIZE} is one of the following:

// https://api.spoonacular.com/recipes/adobong&manok/?apiKey=.
