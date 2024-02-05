import { useCallback, useState } from "react";
import { httpGetAllFavorites, httpGetFavoriteById } from "./requests";

function useProducts() {
  const [allFavoriteProducts, setAllFavoriteProducts] = useState([]);
  const [favoriteIdRequired, setFavoriteIdRequired] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getAllFavorites = useCallback(async () => {
    setIsLoading(true);

    const favoriteProducts = await httpGetAllFavorites();
    setAllFavoriteProducts(favoriteProducts.data);

    setIsLoading(false);
  }, []);

  const getFavoriteById = useCallback(async (id) => {
    setIsLoading(true);

    const favoriteRequired = await httpGetFavoriteById(id);
    setFavoriteIdRequired(favoriteRequired.data);

    setIsLoading(false);
  }, []);

  return {
    allFavoriteProducts,
    getAllFavorites,
    favoriteIdRequired,
    getFavoriteById,
    isLoading,
  };
}

export default useProducts;
