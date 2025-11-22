import { MOCK_BLOG_POSTS } from '@/lib/data';
import { slugify } from '@/lib/utils';
import BlogDetailPage from '@/components/BlogDetailPage';
import Breadcrumbs from '@/components/Breadcrumbs';
import { notFound } from 'next/navigation';

function getPost(slug) {
    return MOCK_BLOG_POSTS.find(p => slugify(p.title) === slug);
}

export async function generateStaticParams() {
  return MOCK_BLOG_POSTS.map((post) => ({
    slug: slugify(post.title),
  }));
}

export async function generateMetadata({ params }) {
   const resolvedParams = await params;
  const post = getPost(resolvedParams.slug);
  if (!post) {
    return { title: 'Post Not Found' };
  }
  return {
    title: `${post.title} | Metro Haven Blog`,
    description: post.excerpt,
  };
}

export default async function PostPage({ params }) {
   const resolvedParams = await params;
  const post = getPost(resolvedParams.slug);

  if (!post) {
    notFound();
  }

  const breadcrumbItems = [
    { name: 'Home', href: '/' },
    { name: 'Blog', href: '/blog' },
    { name: post.title }
  ];

  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <BlogDetailPage post={post} />
    </>
  );
}
