import React, { useState } from "react";
import { searchRecipes } from "../services/spoonacularAPI";

function SearchBar(props) {
  const [query, setQuery] = useState("");

  const handleSearch = async () => {
    try {
      const recipes = await searchRecipes(query);
      props.setRecipes(recipes);
    } catch (error) {
      console.error("Error searching recipes:", error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search recipes..."
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchBar;
