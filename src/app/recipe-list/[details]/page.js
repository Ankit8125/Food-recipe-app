import RecipeDetailsItem from "@/components/recipe-details"

async function fetchRecipeDetails(currentRecipeId){
    try {
        const apiResponse = await fetch(`https://dummyjson.com/recipes/${currentRecipeId}`)
        const data = await apiResponse.json()
        return data
    } catch (error) {
        throw new Error(error)
    }
}

export default async function RecipeDetails({params}){
    const getRecipeDetails = await fetchRecipeDetails(params?.details) // since our folder name is '[details]', so we write params?.details and this will give us the dynamic value
    return <RecipeDetailsItem getRecipeDetails={getRecipeDetails}/>
}