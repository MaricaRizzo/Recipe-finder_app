import { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchRecipe } from "../services/spoonacularAPI";
import styled from "styled-components";
import { ErrorContext } from "../context/ErrorContext";

const RecipeContainer = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
  font-family: Arial, sans-serif;
  line-height: 1.6;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 16px;
  text-align: center;
  color: #333;
`;

const Image = styled.img`
  width: 100%;
  border-radius: 8px;
  margin-bottom: 16px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

const Summary = styled.div`
  margin-bottom: 16px;
  font-size: 1rem;
  color: #555;

  & a {
    color: #db8b2a;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const SectionTitle = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  margin-top: 16px;
  color: #222;
`;

const List = styled.ul`
  list-style: disc;
  margin-left: 20px;
`;

const OrderedList = styled.ol`
  list-style: decimal;
  margin-left: 20px;
`;

function RecipeDetails() {
  const { id } = useParams();
  const [recipeData, setRecipeData] = useState();
  const { setError } = useContext(ErrorContext);
  const navigate = useNavigate();

  const handleSearch = async () => {
    try {
      const data = await fetchRecipe(id);
      setRecipeData(data);
    } catch (error) {
      setError(error.message);
      navigate("/error");
    }
  };

  useEffect(() => {
    handleSearch();
  }, [id]);

  return (
    <>
      {recipeData ? (
        <RecipeContainer>
          <Title>{recipeData.title}</Title>
          <Image src={recipeData.image} alt={"No image"} />
          <Summary
            dangerouslySetInnerHTML={{
              __html: recipeData.summary,
            }}
          />
          <SectionTitle>Servings:</SectionTitle>
          <p>{recipeData.servings}</p>
          <SectionTitle>Preparation time:</SectionTitle>
          <p>{recipeData.readyInMinutes} minutes</p>
          <SectionTitle>Ingredients:</SectionTitle>
          <List>
            {recipeData.extendedIngredients.map((i, index) => (
              <li key={index}>{i.original}</li>
            ))}
          </List>
          <SectionTitle>Preparation:</SectionTitle>
          <OrderedList>
            {recipeData.analyzedInstructions[0].steps.map((i, index) => (
              <li key={index}>{i.step}</li>
            ))}
          </OrderedList>
        </RecipeContainer>
      ) : (
        <></>
      )}
    </>
  );
}

export default RecipeDetails;
