import { useNavigate } from "react-router-dom";

function RecipeCard(props) {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate(`/recipe/${props.recipe.id}`);
  };

  return (
    <div onClick={handleNavigation} key={props.recipe.id}>
      <img src={props.recipe.image} alt={props.recipe.title} />
      <h3>{props.recipe.title}</h3>
    </div>
  );
}

export default RecipeCard;
