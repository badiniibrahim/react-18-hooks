import { SetStateAction, useState, useTransition } from "react";

import { generateProducts } from "../data/data";
import ProductList from "./ProductList";

const dummyProducts = generateProducts();

const filterProducts = (filterTerm: string) => {
  if (!filterTerm) {
    return dummyProducts;
  }
  return dummyProducts.filter((product) => product.includes(filterTerm));
};
const UseTransitionExample = () => {
  const [isPending, startTransition] = useTransition();
  const [filterTerm, setFilterTerm] = useState("");

  const filteredProducts = filterProducts(filterTerm);

  function updateFilterHandler(event: {
    target: { value: SetStateAction<string> };
  }) {
    startTransition(() => {
      setFilterTerm(event.target.value);
    });
  }

  return (
    <div id="app">
      <input type="text" onChange={updateFilterHandler} />
      {isPending && <p style={{ color: "white" }}>Updating List...</p>}
      <ProductList products={filteredProducts} />
    </div>
  );
};

export default UseTransitionExample;
