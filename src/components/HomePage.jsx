import SearchBar from "./SearchBar";
import RecipeList from "./RecipeList";
import { useState } from "react";

function HomePage() {
  const [recipes, setRecipes] = useState([]);

  return (
    <div>
      <SearchBar setRecipes={setRecipes} />
      {recipes.length ? <RecipeList recipes={recipes} /> : <></>}
    </div>
  );
}

export default HomePage;
