import React, { useState } from "react";

const Header = () => {
  const [hamburger, setHamburger] = useState(false);

  const handleHamburger = () => setHamburger((value) => !value);

  return (
    <div className="w-full fixed top-0">
      <div className="relative flex justify-end">
        <button onClick={handleHamburger} className="space-y-2 m-7 z-50">
          <div
            className={`hamburger-line origin-top-left ${
              hamburger === true ? "rotate-45" : "w-9"
            }`}
          ></div>
          <div
            className={`hamburger-line ${hamburger === true ? "scale-0" : "w-9"}`}
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
          } w-1/2 top-4 right-6 rounded-xl absolute bg-white text-gray-500 flex flex-col space-y-5 text-xl pl-5 font-bold py-[10%] text-left`}
        >
          <h1>Home</h1>
          <h1>About</h1>
          <h1>Portofolio</h1>
          <h1>Contact</h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
