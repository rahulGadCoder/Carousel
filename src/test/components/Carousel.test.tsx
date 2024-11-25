import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';
import Carousel from '../../components/Carousel';

describe('Carousel Component', () => {
  test('renders the left panel with navigation dots and title', () => {
    render(
      <Provider store={store}>
        <Carousel />
      </Provider>
    );

    const dots = screen.getAllByRole('listitem');
    expect(dots.length).toBe(3); 

    expect(screen.getByText('How was your week overall ?')).toBeInTheDocument();
  });

  test('renders options on the right panel', () => {
    render(
      <Provider store={store}>
        <Carousel />
      </Provider>
    );

    const options = screen.getAllByRole('button');
    expect(options.length).toBeGreaterThan(0);
  });

  test('navigates to the next step on option click', () => {
    render(
      <Provider store={store}>
        <Carousel />
      </Provider>
    );

    const firstOption = screen.getAllByRole('button')[0];
    fireEvent.click(firstOption);

    expect(screen.getByText('step 2 Heading')).toBeInTheDocument();
  });
});
