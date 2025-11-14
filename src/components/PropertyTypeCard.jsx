import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const PropertyTypeCard = ({ propertyType }) => {
  return (
    <div className="relative rounded-2xl overflow-hidden shadow-lg group h-96 flex flex-col justify-end p-6 border border-gray-700 hover:border-brand-primary transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand-primary/20">
      <Image src={propertyType.imageUrl} alt={propertyType.name} layout="fill" objectFit="cover" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
      <div className="relative z-10 text-white">
        <h3 className="text-2xl font-bold">{propertyType.name}</h3>
        <p className="text-gray-300 mt-2 text-sm">{propertyType.description}</p>
        <Link 
          href={`/?listingType=buy&propertyType=${encodeURIComponent(propertyType.name.toLowerCase())}`}
          className="mt-4 inline-block bg-brand-primary/80 text-brand-dark font-bold py-2 px-5 rounded-full text-sm backdrop-blur-sm group-hover:bg-brand-primary transition-all duration-300"
        >
          View Properties
        </Link>
      </div>
    </div>
  );
};

export default PropertyTypeCard;
