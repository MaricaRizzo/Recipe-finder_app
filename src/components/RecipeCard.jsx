import { useNavigate } from "react-router-dom";
import { useCallback, useContext } from "react";
import styled from "styled-components";
import { FavoritesContext } from "../context/FavoritesContext";

const Card = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
  width: 300px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  margin: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const Title = styled.h3`
  font-size: 1.25rem;
  margin: 8px 16px;
`;

const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
  background-color: #758f39;

  p {
    color: white;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }

  span {
    cursor: pointer;
    color: white;
    &:hover {
      font-weight: bold;
    }
  }
`;

function RecipeCard(props) {
  const navigate = useNavigate();
  const { setFavorites } = useContext(FavoritesContext);

  const handleNavigation = () => {
    navigate(`/recipe/${props.recipe.id}`);
  };

  const toggleFavorite = useCallback(
    (event) => {
      event.preventDefault();

      setFavorites((prevFavorites) => {
        if (prevFavorites.includes(props.recipe)) {
          return prevFavorites.filter((item) => item !== props.recipe);
        } else {
          return [...prevFavorites, props.recipe];
        }
      });
    },
    [props.recipe, setFavorites]
  );

  return (
    <Card>
      <Image src={props.recipe.image} alt={props.recipe.title} />
      <Title>{props.recipe.title}</Title>
      <Actions>
        <p onClick={handleNavigation}>
          Read more <i className="fa-solid fa-arrow-right"></i>
        </p>
        <span onClick={toggleFavorite}>
          {props.isFavorite ? (
            <i className="fa-solid fa-heart"></i>
          ) : (
            <i className="fa-regular fa-heart"></i>
          )}
        </span>
      </Actions>
    </Card>
  );
}

export default RecipeCard;
