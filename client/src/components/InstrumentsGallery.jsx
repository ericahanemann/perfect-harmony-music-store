import { useState } from "react";
import { Link } from "react-router-dom";
import InstrumentsGalleryItem from "./InstrumentsGalleryItem";
import { BsHeart } from "react-icons/bs";

function InstrumentsGallery({ specificProductsRequired }) {
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

  const handleClickInstrument = (instrumentClickedId) => {
    specificProductsRequired.forEach((product) => {
      if (product.id == instrumentClickedId) {
        setInstrumentDisplayed(product);
        setInstrumentDisplayedImage(product.colorsAvailable[0].images[0]);
      }
    });
  };

  const handleColorClick = (colorId) => {
    setInstrumentDisplayedImage(
      instrumentDisplayed.colorsAvailable[colorId].images[0]
    );
    console.log(instrumentDisplayed.colorsAvailable[colorId].images[0]);
  };

  const productsToBeDisplayed = specificProductsRequired.map(
    (productItem, productIndex) => {
      if (productIndex <= 3) {
        //max of four instruments displayed
        return (
          <InstrumentsGalleryItem
            key={productItem.id}
            id={productItem.id}
            index={productIndex}
            name={productItem.name}
            img={productItem.colorsAvailable[0].images[0]}
            onClick={() => {
              handleClickInstrument(productItem.id);
            }}
          />
        );
      }
    }
  );

  const colorSelector = instrumentDisplayed.colorsAvailable.map(
    (productColor, productIndex) => {
      const colorId = productIndex;
      console.log(productColor.color);
      const colorStyle = `w-5 h-5 rounded-full border-2 border-primary hover:border-highlights hover:cursor-pointer`;
      return (
        <div
          key={colorId}
          id={productIndex}
          className={colorStyle}
          style={{ backgroundColor: productColor.color }}
          onClick={() => {
            handleColorClick(colorId);
          }}
        ></div>
      );
    }
  );

  return (
    <div className="flex w-screen relative">
      <button to="/">
        <BsHeart
          size={24}
          className="absolute top-6 right-6 z-20 text-primary hover:text-secondary"
        ></BsHeart>
      </button>

      <div className="w-1/3 flex flex-col z-10">{productsToBeDisplayed}</div>

      <div className="flex-1 bg-textcolor text-primary flex flex-col justify-center relative">
        <div
          className="w-3/4 h-4/5 absolute bg-textcolor right-0"
          style={instrumentDisplayedBg}
        ></div>
        <div className="flex justify-start items-center">
          <div>
            <img
              src={instrumentDisplayedImage}
              alt="instrument image"
              className="drop-shadow-5xl -rotate-90 w-5/6 z-10"
            />
          </div>

          <div className="flex flex-col gap-4 justify-center items-center">
            <div className="flex gap-4 items-center">
              <div className="uppercase text-7xl font-extrabold tracking-tighter z-10">
                {instrumentDisplayed.brand}
              </div>
              <div className="uppercase text-xl font-extrabold tracking-tighter z-10 pr-8">
                {instrumentDisplayed.name}
              </div>
            </div>

            <div className="flex gap-4 z-10">{colorSelector}</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 text-primary z-20 flex">
        <button className="py-4 px-6 uppercase font-semibold bg-highlights text-textcolor hover:bg-primary">
          <Link to="/">More info</Link>
        </button>
        <button className="py-4 px-6 uppercase font-semibold bg-secondary text-textcolor hover:bg-secondarylight">
          Add to chart
        </button>
      </div>
    </div>
  );
}

export default InstrumentsGallery;
