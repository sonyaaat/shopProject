import React from 'react';
import "@testing-library/jest-dom";

import { render, screen } from '@testing-library/react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Basket from '../src/components/Basket';
import { selectFav, selectIsLoading } from '../src/redux/main/main-selectors';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

describe('Basket component', () => {
  beforeEach(() => {
    useSelector.mockClear();
    useDispatch.mockClear();
  });

//   test('renders the loading spinner when isLoading is true', () => {
//     useSelector.mockImplementation((selector) => {
//       if (selector === selectIsLoading) return true;
//       if (selector === selectFav) return [];
//     });

//     render(
//       <BrowserRouter>
//         <Basket />
//       </BrowserRouter>
//     );

//     expect(screen.getByTestId('spinner')).toBeInTheDocument();
//   });
//   test('renders "Your list is empty" when favorites is empty', () => {
//     useSelector.mockReturnValueOnce([]);
//      render(<BrowserRouter>
//         <Basket />
//       </BrowserRouter>);
//     expect(screen.getByText('Your list is empty')).toBeInTheDocument();
//   });
 

//   test('renders the product list when favorites has items', () => {
//     const favorites = [
//       {
//         itemId: 1,
//         name: 'Product 1',
//         price: 9.99,
//         image: 'product1.jpg',
//       },
//       {
//         itemId: 2,
//         name: 'Product 2',
//         price: 19.99,
//         image: 'product2.jpg',
//       },
//     ];

//     useSelector.mockImplementation((selector) => {
//       if (selector === selectIsLoading) return false;
//       if (selector === selectFav) return favorites;
//     });

//     render(
//       <BrowserRouter>
//         <Basket />
//       </BrowserRouter>
//     );

//     expect(screen.queryByText('Your list is empty')).not.toBeInTheDocument();
//     expect(screen.getByText('Product 1')).toBeInTheDocument();
//     expect(screen.getByText('$9.99')).toBeInTheDocument();
//     expect(screen.getByText('Product 2')).toBeInTheDocument();
//     expect(screen.getByText('$19.99')).toBeInTheDocument();
//   });

  test('dispatches deleteFromBasket when a remove button is clicked', () => {
    const favorites = [
      {
        itemId: 1,
        name: 'Product 1',
        price: 9.99,
        image: 'product1.jpg',
      },
    ];

    const dispatch = jest.fn();

    useDispatch.mockReturnValue(dispatch);

    useSelector.mockImplementation((selector) => {
      if (selector === selectIsLoading) return false;
      if (selector === selectFav) return favorites;
    });

    render(
      <BrowserRouter>
        <Basket />
      </BrowserRouter>
    );

    const removeButton = screen.getByTestId('basket__remove');

    expect(removeButton).toBeInTheDocument();

    removeButton.click();

    expect(dispatch).toHaveBeenCalledTimes(2);
    // expect(dispatch).toHaveBeenCalledWith({
    //   type: 'main/deleteFromBasket',
    //   payload: { id: 1 },
    // });
  });

})