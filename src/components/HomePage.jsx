import SearchBar from "./SearchBar";
import Filter from "./Filter";
import RecipeList from "./RecipeList";
import { useState } from "react";

function HomePage() {
  const [recipes, setRecipes] = useState([]);

  return (
    <div>
      <SearchBar setRecipes={setRecipes} />
      <Filter />
      {recipes.length ? <RecipeList recipes={recipes} /> : <></>}
    </div>
  );
}

export default HomePage;
