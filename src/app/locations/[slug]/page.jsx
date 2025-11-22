import PropertyListings from "@/components/PropertyListings";
import { MOCK_PROPERTIES, MOCK_LOCATIONS } from "@/lib/data";

export async function generateMetadata({ params }) {
     const resolvedParams = await params;

     const decodedName = decodeURIComponent(resolvedParams.slug);

     const loc = MOCK_LOCATIONS.find(
       (l) => l.name.toLowerCase() === decodedName.toLowerCase()
     );

  return {
    title: loc
      ? `${loc.name} Properties | Metro Haven`
      : "Location | Metro Haven",
    description: loc ? `Properties for sale & rent in ${loc.name}.` : "",
  };
}

export default async function page({ params }) {
  const resolvedParams = await params;

  console.log("params:", resolvedParams);

  const decodedName = decodeURIComponent(resolvedParams.slug);

  const locationData = MOCK_LOCATIONS.find(
    (l) => l.name.toLowerCase() === decodedName.toLowerCase()
  );

  if (!locationData) {
    return (
      <div className="text-center py-20">
        <h1 className="text-4xl text-white font-bold">Location Not Found</h1>
      </div>
    );
  }

  // Filter properties for this location
  const locationProperties = MOCK_PROPERTIES.filter(
    (p) => p.location.toLowerCase() === locationData.name.toLowerCase()
  );

  const featured = locationProperties.filter((p) => p.featured === true);
  const others = locationProperties.filter((p) => !p.featured);

  return (
    <>
      {/* 🔥 Hero Section */}
      <div className="relative h-[60vh] min-h-[400px] flex items-center justify-center text-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${locationData.imageUrl})` }}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-brightness-75"></div>
        </div>

        <div className="relative z-10 px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tighter">
            {locationData.name}
          </h1>

          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Discover beautiful properties in {locationData.name}.
          </p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-brand-dark to-transparent" />
      </div>

      {/* 🔥 Featured Listings */}
      {featured.length > 0 && (
        <PropertyListings title="Featured Properties" properties={featured} />
      )}

      {/* 🔥 All Other Listings */}
      <PropertyListings title="All Properties" properties={others} />
    </>
  );
}
