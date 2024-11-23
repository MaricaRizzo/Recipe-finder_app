import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";

function RecipeCard(props) {
  const navigate = useNavigate();
  const { favorites, setFavorites } = useContext(FavoritesContext);

  const handleNavigation = () => {
    navigate(`/recipe/${props.recipe.id}`);
  };

  const toggleFavorite = (event) => {
    event.preventDefault();

    setFavorites((prevFavorites) => {
      if (prevFavorites.includes(props.recipe)) {
        return prevFavorites.filter((item) => item !== props.recipe);
      } else {
        return [...prevFavorites, props.recipe];
      }
    });
  };

  return (
    <div key={props.recipe.id}>
      <img src={props.recipe.image} alt={props.recipe.title} />
      <h3>{props.recipe.title}</h3>
      <p onClick={handleNavigation}>Read more</p>
      <span onClick={toggleFavorite}>Save</span>
    </div>
  );
}

export default RecipeCard;
