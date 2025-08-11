import char from "../assets/happy-reaction.png"
const AIReaction = {
    ingedients: {
        emptyIngedients: "Hmm... looks like we’re a few ingredients short of a recipe! 🥲 Want to add more to your list?",
        notEmptyIngredients: `Based on Ingredients
        Hey there, Chef! 👩‍🍳👨‍🍳 Here's what you've got in your kitchen — let's whip up something tasty with these ingredients!
        What I Can Cook
        My ingredients
        Tender pork braised in soy sauce, vinegar, garlic, and spices—a rich, savory Filipino favorite.
        Adobong Baboy `,
    },
    searchDishes: {
        withResult: "Curious how it's cooked? Click on a dish and I’ll walk you through it—step by step. You can even save it for your next kitchen session!",
        noResult: `how to cook
        Search dishes...
        Recent
        Saved
        Oops! No results came up for that. Let’s give it another go—try refining your search or using a simpler name.`
    }
}
// fixed bottom-[-50px] left-1/2 transform -translate-x-1/2 w-[90%] 
const Footer = () => {

    return (
        <footer className="flex gap-[1.5rem] border-t border-gray-400 pt-[10px] h-[200px] overflow-hidden">
            <div>
                <img src={char} alt="grace ai" className="w-[160px] object-cover" />
            </div>
            <div className="w-[46%] font-julius flex flex-col">
                {/* <p className="text-[2rem] text-white font-[900]">00 : 00</p>
                <p className="text-[1.2rem] text-white font-[700] mb-1.5">10 : 00</p> */}
                <p className=" text-[.7rem] text-justify">Hmm... looks like we’re a few ingredients short of a recipe! 🥲 Want to add more to your list?</p>
            </div>
        </footer>
    )
}

export default Footer