"use client";

import React, { useState, useMemo } from "react";
import { MOCK_PROPERTIES } from "@/lib/data";
import Filters from "@/components/Filters";
import PropertyListings from "@/components/PropertyListings";

export default function page() {
  const [filters, setFilters] = useState({
    listingType: "buy",
    location: "",
    propertyType: "any",
  });

  // Only sale listings
  const saleOnly = MOCK_PROPERTIES.filter(
    (p) => p.type.toLowerCase() === "sale"
  );

  // Full filtering logic
  const filteredList = useMemo(() => {
    return saleOnly.filter((property) => {
      const matchesLocation =
        !filters.location ||
        property.location
          .toLowerCase()
          .includes(filters.location.toLowerCase());

      const matchesCategory =
        filters.propertyType === "any" ||
        property.category.toLowerCase() === filters.propertyType.toLowerCase();

      return matchesLocation && matchesCategory;
    });
  }, [filters]);

  // featured vs normal
  const filteredFeatured = filteredList.filter(
    (p) => p.featureStatus?.toLowerCase() === "featured"
  );

  const filteredNormal = filteredList.filter(
    (p) => p.featureStatus?.toLowerCase() !== "featured"
  );

  return (
    <div className="animate-fade-in-up">
      {/* ================= HERO SECTION (DeveloperPage style) ================= */}
      <div className="relative h-[75vh] min-h-[500px] flex items-center justify-center text-center">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage:
              "url('https://picsum.photos/seed/rent-hero/1920/1080')",
          }}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-brightness-75"></div>
        </div>

        <div className="relative z-10 px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tighter">
            Premium Dubai Sales
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Explore hand-picked luxury sale properties in Dubai’s most iconic
            communities.
          </p>

          {/* FILTERS BELOW TITLE */}
          <div className="mt-10 max-w-5xl mx-auto">
            <Filters
              filters={filters}
              setFilters={(val) => setFilters(val)}
            />
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-brand-dark to-transparent"></div>
      </div>

      {/* ================= LISTINGS SECTION ================= */}
      <div id="listings" />

      {/* Featured */}
      {filteredFeatured.length > 0 && (
        <PropertyListings
          properties={filteredFeatured}
          title="⭐ Featured Sale Properties"
          subtitle="Exclusive high-demand listings curated for luxury living."
        />
      )}

      {/* All Listings */}
      <PropertyListings
        properties={filteredNormal}
        title="Available Sale Properties"
        subtitle="Explore the best homes and apartments available for sale."
      />
    </div>
  );
}
