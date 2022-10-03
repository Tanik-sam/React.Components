import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import NotFoundPage from './index';
import { MemoryRouter } from "react-router-dom"; // our router


describe('index', () => {
  it('renders App component', () => {

    render (
      <MemoryRouter>
        <NotFoundPage />
      </MemoryRouter>);
    screen.debug();
    expect(screen.getByText(/Что там/i)).toBeInTheDocument();
  });
});
