import RecipeCard from "./RecipeCard";
import styled from "styled-components";
import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";

const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
  margin: 20px;
`;

function RecipeList(props) {
  const { favorites } = useContext(FavoritesContext);

  return (
    <ListContainer>
      {props.recipes &&
        props.recipes.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            recipe={recipe}
            isFavorite={favorites.includes(recipe)}
          />
        ))}
    </ListContainer>
  );
}

export default RecipeList;
