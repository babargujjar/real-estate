import React from 'react';
import CheckCircleIcon from './icons/CheckCircleIcon';

const InvestmentHighlights = ({ highlights }) => {
  return (
    <div className="my-8 pt-8 border-t border-gray-700">
      <h2 className="text-2xl font-bold text-white mb-4">Investment Highlights</h2>
      <ul className="space-y-3">
        {highlights.map((highlight, index) => (
          <li key={index} className="flex items-start">
            <CheckCircleIcon className="w-6 h-6 text-brand-primary mr-3 mt-1 flex-shrink-0" />
            <span className="text-gray-300">{highlight}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InvestmentHighlights;
