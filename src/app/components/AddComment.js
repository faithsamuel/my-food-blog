import React from 'react'

export default function AddComment() {
  return (
    <form className="bg-gray-100 p-6 rounded-xl space-y-4 max-w-lg">
      <input
        type="text"
        placeholder="Write your comment..."
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
      />
      <button 
        type="submit"
        className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition-colors"
      >
        Add a Comment
      </button>
    </form>
  )
}
