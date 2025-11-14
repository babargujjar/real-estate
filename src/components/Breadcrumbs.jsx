import React from 'react';
import Link from 'next/link';
import ChevronRightIcon from './icons/ChevronRightIcon';

const Breadcrumbs = ({ items }) => {
  if (!items || items.length === 0) {
    return null;
  }
  
  return (
    <div className="bg-brand-light-dark/40 border-b border-t border-gray-800">
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-3" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-sm truncate">
                {items.map((item, index) => (
                <li key={index} className="flex items-center">
                    {item.href ? (
                      <Link href={item.href} className="text-gray-400 hover:text-brand-primary transition-colors duration-300">
                          {item.name}
                      </Link>
                    ) : (
                      <span className="font-medium text-white truncate" aria-current={index === items.length - 1 ? 'page' : undefined}>
                          {item.name}
                      </span>
                    )}
                    {index < items.length - 1 && <ChevronRightIcon className="w-4 h-4 text-gray-500 ml-2 flex-shrink-0" />}
                </li>
                ))}
            </ol>
        </nav>
    </div>
  );
};

export default Breadcrumbs;
