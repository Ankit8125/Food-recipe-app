import RecipeList from "@/components/recipe-list";
// since this is a server component, so I will fetch the list of data's here and then pass it to index.js in my components folder, and there I will render all of this
async function fetchListOfRecipes(){
    try {
        const apiResponse = await fetch('https://dummyjson.com/recipes')
        const data = await apiResponse.json() // it will return list of recipes
        return data?.recipes
    } catch (error) {
        throw new Error(e)
    }
}

export default async function Recipes(){
    const recipeList = await fetchListOfRecipes()
    return <RecipeList recipeList={recipeList}/> // passing it as a 'prop' here
}