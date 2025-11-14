import React from 'react';
import Image from 'next/image';
import PropertyListings from './PropertyListings';

const DeveloperDetailPage = ({ developer, properties }) => {
  return (
    <div className="animate-fade-in-up">
      <div className="relative h-[60vh] min-h-[400px] flex items-end justify-start text-left">
        <Image
            src={developer.heroImageUrl}
            alt={`${developer.name} hero image`}
            layout="fill"
            objectFit="cover"
            className="z-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/70 to-transparent"></div>

        <div className="relative z-10 p-8 md:p-16 container mx-auto">
             <div className="bg-brand-light-dark/50 backdrop-blur-md w-32 h-32 p-4 rounded-2xl mb-6 flex items-center justify-center border border-gray-700">
                <Image 
                    src={developer.logoUrl} 
                    alt={`${developer.name} logo`} 
                    width={200}
                    height={100}
                    className="max-h-24 w-auto object-contain filter brightness-0 invert"
                />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-2 tracking-tighter">
                {developer.name}
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl">
                {developer.description}
            </p>
        </div>
      </div>

      <div className="bg-brand-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="max-w-4xl mx-auto">
                 <h2 className="text-3xl font-bold text-white mb-4">About {developer.name}</h2>
                 <p className="text-gray-300 leading-relaxed whitespace-pre-wrap">
                    {developer.descriptionLong}
                 </p>
            </div>
        </div>
      </div>
      
      <div className="bg-brand-light-dark">
        <PropertyListings 
            properties={properties}
            title={`Properties by ${developer.name}`}
            subtitle={`Explore our curated collection of listings from ${developer.name}.`}
        />
      </div>
    </div>
  );
};

export default DeveloperDetailPage;
