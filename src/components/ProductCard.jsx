import React from "react";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

const ProductCard = ({ product, handleAddToCart }) => {
  const { id, img, name, category, price } = product;
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={img} alt="" />
      </div>
      <div className="product-info">
        <h2>{name}</h2>
        <p>Category: {category}</p>
        <h4>Price: ${price}</h4>
        <button
          className="common-button product-btn"
          onClick={() => handleAddToCart(id)}
        >
          <span className="ml-2">Add to Cart</span>{" "}
          <ArrowRightIcon className="w-6 h-8" />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
