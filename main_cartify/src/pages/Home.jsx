import React from 'react'
import Header from '../components/Header'
import Carrousel from '../components/Carrousel'
import Logo from '/cart2.png'
import Polo from '/polos.png'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

function Home() {
    return (
        <div>
            <Header />

            {/* Main Content */}
            <section className="pt-24 px-3 max-w-7xl mx-auto">
                {/* Stylish Divider */}
                <div className="flex items-center my-8 mb-10">
                    <div className="flex-grow border-t border-gray-300"></div>
                    <span className="mx-4 text-gray-500 font-semibold text-xs uppercase">Shop at your convenience</span>
                    <div className="flex-grow border-t border-gray-300"></div>
                </div>

                {/* Carousel + CTA Section */}
                <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">

                    {/* Left: Carousel */}
                    <div className="w-full">
                        <Carrousel />
                    </div>

                    {/* Right: Call to Action */}
                    <div className="flex flex-col space-y-3 px-5 py-6 md:px-24 md:py-12 bg-[#434343] rounded-2xl shadow-lg shadow-black">
                        <h2 className="md:text-3xl font-bold text-white">Discover the Future of Shopping: Explore Thousands of Unique Products from Your Favorite Businesses, All in One Place</h2>
                        <p className="text-gray-400 text-lg">
                            Discover our latest collection of premium sweatpants and tees. Comfort and fashion combined.
                        </p>
                        <div className="space-x-4 py-4">
                            <button className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition">
                                Shop Now
                            </button>
                            <button className="bg-gray-200 text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition">
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>

            </section>

            {/* Listings Section */}
            <section className='w-full relative mt-2 p-2'>
                {/* Text */}
                <div className='mt-8'>
                    <h2 className='md:text-3xl font-semibold'>List your products Globally</h2>
                    <hr className='my-4' />
                </div>
                {/* brand portrait */}
                <div className='flex justify-center absolute top-4 md:top-0 right-0 md:right-10'>
                    <img src={Logo} alt="Cartify Logo" className='w-16 md:w-22' />
                </div>

                {/* main section image */}
                <div className='mt-30 md:flex justify-center items-center  md:h-full'>
                    <img src={Polo} alt="Cartify Logo" className='' />
                </div>

                {/* listing button */}
                <div className=' flex justify-center mx-auto mt-4'>
                    <button className='bg-black text-white px-4 py-4 rounded-md'>List Your Product</button>
                </div>


            </section>

            {/* Best sellers section */}
            <section className=' bg-white mt-2 py-7'>
                {/* Text */}
                <div>
                    <h2 className='md:text-3xl font-semibold'>Best Sellers</h2>
                    <hr className='my-4' />
                </div>

                {/* loading skeleton */}
                <SkeletonTheme baseColor="#e0e0e0" highlightColor="#f5f5f5">
                    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-2'>
                        {[...Array(8)].map((_, i) => (
                            <div key={i} className='flex flex-col gap-2'>
                                <Skeleton height={180} width="100%" /> {/* Image placeholder */}
                                <Skeleton height={20} width="80%" />  {/* Product name */}
                                <Skeleton height={20} width="60%" />  {/* Price */}
                            </div>
                        ))}
                    </div>
                </SkeletonTheme>
            </section>


            {/* footer */}
            <footer className="bg-white text-gray-700 py-10 border-t border-gray-200">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Brand / About */}
        <div>
            <img src={Logo} alt="Cartify Logo" className='w-16 md:w-22 mb-3' />
            <p className="text-sm text-gray-600">
            Your one-stop shop for the best <br /> products at unbeatable prices.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-black mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-black">Home</a></li>
            <li><a href="/shop" className="hover:text-black">Shop</a></li>
            <li><a href="/about" className="hover:text-black">About</a></li>
            <li><a href="/contact" className="hover:text-black">Contact</a></li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="text-lg font-semibold text-black mb-4">Customer Service</h3>
          <ul className="space-y-2">
            <li><a href="/faq" className="hover:text-black">FAQ</a></li>
            <li><a href="/returns" className="hover:text-black">Returns</a></li>
            <li><a href="/shipping" className="hover:text-black">Shipping</a></li>
            <li><a href="/privacy" className="hover:text-black">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold text-black mb-4">Newsletter</h3>
          <p className="text-sm text-gray-600 mb-3">
            Subscribe to get the latest deals and updates.
          </p>
          <div className="flex">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="w-full px-3 py-2 rounded-l border border-gray-300 text-gray-700 outline-none"
            />
            <button className="bg-[#3C3A3A] hover:bg-[#2c2c2c] px-4 py-2 rounded-r text-white">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 mt-8 pt-4 flex flex-col md:flex-row items-center justify-between px-4">
        <p className="text-sm text-gray-600 text-center">&copy; 2025 Cartify. All rights reserved.</p>
        <div className="flex space-x-4 mt-4 md:mt-0 text-gray-600">
          <a href="#" className="hover:text-black"><FaFacebookF /></a>
          <a href="#" className="hover:text-black"><FaTwitter /></a>
          <a href="#" className="hover:text-black"><FaInstagram /></a>
          <a href="#" className="hover:text-black"><FaLinkedinIn /></a>
        </div>
      </div>
    </footer>

        </div>
    )
}

export default Home