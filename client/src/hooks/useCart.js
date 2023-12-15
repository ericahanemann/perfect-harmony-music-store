import { useCallback, useEffect, useState } from "react";
import {
  httpGetCartProducts,
  httpAddProductToCart,
  httpUpdateCartProductAmount,
  httpRemoveProductFromCart,
} from "./requests";

function useCart() {
  const [allCartProducts, setAllCartProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getCartProducts = useCallback(async () => {
    setIsLoading(true);

    const cartProducts = await httpGetCartProducts();
    setAllCartProducts(cartProducts.data);

    setIsLoading(false);
  }, []);

  const addProductToCart = useCallback(async (id, amount) => {
    setIsLoading(true);

    const productToAdd = await httpAddProductToCart(id, amount);

    setIsLoading(false);

    return productToAdd;
  }, []);

  const updateCartProductAmount = useCallback(async (id, amount) => {
    setIsLoading(true);

    const updatedProduct = await httpUpdateCartProductAmount(id, amount);

    setIsLoading(false);

    return updatedProduct;
  }, []);

  const removeProductFromCart = useCallback(async (id) => {
    setIsLoading(true);

    await httpRemoveProductFromCart(id);

    setIsLoading(false);

    return [];
  }, []);

  useEffect(() => {
    getCartProducts();
  }, [getCartProducts]);

  return {
    allCartProducts,
    getCartProducts,
    addProductToCart,
    updateCartProductAmount,
    removeProductFromCart,
    isLoading,
  };
}

export default useCart;
