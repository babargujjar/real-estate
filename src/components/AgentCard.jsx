import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { slugify } from '@/lib/utils';
import CheckCircleIcon from './icons/CheckCircleIcon';

const AgentCard = ({ agent }) => {
  const agentSlug = slugify(agent.name);
  return (
    <Link 
      href={`/agents/${agentSlug}`}
      className="bg-brand-light-dark/70 rounded-2xl overflow-hidden shadow-lg border border-gray-700 group hover:border-brand-primary transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand-primary/20 cursor-pointer h-full flex flex-col"
    >
      <div className="relative">
        <Image 
            src={agent.imageUrl} 
            alt={agent.name} 
            width={400} 
            height={256} 
            className="w-full h-64 object-cover transition-transform duration-300" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-4 text-white">
            <h3 className="text-xl font-bold">{agent.name}</h3>
            <p className="text-sm text-brand-primary font-semibold">{agent.title}</p>
        </div>
      </div>
      <div className="p-5 flex-grow flex flex-col">
        <div className="flex-grow">
            <ul className="space-y-2">
                {agent.specialties.slice(0, 2).map((spec, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-300">
                        <CheckCircleIcon className="w-4 h-4 text-brand-primary mr-2 flex-shrink-0" />
                        <span>{spec}</span>
                    </li>
                ))}
            </ul>
        </div>
        <div className="mt-4 w-full text-center bg-brand-dark hover:bg-brand-primary hover:text-brand-dark transition-colors duration-300 text-white font-semibold py-2 rounded-lg border border-brand-primary/50">
          View Profile
        </div>
      </div>
    </Link>
  );
};

export default AgentCard;
