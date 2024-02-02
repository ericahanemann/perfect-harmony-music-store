import { useCallback, useEffect, useState } from "react";
import {
  httpGetCartProducts,
  httpAddProductToCart,
  httpUpdateCartProductAmount,
  httpRemoveProductFromCart,
} from "./requests";

function useCart() {
  const [allCartProducts, setAllCartProducts] = useState([]);
  const [isLoadingCart, setIsLoadingCart] = useState(true);

  const getCartProducts = useCallback(async () => {
    setIsLoadingCart(true);

    const cartProducts = await httpGetCartProducts();
    setAllCartProducts(cartProducts.data);

    setIsLoadingCart(false);
  }, []);

  const addProductToCart = useCallback(
    async (id, amount) => {
      setIsLoadingCart(true);

      const productToAdd = await httpAddProductToCart(id, amount);
      await getCartProducts();

      setIsLoadingCart(false);

      return productToAdd;
    },
    [getCartProducts]
  );

  const updateCartProductAmount = useCallback(async (id, amount) => {
    setIsLoadingCart(true);

    const updatedProduct = await httpUpdateCartProductAmount(id, amount);

    setIsLoadingCart(false);

    return updatedProduct;
  }, []);

  const removeProductFromCart = useCallback(
    async (id) => {
      setIsLoadingCart(true);

      await httpRemoveProductFromCart(id);
      await getCartProducts();

      setIsLoadingCart(false);

      return [];
    },
    [getCartProducts]
  );

  useEffect(() => {
    getCartProducts();
  }, [getCartProducts]);

  return {
    allCartProducts,
    getCartProducts,
    addProductToCart,
    updateCartProductAmount,
    removeProductFromCart,
    isLoadingCart,
  };
}

export default useCart;
