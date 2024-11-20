import Image from 'next/image'
import React from 'react'

export default function page() {
  return (
    <div className="container mx-auto px-4 py-12 md:grid md:grid-cols-2 gap-12">
      {/* Recipe Details */}
      <div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Recipe Title
        </h1>

        {/* Recipe Image */}
        <div className="relative h-[400px] w-full mb-8">
          <Image
            src="/pancake.jpg"
            alt="Recipe"
            fill
            className="object-cover rounded-xl"
          />
        </div>

        {/* Instructions */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Instructions
          </h2>
          <ol className="list-decimal list-inside space-y-3 text-gray-700">
            <li>Step 1 instruction text</li>
            <li>Step 2 instruction text</li>
            <li>Step 3 instruction text</li>
            <li>Step 4 instruction text</li>
            <li>Step 5 instruction text</li>
          </ol>
        </div>
      </div>

      {/* Ingredients */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Ingredients for 1 Serving
        </h2>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-center">
            <span className="mr-2">•</span> Ingredient 1
          </li>
          <li className="flex items-center">
            <span className="mr-2">•</span> Ingredient 2
          </li>
          <li className="flex items-center">
            <span className="mr-2">•</span> Ingredient 3
          </li>
          <li className="flex items-center">
            <span className="mr-2">•</span> Ingredient 4
          </li>
        </ul>
      </div>
    </div>
  )
}
