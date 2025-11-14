import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import BedIcon from './icons/BedIcon';
import BathIcon from './icons/BathIcon';
import AreaIcon from './icons/AreaIcon';
import LocationIcon from './icons/LocationIcon';

const PropertyCard = ({ property }) => {
  const formattedPrice = new Intl.NumberFormat('en-AE', {
    style: 'currency',
    currency: 'AED',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(property.price);

  return (
    <Link 
        href={`/properties/${property.id}`}
        className="block bg-brand-light-dark/70 rounded-2xl overflow-hidden shadow-lg border border-gray-700 group hover:border-brand-primary transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand-primary/20"
    >
      <div className="relative">
        <Image src={property.imageUrl} alt={property.title} width={600} height={224} className="w-full h-56 object-cover transition-transform duration-300" />
        <div className={`absolute top-4 left-4 px-3 py-1 text-sm font-semibold rounded-full ${property.type === 'sale' ? 'bg-brand-secondary text-white' : 'bg-brand-primary text-brand-dark'}`}>
          For {property.type === 'sale' ? 'Sale' : 'Rent'}
        </div>
         <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      </div>
      
      <div className="p-5">
        <h3 className="text-xl font-bold text-white truncate">{property.title}</h3>
        <div className="flex items-center text-gray-400 mt-1 text-sm">
            <LocationIcon className="w-4 h-4 mr-2 text-brand-primary"/>
            <span>{property.location}</span>
        </div>

        <div className="mt-4">
          <p className="text-2xl font-bold text-brand-primary">
            {formattedPrice}
            {property.type === 'rent' && <span className="text-base font-normal text-gray-400">/year</span>}
          </p>
        </div>
        
        <div className="mt-4 pt-4 border-t border-gray-700 flex justify-between text-sm text-gray-300">
          <div className="flex items-center gap-2">
            <BedIcon className="w-5 h-5 text-brand-primary"/>
            <span>{property.beds} Beds</span>
          </div>
          <div className="flex items-center gap-2">
            <BathIcon className="w-5 h-5 text-brand-primary"/>
            <span>{property.baths} Baths</span>
          </div>
          <div className="flex items-center gap-2">
            <AreaIcon className="w-5 h-5 text-brand-primary"/>
            <span>{property.area.toLocaleString()} sqft</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PropertyCard;
