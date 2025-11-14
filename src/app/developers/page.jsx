import DeveloperPage from '@/components/DeveloperPage';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata = {
  title: 'Visionary Developers | Metro Haven',
  description: "Meet the masterminds behind Dubai's iconic skyline and luxurious communities.",
};

export default function Developers() {
    const breadcrumbItems = [ 
        { name: 'Home', href: '/' }, 
        { name: 'Developers' } 
    ];
    return (
        <>
            <Breadcrumbs items={breadcrumbItems} />
            <DeveloperPage />
        </>
    );
}
