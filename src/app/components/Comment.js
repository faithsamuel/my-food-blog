import Image from 'next/image'
import React from 'react'

export default function Comment() {
  return (
    <div className="flex space-x-4 p-4 bg-white border-b border-gray-200 max-w-lg shadow-md">
      <div className="relative h-10 w-10">
        <Image
          src="/tea.jpg"
          alt="User"
          fill
          className="rounded-full object-cover"
        />
      </div>
      <div className="flex-1">
        <div className="flex justify-between items-center mb-2">
          <span className="font-semibold text-gray-900">Username</span>
          <span className="text-sm text-gray-500">2 hours ago</span>
        </div>
        <p className="text-gray-700">
          Comment text goes here. This is where the user's comment will be displayed.
        </p>
      </div>
    </div>
  )
}
