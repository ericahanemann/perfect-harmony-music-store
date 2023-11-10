import { useEffect, useRef, useState } from "react";
import { GoChevronDown } from "react-icons/go";

function SortingDropdown({ options, activeOption, setActiveOption }) {
  const [isOpen, setIsOpen] = useState(false);
  const divEl = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (!divEl.current) {
        return;
      }

      if (!divEl.current.contains(event.target)) {
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

  const handleOptionClick = (option) => {
    setIsOpen(false);

    setActiveOption(option);
  };

  const renderedOptions = options.map((option) => {
    const isActive = option.value === activeOption.value;

    return (
      <div
        className={`hover:bg-secondary p-2 cursor-pointer ${
          isActive ? "bg-secondary" : "bg-primary"
        }`}
        onClick={() => handleOptionClick(option)}
        key={option.value}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div ref={divEl} className="w-36 relative">
      <div
        className="flex justify-between items-center cursor-pointer p-2 border border-highlights"
        onClick={handleClick}
      >
        {activeOption.label}
        <GoChevronDown />
      </div>
      {isOpen && (
        <div className="absolute top-full w-36 flex flex-col z-50 shadow-md">
          {renderedOptions}
        </div>
      )}
    </div>
  );
}

export default SortingDropdown;
