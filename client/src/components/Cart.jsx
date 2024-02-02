import { useEffect, useRef, useState } from "react";
import { BsX } from "react-icons/bs";
import useCart from "../hooks/useCart";
import CartItem from "./CartItem";

function Cart({ setShowCart }) {
  const { allCartProducts, isLoadingCart} = useCart();
  const cartRef = useRef(null);
  const [productsToBeDisplayed, setProductsToBeDisplayed] = useState(0);

  useEffect(() => {
    setProductsToBeDisplayed(allCartProducts);
  }, [allCartProducts]);

  const handleCloseCartClick = () => {
    if (cartRef.current) {
      cartRef.current.classList.add("animate-slideOut");
    }


    setTimeout(() => {
      setShowCart(false);
    }, 400);
  };

  if (!isLoadingCart) {
    const renderedCartItems = productsToBeDisplayed.map((item) => {
      return (
        <CartItem
          key={item.productId}
          itemId={item.productId}
          itemImg={item.productImg}
          itemName={item.productName}
          colorSelected={item.colorSelected}
          itemPrice={item.unitPrice}
          stockAmount={item.stockAmount}
          amount={item.amount}
          setProductsToBeDisplayed={setProductsToBeDisplayed}
        />
      );
    });

    return (
      <div className="fixed inset-0 flex z-50 overflow-x-hidden">
        <div
          className="bg-black opacity-40 absolute inset-0"
          onClick={handleCloseCartClick}
        ></div>

        <div
          className="w-96 absolute top-0 bottom-0 right-0 bg-primary animate-slideIn overflow-y-auto"
          ref={cartRef}
        >
          <div className="mt-12 w-full flex flex-col justify-center items-center">
            <button
              onClick={handleCloseCartClick}
              className="absolute top-6 right-4 font-extrabold"
            >
              <BsX size={35}></BsX>
            </button>
            <p className="text-secondary uppercase font-bold">
              {productsToBeDisplayed.length} items
            </p>
            <h3 className="font-bold uppercase text-2xl">cart</h3>
          </div>

          <div className="mt-8 mb-24">{renderedCartItems}</div>

          <button className="fixed bottom-0 right-0 w-80 bg-secondary my-4 mx-8 p-4 uppercase font-semibold hover:bg-secondarylight">
            finish
          </button>
        </div>
      </div>
    );
  }
}

export default Cart;
