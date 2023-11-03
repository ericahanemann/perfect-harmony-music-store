import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/ph-icon.png";
import { BsCart3, BsHeart, BsXLg } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";

function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <div className="bg-primary fixed top-0 inset-x-0 z-50 w-screen overflow-x-hidden">
      <nav className="flex justify-between items-center px-4 font-semibold uppercase h-20">
        <Link to="/">
          <img src={logo} alt="perfect harmony logo" className="w-16 lg:w-20" />
        </Link>

        <div className="hidden gap-6 lg:flex">
          <Link
            to="/"
            className="hover:text-secondary ease-in-out duration-200"
          >
            Home
          </Link>
          <Link
            to="products/all"
            className="hover:text-secondary ease-in-out duration-200"
          >
            Products
          </Link>
        </div>

        <div className="flex items-center gap-6 mr-6 font-extrabold">
          <Link
            to="/"
            className={`${
              isMobileMenuOpen ? "hidden" : "flex"
            } align-middle hover:text-secondary ease-in-out duration-200`}
          >
            <BsHeart className="text-xl text-bold"></BsHeart>
          </Link>
          <Link
            to="/"
            className={`${
              isMobileMenuOpen ? "hidden" : "flex"
            } align-middle hover:text-secondary ease-in-out duration-200`}
          >
            <BsCart3 className="text-xl text-bold"></BsCart3>
          </Link>

          <button
            className="align-middle hover:text-secondary ease-in-out duration-200 lg:hidden"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? (
              <BsXLg
                className="text-xl text-bold z-50 absolute right-10 top-8"
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
          <Link
            to="/"
            className="hover:text-secondary ease-in-out duration-200"
            onClick={closeMobileMenu}
          >
            Home
          </Link>

          <Link
            to="products"
            className="hover:text-secondary ease-in-out duration-200"
            onClick={closeMobileMenu}
          >
            Products
          </Link>

          <Link
            to="/"
            className="hover:text-secondary ease-in-out duration-200"
          >
            Favorites
          </Link>
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
    </div>
  );
}

export default Navbar;
