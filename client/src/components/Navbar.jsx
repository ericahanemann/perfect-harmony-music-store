import { Link } from "react-router-dom";
import logo from "../assets/ph-logo.png";
import { BsCart3, BsHeart } from "react-icons/bs";

function Navbar() {
  return (
    <div className="bg-primary fixed top-0 inset-x-0 z-10">
      <nav className="flex justify-between items-center px-4 text- font-semibold uppercase">
        <Link to="/">
          <img src={logo} alt="perfect harmony logo" width={80} />
        </Link>

        <div className="flex gap-6">
          <Link
            to="/"
            className="hover:text-secondary ease-in-out duration-200"
          >
            Home
          </Link>
          <Link
            to="products"
            className="hover:text-secondary ease-in-out duration-200"
          >
            Products
          </Link>
        </div>

        <div className="flex items-center gap-6 font-extrabold">
          <Link
            to="/"
            className="align-middle hover:text-secondary ease-in-out duration-200"
          >
            <BsHeart className="text-xl text-bold"></BsHeart>
          </Link>
          <Link
            to="/"
            className="align-middle hover:text-secondary ease-in-out duration-200"
          >
            <BsCart3 className="text-xl text-bold"></BsCart3>
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
