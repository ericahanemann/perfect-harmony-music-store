import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useProducts from "../hooks/useProducts";
import useFavorites from "../hooks/useFavorites";

import LoadingScreen from "../components/LoadingScreen";
import Cart from "../components/Cart";

import {
  BsBoxSeam,
  BsFillStarFill,
  BsDash,
  BsPlus,
  BsHeart,
  BsFillHeartFill,
} from "react-icons/bs";
import useCart from "../hooks/useCart";

function ProductPage() {
  const { id } = useParams();
  const { isLoading, productIdRequired, getProductById, allStockProducts } =
    useProducts();
  const { addProductToCart, updateCartProductAmount, allCartProducts } =
    useCart();
  const {
    allFavoriteProducts,
    addProductToFavorites,
    removeProductFromFavorites,
    getAllFavorites,
  } = useFavorites();
  const [activeImgPath, setActiveImgPath] = useState("");
  const [activeInfo, setActiveInfo] = useState("desc");
  const [numberReviewsToBeDisplayed, setNumberReviewsToBeDisplayed] =
    useState(3);
  const [productsToAddCounter, setProductsToAddCounter] = useState(1);
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    getProductById(id);
  }, [getProductById, id]);

  useEffect(() => {
    if (productIdRequired.name) {
      setActiveImgPath(`../../${productIdRequired.images[0]}`);
      window.scrollTo(0, 0);
    }
  }, [productIdRequired]);

  const handleAddToCartClick = async () => {
    const isProductInCart = allCartProducts.some(
      (product) => product.productId == productIdRequired.id
    );

    if (isProductInCart) {
      await updateCartProductAmount(productIdRequired.id, productsToAddCounter);
    } else {
      await addProductToCart(productIdRequired.id, productsToAddCounter);
    }

    setTimeout(() => {
      setShowCart(true);
    }, 300);
  };

  if (isLoading && !productIdRequired.name) {
    return <LoadingScreen />;
  } else if (productIdRequired.name) {
    const handleProductsToAdd = (operation) => {
      if (
        operation == 1 &&
        productsToAddCounter < productIdRequired.stockAmount
      ) {
        setProductsToAddCounter(productsToAddCounter + 1);
      } else if (operation == -1 && productsToAddCounter > 1) {
        setProductsToAddCounter(productsToAddCounter - 1);
      }
    };

    const handleInfoOptionClick = (optionName) => {
      if (optionName == "specs") {
        setActiveInfo("specs");
      } else {
        if (activeInfo != "desc") {
          setActiveInfo("desc");
        }
      }
    };

    const handleShowAllReviewsClick = () => {
      setNumberReviewsToBeDisplayed(productIdRequired.reviews.length);
    };

    const renderedSecondaryImages = productIdRequired.images.map(
      (imagePath, imageIndex) => {
        const path = `../../${imagePath}`;
        return (
          <div
            key={imageIndex}
            className={`w-20 h-20 p-4 flex justify-center items-center hover:cursor-pointer ${
              path == activeImgPath
                ? "bg-highlightsLight border border-primary"
                : ""
            }`}
            onClick={() => {
              setActiveImgPath(path);
            }}
          >
            <img
              src={path}
              className="max-w-full max-h-full"
              alt={`${productIdRequired.name} secondary image`}
            />
          </div>
        );
      }
    );

    const colorSelector = productIdRequired.colorsAvailable.map(
      (productColor, productIndex) => {
        const colorId = productIndex;
        const colorStyle = `w-5 h-5 rounded-full border ${
          productIdRequired.color == productColor.color
            ? "border-secondary"
            : "border-textcolor"
        } hover:border-secondary hover:cursor-pointer`;

        let productColorClickedId;
        allStockProducts.forEach((product) => {
          if (
            product.color == productColor.color &&
            product.name.toUpperCase() == productIdRequired.name.toUpperCase()
          ) {
            productColorClickedId = product.id;
          }
        });
        return (
          <Link
            to={`/products/id/${productColorClickedId}`}
            key={colorId}
            id={productIndex}
            className={colorStyle}
            style={{ backgroundColor: productColor.color }}
          ></Link>
        );
      }
    );

    const ratings = productIdRequired.reviews.map((review) => review.stars);
    const averageRating = (
      ratings.reduce((acc, valor) => acc + valor, 0) / ratings.length
    ).toFixed(1);

    const renderedReviews = productIdRequired.reviews
      .slice(0, numberReviewsToBeDisplayed)
      .map((review, index) => {
        return (
          <div
            key={index}
            className="flex flex-col justify-center items-start px-8 py-12 border border-highlights"
          >
            <div className="flex gap-2 text-lg font-bold text-secondary mb-4">
              <BsFillStarFill></BsFillStarFill>
              {review.stars}
            </div>

            <div className="flex flex-col gap-1">
              <p>{review.comment}</p>
              <p className="font-extralight">Client: {review.client}</p>
            </div>
          </div>
        );
      });

    const renderedIntrumentSpecs = productIdRequired.specs.map(
      (spec, index) => {
        return (
          <p key={index}>
            <span className="font-semibold">{spec.title}</span>:{" "}
            {spec.specDescription}
          </p>
        );
      }
    );

    const handleAddToFavoritesClick = async (id) => {
      await addProductToFavorites(id);
    };

    const handleRemoveFromFavoriteClick = async (id) => {
      await removeProductFromFavorites(id);

      getAllFavorites();
    };

    return (
      <div className="mt-64 min-h-screen lg:px-32">
        {showCart && <Cart showCart={showCart} setShowCart={setShowCart} />}

        <section className="flex flex-col w-screen lg:flex-row">
          <div className="relative w-full mx-4 flex justify-center bg-highlights lg:w-1/2 lg:mx-0">
            <div className="w-1/12 flex flex-col justify-start">
              {renderedSecondaryImages}
            </div>
            <div className="flex w-full h-96 justify-center items-center p-8">
              <img
                src={activeImgPath}
                alt={`${productIdRequired.name} main image`}
                className="max-h-80"
              />
            </div>

            <div className="absolute top-4 right-4 z-40 hover:cursor-pointer hover:text-secondary">
              {allFavoriteProducts.some(
                (favProduct) => favProduct.id == productIdRequired.id
              ) ? (
                <BsFillHeartFill
                  onClick={() => {
                    handleRemoveFromFavoriteClick(Number(productIdRequired.id));
                  }}
                ></BsFillHeartFill>
              ) : (
                <BsHeart
                  onClick={() => {
                    handleAddToFavoritesClick(Number(productIdRequired.id));
                  }}
                ></BsHeart>
              )}
            </div>
          </div>

          <div className="w-screen flex flex-col gap-4 mx-4 my-8 lg:w-1/2 lg:mx-12 lg:my-0">
            <h2 className="text-3xl font-bold">{productIdRequired.name}</h2>

            <div>
              <h4 className="uppercase">color</h4>
              <div className="flex gap-2">{colorSelector}</div>
            </div>

            <p className="text-2xl">R${productIdRequired.unitPrice}</p>

            {productIdRequired.stockAmount > 0 ? (
              <div className="flex items-center uppercase font-semibold gap-2 text-green-600">
                <BsBoxSeam />
                <p>in stock</p>
              </div>
            ) : (
              <div className="flex items-center uppercase font-semibold gap-2 text-red-600">
                <BsBoxSeam />
                <p>unavailable</p>
              </div>
            )}

            <div className="flex flex-col">
              <div className="w-1/2 flex flex-col md:flex-row lg:gap-8">
                <div className="w-screen flex justify-start items-center my-4 md:w-1/3">
                  <button
                    onClick={() => handleProductsToAdd(-1)}
                    className="w-full h-full flex justify-center items-center border border-highlights py-5 px-2"
                  >
                    <BsDash></BsDash>
                  </button>
                  <span className="w-2/3 h-full p-4 flex justify-center items-center border border-highlights">
                    {productsToAddCounter}
                  </span>
                  <button
                    onClick={() => handleProductsToAdd(1)}
                    className="w-full h-full flex justify-center items-center border border-highlights py-5 px-2"
                  >
                    <BsPlus></BsPlus>
                  </button>
                </div>

                <button
                  className="w-screen p-4 my-4 bg-highlights border border-highlights uppercase hover:bg-highlightsLight hover:border hover:border-highlightsLight"
                  onClick={() => {
                    handleAddToCartClick();
                  }}
                >
                  add to cart
                </button>
              </div>

              <button className="w-screen p-4 bg-secondary uppercase hover:bg-secondarylight md:w-1/2">
                buy now
              </button>
            </div>
          </div>
        </section>

        <section className="mt-32 mx-4 lg:mx-0">
          <div className="flex gap-4 my-4 uppercase font-bold border-b border-textcolor">
            <h4
              className={
                activeInfo == "desc"
                  ? "border-b border-textcolor bg-highlights p-2 hover:cursor-pointer"
                  : "p-2 hover:cursor-pointer"
              }
              onClick={() => handleInfoOptionClick("desc")}
            >
              description
            </h4>
            <h4
              className={
                activeInfo == "specs"
                  ? "border-b border-textcolor bg-highlights p-2 hover:cursor-pointer"
                  : "p-2 hover:cursor-pointer"
              }
              onClick={() => handleInfoOptionClick("specs")}
            >
              specs
            </h4>
          </div>

          {activeInfo == "desc" && (
            <div className="w-4/5">{productIdRequired.description}</div>
          )}

          {activeInfo == "specs" && (
            <div className="flex flex-col gap-2">{renderedIntrumentSpecs}</div>
          )}
        </section>

        <section className="my-32 mx-4 lg:mx-0">
          <h4 className="uppercase font-bold border-b border-textcolor">
            reviews
          </h4>

          <div className="w-screen flex flex-col gap-12 lg:flex-row">
            <div className="w-screen h-48 mt-12 bg-highlights flex flex-col justify-center items-center py-12 lg:w-1/3">
              <div className="flex gap-2 text-2xl">
                <BsFillStarFill></BsFillStarFill>
                {averageRating}
              </div>

              <div className="flex gap-1 text-lg">
                <span>{ratings.length}</span>
                <p>reviews</p>
              </div>
            </div>

            <div className="w-screen mt-12 flex flex-col gap-8 lg:w-1/3">
              {renderedReviews}

              {productIdRequired.reviews.length >
                numberReviewsToBeDisplayed && (
                <button
                  onClick={handleShowAllReviewsClick}
                  className="p-4 my-4 border border-highlights uppercase hover:bg-highlights"
                >
                  Show all reviews
                </button>
              )}
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default ProductPage;
