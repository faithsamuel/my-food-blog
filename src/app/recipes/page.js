import React from 'react'
import Hero from '../components/Hero'
import RecipeCard from '../components/RecipeCard'
import BlogCard from '../components/BlogPostCard'

export default function page() {
  return (
    <div>
      <Hero/>

      <section className="py-6 mx-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Recipes</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
      <RecipeCard/>
      <RecipeCard />
      <RecipeCard />
      <RecipeCard />
      <RecipeCard />
      <RecipeCard />
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
