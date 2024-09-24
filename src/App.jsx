import { Suspense } from 'react';
import RecipeImgGallery from './Components/RecipeImgGallery'
import { Routes, Route } from 'react-router-dom';
import { RecipeProvider } from './Components/RecipeContext '; // Assuming you have this created
import RecipeSearch from './Components/RecipeSearch'; // Adjust the path if necessary
import MyRecieDetail from './Components/MyRecieDetail'; // Adjust the path if necessary
import { Facebook } from 'react-content-loader';// Placeholder component during loading
import ImageGallery from './Components/ImageGallery';

function App() {
  return (
    <>
{/* <RecipeImgGallery/> */}
<ImageGallery/>
    <RecipeProvider> {/* RecipeProvider wrapping both routes */}
      <Routes>
        {/* Home/Search Route */}
        <Route 
          path="/" 
          element={
            <Suspense fallback={<div>Loading...</div>}> {/* Provide fallback UI */}
              <RecipeSearch />
            </Suspense>
          } 
        />

        {/* Recipe Details Route */}
        <Route 
          path="/details/:recipeId" 
          element={
            <Suspense fallback={<Facebook />}> {/* Fallback for the details page */}
              <MyRecieDetail />
            </Suspense>
          } 
        />
      </Routes>
    </RecipeProvider>

    </>
  );
}

export default App;

