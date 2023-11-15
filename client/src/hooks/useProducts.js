import { useCallback, useEffect, useState } from "react";
import {
  httpGetAllProducts,
  httpGetProductById,
  httpGetSpecificProducts,
  httpGetSpecificCategory,
} from "./requests";

function useProducts() {
  const [allStockProducts, setAllStockProducts] = useState([]);
  const [productIdRequired, setProductIdRequired] = useState([]);
  const [specificProductsRequired, setSpecificProductsRequired] = useState([]);
  const [specificCategoryRequired, setSpecificCategoryRequired] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getAllProducts = useCallback(async () => {
    setIsLoading(true);

    const stockProducts = await httpGetAllProducts();
    setAllStockProducts(stockProducts.data);

    setIsLoading(false);
  }, []);

  const getProductById = useCallback(async (id) => {
    setIsLoading(true);

    const productRequired = await httpGetProductById(id);
    setProductIdRequired(productRequired.data);

    setIsLoading(false);
  }, []);

  const getSpecificProducts = useCallback(async (productType) => {
    setIsLoading(true);

    const productsRequired = await httpGetSpecificProducts(productType);
    setSpecificProductsRequired(productsRequired.data);

    setIsLoading(false);
  }, []);

  const getSpecificCategory = useCallback(async (category) => {
    setIsLoading(true);

    const categoryRequired = await httpGetSpecificCategory(category);
    setSpecificCategoryRequired(categoryRequired.data);

    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (specificProductsRequired.length == 0) {
      getSpecificProducts("guitar");
    }
  }, [getSpecificProducts, specificProductsRequired.length]);

  return {
    specificProductsRequired,
    allStockProducts,
    setAllStockProducts,
    getAllProducts,
    productIdRequired,
    setProductIdRequired,
    getProductById,
    specificCategoryRequired,
    setSpecificCategoryRequired,
    getSpecificCategory,
    isLoading,
  };
}

export default useProducts;
