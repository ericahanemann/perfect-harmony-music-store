import { useState } from "react";
import { Link } from "react-router-dom";
import {
  BsInstagram,
  BsFacebook,
  BsPinterest,
  BsChevronDown,
  BsChevronUp,
} from "react-icons/bs";

function Footer() {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const handleAccordionClick = (index) => {
    setExpandedIndex((currentExpandedIndex) => {
      if (currentExpandedIndex === index) {
        return -1;
      } else {
        return index;
      }
    });
  };

  return (
    <footer className="bg-textcolor text-highlights flex flex-col justify-center items-center">
      <div className="flex flex-col gap-4 justify-between w-4/5 m-auto pt-4 pb-2 px-6 lg:flex-row">
        <div className="flex flex-col">
          <div
            className="flex justify-between"
            onClick={() => handleAccordionClick(1)}
          >
            <h4 className="uppercase font-semibold mb-3 text-primary">
              categories
            </h4>

            {expandedIndex == 1 ? (
              <BsChevronUp className="lg:hidden" />
            ) : (
              <BsChevronDown className="lg:hidden" />
            )}
          </div>

          {expandedIndex == 1 && (
            <div className="flex flex-col lg:hidden">
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
          )}

          <div className="hidden flex-col lg:flex">
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

          <hr className="my-2 lg:hidden" />
        </div>

        <div className="flex flex-col">
          <div
            className="flex justify-between"
            onClick={() => handleAccordionClick(2)}
          >
            <h4 className="uppercase font-semibold mb-3 text-primary">
              help and support
            </h4>

            {expandedIndex == 2 ? (
              <BsChevronUp className="lg:hidden" />
            ) : (
              <BsChevronDown className="lg:hidden" />
            )}
          </div>

          {expandedIndex == 2 && (
            <div className="flex flex-col lg:hidden">
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
          )}

          <div className="hidden flex-col lg:flex">
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

          <hr className="my-2 lg:hidden" />
        </div>

        <div className="flex flex-col">
          <div
            className="flex justify-between"
            onClick={() => handleAccordionClick(3)}
          >
            <h4 className="uppercase font-semibold mb-3 text-primary">
              About us
            </h4>

            {expandedIndex == 3 ? (
              <BsChevronUp className="lg:hidden" />
            ) : (
              <BsChevronDown className="lg:hidden" />
            )}
          </div>

          {expandedIndex == 3 && (
            <div className="flex flex-col lg:hidden">
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
          )}

          <div className="hidden flex-col lg:flex">
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

          <hr className="my-2 lg:hidden" />
        </div>

        <div className="flex flex-col my-8 lg:mt-0">
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

      <div className="border-t border-solid border-highlights pt-3 pb-2 w-11/12 text-center gap-5 text-sm text-highlights">
        <p>
          &copy; {new Date().getFullYear()} Érica Vanessa Hanemann. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
