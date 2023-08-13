import React from "react";
import { useLoaderData } from "react-router-dom";
import ProductCard from "./ProductCard";

const Shop = () => {
  const products = useLoaderData();
  return (
    <div className="container mt-32 lg:mt-20">
      <div className="product-container">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
