import { useState } from "react";
import { Link } from "react-router-dom";
import InstrumentsGalleryItem from "./InstrumentsGalleryItem";
import { BsHeart } from "react-icons/bs";
import useCart from "../hooks/useCart";

function InstrumentsGallery({ specificProductsRequired, setShowCart }) {
  const { addProductToCart, updateCartProductAmount, allCartProducts } =
    useCart();
  const [instrumentDisplayed, setInstrumentDisplayed] = useState(
    specificProductsRequired[0]
  );
  const [instrumentDisplayedImage, setInstrumentDisplayedImage] = useState(
    instrumentDisplayed.colorsAvailable[0].images[0]
  );

  const instrumentDisplayedBg = {
    backgroundImage: `url(${instrumentDisplayedImage})`,
    backgroundSize: "cover",
    backgroundPosition: "left",
    opacity: 0.1,
  };

  const handleAddToCartClick = async () => {
    const isProductInCart = allCartProducts.some(
      (product) => product.productId == instrumentDisplayed.id
    );

    if (isProductInCart) {
      await updateCartProductAmount(instrumentDisplayed.id, 1);
    } else {
      await addProductToCart(instrumentDisplayed.id, 1);
    }

    setTimeout(() => {
      setShowCart(true);
    }, 300);
  };

  const handleClickInstrument = (instrumentClickedId) => {
    specificProductsRequired.forEach((product) => {
      if (product.id == instrumentClickedId) {
        setInstrumentDisplayed(product);
        setInstrumentDisplayedImage(product.colorsAvailable[0].images[0]);
      }
    });
  };

  const handleColorClick = (colorData) => {
    specificProductsRequired.forEach((product) => {
      if (
        product.color == colorData.color &&
        product.name.toUpperCase() == instrumentDisplayed.name.toUpperCase()
      ) {
        setInstrumentDisplayed(product);

        product.colorsAvailable.forEach((colorAvailable) => {
          if (colorAvailable.color == colorData.color) {
            setInstrumentDisplayedImage(colorAvailable.images[0]);
          }
        });
      }
    });
  };

  const productsToBeDisplayed = specificProductsRequired
    .filter((productItem, index) => {
      return (
        specificProductsRequired.findIndex(
          (item) => item.name === productItem.name
        ) === index
      );
    })
    .slice(0, 4)
    .map((item, index) => {
      return (
        <InstrumentsGalleryItem
          key={item.id}
          id={item.id}
          index={index}
          name={item.name}
          img={item.colorsAvailable[0].images[0]}
          onClick={() => {
            handleClickInstrument(item.id);
          }}
        />
      );
    });

  const colorSelector = instrumentDisplayed.colorsAvailable.map(
    (productColor, productIndex) => {
      const colorId = productIndex;
      const colorStyle = `w-5 h-5 rounded-full border-2 border-primary hover:border-highlights hover:cursor-pointer`;
      return (
        <div
          key={colorId}
          id={productIndex}
          className={colorStyle}
          style={{ backgroundColor: productColor.color }}
          onClick={() => {
            handleColorClick(productColor);
          }}
        ></div>
      );
    }
  );

  return (
    <div className="relative flex flex-col h-full">
      <h3 className="h-24 uppercase font-semibold m-auto px-8 text-center pb-12 md:text-2xl lg:text-3xl">
        check out some of our coolest guitars!
      </h3>
      <div className="flex w-screen h-full relative">
        <button to="/">
          <BsHeart
            size={24}
            className="absolute top-6 right-10 z-20 text-primary hover:text-secondary"
          ></BsHeart>
        </button>

        <div className="w-1/6 h-1/3 flex flex-col z-10 lg:w-1/3 lg:h-full">
          {productsToBeDisplayed}
        </div>

        <div className="absolute inset-0 h-full flex-1 bg-textcolor text-primary flex flex-col justify-center lg:static">
          <div
            className="w-screen h-4/5 absolute bg-textcolor right-0 lg:w-3/4"
            style={instrumentDisplayedBg}
          ></div>
          <div className="h-4/5 flex flex-col justify-center items-center lg:flex-row lg:justify-start">
            <div className="flex justify-center items-end h-1/2 md:h-auto md:pt-40 lg:justify-start lg:h-auto lg:pt-0">
              <img
                src={instrumentDisplayedImage}
                alt="instrument image"
                className="drop-shadow-5xl -rotate-90 z-10 lg:w-5/6"
              />
            </div>

            <div className="flex-1 flex flex-col gap-4 pb-8 justify-end items-center">
              <div className="flex flex-col gap-4 items-center justify-center xl:flex-row">
                <div className="uppercase text-2xl text-center font-extrabold tracking-tighter z-10 lg:pr-8 lg:text-5xl xl:text-7xl">
                  {instrumentDisplayed.brand}
                </div>
                <div className="uppercase text-base text-center font-extrabold tracking-tighter z-10 lg:pr-8 xl:text-xl">
                  {instrumentDisplayed.name}
                </div>
              </div>

              <div className="flex gap-4 z-10 lg:pr-8">{colorSelector}</div>
            </div>
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-0 text-primary z-20 flex md:left-2/3 md:right-0 lg:left-3/4">
          <Link
            to={`/products/id/${instrumentDisplayed.id}`}
            className="flex-1 flex justify-center py-4 px-6 bg-highlights text-textcolor hover:bg-primary md:flex-auto md:py-4 md:px-2"
          >
            <button className="uppercase font-semibold">More info</button>
          </Link>

          <button
            className="flex-1 py-4 px-6 uppercase font-semibold bg-secondary text-textcolor hover:bg-secondarylight md:flex-auto md:py-4 md:px-2"
            onClick={handleAddToCartClick}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default InstrumentsGallery;
