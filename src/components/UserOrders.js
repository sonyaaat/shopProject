import { useEffect, useState } from 'react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cancelOrder, getUserOrders } from '../redux/main/main-operations';
import { selectIsLoading, selectUserOrders } from '../redux/main/main-selectors';
import Spinner from './Spinner';

const UserOrders = () => {
  const orders = useSelector(selectUserOrders);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const [filter, setFilter] = useState('All');
  const changeFilter = evt => {
    evt.preventDefault();
    const value = evt.target.value;
    setFilter(value);
  };
  useEffect(() => {
    dispatch(getUserOrders());
  }, [dispatch]);

  const cancel = _id => {
    dispatch(cancelOrder({ orderId: _id }));
  };
  const [filteredOrders, setFilteredOrders] = useState(orders);
 
  useEffect(() => {
    if (filter && orders.length>0) {
      const res = [...orders].filter(item => {
        return item.status.toLowerCase() === filter.toLowerCase();
      });
   
      setFilteredOrders(res);
    }
    if (filter === 'All') {
      setFilteredOrders(orders);
    }
  }, [filter, orders]);
  return (
    <div className="container ">
      <h1 className="order-centered">My orders</h1>
      <div className="order-filter-centered">
        <label htmlFor="size" className="order-search-label">
          Filter
        </label>
        <select
          id="size"
          name="filter"
          className="order-search-select portfolio__select"
          onChange={changeFilter}
        >
          <option value="All">All</option>
          <option value="In progress">In progress</option>
          <option value="Shipped">Shipped</option>
          <option value="Completed">Completed</option>
          <option value="Cancelled">Cancelled</option>
        </select>
      </div>
      

      {isLoading ? (
        <Spinner />
      ) : (
        filteredOrders.length > 0 && (
          <ul className="order-list">
            {filteredOrders.map(
              ({
                _id,
                status,
                quantity,
                itemId: { description, name, image, price },
              }) => {
                return (
                  <li key={_id} className="order">
                    <div className="order-info">
                      <h3>{name}</h3>
                      <p>{description}</p>
                      <p className="status">{status}</p>
                      {(status === 'in progress' ||
                        status === 'In progress') && (
                        <button
                          onClick={() => cancel(_id)}
                          type="button"
                          className="order-search-button"
                        >
                          Cancel
                        </button>
                      )}
                    </div>
                    <div className="order-details">
                      <div className="order-image">
                        <img
                          src={`http://localhost:3000/${image}`}
                          alt={name}
                        />
                      </div>
                      <div className="order-quantity">
                        <span>Quantity:</span>
                        <span>{quantity}</span>
                      </div>
                      <div className="order-price">
                        <span>Price:</span>
                        <span>{price}</span>
                      </div>
                    </div>
                  </li>
                );
              }
            )}
          </ul>
        )
      )}
      {orders.length === 0 && (
        <p className="basket__empty">You haven`t got any orders</p>
      )}
      {orders.length > 0 && filteredOrders.length === 0 && (
        <p className="basket__empty">
          You haven`t got any orders with this status
        </p>
      )}
    </div>
  );
};
export default UserOrders;
