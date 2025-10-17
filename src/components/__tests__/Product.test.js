import React from 'react';
import { render, screen } from '@testing-library/react';
import Product from '../Product';

describe('Product', () => {
  test('renders heading and a card per product', () => {
    const res = [
      { id: 1, image: 'img1', title: 'Item 1', price: 10, description: 'D1' },
      { id: 2, image: 'img2', title: 'Item 2', price: 20, description: 'D2' },
    ];

    const addtocart = jest.fn();

    render(<Product res={res} addtocart={addtocart} />);

    expect(screen.getByText(/ITEMS OR PRODUCTS/i)).toBeInTheDocument();

    // Two product cards should render their titles
    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('Item 2')).toBeInTheDocument();
  });
});
