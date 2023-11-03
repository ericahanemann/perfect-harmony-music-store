import { useEffect } from "react";
import useProducts from "../hooks/useProducts";

import { NavLink } from "react-router-dom";

import logo from "../assets/ph-icon.png";

function Products({ category }) {
  const {
    isLoading,
    getAllProducts,
    allStockProducts,
    getSpecificCategory,
    specificCategoryRequired,
  } = useProducts();
  let renderedItems = [];

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

  if (category == "all") {
    renderedItems = allStockProducts.map((product, index) => {
      return (
        <div
          key={index}
          className="flex flex-col w-1/4 max-h-96 justify-between items-start"
        >
          <div className="flex-1 px-8 relative flex justify-center items-center">
            <div className="absolute inset-0 flex justify-center items-center bg-highlights -z-50"></div>
            <img
              src={`../${product.colorsAvailable[0].images[0]}`}
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
    });
  } else {
    renderedItems = specificCategoryRequired.map((product, index) => {
      return (
        <div
          key={index}
          className="flex flex-col w-1/4 max-h-96 justify-between items-start"
        >
          <div className="flex-1 px-8 relative flex justify-center items-center">
            <div className="absolute inset-0 flex justify-center items-center bg-highlights -z-50"></div>
            <img
              src={`../${product.colorsAvailable[0].images[0]}`}
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
    });
  }

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
      <div className="mt-64 w-screen min-h-screen mx-auto flex">
        <div className="w-1/4 flex flex-col gap-8 justify-start items-start pl-24">
          <div className="flex flex-col items-start self-start">
            <h4 className="text-lg font-bold uppercase">categories</h4>
            <NavLink
              to="../products/all"
              className={({ isActive }) => (isActive ? "text-secondary" : "")}
            >
              <div>all</div>
            </NavLink>
            <NavLink
              to="../products/percussion"
              className={({ isActive }) => (isActive ? "text-secondary" : "")}
            >
              <div>percussion</div>
            </NavLink>
            <NavLink
              to="../products/stringed"
              className={({ isActive }) => (isActive ? "text-secondary" : "")}
            >
              <div>stringed</div>
            </NavLink>
            <NavLink
              to="../products/wind"
              className={({ isActive }) => (isActive ? "text-secondary" : "")}
            >
              <div>wind</div>
            </NavLink>
            <NavLink
              to="../products/keyboard"
              className={({ isActive }) => (isActive ? "text-secondary" : "")}
            >
              <div>keyboard</div>
            </NavLink>
          </div>

          <div className="flex flex-col items-start self-start">
            <h4 className="text-lg font-bold uppercase">colors</h4>
            <NavLink
              to="../products/keyboard"
              className={({ isActive }) => (isActive ? "text-secondary" : "")}
            >
              <div>cor</div>
            </NavLink>
            <NavLink
              to="../products/keyboard"
              className={({ isActive }) => (isActive ? "text-secondary" : "")}
            >
              <div>cor</div>
            </NavLink>
            <NavLink
              to="../products/keyboard"
              className={({ isActive }) => (isActive ? "text-secondary" : "")}
            >
              <div>cor</div>
            </NavLink>
          </div>
        </div>
        <div className="w-3/4 flex flex-wrap gap-4">{renderedItems}</div>
      </div>
    );
  }
}

export default Products;
