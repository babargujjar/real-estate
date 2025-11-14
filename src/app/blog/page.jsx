import BlogPage from '@/components/BlogPage';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata = {
  title: 'The Metro Haven Blog',
  description: 'Your source for market insights, lifestyle guides, and the latest news in Dubai real estate.',
};


export default function Blog() {
    const breadcrumbItems = [ 
        { name: 'Home', href: '/' }, 
        { name: 'Blog' } 
    ];
    return (
        <>
            <Breadcrumbs items={breadcrumbItems} />
            <BlogPage />
        </>
    );
}
