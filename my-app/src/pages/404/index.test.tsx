import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import NotFoundPage from './index';

describe('index', () => {
  it('renders about component', () => {
    render (<NotFoundPage />);
    screen.debug();
    expect(screen.getByText(/Что там?/i)).toBeInTheDocument();
  });
});
