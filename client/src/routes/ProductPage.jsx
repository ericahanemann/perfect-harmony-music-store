import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useProducts from "../hooks/useProducts";

import LoadingScreen from "../components/LoadingScreen";

function ProductPage() {
  const { id } = useParams();
  const { isLoading, productIdRequired, getProductById } = useProducts();

  useEffect(() => {
    getProductById(id);
  }, [getProductById, id]);

  if (isLoading) {
    return (
      <LoadingScreen />
    );
  } else {
    return <div className="mt-36">Product Page - {productIdRequired.name}</div>;
  }
}

export default ProductPage;
