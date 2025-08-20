import React, { useEffect, useState } from 'react'
import Hood from '/hood.png'
import Shirt from '/shirt.svg'

function AnimeCircle() {

    const images = [
        Hood,
        Shirt
    ]

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval); // Cleanup on unmount
    }, [images.length]);

    return (
        <div className="w-full max-w-4xl mx-auto h-screen max-h-[80vh] relative grid place-items-center px-4">
            {/* Big Circle */}
            <div className="w-80 h-80 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px] xl:w-[580px] xl:h-[580px] 
                  rounded-full bg-[rgba(217,217,217,0.4)] 
                  flex items-center justify-center 
                  border-4 border-[#00FF90]
                  relative z-10 overflow-hidden">

                {/* Images inside the circle */}
                {images.map((img, index) => (
                    <img
                        key={index}
                        src={img}
                        alt="circle-slide"
                        className={`absolute w-3/4 h-3/4 object-contain transition-opacity duration-1000 ease-in-out ${index === currentIndex ? "opacity-100" : "opacity-0"
                            }`}
                    />
                ))}
            </div>

            {/* Box container */}
            <div className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-[800px] 
                  h-48 sm:h-56 md:h-64 lg:h-72 
                  bg-[rgba(60,58,58,0.7)] 
                  rounded-lg 
                  absolute 
                  bottom-28 sm:bottom-12 md:bottom-16 lg:bottom-7
                  left-1/2 transform -translate-x-1/2
                  z-20">

                <h1 className='text-white text-3xl text-center mt-3'>Discover the Future of Shopping: Explore Thousands of Unique Products from Your Favorite Businesses, All in One Place</h1>
                <p className='text-white text-center mt-2'>Shop the latest trends and styles, all in one convenient location.</p>

                {/* cta */}
                <div className='flex justify-center mt-4 space-x-3'>
                    <button className='bg-black text-white px-6  rounded shadow transition hover:bg-[#00FF90] hover:text-black'>Get Started for free</button>
                    <button className='bg-white text-black px-6 py-4 rounded shadow transition hover:bg-[#00FF90] hover:text-black'>Contact sales</button>
                </div>
            </div>
        </div>

    );
}

export default AnimeCircle
