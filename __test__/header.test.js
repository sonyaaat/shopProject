import React from "react";

import { createMemoryHistory } from "@remix-run/router";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter, Router } from "react-router-dom";
import { useSelector } from "react-redux";
import { App } from "../src/components/App";
import { Provider } from "react-redux";

import Header from "../src/components/Header";

import * as reactHooks from "react-redux";
jest.mock("react-redux");

describe("Header", () => {
  const dispatch = jest.fn();
  let store;
  const history = createMemoryHistory();
  beforeEach(() => {});

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("renders the logo", () => {
    render(
      <Router location={history.location} navigator={history}>
        <Header />
      </Router>
    );

    const logoElement = screen.getByText(/Esste/i);
    expect(logoElement).toBeInTheDocument();
  });

  test("displays navigation links", () => {
    render(
      <Router location={history.location} navigator={history}>
        <Header />
      </Router>
    );

    const aboutUsLink = screen.getByText(/About us/i);
    expect(aboutUsLink).toBeInTheDocument();

    const mainPageLink = screen.getByText(/Main Page/i);
    expect(mainPageLink).toBeInTheDocument();
  });

  test("displays Login link when not logged in", () => {
    useSelector.mockReturnValueOnce(false);
    render(
      <Router location={history.location} navigator={history}>
        <Header />
      </Router>
    );
    const loginLink = screen.getByText(/Login/i);
    expect(loginLink).toBeInTheDocument();
  });

  test("does not display Login link when logged in", () => {
    useSelector.mockReturnValueOnce(true);
    render(
      <Router location={history.location} navigator={history}>
        <Header />
      </Router>
    );

    const loginLink = screen.queryByText(/Login/i);
    expect(loginLink).not.toBeInTheDocument();
  });

  test("displays Admin link when user has admin role", () => {
    useSelector.mockReturnValue("admin");
    render(
      <Router location={history.location} navigator={history}>
        <Header />
      </Router>
    );

    const adminLink = screen.getByText(/Admin/i);
    expect(adminLink).toBeInTheDocument();
  });

  test("does not display Admin link when user does not have admin role", () => {
    useSelector.mockReturnValueOnce("user");
    render(
      <Provider store={store}>
        <MemoryRouter>
          <App />
        </MemoryRouter>
      </Provider>
    );

    const adminLink = screen.queryByText(/Admin/i);
    expect(adminLink).not.toBeInTheDocument();
  });

  test("displays User Info link when user is logged in", () => {
    useSelector.mockReturnValueOnce(true);
    render(
      <Router location={history.location} navigator={history}>
        <Header />
      </Router>
    );

    const userInfoLink = screen.getByText(/User Info/i);
    expect(userInfoLink).toBeInTheDocument();
  });

  test("displays Add Item link when user has admin role", () => {
    useSelector.mockReturnValue("admin");
    render(
      <Router location={history.location} navigator={history}>
        <Header />
      </Router>
    );

    const addItemLink = screen.getByText(/Add Item/i);
    expect(addItemLink).toBeInTheDocument();
  });
  const mockedDispatch = jest.spyOn(reactHooks, "useDispatch");

  test("dispatches logOut action when logout button is clicked", () => {
    useSelector.mockReturnValue("admin");
    mockedDispatch.mockReturnValue(dispatch);
    render(
      <Router location={history.location} navigator={history}>
        <Header />
      </Router>
    );

    const logoutButton = screen.getByTestId("logout-button");
    fireEvent.click(logoutButton);

    expect(dispatch).toHaveBeenCalledTimes(1);
  });
});
