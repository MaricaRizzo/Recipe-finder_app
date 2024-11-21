import "./App.css";
import HomePage from "./components/HomePage";
import Favorites from "./components/Favorites";
import RecipeDetails from "./components/RecipeDetails";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  return (
    <>
      <HomePage />
      <Favorites />
      <RecipeDetails />
      <ErrorBoundary />
    </>
  );
}

export default App;
