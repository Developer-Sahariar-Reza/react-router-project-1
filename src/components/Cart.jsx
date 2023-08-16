import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import CartCard from "./CartCard";
import { removeFromDb, deleteShoppingCart } from "../utilities/fakeDB";

const Cart = () => {
  const { cartArray } = useLoaderData();

  // Cart Calculation
  let totalAmount = 0;
  let vat = 0;
  let totalCost = 0;
  if (cartArray.length > 0) {
    for (const product of cartArray) {
      totalAmount = totalAmount + product.price * product.quantity;
      vat = (totalAmount * 15) / 100;
      totalCost = totalAmount + vat;
    }
  }

  // remove from ui and local storage
  const handleRemoveButton = (id) => {
    removeFromDb(id);
  };

  // clear cart
  const handleClearCartButton = () => {
    deleteShoppingCart();
  };

  return (
    <div className="container">
      <h2 className="cart-info-title">
        {cartArray.length ? "Review Cart Items" : "Cart is Empty!!!"}
      </h2>

      <div className="cart-container">
        {cartArray.map((product) => (
          <CartCard
            key={product.id}
            product={product}
            handleRemoveButton={handleRemoveButton}
          />
        ))}
      </div>

      <div className="cart-cost">
        <h3>Total Amount: ${totalAmount}</h3>
        <h3>VAT 15%: ${vat.toFixed(2)}</h3>
        <h3>Total Cost: ${totalCost.toFixed(2)}</h3>
      </div>

      <div className="cart-button-container">
        {cartArray.length > 0 ? (
          <button className="common-button" onClick={handleClearCartButton}>
            Clear Cart
          </button>
        ) : (
          <button className="common-button">
            <Link to="/shop">Back To Shop</Link>
          </button>
        )}
        <button className="common-button">Place Order</button>
      </div>
    </div>
  );
};

export default Cart;
