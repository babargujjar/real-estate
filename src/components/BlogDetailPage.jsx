import React from 'react';
import Image from 'next/image';
import { MOCK_BLOG_POSTS } from '@/lib/data';
import BlogCard from './BlogCard';

const BlogDetailPage = ({ post }) => {
  const relatedPosts = MOCK_BLOG_POSTS.filter(p => p.id !== post.id).slice(0, 3);

  return (
    <div className="animate-fade-in-up">
      {/* Post Header */}
      <div className="relative h-[50vh] min-h-[350px] flex items-end justify-center text-center">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
        >
        <Image src={post.imageUrl} alt={post.title} layout="fill" objectFit="cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-black/70 to-transparent"></div>
        </div>
        <div className="relative z-10 px-4 pb-12 container mx-auto">
          <p className="text-brand-primary font-semibold mb-2">{post.category}</p>
          <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            {post.title}
          </h1>
          <div className="mt-6 flex items-center justify-center">
            <Image src={post.authorImageUrl} alt={post.author} width={48} height={48} className="w-12 h-12 rounded-full object-cover" />
            <div className="ml-4 text-left">
              <p className="font-semibold text-white">{post.author}</p>
              <p className="text-gray-400 text-sm">{post.date}</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Post Content */}
      <div className="bg-brand-dark py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-invert prose-lg text-gray-300 leading-relaxed whitespace-pre-wrap">
              {post.content}
            </div>
          </div>
        </div>
      </div>

      {/* Related Posts */}
      <div className="bg-brand-light-dark py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">You Might Also Like</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedPosts.map(p => (
                    <BlogCard key={p.id} post={p} />
                ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailPage;
