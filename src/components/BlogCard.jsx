import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { slugify } from '@/lib/utils';

const BlogCard = ({ post }) => {
  const postSlug = slugify(post.title);
  return (
    <Link 
      href={`/blog/${postSlug}`}
      className="bg-brand-light-dark/70 rounded-2xl overflow-hidden shadow-lg border border-gray-700 group hover:border-brand-primary transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand-primary/20 cursor-pointer flex flex-col h-full"
    >
      <div className="relative">
        <Image src={post.imageUrl} alt={post.title} width={600} height={224} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300" />
        <div className="absolute top-4 left-4 px-3 py-1 text-sm font-semibold rounded-full bg-brand-secondary text-white">
          {post.category}
        </div>
      </div>
      
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex-grow">
          <h3 className="text-xl font-bold text-white line-clamp-2">{post.title}</h3>
          <p className="text-gray-400 mt-2 text-sm line-clamp-3">{post.excerpt}</p>
        </div>
        
        <div className="mt-4 pt-4 border-t border-gray-700 flex items-center">
          <Image src={post.authorImageUrl} alt={post.author} width={40} height={40} className="w-10 h-10 rounded-full object-cover" />
          <div className="ml-3 text-sm">
            <p className="font-semibold text-white">{post.author}</p>
            <p className="text-gray-500">{post.date}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
