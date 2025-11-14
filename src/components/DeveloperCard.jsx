import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { slugify } from '@/lib/utils';

const DeveloperCard = ({ developer }) => {
  const developerSlug = slugify(developer.name);
  return (
    <div className="bg-brand-light-dark/70 rounded-2xl p-8 border border-gray-700 h-full flex flex-col items-center text-center hover:border-brand-primary transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand-primary/20">
        <div className="h-20 flex items-center justify-center mb-6">
            <Image 
                src={developer.logoUrl} 
                alt={`${developer.name} logo`} 
                width={200}
                height={100}
                className="max-h-12 w-auto object-contain filter brightness-0 invert"
            />
        </div>
        <h3 className="text-xl font-bold text-white">{developer.name}</h3>
        <p className="text-gray-400 mt-3 text-sm flex-grow">{developer.description}</p>
        <Link 
          href={`/developers/${developerSlug}`}
          className="mt-6 text-sm font-semibold text-brand-primary hover:text-white transition-colors duration-300"
        >
            Learn More
        </Link>
    </div>
  );
};

export default DeveloperCard;
