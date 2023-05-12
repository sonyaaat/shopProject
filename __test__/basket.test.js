import React from "react";
import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Basket from "../src/components/Basket";
import { selectFav, selectIsLoading } from "../src/redux/main/main-selectors";

jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

describe("Basket component", () => {
  beforeEach(() => {
    useSelector.mockClear();
    useDispatch.mockClear();
  });

  test("dispatches deleteFromBasket when a remove button is clicked", () => {
    const favorites = [
      {
        itemId: 1,
        name: "Product 1",
        price: 9.99,
        image: "product1.jpg",
      },
    ];

    const dispatch = jest.fn();

    useDispatch.mockReturnValue(dispatch);

    useSelector.mockImplementation((selector) => {
      if (selector === selectIsLoading) return false;
      if (selector === selectFav) return favorites;
    });

    render(
      <BrowserRouter>
        <Basket />
      </BrowserRouter>
    );

    const removeButton = screen.getByTestId("basket__remove");

    expect(removeButton).toBeInTheDocument();

    removeButton.click();

    expect(dispatch).toHaveBeenCalledTimes(2);
  });
});
