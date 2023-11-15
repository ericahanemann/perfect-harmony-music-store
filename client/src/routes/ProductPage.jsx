import { useParams } from "react-router-dom";
import useProducts from "../hooks/useProducts";

import logo from "../assets/ph-icon.png";
import { useEffect } from "react";

function ProductPage() {
  const { id } = useParams();
  const { isLoading, productIdRequired, getProductById } = useProducts();

  useEffect(() => {
    getProductById(id);
  }, [getProductById, id]);

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
    return <div className="mt-36">Product Page - {productIdRequired.name}</div>;
  }
}

export default ProductPage;
