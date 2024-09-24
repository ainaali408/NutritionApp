import React, { createContext, useState, useContext } from 'react';

// Create the Recipe Context
const RecipeContext = createContext();

// Create a custom hook to use the RecipeContext
export const useRecipe = () => {
  return useContext(RecipeContext);
};

// RecipeProvider component to wrap around parts of the app that need access to the context
export const RecipeProvider = ({ children }) => {
  const [selectedRecipe, setSelectedRecipe] = useState(null); // Global recipe state

  return (
    <RecipeContext.Provider value={{ selectedRecipe, setSelectedRecipe }}>
      {children}
    </RecipeContext.Provider>
  );
};
