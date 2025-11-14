import React from 'react';
import PropertyCard from './PropertyCard';

const PropertyListings = ({ 
  properties, 
  title = "Featured Listings",
  subtitle = "The finest selection of luxury properties in Dubai."
}) => {
  return (
    <div className="py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-white">{title}</h2>
          <p className="text-lg text-gray-400 mt-2">{subtitle}</p>
        </div>
        {properties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {properties.map((property, index) => (
              <div key={property.id} style={{ animationDelay: `${index * 100}ms` }} className="animate-fade-in-up opacity-0">
                <PropertyCard property={property} />
              </div>
            ))}
          </div>
        ) : (
           <div className="text-center py-16">
              <h3 className="text-2xl font-semibold text-white">No Properties Found</h3>
              <p className="text-gray-400 mt-2">Try adjusting your search filters to find your perfect home.</p>
           </div>
        )}
      </div>
    </div>
  );
};

export default PropertyListings;
