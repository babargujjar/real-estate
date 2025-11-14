import { MOCK_DEVELOPERS, MOCK_PROPERTIES } from '@/lib/data';
import { slugify } from '@/lib/utils';
import DeveloperDetailPage from '@/components/DeveloperDetailPage';
import Breadcrumbs from '@/components/Breadcrumbs';
import { notFound } from 'next/navigation';

function getDeveloperData(slug) {
    const developer = MOCK_DEVELOPERS.find(d => slugify(d.name) === slug);
    if (!developer) return null;
    const properties = MOCK_PROPERTIES.filter(p => p.developer === developer.name);
    return { developer, properties };
}

export async function generateStaticParams() {
  return MOCK_DEVELOPERS.map((developer) => ({
    slug: slugify(developer.name),
  }));
}

export async function generateMetadata({ params }) {
  const data = getDeveloperData(params.slug);
  if (!data) {
    return { title: 'Developer Not Found' };
  }
  return {
    title: `${data.developer.name} | Metro Haven`,
    description: data.developer.description,
  };
}

export default function DeveloperDetails({ params }) {
  const data = getDeveloperData(params.slug);

  if (!data) {
    notFound();
  }

  const { developer, properties } = data;

  const breadcrumbItems = [ 
    { name: 'Home', href: '/' },
    { name: 'Developers', href: '/developers' }, 
    { name: developer.name }
  ];

  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <DeveloperDetailPage developer={developer} properties={properties} />
    </>
  );
}
