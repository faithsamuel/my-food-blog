
import Search from './components/Search'
import Link from 'next/link'
import RecipeCard from './components/RecipeCard'
import Hero from './components/Hero';

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

</div>

    </div>
  );
}
