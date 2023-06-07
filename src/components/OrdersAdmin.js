import { useEffect, useState } from "react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrders, updateStatus } from "../redux/main/main-operations";
import { selectOrders } from "../redux/main/main-selectors";
import { selectIsLoading } from "../redux/main/main-selectors";
import Spinner from "./Spinner";

const OrdersAdmin = () => {
  const isLoading = useSelector(selectIsLoading);
  const [selectedOrder, setSelectedOrder] = useState();
  const [orderInfo, setOrderInfo] = useState();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOrders());
  }, [dispatch]);
  const orders = useSelector(selectOrders);
  useEffect(() => {
    if (orders.length > 0) {
      const res = orders.find((order) => {
        return order._id === selectedOrder;
      });
      setOrderInfo(res);
    }
  }, [selectedOrder, orders]);

  const onSubmit = (evt) => {
    evt.preventDefault();
    const {
      target: { orderId },
    } = evt;
    setSelectedOrder(orderId.value);
  };
  const changeStatus = (evt) => {
    evt.preventDefault();
    const {
      target: { status },
    } = evt;

    dispatch(updateStatus({ status: status.value, orderId: selectedOrder }));
  };
  return (
 <>
 {isLoading ? <Spinner/> :
    <div className="container order__container">
      <form onSubmit={onSubmit} className="order-search-form">
        <label htmlFor="size" className="order-search-label">
          Order ID
        </label>
        <select id="size" name="orderId" className="order-search-select">
          {orders.length > 0 &&
            orders.map(({ _id }) => {
              return <option key={_id} value={_id}>{_id}</option>;
            })}
        </select>
        <button type="submit" className="order-search-button">
          Search
        </button>
      </form>
      <div className="order__main">
        {orderInfo && (
          <>
            <div className="item__box">
              <div className="item__box1">
                <img
                  className="order__img"
                  height={500}
                  src={`http://localhost:3000/${orderInfo.itemId.image}`}
                  alt="ItemPhoto"
                />
              </div>
              <div className="item__box2">
                <h1 className="item__header">{orderInfo.itemId.name}</h1>
                <p className="item__desk">{orderInfo.itemId.description}</p>
                <p className="order__info">
                  <b>Price:</b> ${orderInfo.itemId.price}
                </p>
                <p className="order__info">
                  {" "}
                  <b>Quantity</b>: {orderInfo.quantity}
                </p>
                <p className="order__info">
                  {" "}
                  <b>Owner</b>: {orderInfo.owner}
                </p>
                <p className="order__info">
                  {" "}
                  <b>Status</b>: {orderInfo.status}
                </p>
                <form onSubmit={changeStatus}>
                  <label htmlFor="status" className="order__info">
                    Change status
                  </label>
                  <select id="status" className="order__status" name="status">
                    <option value="In progress">In progress</option>
                    <option value="Shipped">Shipped</option>
                    <option value="Completed">Completed</option>
                    <option value="Cancelled">Cancelled</option>
                  </select>
                  <button
                    type="submit"
                    className="order-search-button order-search-button--left"
                  >
                    Change
                  </button>
                </form>
              </div>
            </div>
          </>
        )}
      </div>
    </div>}
    </>
  );
};
export default OrdersAdmin;
