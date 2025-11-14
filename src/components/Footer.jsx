import React from 'react';
import Link from 'next/link';
import Logo from './Logo';

const Footer = () => {

  const quickLinks = [
    { name: 'Buy', href: '/?listingType=buy' },
    { name: 'Rent', href: '/?listingType=rent' },
    { name: 'Locations', href: '/locations' },
    { name: 'Developers', href: '/developers' },
    { name: 'Agents', href: '/agents' },
    { name: 'Blog', href: '/blog' },
  ];

  return (
    <footer className="bg-brand-dark border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div>
            <Logo />
            <p className="mt-4 text-gray-400 text-sm">
              Your portal to the future of luxury real estate.
            </p>
            <a href="https://metrohavenrealestate.ae/" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-brand-primary transition-colors duration-300 mt-2 block">
                https://metrohavenrealestate.ae/
            </a>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-gray-200 tracking-wider">Explore</h4>
            <ul className="mt-4 space-y-2">
              {quickLinks.map(link => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-brand-primary transition-colors duration-300 text-sm">{link.name}</Link>
                </li>
              ))}
               <li>
                  <a href="mailto:contact@metrohavenrealestate.ae" className="text-gray-400 hover:text-brand-primary transition-colors duration-300 text-sm">Contact</a>
                </li>
            </ul>
          </div>
          
          {/* Legal */}
          <div>
            <h4 className="font-semibold text-gray-200 tracking-wider">Company</h4>
            <ul className="mt-4 space-y-2">
              {['About Us', 'Privacy Policy', 'Terms of Service'].map(link => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-brand-primary transition-colors duration-300 text-sm">{link}</a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h4 className="font-semibold text-gray-200 tracking-wider">Stay Updated</h4>
            <p className="mt-4 text-gray-400 text-sm">Join our newsletter for the latest listings and market news.</p>
            <div className="mt-4 flex">
              <input type="email" placeholder="Enter your email" className="w-full bg-brand-light-dark border border-gray-600 rounded-l-md px-3 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary"/>
              <button className="bg-brand-primary text-brand-dark font-bold px-4 rounded-r-md hover:bg-white transition-colors duration-300">
                Go
              </button>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Metro Haven. All rights reserved. A futuristic concept for modern real estate.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
