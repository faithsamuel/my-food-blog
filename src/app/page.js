
import Search from './components/Search'
import Link from 'next/link'
import RecipeCard from './components/RecipeCard'
import Hero from './components/Hero';
import Image from 'next/image';
import Newsletter from './components/Newsletter';
import BlogCard from './components/BlogPostCard';

export default function Home() {
  return (
    <div>
      <Hero/>
      
      <div className="max-w-6xl mx-auto px-4">
  {/* Search bar wrapper */}
  <div className="relative -mt-8 mb-16">
    <div className="absolute right-0 w-full max-w-md">
      <Search className="w-full shadow-lg" />
    </div>
  </div>

  {/* Categories Section */}
  <section className="py-16">
    <h1 className="text-3xl font-bold text-gray-900 mb-8">Categories</h1>
    
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {/* Category Cards */}
      <Link 
        href="/" 
        className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 text-center"
      >
        <h2 className="text-xl font-semibold text-gray-900">Breakfast</h2>
      </Link>

      <Link 
        href="/" 
        className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 text-center"
      >
        <h2 className="text-xl font-semibold text-gray-900">Lunch</h2>
      </Link>

      <Link 
        href="/" 
        className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 text-center"
      >
        <h2 className="text-xl font-semibold text-gray-900">Dessert</h2>
      </Link>

      <Link 
        href="/" 
        className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 text-center"
      >
        <h2 className="text-xl font-semibold text-gray-900">Healthy</h2>
      </Link>
    </div>
  </section>
  
  {/* Tasty & Simple Recipes */}
  <section>
    <div className="flex items-center justify-center mb-8">
      <h1 className="text-3xl font-bold text-gray-900">Tasty & Simple Recipes</h1>
  </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <RecipeCard />
      <RecipeCard />
      <RecipeCard />
      <RecipeCard />
      <RecipeCard />
      <RecipeCard />
    </div>
  </section>

  {/* Be a Chef section*/}
  <section className="container mx-auto px-4 py-12 flex flex-col md:flex-row items-center justify-between gap-8">
  <div className="flex-1 space-y-6">
    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
      Be a Chef in the comfort of your Home
    </h1>
    <Link 
      href="/recipes" 
      className="inline-block px-6 py-3 bg-orange-500 text-white font-medium rounded-lg hover:bg-orange-600 transition-colors duration-300"
    >
      See More
    </Link>
  </div>

  <div className="flex-1">
    <Image
      src="/be-a-cheff.jpg"
      alt="be a chef from the comfort of your home photo"
      height={200}
      width={600}
      className="rounded-lg object-cover"
    />
  </div>
</section>
   
{/* Newsletter section */}
  <Newsletter/>

{/* Featured Image section */}
<section className="relative my-10 w-full h-[500px] overflow-hidden">
  {/* Image Container - Full Width */}
  <div className="absolute inset-0 w-full h-full">
    <Image 
      src="/featured-img.jpg"
      alt="featured section"
      fill
      className="object-cover"
      priority
    />
  </div>
  
  {/* Text Overlay - Centered */}
  <div className="relative h-full w-full bg-black/30 flex items-center justify-center">
    <h1 className="text-4xl md:text-5xl text-white font-bold text-center px-4 max-w-3xl">
      Feel & experience the authentic Taste
    </h1>
  </div>
</section>
    
<section className="container mx-auto px-4 py-16">
      {/* Header */}
      <div className="flex justify-between items-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
          Our Blog & Articles
        </h1>
        <Link 
          href="/blog" 
          className="text-orange-500 hover:text-orange-600 font-medium transition-colors duration-300"
        >
          View All →
        </Link>
      </div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column - Large Card */}
        <div className="h-full">
          <BlogCard isLarge={true} />
        </div>

        {/* Right Column - Grid of Smaller Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
      </div>
    </section>



</div>

    </div>
  );
}
