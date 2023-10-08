import { useCallback, useEffect, useState } from "react";
import { httpGetSpecificProducts } from "./requests";

function useProducts() {
  const [specificProductsRequired, setSpecificProductsRequired] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const productType = "guitar";

  const getSpecificProducts = useCallback(async () => {
    setIsLoading(true);

    const productsRequired = await httpGetSpecificProducts(productType);
    setSpecificProductsRequired(productsRequired.data);

    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (specificProductsRequired.length == 0) {
      getSpecificProducts();
    }
  }, [getSpecificProducts, specificProductsRequired.length]);

  return {
    specificProductsRequired,
    isLoading,
  };
}

export default useProducts;
