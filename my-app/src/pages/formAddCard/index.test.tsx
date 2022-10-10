import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import FormAddCard from './index';

describe('index', () => {
  it('renders App component', () => {
    render (<FormAddCard />);
    screen.debug();
    expect(screen.getByPlaceholderText(/Создание карточки товара/i)).toBeInTheDocument();
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


