import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import ProductCard from "./ProductCard";

const Shop = () => {
  const productsData = useLoaderData();

  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => {
    setShowAll(true);
  };

  const displayProducts = showAll ? productsData : productsData.slice(0, 6);

  return (
    <div className="container mt-32 lg:mt-20">
      <div className="product-container">
        {displayProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
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
