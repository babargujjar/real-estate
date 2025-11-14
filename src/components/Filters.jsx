// 'use client';
// import React, { useState, useEffect } from 'react';
// import { useRouter, usePathname, useSearchParams } from 'next/navigation';

// const Filters = () => {
//   const router = useRouter();
//   const pathname = usePathname();
//   const searchParams = useSearchParams();

//   const [listingType, setListingType] = useState(searchParams.get('listingType') || 'buy');
//   const [location, setLocation] = useState(searchParams.get('location') || '');
//   const [propertyType, setPropertyType] = useState(searchParams.get('propertyType') || 'any');

//   useEffect(() => {
//     setListingType(searchParams.get('listingType') || 'buy');
//     setLocation(searchParams.get('location') || '');
//     setPropertyType(searchParams.get('propertyType') || 'any');
//   }, [searchParams]);

//   const handleSearchClick = () => {
//     const params = new URLSearchParams();
//     if (listingType) params.set('listingType', listingType);
//     if (location) params.set('location', location);
//     if (propertyType) params.set('propertyType', propertyType);
    
//     router.push(`${pathname}?${params.toString()}`);
//   };
  
//   const activeBtnClasses = 'bg-brand-primary text-brand-dark';
//   const inactiveBtnClasses = 'bg-brand-light-dark/50 text-gray-300 hover:bg-brand-light-dark';

//   return (
//     <div className="bg-brand-light-dark/60 backdrop-blur-md p-6 rounded-2xl shadow-2xl shadow-black/30 border border-gray-700">
//       <div className="flex flex-col md:flex-row gap-4">
//         {/* Listing Type Toggle */}
//         <div className="flex bg-brand-dark p-1 rounded-full">
//           <button 
//             onClick={() => setListingType('buy')}
//             className={`w-full md:w-auto px-6 py-2 rounded-full transition-all duration-300 text-sm font-semibold ${listingType === 'buy' ? activeBtnClasses : inactiveBtnClasses}`}
//           >
//             Buy
//           </button>
//           <button
//             onClick={() => setListingType('rent')}
//             className={`w-full md:w-auto px-6 py-2 rounded-full transition-all duration-300 text-sm font-semibold ${listingType === 'rent' ? activeBtnClasses : inactiveBtnClasses}`}
//           >
//             Rent
//           </button>
//         </div>

//         {/* Inputs */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4 flex-grow">
//           <input
//             type="text"
//             placeholder="Location (e.g., Dubai Marina)"
//             value={location}
//             onChange={(e) => setLocation(e.target.value)}
//             className="w-full bg-brand-dark/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-primary"
//           />
//           <select
//             value={propertyType}
//             onChange={(e) => setPropertyType(e.target.value)}
//             className="w-full bg-brand-dark/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-brand-primary appearance-none"
//             style={{ backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%239ca3af' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`, backgroundPosition: 'right 0.5rem center', backgroundRepeat: 'no-repeat', backgroundSize: '1.5em 1.5em' }}
//           >
//             <option value="any">Any Property Type</option>
//             <option value="apartment">Apartment</option>
//             <option value="villa">Villa</option>
//             <option value="penthouse">Penthouse</option>
//             <option value="townhouse">Townhouse</option>
//             <option value="duplex">Duplex</option>
//             <option value="loft">Loft</option>
//             <option value="mansion">Mansion</option>
//           </select>
//           <button 
//             onClick={handleSearchClick}
//             className="w-full bg-brand-primary text-brand-dark font-bold py-3 px-6 rounded-lg hover:bg-white hover:shadow-lg hover:shadow-brand-primary/50 transition-all duration-300 flex items-center justify-center gap-2"
//           >
//              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//                 <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
//             </svg>
//             Search
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Filters;
"use client";
import React, { useState, useEffect } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { MOCK_PROPERTIES } from "@/lib/data";

const Filters = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [listingType, setListingType] = useState(
    searchParams.get("listingType") || "buy"
  );
  const [location, setLocation] = useState(searchParams.get("location") || "");
  const [propertyType, setPropertyType] = useState(
    searchParams.get("propertyType") || "any"
  );

  const [showLocationDropdown, setShowLocationDropdown] = useState(false);
  const [filteredLocations, setFilteredLocations] = useState([]);

  // Extract dynamic values from MOCK_PROPERTIES
  const ALL_LOCATIONS = [...new Set(MOCK_PROPERTIES.map((p) => p.location))];
  const ALL_TYPES = [
    ...new Set(MOCK_PROPERTIES.map((p) => p.category.toLowerCase())),
  ];

  useEffect(() => {
    setListingType(searchParams.get("listingType") || "buy");
    setLocation(searchParams.get("location") || "");
    setPropertyType(searchParams.get("propertyType") || "any");
  }, [searchParams]);

  useEffect(() => {
    if (!location.trim()) {
      setFilteredLocations([]);
      return;
    }
    const matched = ALL_LOCATIONS.filter((loc) =>
      loc.toLowerCase().includes(location.toLowerCase())
    );
    setFilteredLocations(matched);
  }, [location]);

  const handleSearchClick = () => {
    const params = new URLSearchParams();
    if (listingType) params.set("listingType", listingType);
    if (location) params.set("location", location);
    if (propertyType) params.set("propertyType", propertyType);

    router.push(`${pathname}?${params.toString()}`);
  };

  const activeBtnClasses = "bg-brand-primary text-brand-dark";
  const inactiveBtnClasses =
    "bg-brand-light-dark/50 text-gray-300 hover:bg-brand-light-dark";

  return (
    <div className="bg-brand-light-dark/60 backdrop-blur-md p-6 rounded-2xl shadow-2xl shadow-black/30 border border-gray-700 relative">
      <div className="flex flex-col md:flex-row gap-4">
        {/* Toggle */}
        <div className="flex bg-brand-dark p-1 rounded-full">
          {["buy", "rent"].map((type) => (
            <button
              key={type}
              onClick={() => setListingType(type)}
              className={`w-full md:w-auto px-6 py-2 rounded-full transition-all duration-300 text-sm font-semibold 
                ${
                  listingType === type ? activeBtnClasses : inactiveBtnClasses
                }`}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 flex-grow relative">
          {/* LOCATION INPUT WITH DROPDOWN */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search Location..."
              value={location}
              onChange={(e) => {
                setLocation(e.target.value);
                setShowLocationDropdown(true);
              }}
              onFocus={() => setShowLocationDropdown(true)}
              className="w-full bg-brand-dark/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-primary"
            />

            {/* Dropdown */}
            {showLocationDropdown && filteredLocations.length > 0 && (
              <ul className="absolute w-full mt-1 bg-brand-dark border border-gray-600 rounded-lg shadow-xl z-30 max-h-48 overflow-y-auto">
                {filteredLocations.map((loc, index) => (
                  <li
                    key={index}
                    onClick={() => {
                      setLocation(loc);
                      setShowLocationDropdown(false);
                    }}
                    className="px-4 py-2 text-white hover:bg-brand-primary/20 cursor-pointer"
                  >
                    {loc}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* PROPERTY TYPE (Dynamic + Styled) */}
          <select
            value={propertyType}
            onChange={(e) => setPropertyType(e.target.value)}
            className="w-full bg-brand-dark/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 
             focus:outline-none focus:ring-2 focus:ring-brand-primary transition-all duration-300 cursor-pointer
             appearance-none relative"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%239ca3af' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
              backgroundPosition: "right 0.8rem center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "1.5em",
            }}
          >
            <option value="any">Any Property Type</option>
            {ALL_TYPES.map((type) => (
              <option
                key={type}
                value={type}
                className="px-4 py-2 text-white hover:bg-brand-primary/20 cursor-pointer"
              >
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </option>
            ))}
          </select>

          {/* SEARCH BUTTON */}
          <button
            onClick={handleSearchClick}
            className="w-full bg-brand-primary text-brand-dark font-bold py-3 px-6 rounded-lg hover:bg-white hover:shadow-lg hover:shadow-brand-primary/50 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              />
            </svg>
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filters;
