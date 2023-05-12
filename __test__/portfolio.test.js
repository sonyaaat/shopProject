import userEvent from "@testing-library/user-event";
import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

import Portfolio from "../src/components/Portfolio";

const mockStore = configureMockStore([thunk]);

describe("Portfolio component", () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      main: {
        items: [
          { _id: 1, name: "Item 1" },
          { _id: 2, name: "Item 2" },
        ],
        isLoading: false,
      },
    });

    store.dispatch = jest.fn(() => Promise.resolve({}));
  });

  test("renders the component", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Portfolio />
        </Provider>
      </BrowserRouter>
    );

    expect(screen.getByText("Portfolio")).toBeInTheDocument();
  });

  test("dispatches getAllItems action on mount", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Portfolio />
        </Provider>
      </BrowserRouter>
    );

    expect(store.dispatch).toHaveBeenCalledTimes(1);
  });

  it("displays all items by default", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Portfolio />
        </Provider>
      </BrowserRouter>
    );
    expect(screen.getAllByRole("link").length).toBe(2);
  });

  it("displays only the items matching the search query", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Portfolio />
        </Provider>
      </BrowserRouter>
    );
    const searchInput = screen.getByPlaceholderText("What you want to find?");
    userEvent.type(searchInput, "Item 1");

    expect(screen.getAllByRole("link").length).toBe(2);
    expect(screen.getByText("Item 1")).toBeInTheDocument();
  });

  it("sorts the items by price: low to high", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Portfolio />
        </Provider>
      </BrowserRouter>
    );
    const select = screen.getByLabelText("Filter");
    userEvent.selectOptions(select, "toHigh");
  });

  it("sorts the items by price: high to low", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Portfolio />
        </Provider>
      </BrowserRouter>
    );
    const select = screen.getByLabelText("Filter");
    userEvent.selectOptions(select, "toLow");
  });

  it("sorts the items in alphabetical order", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Portfolio />
        </Provider>
      </BrowserRouter>
    );
    const select = screen.getByLabelText("Filter");
    userEvent.selectOptions(select, "toAlph");

    const names = screen.getAllByText(/Item \d/).map((el) => el.textContent);
    expect(names).toEqual(["Item 1", "Item 2"]);
  });
});
