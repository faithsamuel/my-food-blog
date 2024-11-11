
import React from 'react';
import Link from 'next/link';

export default function Nav() {
  return (
    <nav className="bg-white shadow-lg">
  <div className="max-w-6xl mx-auto px-4">
    <div className="flex justify-between items-center h-16">
      {/* Logo */}
      <Link 
        href="/home" 
        className="text-2xl font-bold text-orange-500 hover:text-orange-600 transition-colors duration-300 flex items-center space-x-2"
      >
        <span>Food 🅱️log</span>
      </Link>

      {/* Search Bar */}
      <div className="flex-1 max-w-md mx-8">
        <div className="relative">
          <input
            type="text"
            placeholder="Search recipes..."
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
          />
          <svg
            className="w-5 h-5 text-gray-400 absolute right-3 top-2.5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="flex items-center space-x-6">
        <Link 
          href="/recipes" 
          className="text-gray-600 hover:text-orange-500 transition-colors duration-300"
        >
          Recipes
        </Link>
        <Link 
          href="/blogs" 
          className="text-gray-600 hover:text-orange-500 transition-colors duration-300"
        >
          Blog
        </Link>
        <Link 
          href="/" 
          className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors duration-300"
        >
          Login
        </Link>
      </div>
    </div>
  </div>
</nav>
  )
}
