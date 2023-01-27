import React, { useState } from "react";

const Header = ({ homeRef, aboutRef, portofolioRef, contactRef }) => {
  const [hamburger, setHamburger] = useState(false);

  const handleHamburger = () => setHamburger((value) => !value);

  const scrollTo = (ref) => {
    window.scrollTo({
      top: ref.offsetTop,
    });
  };

  return (
    <div className="w-full fixed top-0 z-[999]">
      <div className="relative flex justify-end">
        <button
          onClick={handleHamburger}
          className={`${
            hamburger === true ? "scale-75" : ""
          } transition duration-300 ease-in-out space-y-2 m-7 z-50`}
        >
          <div
            className={`hamburger-line origin-top-left ${
              hamburger === true ? "rotate-45" : "w-9"
            }`}
          ></div>
          <div
            className={`hamburger-line ${
              hamburger === true ? "scale-0" : "w-9"
            }`}
          ></div>
          <div
            className={`hamburger-line origin-bottom-left ${
              hamburger === true ? "-rotate-45 w-9" : "w-6"
            }`}
          ></div>
        </button>

        <div
          className={`${
            hamburger === true ? "block" : "hidden"
          } w-1/2 top-4 right-6 shadow-sm rounded-xl absolute bg-white flex flex-col pl-5 py-[10%]`}
        >
          <ul className="space-y-6 text-left text-xl font-bold text-gray-500">
            <li className="hover:text-gray-900" onClick={() => scrollTo(homeRef.current)}>Home</li>
            <li className="hover:text-gray-900" onClick={() => scrollTo(aboutRef.current)}>About</li>
            <li className="hover:text-gray-900" onClick={() => scrollTo(portofolioRef.current)}>Portofolio</li>
            <li className="hover:text-gray-900" onClick={() => scrollTo(contactRef.current)}>Contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
