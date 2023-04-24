import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import UserOrders from '../src/components/UserOrders';
import "@testing-library/jest-dom";
import configureMockStore from 'redux-mock-store';
const mockStore = configureMockStore([thunk]);

describe('UserOrders', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      main: {
        userOrders: [
          {
            _id: '1',
            status: 'In progress',
            quantity: 1,
            itemId: {
              description: 'Test Item Description',
              name: 'Test Item Name',
              image: 'test-image.jpg',
              price: 10,
            },
          },
        ],
        isLoading: false,
      },
    });
  });

  it('should render UserOrders component', () => {
    render(
      <Provider store={store}>
        <UserOrders />
      </Provider>
    );

    expect(screen.getByText('My orders')).toBeInTheDocument();
  });

  it('should display the order list', () => {
    render(
      <Provider store={store}>
        <UserOrders />
      </Provider>
    );

    expect(screen.getByText('Test Item Name')).toBeInTheDocument();
  });
});
