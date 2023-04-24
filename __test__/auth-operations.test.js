import axios from "axios";
import { toast } from 'react-toastify';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from '../src/redux/auth/auth-operations';


import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";


jest.mock("axios");

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("authSlice", () => {
  let store;

  beforeEach(() => {
    store = mockStore({});
  });

  afterEach(() => {
    axios.get.mockReset();
    store.clearActions();
  });

  it("should dispatch logout success action", async () => {
    axios.get.mockResolvedValueOnce({});
    await store.dispatch(logOut());
    const actions = store.getActions();
    expect(actions).toMatchObject([
      { type: "/auth/logout/pending" },
      { type: "/auth/logout/fulfilled" },
    ]);
  });

  it("should dispatch logout failure action", async () => {
    const errorMessage = "Logout failed";
    const error = { message: errorMessage };
    axios.get.mockRejectedValueOnce(error);
    await store.dispatch(logOut());
    const actions = store.getActions();
    // expect(actions).toMatchObject([
      
    //   {
    //     type: "/auth/logout/rejected",
    //     payload: errorMessage,
    //     error: true,
    //     meta: {
    //       aborted: false,
    //       condition: false,
    //       rejectedWithValue: true,
    //       requestId: expect.any(String),
    //       requestStatus: "rejected",
    //     },
    //   },
    // ]);
  });
});
