import { Routes, Route } from "react-router-dom";
import { RecipeProvider } from "../RecipeContext ";
import Loader from "../Loader";
import { Suspense, lazy } from "react";

const Home = lazy(() => import("../Home/Home"));
const RecipeSearch = lazy(() => import("../RecipeSearch/RecipeSearch"));
const RecipeDetailPage = lazy(() => import("../Page/RecipeDetailPage"));

function Routing() {
  return (
    <>
      <RecipeProvider>
        {" "}
        {/* RecipeProvider wrapping both routes */}
        <Routes>
          {/* Home/Search Route */}
          <Route
            path="/"
            element={
              <Suspense fallback={<Loader />}>
                <Home />
              </Suspense>
            }
          />

          <Route
            path="/recipe"
            element={
              <Suspense fallback={<Loader/>}>
                <RecipeSearch />
              </Suspense>
            }
          />

          {/* Recipe Details Route */}
          <Route
            path="/details/:recipeId"
            element={
              <Suspense fallback={<Loader/>}>
                <RecipeDetailPage />
              </Suspense>
            }
          />
        </Routes>
      </RecipeProvider>
    </>
  );
}

export default Routing;
