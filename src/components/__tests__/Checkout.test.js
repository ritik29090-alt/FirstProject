import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Checkout from '../Checkout';

const makeItem = (overrides = {}) => ({
  key: overrides.key || 'k1',
  data: {
    title: 'Sample Item',
    price: 12.5,
    image: 'img',
    description: 'desc',
    ...overrides.data,
  },
});

describe('Checkout', () => {
  test('renders heading, items list, and total', () => {
    const cartItem = [
      makeItem({ key: 'a', data: { title: 'A', price: 10 } }),
      makeItem({ key: 'b', data: { title: 'B', price: 5.55 } }),
    ];

    render(
      <Checkout cartItem={cartItem} removefromcart={() => {}} />
    );

    // Heading
    expect(screen.getByText('CHECKOUT')).toBeInTheDocument();

    // Items rendered in order list
    expect(screen.getByText('A')).toBeInTheDocument();
    expect(screen.getByText('B')).toBeInTheDocument();

    // Individual prices
    expect(screen.getByText('$10')).toBeInTheDocument();
    expect(screen.getByText('$5.55')).toBeInTheDocument();

    // Total items and sum
    expect(screen.getByText('2 Items')).toBeInTheDocument();
    expect(screen.getByText('$15.55')).toBeInTheDocument();
  });

  test('clicking Remove triggers removefromcart with item key', () => {
    const removefromcart = jest.fn();
    const cartItem = [
      makeItem({ key: 'x', data: { title: 'X', price: 7 } }),
    ];

    render(
      <Checkout cartItem={cartItem} removefromcart={removefromcart} />
    );

    fireEvent.click(screen.getByText('Remove'));
    expect(removefromcart).toHaveBeenCalledWith('x');
  });
});
