import LocationsPage from '@/components/LocationsPage';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata = {
  title: 'Explore Locations | Metro Haven',
  description: 'Discover the most sought-after communities and lifestyles Dubai has to offer.',
};

export default function Locations() {
    const breadcrumbItems = [ 
        { name: 'Home', href: '/' }, 
        { name: 'Locations' } 
    ];
    return (
        <>
            <Breadcrumbs items={breadcrumbItems} />
            <LocationsPage />
        </>
    );
}
