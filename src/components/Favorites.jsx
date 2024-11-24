import RecipeList from "./RecipeList";
import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";
import styled from "styled-components";

const FavoritesContainer = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  font-family: Arial, sans-serif;
`;

const Title = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 16px;
  color: #333;
`;

const EmptyMessage = styled.div`
  font-size: 1rem;
  color: #555;
  margin-top: 20px;
`;

function Favorites(props) {
  const { favorites } = useContext(FavoritesContext);

  return (
    <FavoritesContainer>
      <Title>Favorites</Title>
      {favorites.length ? (
        <RecipeList recipes={favorites} />
      ) : (
        <EmptyMessage>You haven't saved any recipe yet!</EmptyMessage>
      )}
    </FavoritesContainer>
  );
}

export default Favorites;
