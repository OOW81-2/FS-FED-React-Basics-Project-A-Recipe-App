import { RecipeListPage } from './pages/RecipeListPage';
import { RecipePage } from "./pages/RecipePage";
import { useState } from "react";
import { Flex } from "@chakra-ui/react";
import { data } from "./utils/data";

export const App = () => {
  // Your state code here
   const [selectedRecipe, setSelectedRecipe] = useState();
  
  return <RecipeListPage />; //(kolla upp vilken variant som e rätt)
    <>
      {selectedRecipe ? (
        <Flex
          backgroundColor="blue.300"
          justifyContent="center"
          alignItems="center"
        >
          <RecipePage
            recipeObject={selectedRecipe}
            clickFn={setSelectedRecipe}
          />
        </Flex>
      ) : (
        <RecipeListPage clickFn={setSelectedRecipe} />
      )}
    </>
  );
};
