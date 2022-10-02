import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Main from './index';

/*test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});*/
describe('index', () => {
  it('renders App component', () => {
    render (<Main />);
    screen.debug();
    expect(screen.getByRole('menu')).toBeInTheDocument();
    expect(screen.getByText(/cards/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Поиск/i)).toBeInTheDocument();
  });
});
describe('events', () => {
    it('search focus', () => {
describe('', () => {
    const searchChanged = jest.fn();
    const { container } = render (<input type='text' onChange={searchChanged} />);
    const search = container.firstChild; 
    fireEvent.change(container);
    expect(searchChanged).toHaveBeenCalled();
    });
  });
});
it("input focus", () => {
    const { getByTestId } = render(
      <input type="text" data-testid="simple-input" />
    );
    const input = getByTestId("simple-input");
    expect(input).not.toHaveFocus();
    input.focus();
    expect(input).toHaveFocus();
  });
