import Header from "./Header";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "../components/Footer";
import MainPage from "./MainPage";
import Portfolio from "./Portfolio";
import Login from "./Login";
import Register from "./Register";
import UserInfo from "./UserInfo";
import AdminPage from "./AdminPage";
import { PrivateRoute } from "./PrivateRoute";
import { RestrictedRoute } from "../components/RestrictedRoute";
import Basket from "./Basket";
import MainChat from "../WebSockets/MainChat";
import { refreshUser } from "../redux/auth/auth-operations";
import Add from "./Add";
import Item from "./Item";
import Confirmed from "./Confirmed";
import { selectIsRefreshing } from "../redux/auth/auth-selectors";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";

import { ToastContainer } from "react-toastify";
import Completed from "./Completed";
import UserOrders from "./UserOrders";
import OrdersAdmin from "./OrdersAdmin";
export const App = () => {
  const isRefreshing = useSelector(selectIsRefreshing);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return (
    <>
      <ToastContainer />
      {!isRefreshing && (
        <>
          <Header />
          <Routes>
            <Route path="/" index element={<MainPage />} />
            <Route path="/portfolio" index element={<Portfolio />} />
            <Route
              path="/login"
              index
              element={<RestrictedRoute restricted component={<Login />} />}
            />
            <Route
              path="/register"
              index
              element={<RestrictedRoute restricted component={<Register />} />}
            />
            <Route
              path="/userinfo"
              index
              element={<PrivateRoute component={<UserInfo />} />}
            />
            <Route
              path="/adminpage"
              index
              element={<PrivateRoute component={<AdminPage />} />}
            />
            <Route
              path="/add"
              index
              element={<PrivateRoute component={<Add />} />}
            />
            <Route
              path="/basket"
              index
              element={<PrivateRoute component={<Basket />} />}
            />
            <Route
              path="/confirmed"
              index
              element={<PrivateRoute component={<Confirmed />} />}
            />
            <Route
              path="/completed"
              index
              element={<PrivateRoute component={<Completed />} />}
            />
            <Route
              path="/myOrders"
              index
              element={<PrivateRoute component={<UserOrders />} />}
            />
            <Route
              path="/adminOrders"
              index
              element={<PrivateRoute component={<OrdersAdmin />} />}
            />
            <Route path="/item/:id" index element={<Item />} />
            <Route path="/chat" element={<MainChat />} />
          </Routes>
          <Footer />
        </>
      )}
    </>
  );
};
