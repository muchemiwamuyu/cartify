import React, { useEffect, useState } from 'react';
import Hood from '/hood.png';
import Sweat_pant from '/sweat.svg';
import purple_shirt from '/pple.svg';
import black from '/black.png'
import mandem from '/mandem.svg'


function Carrousel() {
  const images = [Hood, purple_shirt, black, mandem];
  const [visibleIndex, setVisibleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-[90%] h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] xl:h-[800px] flex justify-center items-center overflow-x-hidden rounded-2xl ml-[-28]">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Product ${index}`}
          className={`absolute w-full h-full object-contain transition-opacity duration-1000 ease-in-out
            ${index === visibleIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}
          `}
        />
      ))}
    </div>
  );
}

export default Carrousel;
