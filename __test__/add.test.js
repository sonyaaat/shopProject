import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { addItem } from "../src/redux/main/main-operations";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import Add from "../src/components/Add";

const mockStore = configureStore([]);

describe("Add component", () => {
  let store;
  beforeEach(() => {
    store = mockStore({});
  });

  it("should render without errors", () => {
    render(
      <Provider store={store}>
        <Add />
      </Provider>
    );

    expect(screen.getByText("Add new item")).toBeInTheDocument();
  });
  it("renders form inputs and submit button", async () => {
    render(
      <Provider store={store}>
        <Add />
      </Provider>
    );

    const nameInput = screen.getByLabelText("Name");
    const descriptionInput = screen.getByText("Description");
    const priceInput = screen.getByLabelText("Price");
    const quantityInput = screen.getByLabelText("Quantity");
    expect(nameInput).toBeInTheDocument();
    expect(descriptionInput).toBeInTheDocument();
    expect(priceInput).toBeInTheDocument();
    expect(quantityInput).toBeInTheDocument();
  });

  test("adds an item when the form is submitted", async () => {
    render(
      <Provider store={store}>
        <Add />
      </Provider>
    );
    const nameInput = screen.getByText("Name");
    const descriptionInput = screen.getByText("Description");
    const priceInput = screen.getByText("Price");
    const quantityInput = screen.getByText("Quantity");
    nameInput.setAttribute("value", "Test Item");

    descriptionInput.setAttribute("value", "Test description");
    priceInput.setAttribute("value", "10.00");
    quantityInput.setAttribute("value", "1");

    const form = screen.getByTestId("add-form");
    fireEvent.submit(form);

    await Promise.resolve();

    expect(store.getActions()).toEqual([]);
  });
  it("should update the state with the input value", () => {
    render(
      <Provider store={store}>
        <Add />
      </Provider>
    );
    const nameInput = screen.getByLabelText("Name");
    fireEvent.change(nameInput, { target: { value: "Test name" } });
    expect(nameInput.value).toBe("Test name");

    const descriptionInput = screen.getByLabelText("Description");
    fireEvent.change(descriptionInput, {
      target: { value: "Test description" },
    });
    expect(descriptionInput.value).toBe("Test description");

    const priceInput = screen.getByLabelText("Price");
    fireEvent.change(priceInput, { target: { value: "10" } });
    expect(priceInput.value).toBe("10");

    const quantityInput = screen.getByLabelText("Quantity");
    fireEvent.change(quantityInput, { target: { value: "5" } });
    expect(quantityInput.value).toBe("5");
  });
  it("should add the file to formData when an image is uploaded", () => {
    render(
      <Provider store={store}>
        <Add />
      </Provider>
    );
    const input = screen.getByText(/Drop files here/i);
    const file = new File(["Test Image"], "test-image.png", {
      type: "image/png",
    });
    fireEvent.change(input, { target: { files: [file] } });
    expect(input.files).toHaveLength(1);
    expect(input.files[0]).toStrictEqual(file);
  });
  it("sets the name state when the name input changes", () => {
    render(
      <Provider store={store}>
        <Add />
      </Provider>
    );
    const nameInput = screen.getByPlaceholderText("name");
    fireEvent.change(nameInput, { target: { value: "New Product" } });
    expect(nameInput.value).toBe("New Product");
  });

  it("sets the description state when the description input changes", () => {
    render(
      <Provider store={store}>
        <Add />
      </Provider>
    );
    const descriptionInput = screen.getByPlaceholderText("description");
    fireEvent.change(descriptionInput, {
      target: { value: "New Product Description" },
    });
    expect(descriptionInput.value).toBe("New Product Description");
  });

  it("sets the price state when the price input changes", () => {
    render(
      <Provider store={store}>
        <Add />
      </Provider>
    );
    const priceInput = screen.getByPlaceholderText("price");
    fireEvent.change(priceInput, { target: { value: "10.00" } });
    expect(priceInput.value).toBe("10.00");
  });

  it("sets the quantity state when the quantity input changes", () => {
    render(
      <Provider store={store}>
        <Add />
      </Provider>
    );
    const quantityInput = screen.getByPlaceholderText("quantity");
    fireEvent.change(quantityInput, { target: { value: "20" } });
    expect(quantityInput.value).toBe("20");
  });
});
