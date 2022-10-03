import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Main from './index';

describe('index', () => {
  it('renders App component', () => {
    render (<Main />);
    screen.debug();
    expect(screen.getByPlaceholderText(/Поиск/i)).toBeInTheDocument();
  });
});
describe('events', () => {
it("input focus", () => {
    const { getByTestId } = render(
      <input type="text" data-testid="simple-input" />
    );
    const input = getByTestId("simple-input");
    expect(input).not.toHaveFocus();
    input.focus();
    expect(input).toHaveFocus();
  });
});

localStorage.setItem("value", 'good');
localStorage.removeItem('user');
localStorage.getItem = jest.fn();
jest.spyOn(localStorage, 'getItem');
expect(localStorage.getItem('value')).toBe('good')

