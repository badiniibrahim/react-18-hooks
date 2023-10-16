import React from "react";

const ProductList = ({ products }: { products: string[] }) => {
  return (
    <ul>
      {products.map((product, index: number) => (
        <li key={`${index}-${product}`}>{product}</li>
      ))}
    </ul>
  );
};

export default ProductList;
