import React from 'react';
import { CheckCircleIcon, SparklesIcon, UserGroupIcon } from './icons';

const features = [
  {
    icon: <SparklesIcon className="w-8 h-8 text-brand-primary" />,
    title: "Futuristic Approach",
    description: "We leverage cutting-edge technology and AI to provide you with unparalleled market insights and a seamless property search experience."
  },
  {
    icon: <UserGroupIcon className="w-8 h-8 text-brand-primary" />,
    title: "Elite Agents",
    description: "Our team consists of the most experienced and dedicated luxury real estate professionals in Dubai, committed to achieving your goals."
  },
  {
    icon: <CheckCircleIcon className="w-8 h-8 text-brand-primary" />,
    title: "Exclusive Portfolio",
    description: "Gain access to a curated selection of Dubai's finest properties, including off-market listings you won't find anywhere else."
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 sm:py-24 bg-brand-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Why Metro Haven?</h2>
          <p className="text-lg text-gray-400 mt-2 max-w-2xl mx-auto">
            We are more than a real estate agency. We are your partners in navigating the future of luxury living.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-brand-light-dark p-8 rounded-2xl border border-gray-700 text-center animate-fade-in-up" style={{ animationDelay: `${index * 150}ms` }}>
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-brand-dark mx-auto mb-6 border-2 border-brand-primary/30">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
