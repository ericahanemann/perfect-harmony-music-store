import { useCallback, useEffect, useState } from "react";
import { httpGetAllProducts, httpGetSpecificProducts } from "./requests";

function useProducts() {
  const [allStockProducts, setAllStockProducts] = useState([]);
  const [specificProductsRequired, setSpecificProductsRequired] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getAllProducts = useCallback(async () => {
    setIsLoading(true);

    const stockProducts = await httpGetAllProducts();
    setAllStockProducts(stockProducts.data);

    setIsLoading(false);
  }, []);

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
    allStockProducts,
    specificProductsRequired,
    setAllStockProducts,
    getAllProducts,
    isLoading,
  };
}

export default useProducts;
