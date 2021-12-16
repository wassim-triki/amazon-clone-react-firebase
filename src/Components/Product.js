import React from "react";
import { useStateValue } from "../StateProvider";
import "./Product.css";
import Button from "./Button";
import randId from "../utils";
const Product = ({ id, title, image, price, rating }) => {
  const [, dispatch] = useStateValue();
  const addToBasket = () => {
    //dispatch item into data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: { instanceId: randId(), id, title, image, price, rating },
    });
  };
  return (
    <div className="product">
      <div className="product__info">
        <p className="product__title">{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((x, i) => (
              <p key={i}>🌟</p>
            ))}
        </div>
      </div>
      <img src={image} alt="" />
      <Button text="Add to basket" onClick={addToBasket} />
    </div>
  );
};

export default Product;
