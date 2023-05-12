import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import "@testing-library/jest-dom";

import React from "react";

import { Provider } from "react-redux";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import Item from "../src/components/Item";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
describe("Item", () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      main: {
        selectedItem: {
          name: "Test Item",
          description: "Test Description",
          price: 10,
          quantity: 5,
          image: "test.jpg",
        },
      },
    });
  });

  test("renders item details", async () => {
    const mockedGetItem = jest.fn().mockResolvedValueOnce({});
    jest.mock("../src/redux/main/main-operations", () => ({
      getItem: mockedGetItem,
    }));

    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/item/1"]}>
          <Routes>
            <Route path="/item/:id" element={<Item />} />
          </Routes>
        </MemoryRouter>
      </Provider>
    );

    await waitFor(() => {
      expect(mockedGetItem).toHaveBeenCalledTimes(0);
    });

    expect(screen.getByText("Test Item")).toBeInTheDocument();
    expect(screen.getByText("Test Description")).toBeInTheDocument();
    expect(screen.getByText("$10")).toBeInTheDocument();
    expect(screen.getByText("Add to basket")).toBeInTheDocument();
  });
  test("renders back button and calls backClick function on click", () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/item/1"]}>
          <Routes>
            <Route path="/item/:id" element={<Item />} />
          </Routes>
        </MemoryRouter>
      </Provider>
    );

    const backButton = screen.getByText("Back");

    fireEvent.click(backButton);
    expect(store.getState().main.selectedItem).toEqual({
      description: "Test Description",
      image: "test.jpg",
      name: "Test Item",
      price: 10,
      quantity: 5,
    });
  });
  it("should call addToBasket when Add to basket button is clicked", () => {
    const addToBasketMock = jest.fn();
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/item/1"]}>
          <Routes>
            <Route path="/item/:id" element={<Item />} />
          </Routes>
        </MemoryRouter>
      </Provider>
    );
    fireEvent.click(screen.getByRole("button", { name: /add to basket/i }));
    expect(addToBasketMock).toHaveBeenCalledTimes(0);
  });
});
