import { BsX } from "react-icons/bs";
import useCart from "../hooks/useCart";
import { useRef, useState } from "react";
import { BsDash, BsPlus } from "react-icons/bs";

function CartItem({
  itemId,
  itemImg,
  itemName,
  colorSelected,
  itemPrice,
  stockAmount,
  amount,
  setProductsToBeDisplayed,
}) {
  const {
    isLoadingCart,
    removeProductFromCart,
    updateCartProductAmount,
  } = useCart();
  const [productAmountCounter, setProductAmountCounter] = useState(amount);
  const itemRef = useRef(null);

  const handleRemoveItemFromCartClick = async (id) => {
    if (itemRef.current) {
      itemRef.current.classList.remove("flex");
      itemRef.current.classList.add("hidden");
    }

    await removeProductFromCart(id);

    setProductsToBeDisplayed((prevProducts) => {
      return prevProducts.filter((product) => product.productId !== id);
    });
  };

  const handleMinusClick = () => {
    if (productAmountCounter > 1) {
      const newAmount = productAmountCounter - 1;
      setProductAmountCounter(newAmount);

      updateCartProductAmount(itemId, -1);
    }
  };

  const handlePlusClick = () => {
    if (productAmountCounter < stockAmount) {
      const newAmount = productAmountCounter + 1;
      setProductAmountCounter(newAmount);

      updateCartProductAmount(itemId, 1);
    }
  };

  if (!isLoadingCart) {
    return (
      <div className="flex flex-col" ref={itemRef}>
        <div className="relative flex gap-4 p-4 pr-8 border-t-2 border-t-highlights">
          <div className="w-2/5 h-28 p-1 flex justify-center items-center bg-highlights">
            <img
              className="w-full h"
              src={`../../${itemImg}`}
              alt={`${itemImg} image`}
            />
          </div>

          <div className="w-3/5 flex flex-col items-start gap-1">
            <h6 className="font-bold pr-4">{itemName}</h6>
            <p className="text-secondary">R${itemPrice}</p>
            <div className="flex gap-2 items-center">
              <span>Color:</span>
              <div
                className={`w-4 h-4 rounded-full`}
                style={{ backgroundColor: colorSelected }}
              ></div>
            </div>
            <div className="flex gap-2">
              <p>Amount:</p>
              <div className="h-8 flex gap-2 items-center justify-center">
                <div
                  className="w-6 h-full flex items-center justify-center hover:cursor-pointer"
                  onClick={() => {
                    handleMinusClick(0);
                  }}
                >
                  <BsDash />
                </div>
                <div className="w-6 h-full border border-highlights flex items-center justify-center">
                  {productAmountCounter}
                </div>
                <div
                  className="w-6 h-full flex items-center justify-center hover:cursor-pointer"
                  onClick={() => {
                    handlePlusClick();
                  }}
                >
                  <BsPlus />
                </div>
              </div>
            </div>
            <button
              className="absolute top-4 right-4 text-lg"
              onClick={() => handleRemoveItemFromCartClick(itemId)}
            >
              <BsX size={25}></BsX>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default CartItem;
