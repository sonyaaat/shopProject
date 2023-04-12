import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOrders, updateStatus } from '../redux/main/main-operations';
import { selectOrders } from '../redux/main/main-selectors';

const OrdersAdmin = () => {
  const [selectedOrder, setSelectedOrder] = useState();
  const [orderInfo, setOrderInfo] = useState();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOrders());
  }, [dispatch]);
  const orders = useSelector(selectOrders);
  useEffect(() => {
    if (orders.length > 0) {
      const res = orders.find(order => {
        return order._id === selectedOrder;
      });
      setOrderInfo(res);
    }
  }, [selectedOrder, orders]);

  console.log(orders);
  const onSubmit = evt => {
    evt.preventDefault();
    const {
      target: { orderId },
    } = evt;
    setSelectedOrder(orderId.value);
    console.log(orderId.value);
  };
  const changeStatus = evt => {
    evt.preventDefault();
    const {
        target: { status },
      } = evt;
      console.log(status.value)
      dispatch(updateStatus({status:status.value,orderId:selectedOrder}))
  };
  return (
    <div className="container order__container">
      <form onSubmit={onSubmit} className="order-search-form">
        <label htmlFor="size" className="order-search-label">
          Order ID
        </label>
        <select id="size" name="orderId" className="order-search-select">
          {orders.length > 0 &&
            orders.map(({ _id }) => {
              return <option value={_id}>{_id}</option>;
            })}
        </select>
        <button type="submit" className="order-search-button">
          Search
        </button>
      </form>
      <div className="order__main">
        {orderInfo && (
          <>
            <div class="item__box">
              <div class="item__box1">
                <img
                  class="order__img"
                  height={500}
                  src={`http://localhost:3000/${orderInfo.itemId.image}`}
                  alt="ItemPhoto"
                />
              </div>
              <div class="item__box2">
                <h1 class="item__header">{orderInfo.itemId.name}</h1>
                <p className="item__desk">{orderInfo.itemId.description}</p>
                <p className="order__info">
                  <b>Price:</b> ${orderInfo.itemId.price}
                </p>
                <p className="order__info">
                  {' '}
                  <b>Quantity</b>: {orderInfo.quantity}
                </p>
                <p className="order__info">
                  {' '}
                  <b>Owner</b>: {orderInfo.owner}
                </p>
                <p className="order__info">
                  {' '}
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
                  <button type="submit" className="order-search-button order-search-button--left">
                    Change
                  </button>
                </form>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
export default OrdersAdmin;
