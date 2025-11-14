// import Hero from "@/components/Hero";
// import Filters from "@/components/Filters";
// import PropertyListings from "@/components/PropertyListings";
// import WhyChooseUs from "@/components/WhyChooseUs";
// import AboutUsHome from "@/components/AboutUsHome";
// import FeaturedAgents from "@/components/FeaturedAgents";
// import LatestBlogPosts from "@/components/LatestBlogPosts";
// import DreamHomeGenerator from "@/components/DreamHomeGenerator";
// import { MOCK_PROPERTIES } from "@/lib/data";

// function getFilteredProperties(filters) {
//   const { listingType, location, propertyType } = filters;

//   return MOCK_PROPERTIES.filter((property) => {
//     const listingTypeMatch =
//       listingType === "buy"
//         ? property.type === "sale"
//         : property.type === "rent";
//     const locationMatch =
//       !location ||
//       property.location.toLowerCase().includes(location.toLowerCase());
//     const propertyTypeMatch =
//       !propertyType ||
//       propertyType === "any" ||
//       property.category.toLowerCase() === propertyType.toLowerCase();

//     return listingTypeMatch && locationMatch && propertyTypeMatch;
//   });
// }

// export default function Home({ searchParams={} }) {
//   const filters = {
//     listingType: searchParams.listingType || "buy",
//     location: searchParams.location || "",
//     propertyType: searchParams.propertyType || "any",
//   };

//   const filteredProperties = getFilteredProperties(filters);

//   return (
//     <>
//       <Hero />
//       <PropertyListings properties={filteredProperties.slice(0, 8)} />
//       <WhyChooseUs />
//       <AboutUsHome />
//       <FeaturedAgents />
//       <LatestBlogPosts />
//       <DreamHomeGenerator />
//     </>
//   );
// }
"use client";

import { useState, useMemo } from "react";
import Hero from "@/components/Hero";
import PropertyListings from "@/components/PropertyListings";
import WhyChooseUs from "@/components/WhyChooseUs";
import AboutUsHome from "@/components/AboutUsHome";
import FeaturedAgents from "@/components/FeaturedAgents";
import LatestBlogPosts from "@/components/LatestBlogPosts";
import DreamHomeGenerator from "@/components/DreamHomeGenerator";
import { MOCK_PROPERTIES } from "@/lib/data";

export default function Home() {
  const [filters, setFilters] = useState({
    listingType: "buy",
    location: "",
    propertyType: "any",
  });

  // GENERATE DROPDOWNS FROM REAL DATA
  const locations = [...new Set(MOCK_PROPERTIES.map((p) => p.location))];
  const categories = [...new Set(MOCK_PROPERTIES.map((p) => p.category))];

  // FILTER FINAL PROPERTIES
  const filteredProperties = useMemo(() => {
    return MOCK_PROPERTIES.filter((property) => {
      const matchesListing =
        filters.listingType === "buy"
          ? property.type === "sale"
          : property.type === "rent";

      const matchesLocation =
        !filters.location ||
        property.location
          .toLowerCase()
          .includes(filters.location.toLowerCase());

      const matchesCategory =
        filters.propertyType === "any" ||
        property.category.toLowerCase() === filters.propertyType.toLowerCase();

      return matchesListing && matchesLocation && matchesCategory;
    });
  }, [filters]);

  return (
    <>
      <Hero
        filters={filters}
        setFilters={setFilters}
        locations={locations}
        categories={categories}
      />

      {/* Show Filtered Properties */}
      <PropertyListings properties={filteredProperties.slice(0, 12)} />

      <WhyChooseUs />
      <AboutUsHome />
      <FeaturedAgents />
      <LatestBlogPosts />
      <DreamHomeGenerator />
    </>
  );
}
