import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://api.spoonacular.com",
  params: {
    apiKey: import.meta.env.VITE_SPOONACULAR_API_KEY,
  },
});

export const searchRecipes = async (query) => {
  try {
    const response = await apiClient.get("/recipes/complexSearch", {
      params: { query },
    });
    return response.data.results;
  } catch (error) {
    console.error("Error fetching recipes:", error);
    throw error;
  }
};
