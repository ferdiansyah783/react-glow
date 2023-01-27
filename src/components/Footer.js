import React from "react";

const Footer = ({ homeRef, aboutRef, portofolioRef, contactRef }) => {

  const scrollTo = (ref) => {
    window.scrollTo({
      top: ref.offsetTop,
    });
  };

  return (
    <div className="w-full bg-gradient-to-t from-primary via-primary to-secondary">
      <div className="h-1 w-[90%] bg-white drop-shadow-md mx-auto rounded-full mb-16"></div>
      <div className="flex flex-col p-7 items-center text-center space-y-7">
        <div className="leading-7 text-gray-400 font-semibold">
          <h1 className="font-black text-3xl my-2 text-white text-shadow">
            Contact
          </h1>
          <p>Cepogo RT 02 RW 07</p>
          <p>Kembang Jepara</p>
          <p>Wa: 087894573986</p>
          <p>Tel: 087894573986</p>
        </div>
        <div className="leading-7 text-gray-400 font-semibold">
          <h1 className="font-black text-3xl my-2 text-white text-shadow">
            Quick Menu
          </h1>
          <p onClick={() => scrollTo(homeRef.current)} className="block">
            Home
          </p>
          <p onClick={() => scrollTo(aboutRef.current)} className="block">
            About
          </p>
          <p onClick={() => scrollTo(portofolioRef.current)} className="block">
            Portofolio
          </p>
          <p onClick={() => scrollTo(contactRef.current)} className="block">
            Contact
          </p>
        </div>
        <div className="leading-7 text-gray-400 font-semibold">
          <h1 className="font-black text-3xl my-2 text-white text-shadow">
            Social
          </h1>
          <p>Twitter</p>
          <p>Facebook</p>
          <p>Instagram</p>
        </div>
        <div className="leading-4 text-gray-400">
          <p>@2023 by Muhammad Ferdiansyah</p>
          <p>Created on React js</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
