import React from 'react'
import Search from '../components/Search'
import BlogCard from '../components/BlogPostCard'

export default function page() {
  return (
    <div className="mx-8">
       {/* Search bar wrapper */}
  <div className="relative -mt-8 mb-16">
    <div className="absolute right-0 w-full max-w-md">
      <Search className="w-full shadow-lg" />
    </div>
  </div>

  {/* Categories Section */}
    <section className="py-16">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Blogs</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <BlogCard/>
          <BlogCard/>
          <BlogCard/>
          <BlogCard/>
          <BlogCard/>
          <BlogCard/>
       </div>
    </section>

    <section className="py-6 mx-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">See similar blog posts that match your search</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <BlogCard/>
          <BlogCard/>
          <BlogCard/>
          <BlogCard/>
          <BlogCard/>
          <BlogCard/>
       </div>
    </section>

  </div>
  )
}
