import { render, screen } from '@testing-library/react';
import App from './App';

test('should renders title', () => {
  render(<App />);
  const linkElement = screen.getByText(/disease classifier/i);
  expect(linkElement).toBeInTheDocument();
});
