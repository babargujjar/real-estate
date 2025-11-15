
// "use client";
// import React, { useState, useEffect } from "react";
// import Filters from "@/components/Filters";

// const images = [
//   "https://picsum.photos/seed/p1/600/400",
//   "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=1920&auto=format&fit=crop",
//   "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1920&auto=format&fit=crop",
//   "https://picsum.photos/seed/p4/600/400",
// ];

// const Hero = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   // Auto-slide every 3 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % images.length);
//     }, 3000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="relative h-[90vh] min-h-[650px] flex flex-col justify-between items-start text-center overflow-hidden">
//       {/* ⭐ Background Slider as REAL Background */}
//       <div className="absolute inset-0 w-full h-full overflow-hidden -z-10">
//         {images.map((img, index) => (
//           <div
//             key={index}
//             className={`absolute inset-0 w-full h-full bg-cover bg-center transition-all duration-[1500ms] ease-in-out ${
//               index === currentIndex ? "opacity-100" : "opacity-0"
//             }`}
//             style={{ backgroundImage: `url('${img}')` }}
//           ></div>
//         ))}
//         <div className="absolute inset-0 bg-black/70 backdrop-brightness-75"></div>
//       </div>

      // <div className="flex flex-col gap-5 md:gap-10">
      //   {/* ⭐ TOP (Heading + Description) */}
      //   <div className="md:mt-20 sm:mt-15 mt-10 px-4 animate-fade-in-up">
      //     <h1 className="text-3xl text-start w-[80%] sm:w-[70%] md:w-[60%] md:mb-5 md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
      //       Discover Your Future in Dubai's Skyline
      //     </h1>

      //     {/* <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
      //       Experience unparalleled luxury and futuristic living in the heart of
      //       the world's most dynamic city.
      //     </p> */}
      //   </div>

      //   {/* ⭐ Filters – NO ABSOLUTE POSITION */}
      //   <div className="w-full max-w-5xl px-4">
      //     <Filters />
      //   </div>
      // </div>

//       {/* Gradient bottom fade */}
//       <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-brand-dark to-transparent"></div>
//     </div>
//   );
// };

// export default Hero;
"use client";
import React, { useState, useEffect } from "react";
import Filters from "@/components/Filters";

const images = [
  "https://picsum.photos/seed/p1/600/400",
  "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=1920&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1920&auto=format&fit=crop",
  "https://picsum.photos/seed/p4/600/400",
];

const Hero = ({ filters, setFilters, locations, categories }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[90vh] min-h-[650px] flex flex-col justify-between overflow-hidden">
      {/* BACKGROUND SLIDER */}
      <div className="absolute inset-0 -z-10">
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-[1500ms] ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url('${img}')` }}
          />
        ))}
        <div className="absolute inset-0 bg-black/70"></div>
      </div>
      <div className="flex flex-col items-center gap-5 md:gap-10">
        {/* HERO CONTENT */}
        <div className="md:mt-20 sm:mt-15 mt-10 px-4 animate-fade-in-up">
          <h1 className="text-3xl text-center mx-auto w-[80%] sm:w-[70%] md:w-[60%] md:mb-5 md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
            Discover Your Future in Dubai's Skyline
          </h1>
          <p className="text-lg md:text-xl text-center text-gray-300 max-w-3xl mx-auto">
             Experience unparalleled luxury and futuristic living in the heart
            of the world's most dynamic city. 
          </p>
        </div>

        {/* FILTERS INSIDE HERO */}
        <div className="w-full max-w-5xl px-4">
          <Filters
            filters={filters}
            setFilters={setFilters}
            locations={locations}
            categories={categories}
          />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-brand-dark to-transparent"></div>
    </div>
  );
};

export default Hero;
