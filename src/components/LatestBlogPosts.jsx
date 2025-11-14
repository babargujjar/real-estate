import React from 'react';
import BlogCard from './BlogCard';
import { MOCK_BLOG_POSTS } from '@/lib/data';

const LatestBlogPosts = () => {
  const latestPosts = MOCK_BLOG_POSTS.slice(0, 3);

  return (
    <section className="py-16 sm:py-24 bg-brand-light-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Market Insights & News</h2>
          <p className="text-lg text-gray-400 mt-2">Stay ahead with the latest trends and analysis from our blog.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestPosts.map((post, index) => (
            <div key={post.id} className="animate-fade-in-up opacity-0" style={{ animationDelay: `${index * 100}ms` }}>
              <BlogCard post={post} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestBlogPosts;
