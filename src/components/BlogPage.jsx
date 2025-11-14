import React from 'react';
import { MOCK_BLOG_POSTS } from '@/lib/data';
import BlogCard from './BlogCard';
import { NewspaperIcon } from './icons';

const BlogPage = () => {
  return (
    <div className="animate-fade-in-up">
      <div className="relative h-[60vh] min-h-[400px] flex items-center justify-center text-center">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: "url('https://picsum.photos/seed/blog-hero/1920/1080')" }}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-brightness-75"></div>
        </div>
        <div className="relative z-10 px-4">
          <NewspaperIcon className="w-16 h-16 text-brand-primary mx-auto mb-4" />
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tighter">
            The Metro Haven Blog
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Your source for market insights, lifestyle guides, and the latest news in Dubai real estate.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-brand-dark to-transparent"></div>
      </div>

      <div className="py-16 sm:py-24 bg-brand-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {MOCK_BLOG_POSTS.map((post, index) => (
              <div key={post.id} style={{ animationDelay: `${index * 100}ms` }} className="animate-fade-in-up opacity-0">
                <BlogCard post={post} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
