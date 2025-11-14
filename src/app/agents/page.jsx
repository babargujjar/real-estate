import AgentsPage from '@/components/AgentsPage';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata = {
  title: 'Our Team of Experts | Metro Haven',
  description: "Meet the dedicated professionals ready to guide you through Dubai's luxury real estate market.",
};

export default function Agents() {
    const breadcrumbItems = [ 
        { name: 'Home', href: '/' }, 
        { name: 'Agents' } 
    ];
    return (
        <>
            <Breadcrumbs items={breadcrumbItems} />
            <AgentsPage />
        </>
    );
}
