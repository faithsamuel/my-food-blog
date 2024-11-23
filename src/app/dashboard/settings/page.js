import FavouriteRecipes from '@/app/components/FavouriteRecipes'
import React from 'react'
import RecipeScheduler from '@/app/components/RecipeScheduler'
import DietaryPreferences from '@/app/components/DietaryPreferences'

export default function page() {
  return (
    <div className="min-h-screen ">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex gap-6">
          {/* Side Navigation */}
          <div className="w-64 shrink-0 ">
            <nav className="bg-white rounded-lg overflow-hidden shadow-md">
              
              <h1>Text</h1>           
              <h1>Text</h1>           
              <h1>Text</h1>           
              <h1>Text</h1>           
             </nav>
          </div>

          {/* Main Content */}
          <div className="flex-1 bg-white rounded-lg min-h-[800px] shadow-md">
            {/* <FavouriteRecipes/> */}

            {/* <RecipeScheduler/> */}

            <DietaryPreferences/>

            

          </div>
        </div>
      </div>
    </div>
  )
}
