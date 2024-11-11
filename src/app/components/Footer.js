import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-auto">
  <div className="max-w-6xl mx-auto px-4">
    <div className="flex flex-col items-center space-y-4">
      {/* Main Footer Text */}
      <h1 className="text-lg font-medium flex items-center">
        Footer made with{" "}
        <span className="mx-2 animate-pulse text-red-500">❤️</span>
      </h1>
      
      {/* Optional Additional Content */}
      <div className="text-sm text-gray-400">
        © {new Date().getFullYear()} Food Blog. All rights reserved.
      </div>

      {/* Social Links */}
      <div className="flex space-x-6 mt-4">
        <a href="#" className="hover:text-orange-500 transition-colors duration-300">
          Twitter
        </a>
        <a href="#" className="hover:text-orange-500 transition-colors duration-300">
          Instagram
        </a>
        <a href="#" className="hover:text-orange-500 transition-colors duration-300">
          Facebook
        </a>
      </div>
    </div>
  </div>
</footer>
  )
}
