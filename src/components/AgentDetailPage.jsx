import React from 'react';
import Image from 'next/image';
import PropertyListings from './PropertyListings';
import CheckCircleIcon from './icons/CheckCircleIcon';
import { MailIcon, PhoneIcon } from './icons';

const AgentDetailPage = ({ agent, properties }) => {
  return (
    <div className="animate-fade-in-up">
      <div className="bg-brand-light-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <Image
                src={agent.imageUrl} 
                alt={agent.name} 
                width={400}
                height={400}
                className="w-full h-auto object-cover rounded-2xl shadow-2xl shadow-brand-primary/20"
              />
            </div>
            <div className="lg:col-span-2">
              <h1 className="text-4xl md:text-5xl font-bold text-white">{agent.name}</h1>
              <p className="text-xl text-brand-primary mt-1 font-semibold">{agent.title}</p>
              
              <div className="my-8 border-t border-gray-700"></div>

              <p className="text-gray-300 leading-relaxed">{agent.bio}</p>

              <div className="mt-8 flex flex-col sm:flex-row gap-6">
                <a href={`mailto:${agent.email}`} className="flex items-center gap-3 bg-brand-dark/60 p-3 rounded-lg hover:bg-brand-dark transition-colors">
                  <MailIcon className="w-6 h-6 text-brand-primary" />
                  <span className="text-white font-medium">{agent.email}</span>
                </a>
                 <a href={`tel:${agent.phone.replace(/\s/g, '')}`} className="flex items-center gap-3 bg-brand-dark/60 p-3 rounded-lg hover:bg-brand-dark transition-colors">
                  <PhoneIcon className="w-6 h-6 text-brand-primary" />
                  <span className="text-white font-medium">{agent.phone}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-brand-dark py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-white mb-6 text-center">Areas of Expertise</h2>
                <div className="flex flex-wrap justify-center gap-3">
                    {agent.specialties.map((spec, i) => (
                        <div key={i} className="flex items-center bg-brand-light-dark py-2 px-4 rounded-full">
                             <CheckCircleIcon className="w-5 h-5 text-brand-primary mr-2" />
                             <span className="text-gray-200 font-medium">{spec}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </div>

      <div className="bg-brand-light-dark">
        <PropertyListings 
            properties={properties}
            title={`Listings by ${agent.name}`}
            subtitle={`Explore properties represented by ${agent.name}.`}
        />
      </div>
    </div>
  );
};

export default AgentDetailPage;
