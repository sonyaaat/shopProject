import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter, Route, Routes } from "react-router-dom";

import "@testing-library/jest-dom";
import Confirmed from "../src/components/Confirmed";
import React from "react";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

const mockStore = configureMockStore([thunk]);

describe("Confirmed", () => {
  let store;

  beforeEach(() => {
    const initialState = {
      main: {
        userInfo: {
          firstName: "John",
          lastName: "Doe",
          email: "johndoe@example.com",
          username: "johndoe",
        },
        itemInfo: {
          name: "Test Item",
          description: "A test item",
          price: 10,
          image: "test-image.jpg",
        },
      },
    };
    store = mockStore(initialState);
  });

  it("renders the user information and item details", () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/confirmed/1"]}>
          <Routes>
            <Route path="/confirmed/:id" element={<Confirmed />} />
          </Routes>
        </MemoryRouter>
      </Provider>
    );
    expect(screen.getByText("Username")).toBeInTheDocument();
    expect(screen.getByText("johndoe")).toBeInTheDocument();
    expect(screen.getByText("Email address")).toBeInTheDocument();
    expect(screen.getByText("johndoe@example.com")).toBeInTheDocument();
    expect(screen.getByText("First name")).toBeInTheDocument();
    expect(screen.getByText("John")).toBeInTheDocument();
    expect(screen.getByText("Last name")).toBeInTheDocument();
    expect(screen.getByText("Doe")).toBeInTheDocument();
  });
});
