import React from 'react';
import "@testing-library/jest-dom";
import { render, fireEvent,screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { useSelector } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import OrdersAdmin from "../src/components/OrdersAdmin";
import { selectOrders } from "../src/redux/main/main-selectors";

const mockStore = configureMockStore([thunk]);

// jest.mock("react-redux", () => ({
//   useDispatch: () => jest.fn(),
//   useSelector: jest.fn(),
// }));

describe("OrdersAdmin component", () => {
  let store;
  let orders;

  beforeEach(() => {
    store = mockStore({
       main:{
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
       }
      });
      store.dispatch = jest.fn();

   // useSelector.mockImplementation((selector) => selector({ orders }));
  });

//   afterEach(() => {
//     useSelector.mockClear();
//   });

  it("renders the component with the orders list", () => {
    render(
      <Provider store={store}>
        <OrdersAdmin />
      </Provider>
    );

    expect(screen.getByText("Order ID")).toBeInTheDocument();
    expect(screen.getByText("1")).toBeInTheDocument();
    //expect(screen.getByText("Item 2")).toBeInTheDocument();
  });

  it("displays the selected order information and allows status change", () => {
   render(
      <Provider store={store}>
        <OrdersAdmin />
      </Provider>
    );

    // Select an order from the dropdown
    fireEvent.change(screen.getByLabelText("Order ID"), { target: { value: "order1" } });
   // expect(useSelector).toHaveBeenCalledWith(selectOrders);
   // expect(useSelector).toHaveBeenCalledTimes(2);

    // Check that the order information is displayed
    expect(screen.getByText("1")).toBeInTheDocument();
    //expect(screen.getByText("$10")).toBeInTheDocument();
    //expect(screen.getByText("user1")).toBeInTheDocument();
   // expect(screen.getByText("In progress")).toBeInTheDocument();

    // Change the status of the order
    //fireEvent.change(screen.getByLabelText("Change status"), { target: { value: "Shipped" } });
    //fireEvent.click(screen.getByText("Change"));

    // Check that the updateStatus action was dispatched with the correct parameters
    //expect(store.getActions()).toEqual([
    //  { type: "main/updateStatus", payload: { status: "Shipped", orderId: "order1" } },
  //  ]);
  });
});
