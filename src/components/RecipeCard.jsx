function RecipeCard(props) {
  return (
    <div key={props.recipe.id}>
      <h3>{props.recipe.title}</h3>
      <img src={props.recipe.image} alt={props.recipe.title} />
    </div>
  );
}

export default RecipeCard;
