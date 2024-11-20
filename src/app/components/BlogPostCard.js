import Image from 'next/image'
import Link from 'next/link'


export default function BlogCard({ isLarge = false }) {
  return (
    <div className={`bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 ${isLarge ? 'h-full' : ''}`}>
      <div className={`relative ${isLarge ? 'h-[400px]' : 'h-[200px]'} w-full`}>
        <Image
          src="/tea.jpg"
          alt="Blog post cover"
          fill
          className="object-cover"
        />
      </div>
      
      <div className="p-6 space-y-4">
        <h1 className={`font-bold text-gray-900 line-clamp-2 ${isLarge ? 'text-2xl' : 'text-lg'}`}>
          Title of Blog
        </h1>
        
        <p className="text-gray-600 line-clamp-3">
          Card preview text that shows a brief description of what this blog post is about. This text should be engaging and informative.
        </p>
        
        <Link 
          href="/blog/post-slug" 
          className="inline-block text-orange-500 hover:text-orange-600 font-medium transition-colors duration-300"
        >
          Read More →
        </Link>
      </div>
    </div>
  )
}