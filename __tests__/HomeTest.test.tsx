import Home from '@/app/page';
import { render, screen } from '@testing-library/react';

describe('Home component', () => {
  it('should display Learn text', () => {
    render(<Home />);

    const myElem = screen.getByText('Learn');
    expect(myElem).toBeInTheDocument();
  });

  it('should contains text "information"', () => {
    render(<Home />);

    const myElem = screen.getByText(/information/i);
    expect(myElem).toBeInTheDocument();
  });

  it('should have a heading', () => {
    render(<Home />);

    const myElem = screen.getByRole('heading', {
      name: 'Docs',
    });
    expect(myElem).toBeInTheDocument();
  });
});
