'use client';
import React, { useState } from 'react';
import SparklesIcon from './icons/SparklesIcon';

const DreamHomeGenerator = () => {
  const [userInput, setUserInput] = useState('');
  const [generatedDescription, setGeneratedDescription] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleGenerate = async () => {
    if (!userInput.trim()) {
      setError('Please describe your dream home first.');
      return;
    }
    setError('');
    setIsLoading(true);
    setGeneratedDescription('');
    try {
      const response = await fetch('/api/generate-description', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userInput }),
      });

      if (!response.ok) {
        const errData = await response.json();
        throw new Error(errData.error || 'Failed to generate description.');
      }

      const data = await response.json();
      setGeneratedDescription(data.description);
    } catch (e) {
      setError(e.message || 'Failed to generate description. Please try again.');
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-brand-light-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <SparklesIcon className="w-12 h-12 text-brand-primary mx-auto mb-4"/>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Craft Your Dream Home with AI</h2>
          <p className="text-lg text-gray-400 mt-4">
            Simply describe the key features of your ideal property, and let our futuristic AI craft a professional, captivating listing description for you.
          </p>
        </div>

        <div className="mt-12 max-w-4xl mx-auto">
          <div className="bg-brand-dark p-6 sm:p-8 rounded-2xl shadow-2xl shadow-black/30 border border-gray-700">
            <textarea
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="e.g., A 3-bedroom penthouse with a panoramic sea view, infinity pool, and smart home technology..."
              className="w-full h-32 bg-brand-light-dark border border-gray-600 rounded-lg p-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-primary transition-all duration-300 resize-none"
              disabled={isLoading}
            />
            {error && <p className="text-red-400 text-sm mt-2">{error}</p>}
            <button
              onClick={handleGenerate}
              disabled={isLoading}
              className="mt-4 w-full flex items-center justify-center gap-3 bg-brand-primary text-brand-dark font-bold py-3 px-6 rounded-lg hover:bg-white hover:shadow-lg hover:shadow-brand-primary/50 transition-all duration-300 disabled:bg-gray-500 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Generating...
                </>
              ) : (
                <>
                  <SparklesIcon className="w-5 h-5"/>
                  Generate Description
                </>
              )}
            </button>
          </div>

          {generatedDescription && (
            <div className="mt-8 bg-brand-dark p-6 sm:p-8 rounded-2xl border border-gray-700 animate-fade-in-up">
              <h4 className="text-xl font-bold text-brand-primary mb-4">Your AI-Generated Listing:</h4>
              <p className="text-gray-300 whitespace-pre-wrap leading-relaxed">{generatedDescription}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default DreamHomeGenerator;
