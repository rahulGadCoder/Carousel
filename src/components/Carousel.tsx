import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { nextStep, prevStep, setResponse } from '../redux/pollSlice';
import PollStep from './PollStep';
import Summary from './Summary';

const Carousel: React.FC = () => {
  const { activeStep, steps, responses } = useSelector(
    (state: RootState) => state.poll
  );
  const dispatch = useDispatch();

  const handleOptionClick = (index: number, optionLabel: string) => {
    dispatch(setResponse({ stepIndex: index, response: optionLabel }));
    if (activeStep < steps.length - 1) {
      dispatch(nextStep());
    }
  };

  return (
    <div className="flex h-screen">
      <div className="bg-blue-600 w-1/3 flex flex-col items-center justify-center text-white">
        <div className="text-3xl font-bold mb-8">
          {steps[activeStep]?.title}
        </div>
        <div className="flex flex-col space-y-4">
          {steps.map((_, idx) => (
            <div
              key={idx}
              className={`h-4 w-4 rounded-full ${
                activeStep === idx ? 'bg-white' : 'bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>

      <div className="w-2/3 bg-white flex items-center justify-center">
        <div
          className={`transition-all ${
            activeStep < steps.length ? 'step-enter' : 'summary-enter'
          }`}
        >
          {activeStep < steps.length ? (
            <PollStep
              step={steps[activeStep]}
              index={activeStep}
              onOptionClick={handleOptionClick}
            />
          ) : (
            <Summary responses={responses} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
