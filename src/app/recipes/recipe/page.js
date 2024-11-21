import Image from 'next/image'
import React from 'react'

export default function page() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      {/* Recipe Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Pancake Recipe
        </h1>
        
        {/* Recipe Image */}
        <div className="relative h-[400px] w-full mb-8">
          <Image
            src="/pancake.jpg"
            alt="Pancake Recipe"
            fill
            className="object-cover rounded-xl"
          />
        </div>
      </div>

      {/* Time Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
        <div className="bg-white p-6 rounded-xl shadow-md text-center">
          <h3 className="text-gray-600 text-sm mb-2">Prep Time</h3>
          <p className="text-2xl font-bold text-gray-900">15 mins</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md text-center">
          <h3 className="text-gray-600 text-sm mb-2">Cook Time</h3>
          <p className="text-2xl font-bold text-gray-900">30 mins</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md text-center">
          <h3 className="text-gray-600 text-sm mb-2">Total Time</h3>
          <p className="text-2xl font-bold text-gray-900">45 mins</p>
        </div>
      </div>

      {/* Nutrition Facts Card */}
      <div className="bg-white p-6 rounded-xl shadow-md mb-12">
        <h2 className="text-xl font-bold text-gray-900 mb-4">
          Nutrition Facts (per serving)
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <p className="text-3xl font-bold text-orange-500">269</p>
            <p className="text-gray-600">Calories</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-orange-500">12g</p>
            <p className="text-gray-600">Fat</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-orange-500">37g</p>
            <p className="text-gray-600">Carbs</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-orange-500">6g</p>
            <p className="text-gray-600">Protein</p>
          </div>
        </div>
        <p className="text-sm text-gray-500 mt-4">
          Nutrition information is calculated using an ingredient database and should be considered an estimate. In cases where multiple ingredient alternatives are given, the first listed is calculated for nutrition. Garnishes and optional ingredients are not included.
        </p>
      </div>

      {/* Method Section */}
      <div className="bg-white p-8 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Method</h2>
        
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Cook the potatoes:
            </h3>
            <ol className="list-decimal list-inside space-y-4 text-gray-700">
              <li>Peel the potatoes and cut up any larger ones as needed so that all of the potatoes are roughly 2 inches long.</li>
              <li>Add to a large pot and cover with an inch of water. Cover with a lid, bring to a boil over high heat, and then remove the lid and adjust the heat so that the potatoes are always boiling. Cook until you can easily pierce through the potatoes with a fork without them completely falling apart, 20 to 30 minutes.</li>
              <li>Drain the potatoes.</li>
            </ol>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Make the mashed potatoes:
            </h3>
            <ol className="list-decimal list-inside space-y-4 text-gray-700">
              <li>Rice the potatoes with a ricer or add back to the pot and mash well.</li>
              <li>Place over low heat and add the almond milk and 1 stick of nondairy butter, mashing to combine.</li>
              <li>Stir in the sour cream and nondairy cream cheese until melted and combined, then season to taste with salt and pepper.</li>
              <li>Pour into a 9x13-inch glass casserole dish.</li>
            </ol>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              How to reheat (optional):
            </h3>
            <ol className="list-decimal list-inside space-y-4 text-gray-700">
              <li>To reheat at mealtime, preheat the oven to 350°F.</li>
              <li>Cut the remaining stick of butter into slices and scatter on top of the mashed potatoes.</li>
              <li>Bake until completely warmed through and the butter is melted on top, 20 to 30 minutes. If you are taking the potatoes right from the refrigerator, this can take 45 minutes.</li>
              <li>Serve hot.</li>
            </ol>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-gray-700">
              <span className="font-semibold">Note:</span> You can either serve the potatoes right away or reheat them at mealtime. If you're serving right away, slice the remaining stick of butter and scatter on top. Let melt and serve. If you are making the mashed potatoes ahead, don't top with the butter and let them cool a bit. Cover tightly and store in the fridge for up to 3 days.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
