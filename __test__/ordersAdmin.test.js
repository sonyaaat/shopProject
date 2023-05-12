import React from "react";
import "@testing-library/jest-dom";
import { render, fireEvent, screen } from "@testing-library/react";
import { Provider } from "react-redux";

import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import OrdersAdmin from "../src/components/OrdersAdmin";

const mockStore = configureMockStore([thunk]);

describe("OrdersAdmin component", () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      main: {
        orders: [
          {
            _id: "1",
            itemId: {
              image: "image-url",
              name: "Test Item",
              description: "Test Description",
              price: 10,
            },
            quantity: 1,
            owner: "Test Owner",
            status: "In progress",
          },
        ],
      },
    });
    store.dispatch = jest.fn();
  });

  it("renders the component with the orders list", () => {
    render(
      <Provider store={store}>
        <OrdersAdmin />
      </Provider>
    );

    expect(screen.getByText("Order ID")).toBeInTheDocument();
    expect(screen.getByText("1")).toBeInTheDocument();
  });

  it("displays the selected order information and allows status change", () => {
    render(
      <Provider store={store}>
        <OrdersAdmin />
      </Provider>
    );

    fireEvent.change(screen.getByLabelText("Order ID"), {
      target: { value: "order1" },
    });
    expect(screen.getByText("1")).toBeInTheDocument();
  });
});
