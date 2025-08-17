export const fetchDishByName = async (dishName) => {
	try {
		const res = await fetch("http://localhost:3000/cooking-step", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ dishName }),
		});
		return await res.json();
	} catch (err) {
		console.error("Error in fetchDishById:", err);
		throw err;
	}
};
