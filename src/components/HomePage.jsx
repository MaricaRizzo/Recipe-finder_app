import SearchBar from "./SearchBar";
import Filter from "./Filter";
import RecipeList from "./RecipeList";

function HomePage() {
  return (
    <>
      <div>
        <SearchBar />
        <Filter />
        <RecipeList />
      </div>
    </>
  );
}

export default HomePage;
