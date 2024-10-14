import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { fetchRecipeData } from '../API/fetchrecipe';
import LazyLoad from 'react-lazyload';
import { useRecipe } from '../RecipeContext '; 
 // Import the custom hook to access context

const RecipeSearch = () => {
  const [query, setQuery] = useState('');  // Search input state
  const [searchQuery, setSearchQuery] = useState('');  // Trigger search state
  const [page, setPage] = useState(0);  // Pagination state
  const [searchHistory, setSearchHistory] = useState([]); // Search history state
  const RECIPES_PER_PAGE = 10;  // Number of recipes to fetch per page

  const { data, error, isLoading, isError } = useQuery({
    queryKey: ['recipes', searchQuery, page],
    queryFn: () => fetchRecipeData(searchQuery, page * RECIPES_PER_PAGE, (page + 1) * RECIPES_PER_PAGE),
    enabled: !!searchQuery,
    cacheTime: 1000 * 60 * 2,  // Cache data for 2 minutes
    staleTime: 1000 * 60 * 2,  // Consider data fresh for 2 minutes
    retry: 2,  // Retry failed queries twice
    retryDelay: 1000,  // Delay between retries
  });

  const navigate = useNavigate();

  const { setSelectedRecipe } = useRecipe();  // Access the setSelectedRecipe function from context

  // Save query to localStorage and state
  const saveSearchQuery = (query) => {
    const updatedHistory = [...new Set([query, ...searchHistory])].slice(0, 5); // Keep unique & limit to 5
    setSearchHistory(updatedHistory);
    localStorage.setItem('searchHistory', JSON.stringify(updatedHistory)); // Save in localStorage
  };

  // Load search history from localStorage when component mounts
  useEffect(() => {
    const savedHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];
    setSearchHistory(savedHistory);
  }, []);

  const handleCoinRedirect = (recipe) => {
    setSelectedRecipe(recipe);  // Store the selected recipe globally using context
    const id = recipe.uri.split('#recipe_')[1];
    navigate(`/details/${id}`);  // Redirect to the details page
  };

  // Handle form submission (search)
  const handleSearch = (e) => {
    e.preventDefault();  // Prevent page reload
    setSearchQuery(query);  // Set the search query to trigger the API call
    setPage(0);  // Reset to first page on new search
    saveSearchQuery(query);  // Save the query to search history
  };

  // Pagination functions
  

  // Set query from history suggestion
  const handleSetQueryFromHistory = (historyQuery) => {
    setQuery(historyQuery);
    setSearchQuery(historyQuery);
  };

  return (
    <div>
      <div className=" h-28 flex justify-center m-8">
        <form onSubmit={handleSearch} className="w-full max-w-lg">
          <div className="flex items-center">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for a recipe..."
              className="border border-gray-300 rounded-lg px-4 py-2 w-full"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg ml-2"
            >
              Search
            </button>
          </div>
          
          {/* Display Search History (Suggested Queries) */}
          {query && searchHistory.length > 0 && (
            <div className="mt-2 bg-white shadow-lg rounded-lg">
              {searchHistory
                .filter((history) => history.toLowerCase().includes(query.toLowerCase()))
                .map((historyItem, index) => (
                  <div
                    key={index}
                    className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                    onClick={() => handleSetQueryFromHistory(historyItem)}
                  >
                    {historyItem}
                  </div>
                ))}
            </div>
          )}
        </form>
      </div>

      {/* Loading and Error States */}
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error: {error.message}</p>}

      {/* Display Search Results */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 m-4">
  {data?.hits.map((recipe) => (
    <div 
      onClick={() => handleCoinRedirect(recipe.recipe)} 
      key={recipe.recipe.uri} 
      className="card bg-base-100 w-56 sm:w-64 md:w-72 shadow-xl"  // Adjust the width here
    >
      <div className="px-10 pt-10">
        <LazyLoad key={recipe.recipe.label} height={200} offset={100}>
          <img
            src={recipe.recipe.image}
            alt={recipe.recipe.label}
            className=" items-center h-[120px] w-[120px] lg:h-auto lg:w-auto transition-transform duration-500 ease-in-out transform hover:scale-105"
          />
        </LazyLoad>
      </div> 
      <div className="card-body items-center text-center">
        <h3 className="text-base font-sans-serif sm:text-sm card-title">{recipe.recipe.label}</h3>
        <p className=' font-sans-serif'>{recipe.recipe.dietLabels.join(', ')}</p>
        <div className="card-actions">
          {/* <a
            href={recipe.recipe.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            View Recipe
          </a> */}
        </div>
      </div>
    </div>
  ))}
</div>


      
    </div>
  );
};

export default RecipeSearch;