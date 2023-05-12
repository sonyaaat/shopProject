import { useEffect } from "react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrders, getUsers } from "../redux/main/main-operations";
import {
  selectAdmins,
  selectOrders,
  selectUsers,
} from "../redux/main/main-selectors";

const AdminPage = () => {
  const users = useSelector(selectUsers);
  const admins = useSelector(selectAdmins);
  const orders = useSelector(selectOrders);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
    dispatch(getOrders());
  }, [dispatch]);
  return (
    <>
      <section className=" ">
        <div className="container admin">
          <p className="admin__header">Regular Users</p>
          <table className="table-users styled-table">
            <thead>
              <tr>
                <th>Mail</th>

                <th>Number of orders</th>
                <th>Orders in progress</th>
              </tr>
            </thead>
            <tbody className="table__body">
              {users.length > 0 &&
                users.map((mail) => (
                  <tr key={mail}>
                    <td>{mail}</td>
                    <td>1</td>
                    <td>1</td>
                  </tr>
                ))}
            </tbody>
          </table>
          <p className="admin__header admin__header2">Admins</p>
          <table className="styled-table ">
            <thead>
              <tr>
                <th>Mail</th>
                <th>Role</th>
              </tr>
            </thead>
            <tbody className="table2">
              {admins.length > 0 &&
                admins.map((mail) => (
                  <tr key={mail}>
                    <td>{mail}</td>
                    <td>Manager</td>
                  </tr>
                ))}
            </tbody>
          </table>
          <p className="admin__header admin__header2">Orders</p>
          <table className="table-orders styled-table">
            <thead>
              <tr>
                <th>ItemId</th>
                <th>UserId</th>

                <th>Quantity</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody className="table__body">
              {orders.length > 0 &&
                orders.map((el) => (
                  <tr key={el._id}>
                    <td>{el.itemId._id}</td>
                    <td>{el.owner}</td>
                    <td>{el.quantity}</td>
                    <td>{el.status}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};
export default AdminPage;
