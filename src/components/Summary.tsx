import React from 'react';
import { useDispatch } from 'react-redux';
import { resetPoll } from '../redux/pollSlice';
import { submitPollData } from '../services/apiService';

interface SummaryProps {
  responses: Record<number, string>;
}

const Summary: React.FC<SummaryProps> = ({ responses }) => {
  const dispatch = useDispatch();

  const handleSubmit = async () => {
    try {
      const result = await submitPollData(responses);
      console.log('Submission successful:', result.data);
    } catch (error) {
      console.error('Submission failed:', error);
    }
    dispatch(resetPoll());
  };

  return (
    <div className="text-center">
      <h2 className="text-lg font-semibold mb-4">Summary</h2>
      <ul className="space-y-2">
        {Object.entries(responses).map(([stepIndex, response]) => (
          <li key={stepIndex} className="text-gray-700">
            Step {+stepIndex + 1}: {response}
          </li>
        ))}
      </ul>
      <button
        className="mt-8 px-6 py-2 bg-blue-500 text-white rounded"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
};

export default Summary;
