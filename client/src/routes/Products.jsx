import { useEffect } from "react";
import useProducts from "../hooks/useProducts";

import logo from "../assets/ph-icon.png";

function Products() {
  const { isLoading, getAllProducts, allStockProducts } = useProducts();

  useEffect(() => {
    async function fetchData() {
      await getAllProducts();
    }
    fetchData();
  }, [getAllProducts]);

  const renderedItems = allStockProducts.map((product, index) => {
    return (
      <div
        key={index}
        className="flex flex-col justify-between items-center w-1/3 p-16 border border-solid"
      >
        <div className="flex items-center">
          <img src={product.colorsAvailable[0].images[0]} alt="product image" />
        </div>
        <div className="flex flex-col gap-4">
          <h4>{product.name}</h4>
          <p>R${product.unitPrice}</p>
        </div>
      </div>
    );
  });

  if (isLoading) {
    return (
      <div className="h-screen w-screen flex justify-center items-center bg-primary text-secondary z-50">
        <img
          src={logo}
          alt="logo perfect harmony"
          className="motion-reduce:animate-spin"
          width={150}
        />
      </div>
    );
  } else {
    return (
      <div className="mt-64 w-screen mx-auto flex">
        <div className="w-1/4 flex flex-col justify-start items-center">
          <div>categories</div>
          <div>colors</div>
        </div>
        <div className="w-3/4 flex flex-wrap mr-24">{renderedItems}</div>
      </div>
    );
  }
}

export default Products;
