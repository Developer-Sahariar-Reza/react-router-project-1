import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import ProductCard from "./ProductCard";
import { addToDb } from "../utilities/fakeDB";
import toast from "react-hot-toast";

const Shop = () => {
  const productsData = useLoaderData();

  // View More button function
  const [showAll, setShowAll] = useState(false);
  const toggleShowAll = () => {
    setShowAll(true);
  };

  const displayProducts = showAll ? productsData : productsData.slice(0, 6);

  // Add to cart function
  const handleAddToCart = (id) => {
    addToDb(id);
    toast("Product Added to Your Cart ✔️");
  };

  return (
    <div className="container mt-32 lg:mt-20">
      <div className="product-container">
        {displayProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>

      {!showAll && (
        <div className="view-more-button-container">
          <button onClick={toggleShowAll} className="common-button">
            View More
          </button>
        </div>
      )}
    </div>
  );
};

export default Shop;
