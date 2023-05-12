import React from "react";

import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import AdminPage from "../src/components/AdminPage";
import {
  selectUsers,
  selectAdmins,
  selectOrders,
} from "../src/redux/main/main-selectors";
import { getUsers, getOrders } from "../src/redux/main/main-operations";

const mockStore = configureMockStore([thunk]);

describe("AdminPage component", () => {
  let store;

  beforeEach(() => {
    const initialState = {
      main: {
        users: ["user1@example.com", "user2@example.com"],
        admins: ["admin1@example.com", "admin2@example.com"],
        orders: [
          {
            itemId: { _id: "item1" },
            owner: "user1@example.com",
            quantity: 1,
            status: "in progress",
          },
          {
            itemId: { _id: "item2" },
            owner: "user2@example.com",
            quantity: 2,
            status: "completed",
          },
        ],
      },
    };
    store = mockStore(initialState);
    store.dispatch = jest.fn();
  });

  it("should fetch users and orders on mount", () => {
    render(
      <Provider store={store}>
        <AdminPage />
      </Provider>
    );
    expect(store.dispatch).toHaveBeenCalledTimes(2);
  });

  it("should render a table of users with their mail, number of orders, and orders in progress", () => {
    render(
      <Provider store={store}>
        <AdminPage />
      </Provider>
    );
    const table = screen.getByText("Regular Users");
    expect(table).toBeInTheDocument();
    const headers = screen.getAllByRole("columnheader");
    expect(headers).toHaveLength(9);
    expect(headers[0]).toHaveTextContent("Mail");
    expect(headers[1]).toHaveTextContent("Number of orders");
    expect(headers[2]).toHaveTextContent("Orders in progress");
  });

  it("should render a table of admins with their mail and role", () => {
    render(
      <Provider store={store}>
        <AdminPage />
      </Provider>
    );
    const table = screen.getByText("Regular Users");
    expect(table).toBeInTheDocument();
    const headers = screen.getAllByRole("columnheader");
    expect(headers).toHaveLength(9);
    expect(headers[0]).toHaveTextContent("Mail");
    expect(headers[1]).toHaveTextContent("Number of orders");
    const rows = screen.getAllByRole("row");
    expect(rows).toHaveLength(9);
  });
});
