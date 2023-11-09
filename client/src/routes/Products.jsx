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
  const [productsData, setProductsData] = useState([]);
  const [productsToBeDisplayed, setProductsToBeDisplayed] = useState([]);
  const [numberItemsToBeDisplayed, setNumberItemsToBeDisplayed] = useState(12);
  const [isFiltering, setIsFiltering] = useState(false);
  const [filteringOptions, setFilteringOptions] = useState({
    type: [],
    brand: [],
    color: [],
  });

  let renderedItems = [];
  let renderedTypes = [];
  let renderedBrands = [];
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
      setProductsData(allStockProducts);
      setProductsToBeDisplayed(allStockProducts);
    } else {
      setProductsData(specificCategoryRequired);
      setProductsToBeDisplayed(specificCategoryRequired);
    }
  }, [allStockProducts, specificCategoryRequired, category, isFiltering]);

  const handleFilteringOptionClick = (
    filteringOptionLabel,
    filteringOptionValue
  ) => {
    setIsFiltering(true);

    const updatedFilteringOptions = { ...filteringOptions };
    if (filteringOptionLabel == "type") {
      if (!updatedFilteringOptions.type.includes(filteringOptionValue)) {
        updatedFilteringOptions.type.push(filteringOptionValue);
      } else {
        updatedFilteringOptions.type = updatedFilteringOptions.type.filter(
          (type) => type !== filteringOptionValue
        );
      }
    } else if (filteringOptionLabel == "brand") {
      if (!updatedFilteringOptions.brand.includes(filteringOptionValue)) {
        updatedFilteringOptions.brand.push(filteringOptionValue);
      } else {
        updatedFilteringOptions.brand = updatedFilteringOptions.brand.filter(
          (brand) => brand !== filteringOptionValue
        );
      }
    } else if (filteringOptionLabel == "color") {
      if (!updatedFilteringOptions.color.includes(filteringOptionValue)) {
        updatedFilteringOptions.color.push(filteringOptionValue);
      } else {
        updatedFilteringOptions.color = updatedFilteringOptions.color.filter(
          (color) => color !== filteringOptionValue
        );
      }
    }

    setFilteringOptions(updatedFilteringOptions);
    filterProducts(updatedFilteringOptions);
  };

  const filterProducts = (filteringOptions) => {
    let filteredProducts = [...productsData];
    if (filteringOptions.type.length > 0) {
      filteredProducts = filteredProducts.filter((product) =>
        filteringOptions.type.includes(product.type)
      );
    }
    if (filteringOptions.brand.length > 0) {
      filteredProducts = filteredProducts.filter((product) =>
        filteringOptions.brand.includes(product.brand)
      );
    }
    if (filteringOptions.color.length > 0) {
      filteredProducts = filteredProducts.filter((product) =>
        filteringOptions.color.includes(product.color)
      );
    }

    setProductsToBeDisplayed(filteredProducts);
  };

  renderedItems.push(
    productsToBeDisplayed
      .slice(0, numberItemsToBeDisplayed)
      .map((product, index) => {
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
                src={`../${product.images[0]}`}
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

  let allTypes = [];
  productsData.map((product) => {
    if (!allTypes.includes(product.type)) {
      allTypes.push(product.type);
    }
  });

  renderedTypes = allTypes.map((type, index) => {
    return (
      <div
        key={index}
        className="flex gap-2 hover:cursor-pointer"
        onClick={() => {
          handleFilteringOptionClick("type", type);
        }}
      >
        <input
          type="checkbox"
          checked={filteringOptions.type.includes(type)}
          className="accent-secondary bg-secondary rounded cursor-pointer"
          name={type}
          id={index}
        />
        {type}
      </div>
    );
  });

  let allBrands = [];
  productsData.map((product) => {
    if (!allBrands.includes(product.brand)) {
      allBrands.push(product.brand);
    }
  });

  renderedBrands = allBrands.map((brand, index) => {
    return (
      <div
        key={index}
        className="flex gap-2 hover:cursor-pointer"
        onClick={() => {
          handleFilteringOptionClick("brand", brand);
        }}
      >
        <input
          type="checkbox"
          checked={filteringOptions.brand.includes(brand)}
          className="accent-secondary bg-secondary rounded cursor-pointer"
          name={brand}
          id={index}
        />
        {brand}
      </div>
    );
  });

  let allColors = [];

  productsData.map((product) => {
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
        className={`h-6 w-6 border-2 border-solid rounded-full hover:cursor-pointer ${
          filteringOptions.color.includes(color) ? "border-secondary" : ""
        }`}
        style={{ backgroundColor: color }}
        onClick={() => {
          handleFilteringOptionClick("color", color);
        }}
      ></div>
    );
  });

  const noProductsFoundMessage = (
    <div className="flex items-start mx-auto">
      <span>Sorry, no products found...</span>
    </div>
  );

  const handleLoadMoreClick = () => {
    setNumberItemsToBeDisplayed(numberItemsToBeDisplayed + 12);
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
      <div className="relative mt-36 w-screen min-h-screen mx-auto flex justify-end">
        <div className="fixed top-36 bottom-64 left-0 w-1/5 max-h-screen overflow-y-auto flex flex-col gap-8 justify-start items-start px-24">
          <div className="flex flex-col items-start self-start">
            <h4 className="text-lg font-bold uppercase">category</h4>
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
            <h4 className="text-lg font-bold uppercase">Type</h4>
            <div className="flex flex-col">{renderedTypes}</div>
          </div>

          <div className="flex flex-col items-start self-start">
            <h4 className="text-lg font-bold uppercase">brand</h4>
            <div className="flex flex-col">{renderedBrands}</div>
          </div>

          <div className="flex flex-col items-start self-start">
            <h4 className="text-lg font-bold uppercase">color</h4>
            <div className="flex flex-wrap gap-4">{renderedColors}</div>
          </div>
        </div>

        <div className="w-4/5 flex flex-col items-center border-l border-solid border-highlights mb-4">
          <div className="flex flex-wrap justify-start gap-4 pl-20">
            {productsToBeDisplayed.length > 0
              ? renderedItems
              : noProductsFoundMessage}
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
