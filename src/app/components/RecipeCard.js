import Image from 'next/image'
import React from 'react'

export default function RecipeCard() {
  return (
    <div className="relative bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 max-w-sm">
     {/* Image Container */}
     <div className="relative h-48 w-full">
       <Image
         src="/pancake.jpg"
         alt="Pancake Recipe"
         fill
         className="object-cover"
       />
     </div>

     {/* Content Container */}
     <div className="p-5">
       {/* Like Button - Repositioned */}
       <button 
         className="absolute top-44 right-4 bg-white p-2 rounded-full shadow-md hover:scale-110 transition-transform duration-300"
       >
         <p className="h-5 w-5 stroke-gray-600">❤️</p>
       </button>

       {/* Recipe Title */}
       <h3 className="text-xl font-semibold text-gray-900 mb-2">
         Pancake Recipe
       </h3>

       {/* Author */}
       <p className="text-sm text-gray-600 mb-3">
         Written by: <span className="font-medium">Chef Name</span>
       </p>

       {/* Category */}
       <p className="text-sm text-gray-600 mb-4">
         Category: <span className="font-medium">Breakfast</span>
       </p>

       {/* Recipe Meta Info */}
       <div className="flex items-center gap-4 mb-3">
         <span className="flex items-center text-sm text-gray-600">
           🕛 15 Mins
         </span>
         <span className="flex items-center text-sm text-gray-600">
           👥 2 Servings
         </span>
       </div>

       {/* Diet Tag */}
       <div className="flex gap-2">
         <span className="inline-block bg-green-100 text-green-800 text-xs font-medium px-2.5 py-1 rounded">
           Keto
         </span>
       </div>
     </div>
   </div>
  )
}