import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import AboutUS from './index';

describe('index', () => {
  it('renders App component', () => {
    render (<AboutUS />);
    screen.debug();
    expect(screen.getByText(/Здесь должна быть страница/i)).toBeInTheDocument();
  });
});
