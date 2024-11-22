import React from 'react'
import RecipeCard from './RecipeCard'

export default function FavouriteRecipes() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mt-4 ml-4">
            My Favorite Recipes 
            </h1>
            <div className="container mx-auto px-4 py-4 grid grid-cols-1 md:grid-cols-2 gap-8">
                <RecipeCard/>
                <RecipeCard/>
                <RecipeCard/>
                <RecipeCard/>
            </div>
    </div>
  )
}
