import RecipeCard from "./RecipeCard";

function RecipeList(props) {
  return (
    <>
      {props.recipes ? (
        props.recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))
      ) : (
        <></>
      )}
    </>
  );
}

export default RecipeList;
