import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from '../Header';

describe('Header', () => {
  test('shows cart count when items exist', () => {
    render(
      <MemoryRouter>
        <Header cartItem={[{ id: 1 }, { id: 2 }]} />
      </MemoryRouter>
    );

    // The cart count is rendered inside a span next to the cart icon
    expect(screen.getByText('2')).toBeInTheDocument();
  });

  test('renders logo link to home and cart link', () => {
    render(
      <MemoryRouter>
        <Header cartItem={[]} />
      </MemoryRouter>
    );

    // Home link
    const homeLinks = screen.getAllByTitle(/Home Page/i);
    expect(homeLinks.length).toBeGreaterThan(0);

    // Cart link
    const cartLinks = screen.getAllByTitle(/Go to Cart/i);
    expect(cartLinks.length).toBeGreaterThan(0);
  });
});
