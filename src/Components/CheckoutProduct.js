import React from "react";
import { useStateValue } from "../StateProvider";
import "./CheckoutProduct.css";
import Button from "./Button";
import randId from "../utils";
const CheckoutProduct = ({
  instanceId,
  id,
  image,
  title,
  price,
  rating,
  showButton = true,
}) => {
  const [{ basket }, dispatch] = useStateValue();
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      instanceId,
    });
  };
  return (
    <div className="checkoutProduct">
      <img src={image} className="checkoutProduct__image" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">
          <strong>{title}</strong>
        </p>
        <p className="checkoutProduct__price">
          {" "}
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>🌟</p>
            ))}
        </div>
        {showButton && (
          <Button
            className="btn"
            text="Remove from basket"
            onClick={removeFromBasket}
          />
        )}
      </div>
    </div>
  );
};

export default CheckoutProduct;
