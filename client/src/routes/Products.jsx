import { useEffect, useState } from "react";
import useProducts from "../hooks/useProducts";
import useFavorites from "../hooks/useFavorites";

import { NavLink, Link, useParams } from "react-router-dom";
import LoadingScreen from "../components/LoadingScreen";
import SortingDropdown from "../components/SortingDropdown";
import MobileFilter from "../components/MobileFilter";

import { BsHeart, BsFillHeartFill } from "react-icons/bs";

function Products({ category }) {
  const {
    isLoading,
    getAllProducts,
    allStockProducts,
    getSpecificCategory,
    specificCategoryRequired,
    searchResult,
    searchProducts,
  } = useProducts();
  const {
    allFavoriteProducts,
    addProductToFavorites,
    removeProductFromFavorites,
    getAllFavorites,
  } = useFavorites();
  const [productsData, setProductsData] = useState([]);
  const [productsToBeDisplayed, setProductsToBeDisplayed] = useState([]);
  const [numberItemsToBeDisplayed, setNumberItemsToBeDisplayed] = useState(12);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isFiltering, setIsFiltering] = useState(false);
  const [filteringOptions, setFilteringOptions] = useState({
    type: [],
    brand: [],
    color: [],
  });
  const sortingOptions = [
    { label: "Most Recent", value: "most-recent" },
    { label: "Lowest Price", value: "price-asc" },
    { label: "Highest Price", value: "price-desc" },
    { label: "A to Z", value: "alphabetical-asc" },
    { label: "Z to A", value: "alphabetical-desc" },
  ];
  const [activeOption, setActiveOption] = useState(sortingOptions[0]);
  const [sortingOrderDescending, setSortingOrderDescending] = useState(false);
  const { searchTerm } = useParams();

  let renderedItems = [];
  let renderedTypes = [];
  let renderedBrands = [];
  let renderedColors = [];

  useEffect(() => {
    if (!isLoading) {
      window.scrollTo(0, 0);
    }
  }, [isLoading]);

  useEffect(() => {
    async function fetchData() {
      if (category == "all") {
        await getAllProducts();
      } else if (category == "search") {
        await searchProducts(searchTerm);
      } else {
        await getSpecificCategory(category);
      }
    }

    fetchData();
  }, [
    getAllProducts,
    getSpecificCategory,
    category,
    searchProducts,
    searchTerm,
  ]);

  useEffect(() => {
    const getSortValue = (objectToBeSorted) => {
      if (
        activeOption.value === "price-asc" ||
        activeOption.value === "price-desc"
      ) {
        return objectToBeSorted.unitPrice;
      } else if (
        activeOption.value === "alphabetical-asc" ||
        activeOption.value === "alphabetical-desc"
      ) {
        return objectToBeSorted.name;
      } else if (activeOption.value === "most-recent") {
        return objectToBeSorted.createdAt;
      }
    };

    const sortData = (productsToSort) => {
      const sortedItems = [...productsToSort].sort((a, b) => {
        const valueA = getSortValue(a);
        const valueB = getSortValue(b);

        const reverseOrder = sortingOrderDescending ? -1 : 1;

        if (typeof valueA === "number") {
          return (valueA - valueB) * reverseOrder;
        } else if (typeof valueA === "string") {
          return valueA.localeCompare(valueB) * reverseOrder;
        }
      });

      return sortedItems;
    };

    if (category == "all" && !isFiltering) {
      setProductsData(allStockProducts);
      setProductsToBeDisplayed(sortData(allStockProducts));
    } else if (category == "search" && !isFiltering) {
      setProductsData(searchResult);
      setProductsToBeDisplayed(sortData(searchResult));
    } else if (!isFiltering) {
      setProductsData(specificCategoryRequired);
      setProductsToBeDisplayed(sortData(specificCategoryRequired));
    } else if (isFiltering) {
      setProductsToBeDisplayed(sortData(filteredProducts));
    }
  }, [
    activeOption,
    sortingOrderDescending,
    allStockProducts,
    specificCategoryRequired,
    searchResult,
    category,
    isFiltering,
    filteredProducts,
  ]);

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
    let productsToFilter = [...productsData];
    if (filteringOptions.type.length > 0) {
      productsToFilter = productsToFilter.filter((product) =>
        filteringOptions.type.includes(product.type)
      );
    }
    if (filteringOptions.brand.length > 0) {
      productsToFilter = productsToFilter.filter((product) =>
        filteringOptions.brand.includes(product.brand)
      );
    }
    if (filteringOptions.color.length > 0) {
      productsToFilter = productsToFilter.filter((product) =>
        filteringOptions.color.includes(product.color)
      );
    }

    setFilteredProducts(productsToFilter);
    setProductsToBeDisplayed(productsToFilter);

    setIsFiltering(
      filteringOptions.type.length > 0 ||
        filteringOptions.brand.length > 0 ||
        filteringOptions.color.length > 0
    );
  };

  const handleAddToFavoritesClick = async (id) => {
    await addProductToFavorites(id);
  };

  const handleRemoveFromFavoriteClick = async (id) => {
    await removeProductFromFavorites(id);

    getAllFavorites();
  };

  renderedItems.push(
    productsToBeDisplayed
      .slice(0, numberItemsToBeDisplayed)
      .map((product, index) => {
        return (
          <div
            key={index}
            className="relative flex flex-col w-3/4 h-96 justify-between items-start md:w-2/5 lg:w-1/4"
          >
            <Link
              to={`/products/id/${product.id}`}
              className="h-96 flex flex-col"
            >
              <div className="flex-1 px-8 relative flex justify-center items-center">
                <div className="absolute inset-0 flex justify-center items-center bg-highlights -z-50"></div>
                <img
                  src={`../../${product.images[0]}`}
                  alt="product image"
                  className="w-auto max-h-48"
                />
              </div>
              <div className="h-32 flex flex-col py-2 gap-2">
                <h4 className="inline-block uppercase font-semibold">
                  {product.name}
                </h4>
                <p>R${product.unitPrice}</p>
              </div>
            </Link>

            <div className="absolute top-4 right-4 z-40 hover:cursor-pointer hover:text-secondary">
              {allFavoriteProducts.some(
                (favProduct) => favProduct.id == product.id
              ) ? (
                <BsFillHeartFill
                  onClick={() => {
                    handleRemoveFromFavoriteClick(Number(product.id));
                  }}
                ></BsFillHeartFill>
              ) : (
                <BsHeart
                  onClick={() => {
                    handleAddToFavoritesClick(Number(product.id));
                  }}
                ></BsHeart>
              )}
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
      <label key={index} className="flex gap-2 hover:cursor-pointer">
        <input
          type="checkbox"
          checked={filteringOptions.type.includes(type)}
          onChange={() => handleFilteringOptionClick("type", type)}
          className="accent-secondary bg-secondary rounded cursor-pointer"
          name={type}
          id={index}
        />
        {type}
      </label>
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
      <label key={index} className="flex gap-2 hover:cursor-pointer">
        <input
          type="checkbox"
          checked={filteringOptions.brand.includes(brand)}
          onChange={() => handleFilteringOptionClick("brand", brand)}
          className="accent-secondary bg-secondary rounded cursor-pointer"
          name={brand}
          id={index}
        />
        {brand}
      </label>
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
    return <LoadingScreen />;
  } else {
    return (
      <div className="relative mt-36 w-screen min-h-screen mx-auto flex justify-end">
        <div className="fixed top-36 bottom-60 left-0 w-1/5 max-h-screen overflow-y-auto hidden flex-col gap-8 justify-start items-start mx-auto px-8 lg:flex">
          <div className="flex flex-col items-start self-start">
            <h4 className="text-lg font-bold uppercase">category</h4>
            <NavLink
              to="../../products/all"
              className={({ isActive }) => (isActive ? "text-secondary" : "")}
            >
              <div>All</div>
            </NavLink>
            <NavLink
              to="../../products/percussion"
              className={({ isActive }) => (isActive ? "text-secondary" : "")}
            >
              <div>Percussion</div>
            </NavLink>
            <NavLink
              to="../../products/stringed"
              className={({ isActive }) => (isActive ? "text-secondary" : "")}
            >
              <div>Stringed</div>
            </NavLink>
            <NavLink
              to="../../products/wind"
              className={({ isActive }) => (isActive ? "text-secondary" : "")}
            >
              <div>Wind</div>
            </NavLink>
            <NavLink
              to="../../products/keyboard"
              className={({ isActive }) => (isActive ? "text-secondary" : "")}
            >
              <div>Keyboard</div>
            </NavLink>
            <NavLink
              to="../../products/accessories"
              className={({ isActive }) => (isActive ? "text-secondary" : "")}
            >
              <div>Accessories</div>
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

        <div className="flex flex-col items-center mb-4 lg:w-4/5 lg:border-l lg:border-solid lg:border-highlights">
          <div className="flex flex-wrap justify-start gap-4 ml-20">
            <div className="flex gap-2 justify-end items-center w-3/4 ml-8 mb-4">
              <span className="uppercase">Sort by:</span>
              <SortingDropdown
                options={sortingOptions}
                activeOption={activeOption}
                setActiveOption={setActiveOption}
                setSortingOrderDescending={setSortingOrderDescending}
              />

              <MobileFilter
                className="lg:hidden"
                renderedTypes={renderedTypes}
                renderedBrands={renderedBrands}
                renderedColors={renderedColors}
              />
            </div>

            {productsToBeDisplayed.length > 0
              ? renderedItems
              : noProductsFoundMessage}

            <div className="flex gap-2 justify-center items-center w-3/4 ml-8">
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
      </div>
    );
  }
}

export default Products;
