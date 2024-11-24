import React, { useContext, useState } from "react";
import { searchRecipes } from "../services/spoonacularAPI";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ErrorContext } from "../context/ErrorContext";

const SearchBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
`;

const Input = styled.input`
  width: 100%;
  max-width: 400px;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;

  &:focus {
    outline: none;
    border-color: #db8b2a;
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #db8b2a;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #ba731c;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;
function SearchBar(props) {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const { setError } = useContext(ErrorContext);

  const handleSearch = async () => {
    try {
      const recipes = await searchRecipes(query);
      props.setRecipes(recipes);
    } catch (error) {
      setError(err.message);
      navigate("/error");
    }
  };

  return (
    <SearchBarContainer>
      <Input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search recipes..."
      />
      <Button onClick={handleSearch}>Search</Button>
    </SearchBarContainer>
  );
}

export default SearchBar;
