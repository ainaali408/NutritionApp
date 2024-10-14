import React,{useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { fetchDetailrecipe } from '../API/fetchDetailrecipe';
import { useRecipe } from '../RecipeContext '

function RecipeDetailPage() {
    const {recipeId} = useParams()
const { setSelectedRecipe } = useRecipe(); 

const { isError, isLoading, data: recipe } = useQuery({
    queryKey: ['recipe', recipeId],  // Define the query key
    queryFn: () => fetchDetailrecipe(recipeId),  // Define the query function
    cacheTime: 1000 * 60 * 20,  // Cache for 20 minutes
    staleTime: 1000 * 60 * 2    // Keep data fresh for 2 minutes
  },

);
useEffect(() => {
  if (recipe) {
    setSelectedRecipe(recipe);
    console.log(recipe) // Set the fetched recipe in global state
  }
}, [recipe, setSelectedRecipe]);


    if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: Something went wrong.</div>;
  }

  if (!recipe) {
    return <div>No recipe found.</div>;
  }
  return (
    <div className="card lg:flex lg:items-center lg:card-side bg-base-100 ">
  <figure className="lg:w-1/2">
    <img
      className="px-8 py-2 lg:w-full lg:h-auto object-cover"
      src={recipe.recipe.image}
      alt={recipe.recipe.label}
    />
  </figure>
  <div className="card-body lg:w-1/2 p-6 space-y-4">
    <h2 className="text-center text-slate-600 text-2xl font-bold mb-6">
      {recipe.recipe.label}
    </h2>

    <table className="table-auto w-full text-left">
      <tbody>
        <tr>
          <th className="px-4 py-2 text-slate-600">Diet Labels</th>
          <td className="border px-4 py-2">{recipe.recipe.dietLabels.join(', ') || 'N/A'}</td>
        </tr>
        <tr>
          <th className="px-4 py-2 text-slate-600">Calories</th>
          <td className="border px-4 py-2">{recipe.recipe.calories}</td>
        </tr>
        <tr>
          <th className="px-4 py-2 text-slate-600">Cuisine Type</th>
          <td className="border px-4 py-2">{recipe.recipe.cuisineType[0] || 'N/A'}</td>
        </tr>
        <tr>
          <th className="px-4 py-2 text-slate-600">Recipe Type</th>
          <td className="border px-4 py-2">{recipe.recipe.mealType.join(', ') || 'N/A'}</td>
        </tr>
        <tr>
          <th className="px-4 py-2 text-slate-600">Ingredients</th>
          <td className="border px-4 py-2">
            <ul className="list-disc list-inside">
              {recipe.recipe.ingredientLines.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </td>
        </tr>
        <tr>
          <th className="px-4 py-2 text-slate-600">Health Labels</th>
          <td className="border px-4 py-2">
            <ul className="list-disc list-inside">
              {recipe.recipe.healthLabels.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

    )
}

export default RecipeDetailPage