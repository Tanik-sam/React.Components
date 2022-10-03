import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Cards from './cards';
import data from '../data.json';

describe('Cards', () => {
  it('renders App component', () => {
    render (<Cards {...data[0]}/>);
    screen.debug();
    expect(screen.getByText(/категория/i)).toBeInTheDocument();
  });
});