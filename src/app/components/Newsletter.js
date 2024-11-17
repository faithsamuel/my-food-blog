import React from 'react'

export default function Newsletter() {
  return (
    <div className="bg-gray-100 py-16 px-4">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
          Subscribe to our Newsletter
        </h1>
        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
          <input
            type="text"
            placeholder="Enter your email..."
            className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          />
          <button className="px-6 py-3 bg-orange-500 text-white font-medium rounded-lg hover:bg-orange-600 transition-colors duration-300 whitespace-nowrap">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  )
}