import { MOCK_PROPERTIES } from '@/lib/data';
import BuyPropertyDetail from '@/components/BuyPropertyDetail';
import RentPropertyDetail from '@/components/RentPropertyDetail';
import Breadcrumbs from '@/components/Breadcrumbs';
import { notFound } from 'next/navigation';

function getProperty(id) {
    return MOCK_PROPERTIES.find(p => p.id === parseInt(id));
}

export async function generateStaticParams() {
  return MOCK_PROPERTIES.map((property) => ({
    id: property.id.toString(),
  }));
}

export async function generateMetadata({ params }) {
   const resolvedParams = await params; // ✅ FIX
   const property = getProperty(resolvedParams.id);

   if (!property) {
     return { title: "Property Not Found" };
   }
  return {
    title: `${property.title} | Metro Haven`,
    description: `Details for ${property.title} in ${property.location}.`,
  };
}

export default async function PropertyDetailPage({ params }) {
  console.log('params', params)
const resolvedParams = await params; // ✅ FIX
   const property = getProperty(resolvedParams.id);


  if (!property) {
    notFound();
  }

  const breadcrumbItems = [ 
    { name: 'Listings', href: '/' }, 
    { name: property.title } 
  ];

  return (
    <>
        <Breadcrumbs items={breadcrumbItems} />
        {property.type === 'sale' 
            ? <BuyPropertyDetail property={property} />
            : <RentPropertyDetail property={property} />}
    </>
  );
}
