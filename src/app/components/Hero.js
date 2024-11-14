import React from 'react'
import Image from 'next/image'
import Link from 'next/link';


export default function Hero() {
  return (
    <section className="relative min-h-[600px]">
  <div className="absolute inset-0">
    <Image 
      src= "/hero.jpg"
      alt="Hero background"
          width={1920}  // Specify your desired width
          height={1080} // Specify your desired height
          priority      // Load image immediately as it's above the fold
          className="object-cover"  // Maintain aspect ratio and cover container
          quality={100} // Optional: Set image quality (default is 75)
          style={{
            width: '100%',
            height: '100%',
          }}
    />
    <div className="absolute inset-0 bg-black/50"></div>
  </div>
  <div className="relative z-10 flex items-center justify-center min-h-[600px] text-white">
  <Link 
      href="/recipes" 
      className="inline-block bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors duration-300 font-medium"
    >
      Explore Recipes
    </Link>
  </div>
</section>
  )
}
