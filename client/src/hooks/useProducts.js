import { useCallback, useEffect, useState } from "react";
import { httpGetSpecificProducts } from "./requests";

function useProducts() {
  const [specifProductsRequired, setSpecifProductsRequired] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const productType = "guitar";

  const getSpecificProducts = useCallback(async () => {
    setIsLoading(true);

    const productsRequired = await httpGetSpecificProducts(productType);
    setSpecifProductsRequired(productsRequired.data);

    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (specifProductsRequired.length == 0) {
      getSpecificProducts();
    }
  }, [getSpecificProducts, specifProductsRequired.length]);

  return {
    specifProductsRequired,
    isLoading,
  };
}

export default useProducts;
