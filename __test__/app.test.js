import React from "react";

import { createRoot } from "react-dom/client";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { App } from "../src/components/App";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { refreshUser } from "../src/redux/auth/auth-operations";
import { useSelector, useDispatch } from "react-redux";
import { MemoryRouter } from "react-router-dom"; // import MemoryRouter

jest.mock("../src/redux/auth/auth-selectors", () => ({
  selectIsRefreshing: jest.fn(),
}));

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

jest.mock("../src/redux/auth/auth-operations", () => ({
  refreshUser: jest.fn(),
}));

describe("App component", () => {
  const initialState = {};
  const mockStore = configureStore();
  let store;

  beforeEach(() => {
    store = mockStore(initialState);
    store.dispatch = jest.fn();
    useSelector.mockImplementation((selector) => selector(store.getState()));
    useDispatch.mockReturnValue(store.dispatch);
    refreshUser.mockReturnValue(jest.fn());
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it("should render the header", () => {
    useSelector.mockReturnValue(false);
    render(
      <Provider store={store}>
        <MemoryRouter>
          <App />
        </MemoryRouter>
      </Provider>
    );
    expect(screen.getByTestId("header")).toBeInTheDocument();
  });

  it("should dispatch refreshUser on mount", () => {
    useSelector.mockReturnValue(false);
    render(
      <Provider store={store}>
        <MemoryRouter>
          <App />
        </MemoryRouter>
      </Provider>
    );
    expect(refreshUser).toHaveBeenCalledTimes(1);
    expect(store.dispatch).toHaveBeenCalledWith(refreshUser());
  });

  it("should not render content when refreshing", () => {
    useSelector.mockReturnValue(true);
    createRoot(document.createElement("div")).render(
      <Provider store={store}>
        <MemoryRouter>
          <App />
        </MemoryRouter>
      </Provider>
    );
    expect(screen.queryByTestId("header")).not.toBeInTheDocument();
  });
});
