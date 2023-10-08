import { useState } from "react";
import stratocaster from "../assets/stratocaster.png";
import InstrumentsGalleryItem from "./InstrumentsGalleryItem";

function InstrumentsGallery({ specificProductsRequired }) {
  const [instrumentDisplayed, setInstrumentDisplayed] = useState(
    specificProductsRequired[0]
  );

  const onClick = (instrumentClickedId) => {
    specificProductsRequired.forEach((product) => {
      if (product.id == instrumentClickedId) {
        setInstrumentDisplayed(product);
      }
    });
  };

  const productsToBeDisplayed = specificProductsRequired.map(
    (productItem, productIndex) => {
      if (productIndex <= 3) {
        //max of four instruments displayed
        return (
          <InstrumentsGalleryItem
            key={productItem.id}
            id={productItem.id}
            name={productItem.name}
            img={stratocaster}
            onClick={() => {
              onClick(productItem.id);
            }}
          />
        );
      }
    }
  );

  return (
    <div className="flex w-screen">
      <div className="w-1/3 flex flex-col">{productsToBeDisplayed}</div>

      <div className="flex-1 bg-secondary">{instrumentDisplayed.name}</div>
    </div>
  );
}

export default InstrumentsGallery;
