import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { useStateValue } from "../StateProvider";
import "./Orders.css";
import Order from "./Order";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
const Orders = () => {
  const [orders, setOrders] = useState();
  const [{ user }] = useStateValue();

  useEffect(() => {
    if (user) {
      const ordersRef = collection(db, "users", user.uid, "orders");
      const q = query(ordersRef, orderBy("created", "desc"));
      onSnapshot(q, (snapshot) => {
        setOrders(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
    } else {
      setOrders([user]);
    }
  }, [user]);
  return (
    <div className="orders">
      <h1>Your Orders</h1>
      <div className="orders__order">
        {orders?.map((order, i) => (
          <Order key={i} order={order} />
        ))}
      </div>
    </div>
  );
};

export default Orders;
