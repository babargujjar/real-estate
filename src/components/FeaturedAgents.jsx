import React from 'react';
import AgentCard from './AgentCard';
import { MOCK_AGENTS } from '@/lib/data';

const FeaturedAgents = () => {
  const featured = MOCK_AGENTS.slice(0, 4);

  return (
    <section className="py-16 sm:py-24 bg-brand-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Meet Our Elite Agents</h2>
          <p className="text-lg text-gray-400 mt-2">The driving force behind our success and your trusted property advisors.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featured.map((agent, index) => (
            <div key={agent.id} className="animate-fade-in-up opacity-0" style={{ animationDelay: `${index * 100}ms` }}>
              <AgentCard agent={agent} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedAgents;
