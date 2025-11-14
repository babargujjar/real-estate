"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { MOCK_PROPERTIES } from "@/lib/data";

const Filters = ({ filters, setFilters }) => {
  const router = useRouter();
  const [showLocationDropdown, setShowLocationDropdown] = useState(false);
  const [filteredLocations, setFilteredLocations] = useState([]);

  // Dynamic values from MOCK_PROPERTIES
  const ALL_LOCATIONS = [...new Set(MOCK_PROPERTIES.map((p) => p.location))];
  const ALL_TYPES = [
    ...new Set(MOCK_PROPERTIES.map((p) => p.category.toLowerCase())),
  ];

  // Update filteredLocations based on typed location
  useEffect(() => {
    if (!filters.location.trim()) {
      setFilteredLocations([]);
      return;
    }
    const matched = ALL_LOCATIONS.filter((loc) =>
      loc.toLowerCase().includes(filters.location.toLowerCase())
    );
    setFilteredLocations(matched);
  }, [filters.location]);

  const handleSearchClick = () => {
    // Update URL params
    const params = new URLSearchParams();
    if (filters.listingType) params.set("listingType", filters.listingType);
    if (filters.location) params.set("location", filters.location);
    if (filters.propertyType) params.set("propertyType", filters.propertyType);

    router.push(`/?${params.toString()}`);
  };

  const activeBtnClasses = "bg-brand-primary text-brand-dark";
  const inactiveBtnClasses =
    "bg-brand-light-dark/50 text-gray-300 hover:bg-brand-light-dark";

  return (
    <div className="bg-brand-light-dark/60 backdrop-blur-md p-6 rounded-2xl shadow-2xl shadow-black/30 border border-gray-700 relative">
      <div className="flex flex-col md:flex-row gap-4">
        {/* Listing Type Toggle */}
        <div className="flex bg-brand-dark p-1 rounded-full">
          {["buy", "rent"].map((type) => (
            <button
              key={type}
              onClick={() => setFilters({ ...filters, listingType: type })}
              className={`w-full md:w-auto px-6 py-2 rounded-full transition-all duration-300 text-sm font-semibold 
                ${
                  filters.listingType === type
                    ? activeBtnClasses
                    : inactiveBtnClasses
                }`}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>

        {/* Location & Property Type */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 flex-grow relative">
          {/* Location Input */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search Location..."
              value={filters.location}
              onChange={(e) =>
                setFilters({ ...filters, location: e.target.value })
              }
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
                      setFilters({ ...filters, location: loc });
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

          {/* Property Type Dropdown */}
          <select
            value={filters.propertyType}
            onChange={(e) =>
              setFilters({ ...filters, propertyType: e.target.value })
            }
            className="w-full bg-brand-dark/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-primary transition-all duration-300 cursor-pointer appearance-none relative"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%239ca3af' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
              backgroundPosition: "right 0.8rem center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "1.5em",
            }}
          >
            <option value="any">Any Property Type</option>
            {ALL_TYPES.map((type) => (
              <option key={type} value={type}>
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </option>
            ))}
          </select>

          {/* Search Button */}
          <button
            onClick={handleSearchClick}
            className="w-full bg-brand-primary text-brand-dark font-bold py-3 px-6 rounded-lg hover:bg-white hover:shadow-lg hover:shadow-brand-primary/50 transition-all duration-300 flex items-center justify-center gap-2"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filters;
