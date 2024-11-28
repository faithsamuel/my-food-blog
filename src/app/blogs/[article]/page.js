import AddComment from '@/app/components/AddComment'
import Author from '@/app/components/Author'
import BlogCard from '@/app/components/BlogPostCard'
import Comment from '@/app/components/Comment'
import Image from 'next/image'
import React from 'react'

export default function page() {
  return (
    <div className="container mx-auto px-4 py-12 md:flex md:space-x-8">
      {/* Main Blog Content */}
      <main className="md:w-3/4 space-y-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Blog Post Title
        </h1>
        
        <section className="prose lg:prose-xl max-w-none text-gray-700 leading-relaxed space-y-6">
          <p>Blog post text goes here. This is where the main content of the blog post will be displayed with rich, engaging text and potentially images or other media.Blog post text goes here. This is where the main content of the blog post will be displayed with rich, engaging text and potentially images or other media.Blog post text goes here. This is where the main content of the blog post will be displayed with rich, engaging text and potentially images or other media.Blog post text goes here. This is where the main content of the blog post will be displayed with rich, engaging text and potentially images or other media.Blog post text goes here. This is where the main content of the blog post will be displayed with rich, engaging text and potentially images or other media.Blog post text goes here. This is where the main content of the blog post will be displayed with rich, engaging text and potentially images or other media.Blog post text goes here. This is where the main content of the blog post will be displayed with rich, engaging text and potentially images or other media.Blog post text goes here. This is where the main content of the blog post will be displayed with rich, engaging text and potentially images or other media.</p>
          
          {/* You can add more paragraphs, images, etc. */}
          <p>Additional paragraphs and content can be added to provide a comprehensive blog post experience.Blog post text goes here. This is where the main content of the blog post will be displayed with rich, engaging text and potentially images or other media.Blog post text goes here. This is where the main content of the blog post will be displayed with rich, engaging text and potentially images or other media.Blog post text goes here. This is where the main content of the blog post will be displayed with rich, engaging text and potentially images or other media.Blog post text goes here. This is where the main content of the blog post will be displayed with rich, engaging text and potentially images or other media.</p>
        </section>

        {/* Author */}
        <Author/>
        {/* Add a Comment */}
        <AddComment/>

        <Comment/>
        <Comment/>
        <Comment/>
      </main>

      {/* Related Posts Aside */}
      <aside className="md:w-1/4 mt-8 md:mt-0">
        <div className="border-2 border-gray-200 rounded-xl p-6 space-y-6">
          <h2 className="text-2xl font-bold text-gray-900 border-b pb-4">
            Related Blog Posts
          </h2>
          
          <div className="space-y-4">
            <BlogCard />
            <BlogCard />
          </div>
        </div>
      </aside>
    </div>
  )
}
