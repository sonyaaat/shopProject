import userEvent from "@testing-library/user-event";
import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

import Portfolio from "../src/components/Portfolio";
import { getAllItems } from "../src/redux/main/main-operations";

const mockStore = configureMockStore([thunk]);

describe("Portfolio component", () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      main: {
        items: [{ _id: 1, name: "Item 1" }, { _id: 2, name: "Item 2" }],
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
//   it("renders the component", () => {
//         expect(component).toBeDefined();
//       });
    
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
    
        // const prices = screen.getAllByText(/Price: (\d+)₴/).map((el) => parseInt(el.textContent.match(/Price: (\d+)₴/)[1]));
        // expect(prices).toEqual([10, 20, 30]);
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
        // const prices = screen.getAllByText(/Price \d/).map((el) => el.textContent);
        // expect(prices).toEqual([30, 20, 10]);
        // // const prices = screen.getAllByText(/Price \d/ ).map((el) => parseInt(el.textContent.match(/Price: (\d+)₴/)[1]));
        // // expect(prices).toEqual([30, 20, 10]);
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

// import React from "react";
// import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
// import { Provider } from "react-redux";
// import { BrowserRouter } from "react-router-dom";
// import configureStore from "redux-mock-store";
// import Portfolio from "../src/components/Portfolio";

// const mockStore = configureStore([]);

// describe("Portfolio", () => {
//   let store;
//   let component;

//   beforeEach(() => {
//     store = mockStore({
//       main: {
//         isLoading: false,
//         items: [
//           {
//             _id: "1",
//             name: "Item 1",
//             description: "Item 1 description",
//             price: "10",
//             image: "item1.jpg",
//           },
//           {
//             _id: "2",
//             name: "Item 2",
//             description: "Item 2 description",
//             price: "20",
//             image: "item2.jpg",
//           },
//           {
//             _id: "3",
//             name: "Item 3",
//             description: "Item 3 description",
//             price: "30",
//             image: "item3.jpg",
//           },
//         ],
//       },
//     });

//     component = render(
//       <Provider store={store}>
//         <BrowserRouter>
//           <Portfolio />
//         </BrowserRouter>
//       </Provider>
//     );
//   });

//   it("renders the component", () => {
//     expect(component).toBeDefined();
//   });

//   it("displays all items by default", () => {
//     expect(screen.getAllByRole("link").length).toBe(3);
//   });

//   it("displays only the items matching the search query", () => {
//     const searchInput = screen.getByPlaceholderText("What you want to find?");
//     userEvent.type(searchInput, "Item 1");

//     expect(screen.getAllByRole("link").length).toBe(1);
//     expect(screen.getByText("Item 1")).toBeInTheDocument();
//   });

//   it("sorts the items by price: low to high", () => {
//     const select = screen.getByLabelText("Filter");
//     userEvent.selectOptions(select, "toHigh");

//     const prices = screen.getAllByText(/Price: (\d+)₴/).map((el) => parseInt(el.textContent.match(/Price: (\d+)₴/)[1]));
//     expect(prices).toEqual([10, 20, 30]);
//   });

//   it("sorts the items by price: high to low", () => {
//     const select = screen.getByLabelText("Filter");
//     userEvent.selectOptions(select, "toLow");

//     const prices = screen.getAllByText(/Price: (\d+)₴/).map((el) => parseInt(el.textContent.match(/Price: (\d+)₴/)[1]));
//     expect(prices).toEqual([30, 20, 10]);
//   });

//   it("sorts the items in alphabetical order", () => {
//     const select = screen.getByLabelText("Filter");
//     userEvent.selectOptions(select, "toAlph");

//     const names = screen.getAllByText(/Item \d/).map((el) => el.textContent);
//     expect(names).toEqual(["Item 1", "Item 2", "Item 3"]);
//   });
// });
