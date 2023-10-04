import { Link } from "react-router-dom";
import logo from "../assets/ph-logo.png";

function Navbar() {
  return (
    <nav>
      <Link to="/">
        <img src={logo} alt="perfect harmony logo" />
      </Link>

      <div>
        <Link to="/">Home</Link>
        <Link to="products">Products</Link>
      </div>
    </nav>
  );
}

export default Navbar;
