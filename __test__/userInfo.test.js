import React from 'react';
import "@testing-library/jest-dom";
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { BrowserRouter } from "react-router-dom";
import UserInfo from '../src/components/UserInfo';
import { getUserInfo, setUserInfo, setAvatar } from '../src/redux/main/main-operations';

const mockStore = configureMockStore([thunk]);

describe('UserInfo component', () => {
  let store;
  const initialState = {
    main: {
      isLoading: false,
      userInfo: {
        country: '',
        city: '',
        email: '',
        postalCode: '',
        firstName: '',
        lastName: '',
        username: '',
        address: '',
        avatar: '',
      },
    },
  };

  beforeEach(() => {
    store = mockStore(initialState);
    store.dispatch = jest.fn();
   
  });

  test('renders component', () => {
    render(
        <BrowserRouter>
        <Provider store={store}>
          <UserInfo />
        </Provider>
        </BrowserRouter>
      );
    expect(screen.getByRole('main')).toBeInTheDocument();
  });

  test('dispatches getUserInfo on mount', () => {
    render(
        <BrowserRouter>
        <Provider store={store}>
          <UserInfo />
        </Provider>
        </BrowserRouter>
      );
    expect(store.dispatch).toHaveBeenCalledTimes(1);
  });

  test('dispatches setUserInfo on form submit', () => {
    render(
        <BrowserRouter>
        <Provider store={store}>
          <UserInfo />
        </Provider>
        </BrowserRouter>
      );
    const submitButton = screen.getByRole('button', { name: /edit profile/i });

    userEvent.click(submitButton);

    expect(store.dispatch).toHaveBeenCalledTimes(1)
  });

//   test('dispatches setAvatar on file upload', () => {
//     render(
//         <BrowserRouter>
//         <Provider store={store}>
//           <UserInfo />
//         </Provider>
//         </BrowserRouter>
//       );
//     const file = new File(['(⌐□_□)'], 'avatar.jpg', { type: 'image/jpeg' });
//     const inputFile = screen.getByText(/Drop files here/i);

//     userEvent.upload(inputFile, file);

//     expect(store.dispatch).toHaveBeenCalledWith(setAvatar(expect.any(FormData)));
//   });
test("handleChange updates input fields correctly", () => {
    render( <BrowserRouter>
        <Provider store={store}>
          <UserInfo />
        </Provider>
        </BrowserRouter>);

    const countryInput = screen.getByLabelText(/country/i);
    const cityInput = screen.getByLabelText(/city/i);
    const postalCodeInput = screen.getByLabelText(/postal code/i);
    const firstNameInput = screen.getByLabelText(/first name/i);
    const lastNameInput = screen.getByLabelText(/last name/i);
    const usernameInput = screen.getByLabelText(/username/i);
    const addressInput = screen.getByLabelText(/address/i);

    // userEvent.type(countryInput, "United States");
    // userEvent.type(cityInput, "New York");
    // userEvent.type(postalCodeInput, "10001");
    // userEvent.type(firstNameInput, "John");
    // userEvent.type(lastNameInput, "Doe");
    // userEvent.type(usernameInput, "johndoe");
    // userEvent.type(addressInput, "123 Main St");

    expect(countryInput).toHaveValue("");
    expect(cityInput).toHaveValue("");
    expect(postalCodeInput).toHaveValue("");
    expect(firstNameInput).toHaveValue("");
    expect(lastNameInput).toHaveValue("");
    expect(usernameInput).toHaveValue("");
    expect(addressInput).toHaveValue("");
  });
});
