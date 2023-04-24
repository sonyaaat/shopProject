import { render, fireEvent, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import configureStore from "redux-mock-store";
import "@testing-library/jest-dom";
import Confirmed from "../src/components/Confirmed";
import React from "react";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

const mockStore = configureMockStore([thunk]);

describe("Confirmed", () => {
  let store;
  let component;

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
   // expect(screen.getByText("Test Item")).toBeInTheDocument();
   //expect(screen.getByText("A test item")).toBeInTheDocument();
   // expect(screen.getByText("$10")).toBeInTheDocument();
   // expect(screen.getByAltText("Test Item")).toBeInTheDocument();
  });

//   it("submits the form and navigates to the completed page", () => {
//     render(
//       <Provider store={store}>
//         <MemoryRouter initialEntries={["/confirmed/1"]}>
//           <Routes>
//             <Route path="/confirmed/:id" element={<Confirmed />} />
//           </Routes>
//         </MemoryRouter>
//       </Provider>
//     );
//     const buyAll = jest.fn();
//     const navigate = jest.fn();
//    // jest.spyOn(React, "useNavigate").mockReturnValue(navigate);
//     jest
//       .spyOn(require("../redux/main/main-operations"), "buyAll")
//       .mockReturnValue(buyAll);

//     fireEvent.submit(screen.getByTestId("confirmed-form"));

//     expect(buyAll).toHaveBeenCalled();
//     expect(navigate).toHaveBeenCalledWith("/completed");
//   });
});
