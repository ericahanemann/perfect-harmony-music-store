import { useCallback, useEffect, useState } from "react";
import {
  httpGetAllFavorites,
  httpGetFavoriteById,
  httpAddProductToFavorites,
  httpRemoveProductFromFavorites,
} from "./requests";

function useFavorites() {
  const [allFavoriteProducts, setAllFavoriteProducts] = useState([]);
  const [favoriteIdRequired, setFavoriteIdRequired] = useState([]);
  const [isLoadingFavorites, setIsLoadingFavorites] = useState(true);

  const getAllFavorites = useCallback(async () => {
    setIsLoadingFavorites(true);

    const favoriteProducts = await httpGetAllFavorites();
    setAllFavoriteProducts(favoriteProducts.data);

    setIsLoadingFavorites(false);
  }, []);

  useEffect(() => {
    if (allFavoriteProducts.length == 0) {
      getAllFavorites();
    }
  }, [getAllFavorites, allFavoriteProducts.length]);

  const getFavoriteById = useCallback(async (id) => {
    setIsLoadingFavorites(true);

    const favoriteRequired = await httpGetFavoriteById(id);
    setFavoriteIdRequired(favoriteRequired.data);

    setIsLoadingFavorites(false);
  }, []);

  const addProductToFavorites = useCallback(
    async (id) => {
      setIsLoadingFavorites(true);

      const productToAdd = await httpAddProductToFavorites(id);
      await getAllFavorites();

      setIsLoadingFavorites(false);

      return productToAdd;
    },
    [getAllFavorites]
  );

  const removeProductFromFavorites = useCallback(
    async (id) => {
      setIsLoadingFavorites(true);

      await httpRemoveProductFromFavorites(id);
      await getAllFavorites();

      setIsLoadingFavorites(false);

      return [];
    },
    [getAllFavorites]
  );

  return {
    allFavoriteProducts,
    getAllFavorites,
    favoriteIdRequired,
    getFavoriteById,
    isLoadingFavorites,
    addProductToFavorites,
    removeProductFromFavorites,
  };
}

export default useFavorites;
