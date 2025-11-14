import React from 'react';
import Image from 'next/image';
import { LocationIcon, BedIcon, BathIcon, AreaIcon, HomeIcon } from './icons';
import InvestmentHighlights from './InvestmentHighlights';

const BuyPropertyDetail = ({ property }) => {
    const formattedPrice = new Intl.NumberFormat('en-AE', {
        style: 'currency',
        currency: 'AED',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(property.price);

    const galleryImages = [
        property.imageUrl,
        `https://picsum.photos/seed/${property.id}-2/800/600`,
        `https://picsum.photos/seed/${property.id}-3/800/600`,
        `https://picsum.photos/seed/${property.id}-4/800/600`,
    ];

  return (
    <div className="animate-fade-in-up">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-h-[500px]">
            <div className="col-span-2 row-span-2">
                <Image src={galleryImages[0]} alt={property.title} width={800} height={600} className="w-full h-full object-cover rounded-2xl shadow-lg"/>
            </div>
            <div className="col-span-1">
                <Image src={galleryImages[1]} alt={`${property.title} - view 2`} width={400} height={300} className="w-full h-full object-cover rounded-2xl shadow-lg"/>
            </div>
            <div className="col-span-1">
                 <Image src={galleryImages[2]} alt={`${property.title} - view 3`} width={400} height={300} className="w-full h-full object-cover rounded-2xl shadow-lg"/>
            </div>
            <div className="col-span-1">
                 <Image src={galleryImages[3]} alt={`${property.title} - view 4`} width={400} height={300} className="w-full h-full object-cover rounded-2xl shadow-lg"/>
            </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
                <div className='inline-block px-4 py-1 text-sm font-semibold rounded-full mb-4 bg-brand-secondary text-white'>
                    For Sale
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-white">{property.title}</h1>
                <div className="flex items-center text-gray-400 mt-4 text-lg">
                    <LocationIcon className="w-5 h-5 mr-2 text-brand-primary"/>
                    <span>{property.location}</span>
                </div>
                
                <div className="my-8 border-t border-gray-700"></div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-lg">
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
                    <div className="flex items-center gap-3">
                        <HomeIcon className="w-8 h-8 text-brand-primary"/>
                        <div>
                            <span className="font-bold text-white">{property.category}</span>
                            <span className="text-gray-400"> Type</span>
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

                {property.investmentHighlights && (
                    <InvestmentHighlights highlights={property.investmentHighlights} />
                )}
                
            </div>

            <div className="lg:sticky top-28 h-fit">
                 <div className="bg-brand-light-dark/70 rounded-2xl p-8 border border-gray-700 shadow-2xl shadow-black/30">
                    <p className="text-gray-400 text-lg">Price</p>
                     <p className="text-4xl font-bold text-brand-primary mt-1">
                        {formattedPrice}
                    </p>
                    <button className="mt-8 w-full bg-brand-primary text-brand-dark font-bold py-4 px-6 rounded-lg hover:bg-white hover:shadow-lg hover:shadow-brand-primary/50 transition-all duration-300 text-lg">
                        Schedule a Viewing
                    </button>
                 </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default BuyPropertyDetail;
