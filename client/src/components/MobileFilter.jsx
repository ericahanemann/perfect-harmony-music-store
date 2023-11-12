import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { BsFilter } from "react-icons/bs";

function MobileFilter({ renderedTypes, renderedBrands, renderedColors }) {
  const [isOpen, setIsOpen] = useState(false);
  const divContainer = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (!divContainer.current) {
        return;
      }

      if (!divContainer.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handler, true);

    return () => {
      document.removeEventListener("click", handler);
    };
  }, []);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleFilterClick = () => {
    setIsOpen(false);
  };

  return (
    <div ref={divContainer} className="lg:hidden relative">
      <BsFilter onClick={handleClick} size={24}></BsFilter>
      <div
        className={
          isOpen
            ? "absolute top-full right-0 w-36 z-50 flex flex-col gap-4 items-center justify-center bg-primary p-4 shadow-md md:w-48"
            : "hidden"
        }
      >
        <div className="flex flex-col items-center self-center">
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

        <div className="flex flex-col items-center self-center">
          <h4 className="text-lg font-bold uppercase">Type</h4>
          <div className="flex flex-col" onClick={handleFilterClick}>
            {renderedTypes}
          </div>
        </div>

        <div className="flex flex-col items-center self-center">
          <h4 className="text-lg font-bold uppercase">brand</h4>
          <div className="flex flex-col" onClick={handleFilterClick}>
            {renderedBrands}
          </div>
        </div>

        <div className="flex flex-col items-center self-center">
          <h4 className="text-lg font-bold uppercase">color</h4>
          <div className="flex flex-wrap gap-4" onClick={handleFilterClick}>
            {renderedColors}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileFilter;
