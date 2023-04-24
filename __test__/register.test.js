import React from 'react';
import thunk from 'redux-thunk';
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Register from '../src/components/Register';
import { BrowserRouter } from 'react-router-dom';

const mockStore = configureStore([thunk]);
describe('Register component', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      auth: { user: null },
    });
  });

  test('renders email and password inputs', () => {
    render(
        <BrowserRouter>
        <Provider store={store}>
          <Register />
        </Provider>
      </BrowserRouter>
    );

    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
  });

  test('calls dispatch with email and password when form is submitted', () => {
    const registerMock = jest.fn();
    const email = 'test@example.com';
    const password = 'password123';

    render(
        <BrowserRouter>
        <Provider store={store}>
          <Register />
        </Provider>
      </BrowserRouter>
    );

    fireEvent.change(screen.getByPlaceholderText('Email'), {
      target: { value: email },
    });
    fireEvent.change(screen.getByPlaceholderText('Password'), {
      target: { value: password },
    });
    fireEvent.click(screen.getByRole('button', { name: /register/i }));

    expect(registerMock).toHaveBeenCalledTimes(0)
  });

  test('clears email and password inputs after form is submitted', () => {
    render(
        <BrowserRouter>
        <Provider store={store}>
          <Register />
        </Provider>
      </BrowserRouter>
    );

    fireEvent.change(screen.getByPlaceholderText('Email'), {
      target: { value: 'test@example.com' },
    });
    fireEvent.change(screen.getByPlaceholderText('Password'), {
      target: { value: 'password123' },
    });
    fireEvent.click(screen.getByRole('button', { name: /register/i }));

    expect(screen.getByPlaceholderText('Email')).toHaveValue('');
    expect(screen.getByPlaceholderText('Password')).toHaveValue('');
  });

  test('renders login link', () => {
    render(
        <BrowserRouter>
        <Provider store={store}>
          <Register />
        </Provider>
      </BrowserRouter>
    );

    expect(screen.getByTestId("login")).toBeInTheDocument();
  });
});
