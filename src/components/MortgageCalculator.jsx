'use client';
import React, { useState, useMemo } from 'react';
import CalculatorIcon from './icons/CalculatorIcon';

const MortgageCalculator = ({ propertyPrice }) => {
  const [downPaymentPercent, setDownPaymentPercent] = useState(20);
  const [interestRate, setInterestRate] = useState(4.5);
  const [loanTerm, setLoanTerm] = useState(25);

  const downPaymentAmount = useMemo(() => (propertyPrice * downPaymentPercent) / 100, [propertyPrice, downPaymentPercent]);
  const loanAmount = useMemo(() => propertyPrice - downPaymentAmount, [propertyPrice, downPaymentAmount]);

  const monthlyPayment = useMemo(() => {
    if (loanAmount <= 0) return 0;
    const monthlyInterestRate = interestRate / 100 / 12;
    const numberOfPayments = loanTerm * 12;
    const numerator = monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments);
    const denominator = Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1;
    return loanAmount * (numerator / denominator);
  }, [loanAmount, interestRate, loanTerm]);

  const formatCurrency = (value) => new Intl.NumberFormat('en-AE', {
    style: 'currency',
    currency: 'AED',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);

  return (
    <div className="my-8 pt-8 border-t border-gray-700">
      <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
        <CalculatorIcon className="w-7 h-7" />
        Mortgage Calculator
      </h2>
      <div className="bg-brand-light-dark/70 rounded-2xl p-6 border border-gray-700">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Inputs */}
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-400">Down Payment ({downPaymentPercent}%)</label>
              <input 
                type="range" min="10" max="80" step="1" 
                value={downPaymentPercent}
                onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                className="w-full h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer accent-brand-primary"
              />
              <div className="text-white font-semibold mt-1">{formatCurrency(downPaymentAmount)}</div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400">Interest Rate ({interestRate.toFixed(2)}%)</label>
               <input 
                type="range" min="2" max="10" step="0.05"
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="w-full h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer accent-brand-primary"
              />
            </div>
             <div>
              <label className="block text-sm font-medium text-gray-400">Loan Term ({loanTerm} Years)</label>
              <input 
                type="range" min="5" max="30" step="1"
                value={loanTerm}
                onChange={(e) => setLoanTerm(Number(e.target.value))}
                className="w-full h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer accent-brand-primary"
              />
            </div>
          </div>
          
          {/* Results */}
          <div className="bg-brand-dark/60 rounded-lg p-6 flex flex-col justify-center items-center text-center">
             <p className="text-gray-400">Estimated Monthly Payment</p>
             <p className="text-4xl font-bold text-brand-primary mt-2">{formatCurrency(monthlyPayment)}</p>
             <div className="text-xs text-gray-500 mt-4">
                This is an estimate and does not include taxes or insurance. Please consult a financial advisor.
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MortgageCalculator;
