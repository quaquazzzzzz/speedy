import { render, screen } from '@testing-library/react';
import App from './App';

test('renders my techstarter website', () => {
  render(<App />);
  const linkElement = screen.getByText(/My Techstarter Website/i);
  expect(linkElement).toBeInTheDocument();
});

export default App;