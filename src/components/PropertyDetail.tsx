
import React from 'react';
import { Property } from '../types';
import LocationIcon from './icons/LocationIcon';
import BedIcon from './icons/BedIcon';
import BathIcon from './icons/BathIcon';
import AreaIcon from './icons/AreaIcon';
import ArrowLeftIcon from './icons/ArrowLeftIcon';
import InvestmentHighlights from './InvestmentHighlights';
import RentalDetails from './RentalDetails';
import MortgageCalculator from './MortgageCalculator';

interface PropertyDetailProps {
  property: Property;
  onBack: () => void;
}

const PropertyDetail: React.FC<PropertyDetailProps> = ({ property, onBack }) => {
    const formattedPrice = new Intl.NumberFormat('en-AE', {
        style: 'currency',
        currency: 'AED',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(property.price);

    const buttonText = property.type === 'sale' ? 'Schedule a Viewing' : 'Request a Tour';

    const galleryImages = [
        property.imageUrl,
        `https://picsum.photos/seed/${property.id}-2/800/600`,
        `https://picsum.photos/seed/${property.id}-3/800/600`,
        `https://picsum.photos/seed/${property.id}-4/800/600`,
    ];

  return (
    <div className="animate-fade-in-up">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">
        
        <button 
            onClick={onBack} 
            className="flex items-center gap-2 text-gray-300 hover:text-brand-primary transition-colors duration-300 mb-8 font-semibold group"
        >
          <ArrowLeftIcon className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Back to Listings
        </button>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-h-[500px]">
            <div className="col-span-2 row-span-2">
                <img src={galleryImages[0]} alt={property.title} className="w-full h-full object-cover rounded-2xl shadow-lg"/>
            </div>
            <div className="col-span-1">
                <img src={galleryImages[1]} alt={`${property.title} - view 2`} className="w-full h-full object-cover rounded-2xl shadow-lg"/>
            </div>
            <div className="col-span-1">
                 <img src={galleryImages[2]} alt={`${property.title} - view 3`} className="w-full h-full object-cover rounded-2xl shadow-lg"/>
            </div>
            <div className="col-span-1">
                 <img src={galleryImages[3]} alt={`${property.title} - view 4`} className="w-full h-full object-cover rounded-2xl shadow-lg"/>
            </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
                <div className={`inline-block px-4 py-1 text-sm font-semibold rounded-full mb-4 ${property.type === 'sale' ? 'bg-brand-secondary text-white' : 'bg-brand-primary text-brand-dark'}`}>
                    For {property.type === 'sale' ? 'Sale' : 'Rent'}
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-white">{property.title}</h1>
                <div className="flex items-center text-gray-400 mt-4 text-lg">
                    <LocationIcon className="w-5 h-5 mr-2 text-brand-primary"/>
                    <span>{property.location}</span>
                </div>
                
                <div className="my-8 border-t border-gray-700"></div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-lg">
                    <div className="flex items-center gap-3">
                        <BedIcon className="w-8 h-8 text-brand-primary"/>
                        <div>
                            <span className="font-bold text-white">{property.beds}</span>
                            <span className="text-gray-400"> Beds</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <BathIcon className="w-8 h-8 text-brand-primary"/>
                        <div>
                            <span className="font-bold text-white">{property.baths}</span>
                            <span className="text-gray-400"> Baths</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <AreaIcon className="w-8 h-8 text-brand-primary"/>
                        <div>
                            <span className="font-bold text-white">{property.area.toLocaleString()}</span>
                            <span className="text-gray-400"> sqft</span>
                        </div>
                    </div>
                </div>

                <div className="my-8 border-t border-gray-700"></div>

                <h2 className="text-2xl font-bold text-white mb-4">Description</h2>
                <p className="text-gray-300 leading-relaxed whitespace-pre-wrap">
                    Welcome to {property.title}, a beacon of modern luxury nestled in the vibrant heart of {property.location}. This exquisite {property.category.toLowerCase()} offers an unparalleled living experience, blending sophisticated design with breathtaking views and state-of-the-art amenities.
                    {"\n\n"}
                    Spanning an impressive {property.area.toLocaleString()} sqft, this residence features {property.beds} spacious bedrooms and {property.baths} elegantly appointed bathrooms. The open-plan living area is designed for both grand entertaining and intimate relaxation, with floor-to-ceiling windows that flood the space with natural light and offer panoramic vistas of the iconic Dubai skyline.
                </p>

                {property.type === 'sale' && property.investmentHighlights && (
                    <InvestmentHighlights highlights={property.investmentHighlights} />
                )}
                
                {property.type === 'rent' && property.rentalDetails && (
                    <RentalDetails details={property.rentalDetails} />
                )}

                {property.type === 'sale' && (
                    <MortgageCalculator propertyPrice={property.price} />
                )}
            </div>

            <div className="lg:sticky top-28 h-fit">
                 <div className="bg-brand-light-dark/70 rounded-2xl p-8 border border-gray-700 shadow-2xl shadow-black/30">
                    <p className="text-gray-400 text-lg">Price</p>
                     <p className="text-4xl font-bold text-brand-primary mt-1">
                        {formattedPrice}
                        {property.type === 'rent' && <span className="text-xl font-normal text-gray-400"> / year</span>}
                    </p>
                    <button className="mt-8 w-full bg-brand-primary text-brand-dark font-bold py-4 px-6 rounded-lg hover:bg-white hover:shadow-lg hover:shadow-brand-primary/50 transition-all duration-300 text-lg">
                        {buttonText}
                    </button>
                 </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;
