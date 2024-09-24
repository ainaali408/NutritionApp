import React,{useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { fetchDetailrecipe } from './fetchDetailrecipe';
import { useRecipe } from '../Components/RecipeContext '
function MyRecieDetail() {

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
    <div>
  <div className="card lg:card-side bg-base-100 shadow-xl">
    <figure>
      <img className='px-8 py-6' src={recipe.recipe.image} alt={recipe.recipe.label} />
    </figure>
    <div className="card-body">
      <h2 className="card-title">{recipe.recipe.label}</h2>

      <table className="table-auto w-full text-left">
        <tbody>
          <tr>
            <th className="px-4 py-2">Diet Labels</th>
            <td className="border px-4 py-2">{recipe.recipe.dietLabels.join(', ') || 'N/A'}</td>
          </tr>
          <tr>
            <th className="px-4 py-2">Cuisine Type</th>
            <td className="border px-4 py-2">{recipe.recipe.cuisineType[0] || 'N/A'}</td>
          </tr>
          <tr>
            <th className="px-4 py-2">Recipe Type</th>
            <td className="border px-4 py-2">{recipe.recipe.mealType.join(', ') || 'N/A'}</td>
          </tr>
          <tr>
            <th className="px-4 py-2">Ingredients</th>
            <td className="border px-4 py-2">
              <ul className="list-disc list-inside">
                {recipe.recipe.ingredientLines.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
            </td>
          </tr><th>
            <td>
              <p> {recipe.recipe.directions}</p>
            </td>
          </th>
        </tbody>
      </table>
    </div>
  </div>
</div>

//   </div>
  )
}

export default MyRecieDetail