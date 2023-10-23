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
    return <div className="mt-64">Products</div>;
  }
}

export default Products;
