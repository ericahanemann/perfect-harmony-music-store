import { useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/ph-icon.png";
import { BsCart3, BsHeart, BsXLg, BsSearch } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import Cart from "../components/Cart";
import useProducts from "../hooks/useProducts";

function Navbar() {
  const { searchProducts } = useProducts();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const searchInput = useRef(null);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    searchInput.current.value = "";
    await searchProducts(searchTerm);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const handleOpenCart = () => {
    setShowCart(true);
  };

  return (
    <div className="bg-primary fixed top-0 inset-x-0 z-50 w-screen overflow-x-hidden">
      <nav className="flex justify-between items-center px-4 font-semibold uppercase h-20">
        <NavLink to="/">
          <img src={logo} alt="perfect harmony logo" className="w-16 lg:w-20" />
        </NavLink>

        <div className="hidden gap-6 lg:flex">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-secondary"
                : "hover:text-secondary ease-in-out duration-200"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="products/all"
            className={({ isActive }) =>
              isActive
                ? "text-secondary"
                : "hover:text-secondary ease-in-out duration-200"
            }
          >
            Products
          </NavLink>
        </div>

        <div className="flex items-center gap-6 mr-6 font-extrabold">
          <NavLink
            to="/favorites"
            className={`${
              isMobileMenuOpen ? "hidden" : "flex"
            } align-middle hover:text-secondary ease-in-out duration-200`}
          >
            <BsHeart className="text-xl text-bold"></BsHeart>
          </NavLink>

          <BsCart3
            className="text-xl text-bold hover:cursor-pointer"
            onClick={() => {
              handleOpenCart();
            }}
          ></BsCart3>

          <form
            onSubmit={handleSubmit}
            method="post"
            className="d-flex"
            id="searchForm"
          >
            <div className="relative">
              <input
                ref={searchInput}
                type="text"
                className="border border-inputColor rounded-sm outline-none p-2 font-light text-xs text-inputColor placeholder:text-inputColor hover:border-secondary focus:border-secondary autofill:bg-primary"
                onChange={handleInputChange}
                name="valorPesquisa"
                id="valorPesquisa"
                placeholder="Search for"
              ></input>
              <button
                className="absolute right-2 top-2 text-inputColor"
                type="submit"
              >
                <BsSearch></BsSearch>
              </button>
            </div>
          </form>

          <button
            className="align-middle hover:text-secondary ease-in-out duration-200 lg:hidden"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? (
              <BsXLg
                className="text-xl text-bold z-50 absolute right-8 top-8"
                size={20}
              />
            ) : (
              <RxHamburgerMenu className="text-xl text-bold" size={24} />
            )}
          </button>
        </div>

        <div
          className={`transition-opacity ease-in-out duration-500 gap-6 ${
            isMobileMenuOpen ? "flex opacity-100" : "hidden opacity-0"
          } flex-col fixed h-80 z-50 bg-primary inset-x-0 top-20 bottom-0 justify-center items-center shadow-lg lg:hidden`}
        >
          <NavLink
            to="/"
            className="hover:text-secondary ease-in-out duration-200"
            onClick={closeMobileMenu}
          >
            Home
          </NavLink>

          <NavLink
            to="products/all"
            className="hover:text-secondary ease-in-out duration-200"
            onClick={closeMobileMenu}
          >
            Products
          </NavLink>

          <NavLink
            to="/favorites"
            className="hover:text-secondary ease-in-out duration-200"
          >
            Favorites
          </NavLink>
        </div>
      </nav>

      <div id="marquee" className="bg-textcolor text-primary">
        <div id="marquee-text" className="flex overflow-hidden">
          <div className="marquee-item inline-block mx-32">
            Get 10% OFF on your first purchase using the coupon
            <span className="text-secondary p-1">10OFF</span>.
          </div>
          <div className="marquee-item inline-block mx-32">
            Free shipping on orders over $500.
          </div>
          <div className="marquee-item inline-block mx-32">
            Limited-time offer:{" "}
            <span className="text-secondary p-1">Save up to 20%</span> on
            selected instruments!
          </div>
        </div>

        <div id="marquee-text" className="flex overflow-hidden">
          <div className="marquee-item inline-block mx-32">
            Get 10% OFF on your first purchase using the coupon
            <span className="text-secondary p-1">10OFF</span>.
          </div>
          <div className="marquee-item inline-block mx-32">
            Free shipping on orders over $500.
          </div>
          <div className="marquee-item inline-block mx-32">
            Limited-time offer:{" "}
            <span className="text-secondary p-1">Save up to 20%</span> on
            selected instruments!
          </div>
        </div>
      </div>

      {showCart && <Cart showCart={showCart} setShowCart={setShowCart} />}
    </div>
  );
}

export default Navbar;
