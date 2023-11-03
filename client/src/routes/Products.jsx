import { useEffect, useState } from "react";
import useProducts from "../hooks/useProducts";

import { NavLink } from "react-router-dom";

import logo from "../assets/ph-icon.png";
import { BsHeart } from "react-icons/bs";

function Products({ category }) {
  const {
    isLoading,
    getAllProducts,
    allStockProducts,
    getSpecificCategory,
    specificCategoryRequired,
  } = useProducts();
  const [productsToBeDisplayed, setProductsToBeDisplayed] = useState([]);
  const [numberItemsToBeDisplayed, setNumberItemsToBeDisplayed] = useState(4);

  let renderedItems = [];
  let renderedColors = [];

  useEffect(() => {
    async function fetchData() {
      if (category == "all") {
        await getAllProducts();
      } else {
        await getSpecificCategory(category);
      }
    }

    fetchData();
  }, [getAllProducts, getSpecificCategory, category]);

  useEffect(() => {
    if (category == "all") {
      setProductsToBeDisplayed(allStockProducts);
    } else {
      setProductsToBeDisplayed(specificCategoryRequired);
    }
  }, [allStockProducts, specificCategoryRequired, category]);

  productsToBeDisplayed
    .slice(0, numberItemsToBeDisplayed)
    .map((product, index) => {
      renderedItems.push(
        product.colorsAvailable.map((productColor, index) => {
          return (
            <div
              key={index}
              className="flex flex-col w-1/4 h-96 justify-between items-start"
            >
              <div className="flex-1 px-8 relative flex justify-center items-center">
                <div className="absolute inset-0 flex justify-center items-center bg-highlights -z-50"></div>
                <div className="absolute top-4 right-4 hover:cursor-pointer hover:text-secondary">
                  <BsHeart></BsHeart>
                </div>
                <img
                  src={`../${productColor.images[0]}`}
                  alt="product image"
                  className="w-full h-auto"
                />
              </div>
              <div className="min-h-32 flex flex-col py-2 gap-2">
                <h4 className="uppercase font-semibold">{product.name}</h4>
                <p>R${product.unitPrice}</p>
              </div>
            </div>
          );
        })
      );

      renderedItems = renderedItems.slice(0, 8);
      return renderedItems;
    });

  let allColors = [];
  productsToBeDisplayed.map((product) => {
    for (let i = 0; i < product.colorsAvailable.length; i++) {
      if (!allColors.includes(product.colorsAvailable[i].color)) {
        allColors.push(product.colorsAvailable[i].color);
      }
    }
  });

  renderedColors = allColors.map((color, index) => {
    return (
      <div
        key={index}
        className="h-6 w-6 border border-solid rounded-full"
        style={{ backgroundColor: color }}
      ></div>
    );
  });

  const noProductsFoundMessage = (
    <div className="flex items-start mx-auto">
      <span>Sorry, no products found...</span>
    </div>
  );

  const handleLoadMoreClick = () => {
    setNumberItemsToBeDisplayed(numberItemsToBeDisplayed + 4);
  };

  if (isLoading) {
    return (
      <div className="h-screen w-screen flex justify-center items-center bg-primary text-secondary z-50">
        <img
          src={logo}
          alt="logo perfect harmony"
          className="motion-reduce:animate-spin"
          width={150}
        />
      </div>
    );
  } else {
    return (
      <div className="relative mt-48 w-screen min-h-screen mx-auto flex justify-end">
        <div className="fixed top-48 bottom-72 left-0 w-1/4 flex flex-col gap-8 justify-start items-start px-24 border-r border-solid border-textcolor">
          <div className="flex flex-col items-start self-start">
            <h4 className="text-lg font-bold uppercase">categories</h4>
            <NavLink
              to="../products/all"
              className={({ isActive }) => (isActive ? "text-secondary" : "")}
            >
              <div>All</div>
            </NavLink>
            <NavLink
              to="../products/percussion"
              className={({ isActive }) => (isActive ? "text-secondary" : "")}
            >
              <div>Percussion</div>
            </NavLink>
            <NavLink
              to="../products/stringed"
              className={({ isActive }) => (isActive ? "text-secondary" : "")}
            >
              <div>Stringed</div>
            </NavLink>
            <NavLink
              to="../products/wind"
              className={({ isActive }) => (isActive ? "text-secondary" : "")}
            >
              <div>Wind</div>
            </NavLink>
            <NavLink
              to="../products/keyboard"
              className={({ isActive }) => (isActive ? "text-secondary" : "")}
            >
              <div>Keyboard</div>
            </NavLink>
          </div>

          <div className="flex flex-col items-start self-start">
            <h4 className="text-lg font-bold uppercase">colors</h4>
            <div className="flex flex-wrap gap-4">{renderedColors}</div>
          </div>
        </div>
        <div className="w-3/4 flex flex-col items-center">
          <div className="flex flex-wrap justify-start gap-4 pl-20">
            {renderedItems.length > 0 ? renderedItems : noProductsFoundMessage}
          </div>
          <div>
            {productsToBeDisplayed.length > numberItemsToBeDisplayed && (
              <button
                onClick={handleLoadMoreClick}
                className="p-4 my-4 bg-secondary uppercase hover:bg-secondarylight"
              >
                Load more
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Products;
