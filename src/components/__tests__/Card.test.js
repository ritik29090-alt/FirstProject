import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Card from '../Card';

describe('Card', () => {
  test('renders name, price, and description', () => {
    render(
      <Card
        cardid={123}
        cardimg="https://example.com/image.png"
        cardname="Test Product"
        cardprice={19.99}
        btnclass="addbtn"
        btntext="Add to Cart"
        carddesc="A great item"
        btnfunction={() => {}}
      />
    );

    expect(screen.getByText('Test Product')).toBeInTheDocument();
    expect(screen.getByText('$19.99')).toBeInTheDocument();
    expect(screen.getByText('A great item')).toBeInTheDocument();
  });

  test('calls btnfunction with card id on click', () => {
    const onClick = jest.fn();

    render(
      <Card
        cardid={42}
        cardimg="https://example.com/image.png"
        cardname="Clickable Product"
        cardprice={9.99}
        btnclass="addbtn"
        btntext="Add to Cart"
        carddesc="desc"
        btnfunction={onClick}
      />
    );

    fireEvent.click(screen.getByText('Add to Cart'));
    expect(onClick).toHaveBeenCalledWith(42);
  });
});
