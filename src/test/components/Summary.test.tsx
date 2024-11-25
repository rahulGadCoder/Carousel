import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';
import Summary from '../../components/Summary';

describe('Summary Component', () => {
  const responsesMock = {
    0: 'Good',
    1: 'Neutral',
  };

  test('renders summary with responses', () => {
    render(
      <Provider store={store}>
        <Summary responses={responsesMock} />
      </Provider>
    );

    expect(screen.getByText('Step 1: Good')).toBeInTheDocument();
    expect(screen.getByText('Step 2: Neutral')).toBeInTheDocument();
  });

  test('submits the poll data', () => {
    const mockSubmit = jest.fn();
    jest.spyOn(console, 'log').mockImplementation(mockSubmit);

    render(
      <Provider store={store}>
        <Summary responses={responsesMock} />
      </Provider>
    );

    const submitButton = screen.getByText('Submit');
    fireEvent.click(submitButton);

    expect(mockSubmit).toHaveBeenCalled();
  });
});
