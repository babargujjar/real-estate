// 'use client';
// import React, { useState, useEffect } from 'react';
// import Link from 'next/link';
// import Logo from './Logo';

// const Header = () => {
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 10);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);
  
//   const navLinks = [
//     { name: 'Buy', href: '/?listingType=buy'},
//     { name: 'Rent', href: '/?listingType=rent'},
//     { name: 'Locations', href: '/locations' },
//     { name: 'Developers', href: '/developers' },
//     { name: 'Agents', href: '/agents' },
//     { name: 'Blog', href: '/blog' },
//   ];

//   return (
//     <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-brand-dark/80 backdrop-blur-lg shadow-lg shadow-brand-primary/10' : 'bg-transparent'}`}>
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-20">
//           <div className="flex-shrink-0">
//             <Link href="/">
//               <Logo />
//             </Link>
//           </div>
//           <nav className="hidden md:flex items-center space-x-8">
//             {navLinks.map((item) => (
//               <Link
//                 key={item.name} 
//                 href={item.href}
//                 className="text-gray-300 hover:text-brand-primary transition-colors duration-300 font-medium relative group"
//               >
//                 {item.name}
//                 <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-primary group-hover:w-full transition-all duration-300"></span>
//               </Link>
//             ))}
//           </nav>
//           <div className="md:hidden">
//             <button className="text-white">
//               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
//             </button>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;
"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "./Logo";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Buy", href: "/?listingType=buy" },
    { name: "Rent", href: "/?listingType=rent" },
    { name: "Locations", href: "/locations" },
    { name: "Developers", href: "/developers" },
    { name: "Agents", href: "/agents" },
    { name: "Blog", href: "/blog" },
  ];

  return (
    <>
      {/* NAVBAR */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-brand-dark/80 backdrop-blur-lg shadow-lg shadow-brand-primary/10"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link href="/">
              <Logo />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-brand-primary transition-colors duration-300 font-medium relative group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-primary group-hover:w-full transition-all duration-300"></span>
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {/* Animated Hamburger / Cross */}
              <div className="relative w-6 h-6">
                <span
                  className={`absolute block h-0.5 w-full bg-white transform transition-all duration-300 ${
                    menuOpen ? "rotate-45 top-3" : "top-1"
                  }`}
                ></span>
                <span
                  className={`absolute block h-0.5 w-full bg-white transition-all duration-300 ${
                    menuOpen ? "opacity-0" : "top-3"
                  }`}
                ></span>
                <span
                  className={`absolute block h-0.5 w-full bg-white transform transition-all duration-300 ${
                    menuOpen ? "-rotate-45 top-3" : "top-5"
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* BACKDROP (Blurred 50% area) */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-10 md:hidden"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}

      {/* MOBILE SLIDE MENU */}
      <div
        className={`fixed top-0 right-0 h-full w-[50%] bg-brand-dark z-10 transform transition-transform duration-300 md:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 flex flex-col space-y-6 mt-16">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="text-gray-200 text-lg font-medium hover:text-brand-primary transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Header;
