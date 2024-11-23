import { useParams } from "react-router-dom";

function RecipeDetails() {
  const { id } = useParams();

  return (
    <>
      <p>Recipe details {id}</p>
    </>
  );
}

export default RecipeDetails;
