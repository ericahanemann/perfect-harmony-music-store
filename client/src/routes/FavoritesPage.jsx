import { useEffect } from "react";
import LoadingScreen from "../components/LoadingScreen";
import useFavorites from "../hooks/useFavorites";
import { Link } from "react-router-dom";
import { BsFillHeartFill } from "react-icons/bs";

function FavoritesPage() {
  const {
    isLoadingFavorites,
    getAllFavorites,
    allFavoriteProducts,
    removeProductFromFavorites,
  } = useFavorites();

  useEffect(() => {
    if (!isLoadingFavorites) {
      window.scrollTo(0, 0);
    }
  }, [isLoadingFavorites]);

  useEffect(() => {
    async function fetchData() {
      await getAllFavorites();
    }

    fetchData();
  }, [getAllFavorites]);

  const handleRemoveFromFavoriteClick = async (id) => {
    await removeProductFromFavorites(id);

    getAllFavorites();
  };

  if (isLoadingFavorites) {
    return <LoadingScreen />;
  } else {
    const renderedProducts = allFavoriteProducts.map((product, index) => {
      return (
        <div
          key={index}
          className="relative flex flex-col w-3/4 h-96 justify-between items-start md:w-2/5 lg:w-1/4"
        >
          <div
            className="absolute top-4 right-4 text-secondary hover:cursor-pointer hover:text-textcolor z-40"
            onClick={() => handleRemoveFromFavoriteClick(product.id)}
          >
            <BsFillHeartFill></BsFillHeartFill>
          </div>

          <Link
            to={`/products/id/${product.id}`}
            className="h-96 w-full flex flex-col"
          >
            <div className="flex-1 px-8 relative flex justify-center items-center">
              <div className="absolute inset-0 flex justify-center items-center bg-highlights -z-50"></div>
              <img
                src={`../${product.img}`}
                alt="product image"
                className="w-auto max-h-52"
              />
            </div>
            <div className="h-32 flex flex-col py-2 gap-2">
              <h4 className="inline-block uppercase font-semibold">
                {product.name}
              </h4>
              <p>R${product.unitPrice}</p>
            </div>
          </Link>
        </div>
      );
    });

    return (
      <div className="mt-44 min-h-screen lg:px-32 flex flex-col gap-12">
        <h3 className="text-lg text-center uppercase font-semibold md:text-2xl">
          favorites
        </h3>
        <div className="flex flex-wrap gap-12 justify-center">
          {renderedProducts.length > 0 ? (
            renderedProducts
          ) : (
            <div>{"You don't have any favorite products yet :("}</div>
          )}
        </div>
      </div>
    );
  }
}

export default FavoritesPage;
