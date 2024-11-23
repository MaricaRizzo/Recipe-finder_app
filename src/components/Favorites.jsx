import RecipeList from "./RecipeList";
import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";

function Favorites(props) {
  const { favorites, setFavorites } = useContext(FavoritesContext);

  return (
    <>
      <p>Favorites</p>
      {favorites.length ? (
        <RecipeList recipes={favorites} />
      ) : (
        <>You haven't saved any recipe yet!</>
      )}
    </>
  );
}

export default Favorites;
