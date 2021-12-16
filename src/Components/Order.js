import React from "react";
import "./Order.css";
import moment from "moment";
import CheckoutProduct from "./CheckoutProduct";
import CurrencyFormat from "react-currency-format";
const Order = ({ order }) => {
  return (
    <div className="order">
      {order && (
        <>
          {" "}
          <h2>Order</h2>
          <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>
          <p className="order__id">
            <small>{order.id}</small>
          </p>
          {order.data.basket?.map((prod, i) => (
            <CheckoutProduct key={i} {...prod} showButton={false} />
          ))}
          <CurrencyFormat
            renderText={(value) => (
              <h3 className="order__total">Order Total: {value}</h3>
            )}
            decimalScale={2}
            value={order.data.amount / 100}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
          />
        </>
      )}
    </div>
  );
};

export default Order;
