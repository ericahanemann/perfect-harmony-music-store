import { Link } from "react-router-dom";
import { BsInstagram, BsFacebook, BsPinterest } from "react-icons/bs";

function Footer() {
  return (
    <footer className="bg-textcolor text-highlights flex flex-col justify-center items-center">
      <div className="flex justify-between w-4/5 m-auto p-6">
        <div className="flex flex-col">
          <h4 className="uppercase font-semibold mb-3 text-primar">
            categories
          </h4>
          <Link to="/" className="hover:text-primary">
            Percussion
          </Link>
          <Link to="/" className="hover:text-primary">
            Stringed
          </Link>
          <Link to="/" className="hover:text-primary">
            Wind
          </Link>
          <Link to="/" className="hover:text-primary">
            Keyboard
          </Link>
        </div>

        <div className="flex flex-col">
          <h4 className="uppercase font-semibold mb-3 text-primar">
            Help and support
          </h4>
          <Link to="/" className="hover:text-primary">
            Customer Service
          </Link>
          <Link to="/" className="hover:text-primary">
            Payment Methods
          </Link>
          <Link to="/" className="hover:text-primary">
            Delivery Methods
          </Link>
          <Link to="/" className="hover:text-primary">
            My Orders
          </Link>
          <Link to="/" className="hover:text-primary">
            Returns and Exchanges
          </Link>
        </div>

        <div className="flex flex-col">
          <h4 className="uppercase font-semibold mb-3 text-primar">About Us</h4>
          <Link to="/" className="hover:text-primary">
            Our History
          </Link>
          <Link to="/" className="hover:text-primary">
            Privacy Policy
          </Link>
          <Link to="/" className="hover:text-primary">
            Terms of Use
          </Link>
          <Link to="/" className="hover:text-primary">
            Corporate Sales
          </Link>
          <Link to="/" className="hover:text-primary">
            Become a Franchisee
          </Link>
        </div>

        <div className="flex flex-col">
          <h4 className="uppercase font-semibold mb-3 text-primary">
            follow perfect harmony:
          </h4>
          <div className="flex gap-6">
            <a href="https://www.instagram.com/" target="blank">
              <BsInstagram
                size={30}
                className="hover:text-secondary"
              ></BsInstagram>
            </a>
            <a href="https://facebook.com/" target="blank">
              <BsFacebook
                size={30}
                className="hover:text-secondary"
              ></BsFacebook>
            </a>
            <a href="https://pinterest.com/" target="blank">
              <BsPinterest
                size={30}
                className="hover:text-secondary"
              ></BsPinterest>
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-solid border-highlights pt-3 pb-5 w-11/12 text-center gap-5 text-sm text-highlights">
        <p>
          &copy; {new Date().getFullYear()} Érica Vanessa Hanemann. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
