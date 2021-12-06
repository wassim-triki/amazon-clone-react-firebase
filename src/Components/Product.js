import React from "react";
import "./Product.css";

const Product = ({ title, image, price, rating, addToBasket }) => {
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
            .map((x) => (
              <p>🌟</p>
            ))}
        </div>
      </div>
      <img src={image} />
      <button onClick={() => addToBasket({ title, image, price, rating })}>
        Add To Basket
      </button>
    </div>
  );
};

export default Product;
