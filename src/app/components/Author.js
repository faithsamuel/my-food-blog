import Image from 'next/image'
import React from 'react'

export default function Author() {
  return (
    <div className="flex items-center space-x-4 bg-gray-50 p-4 rounded-xl">
      <div className="relative h-16 w-16">
        <Image
          src="/tea.jpg"
          alt="Author"
          fill
          className="rounded-full object-cover"
        />
      </div>
      <div>
        <p className="font-semibold text-gray-900">Author Name</p>
        <p className="text-sm text-gray-600">Short bio about the author.Short bio about the author.Short bio about the author.Short bio about the author.Short bio about the author.</p>
      </div>
    </div>
  )
}
