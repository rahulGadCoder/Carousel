import React from 'react';

interface Option {
  icon: string;
  label: string;
}

interface Step {
  title: string;
  options: Option[];
}

interface PollStepProps {
  step: Step;
  index: number;
  onOptionClick: (index: number, optionLabel: string) => void;
}

const PollStep: React.FC<PollStepProps> = ({ step, index, onOptionClick }) => {
  return (
    <div className="text-center space-y-8">
      <div className="flex justify-center space-x-8">
        {step.options.map((option, idx) => (
          <div
            key={idx}
            className="relative group cursor-pointer"
            onClick={() => onOptionClick(index, option.label)}
          >
            <div className="text-4xl group-hover:scale-125 transition-transform">
              {option.icon}
            </div>
            <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-8 text-sm text-gray-600 bg-white px-2 py-1 rounded shadow opacity-0 group-hover:opacity-100 transition-opacity">
              {option.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PollStep;
