import React from 'react';

const Logo = ({ className }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg
        width="40"
        height="32"
        viewBox="0 0 50 40"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        <defs>
          <linearGradient id="logoGold" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#FBBF24', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#D97706', stopOpacity: 1 }} />
          </linearGradient>
           <linearGradient id="logoPrimary" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00F6FF" />
            <stop offset="100%" stopColor="#7E57C2" />
          </linearGradient>
        </defs>
        
        {/* Buildings */}
        <path d="M 2,40 L 8,40 L 8,20 L 2,20 Z" fill="url(#logoPrimary)" />
        <path d="M 12,40 L 20,40 L 20,15 L 12,15 Z" fill="url(#logoPrimary)" />
        <path d="M 24,40 L 32,40 L 32,5 L 24,5 Z" fill="url(#logoPrimary)" />
        <path d="M 36,40 L 44,40 L 44,25 L 36,25 Z" fill="url(#logoPrimary)" />

        {/* Glow effect for center building */}
         <path d="M 24,40 L 32,40 L 32,5 L 24,5 Z" fill="url(#logoPrimary)" className="opacity-70">
            <animate attributeName="opacity" values="0.7;1;0.7" dur="2s" repeatCount="indefinite" />
         </path>

      </svg>
      <div className="flex flex-col items-start -space-y-1">
        <span className="text-2xl font-bold text-white tracking-widest">METRO HAVEN</span>
        <span className="text-xs text-gray-400 tracking-wider">REAL ESTATE</span>
      </div>
    </div>
  );
};

export default Logo;
