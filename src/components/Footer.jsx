import { useSelector } from "react-redux";
import char from "../assets/happy-reaction.png";
import sad from "../assets/sad-reaction.png"

const AIReaction = {
  ingredients: {
    empty: "Hmm... looks like we’re a few ingredients short of a recipe! 🥲 Want to add more to your list?",
    notEmpty: `Based on your ingredients 🧑‍🍳  
Here’s what you’ve got in your kitchen — let’s whip up something tasty!`,
  },
  searchDishes: {
    withResult: "Curious how it's cooked? Click on a dish and I’ll walk you through it step by step. 🍲",
    noResult: `Oops! No results came up for that. 🤔  
Try refining your search or using a simpler name.`,
  },
};

const Footer = () => {
  const activeUI = useSelector((state) => state.activeUI); // e.g. "ingredients" | "searchDishes"
  const ingredients = useSelector((state) => state.ingredients ?? []);
  const possibleRecipes = useSelector((state) => state.possibleRecipe?.data ?? []);

  let message = "Hi, I’m Grace AI 🤖 Ready to cook?";
  let reaction = ingredients.length === 0 ? sad : char
  
  if (activeUI === "ingredients") {
    message = ingredients.length === 0 ? AIReaction.ingredients.empty : AIReaction.ingredients.notEmpty;
  } 
  
  if (activeUI === "searchDishes") {
    message = possibleRecipes.length > 0 ? AIReaction.searchDishes.withResult : AIReaction.searchDishes.noResult;
  }

  return (
    <footer className="flex gap-[1.5rem] border-t border-gray-400 pt-[10px] h-[200px] overflow-hidden ">
      <div>
        <img src={reaction} alt="grace ai" className="w-[160px] object-cover" />
      </div>
      <div className="w-[46%] font-julius flex flex-col">
        <p className="text-sm text-gray-700 whitespace-pre-line">{message}</p>
      </div>
    </footer>
  );
};

export default Footer;
