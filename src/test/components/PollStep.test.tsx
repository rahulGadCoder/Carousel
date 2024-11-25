import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import PollStep from '../../components/PollStep';

describe('PollStep Component', () => {
  const stepMock = {
    title: 'How was your week overall?',
    options: [
      { icon: '👍', label: 'Good' },
      { icon: '🤔', label: 'Neutral' },
      { icon: '👎', label: 'Bad' },
    ],
  };

  const handleOptionClickMock = jest.fn();

  test('renders step title and options', () => {
    render(<PollStep step={stepMock} index={0} onOptionClick={handleOptionClickMock} />);

    expect(screen.getByText(stepMock.title)).toBeInTheDocument();

    const options = screen.getAllByRole('button');
    expect(options.length).toBe(stepMock.options.length);
    expect(screen.getByText('👍')).toBeInTheDocument();
    expect(screen.getByText('🤔')).toBeInTheDocument();
    expect(screen.getByText('👎')).toBeInTheDocument();
  });

  test('calls onOptionClick when an option is clicked', () => {
    render(<PollStep step={stepMock} index={0} onOptionClick={handleOptionClickMock} />);

    const firstOption = screen.getByText('👍');
    fireEvent.click(firstOption);

    expect(handleOptionClickMock).toHaveBeenCalledWith(0, 'Good');
  });
});
