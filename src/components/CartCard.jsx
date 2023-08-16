import React from "react";
import { TrashIcon } from "@heroicons/react/24/solid";

const CartCard = ({ product }) => {
  const { id, img, name, quantity, price } = product;
  return (
    <div className="cart-box">
      <div className="cart-image">
        <img src={img} alt="" />
      </div>
      <div className="cart-info">
        <div className="cart-info-text">
          <h3>{name}</h3>
          <h3>${price}</h3>
        </div>
        <div className="cart-info-text">
          <p>Quantity: {quantity}</p>
          <p>Total: $</p>
        </div>
        <div className="cart-remove-button">
          <button>
            <p>
              <TrashIcon className="w-6 h-6" />
            </p>
            <p className="cart-btn-text"> Remove</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
