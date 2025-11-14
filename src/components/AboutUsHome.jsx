import React from 'react';
import Image from 'next/image';

const AboutUsHome = () => {
  return (
    <section className="py-16 sm:py-24 bg-brand-light-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Pioneering the Future of <br/>
              <span className="text-brand-primary">Dubai Real Estate</span>
            </h2>
            <p className="text-lg text-gray-300 mt-6 leading-relaxed">
              At Metro Haven, we merge visionary technology with unparalleled market expertise to redefine the luxury property experience. Our mission is to provide a seamless, intelligent, and personalized journey for every client, whether you're buying your dream home, selling a prized asset, or making a strategic investment. We are your gateway to the most exclusive properties in the world's most dynamic city.
            </p>
            <button className="mt-8 bg-brand-primary text-brand-dark font-bold py-3 px-8 rounded-full hover:bg-white hover:shadow-lg hover:shadow-brand-primary/50 transition-all duration-300">
              Learn More About Us
            </button>
          </div>
          <div className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            <Image 
              src="https://picsum.photos/seed/aboutus/600/500" 
              alt="Dubai skyline and modern architecture"
              width={600}
              height={500}
              className="rounded-2xl shadow-2xl shadow-brand-primary/20 w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsHome;
