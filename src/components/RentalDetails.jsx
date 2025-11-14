import React from 'react';
import DocumentTextIcon from './icons/DocumentTextIcon';
import CheckCircleIcon from './icons/CheckCircleIcon';

const RentalDetails = ({ details }) => {
  const formattedDeposit = new Intl.NumberFormat('en-AE', {
    style: 'currency',
    currency: 'AED',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(details.deposit);

  return (
    <div className="my-8 pt-8 border-t border-gray-700">
      <h2 className="text-2xl font-bold text-white mb-6">Rental Details</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-brand-dark/50 p-4 rounded-lg">
          <p className="text-sm text-gray-400">Contract Period</p>
          <p className="text-lg font-semibold text-white">{details.contractPeriod}</p>
        </div>
        <div className="bg-brand-dark/50 p-4 rounded-lg">
          <p className="text-sm text-gray-400">Security Deposit</p>
          <p className="text-lg font-semibold text-white">{formattedDeposit}</p>
        </div>
        <div className="md:col-span-2 bg-brand-dark/50 p-4 rounded-lg">
          <p className="text-sm text-gray-400 mb-3">Included Amenities</p>
          <ul className="space-y-2">
            {details.amenities.map((amenity, index) => (
              <li key={index} className="flex items-center text-gray-300">
                <CheckCircleIcon className="w-5 h-5 text-brand-primary mr-2" />
                <span>{amenity}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RentalDetails;
