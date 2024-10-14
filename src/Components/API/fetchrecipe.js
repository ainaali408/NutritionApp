import axios from 'axios';

// Function to fetch recipes from Edamam API
export const fetchRecipeData = async (query, from = 0, to = 10) => {
    const APP_ID = 'ac22297a'; // Replace with your actual Edamam API App ID
    const APP_KEY = 'd87b3337b685b6fc29f846ec984de0d8' 

  try {
    
    const response = await axios.get(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=${from}&to=${to}`
    );
    return response.data;
    
  } catch (error) {
    throw new Error('Failed to fetch recipes');
  }
};

