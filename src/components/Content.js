import React from "react";
import { IoLogoWhatsapp } from "react-icons/io";
import { BsFacebook, BsGithub } from "react-icons/bs";
import { AiFillInstagram, AiFillGitlab, AiOutlineArrowDown } from "react-icons/ai";

const Content = () => {
  return (
    <div className="content">
      <div id="home" className="space-y-8">
        <h1 className="text-5xl">
          <span className="bg-white text-primary px-2 rounded-xl font-extrabold mr-2 drop-shadow-lg">
            Hi
          </span>
          <span className="text-white font-semibold text-shadow">
            I am ferdi
          </span>
        </h1>
        <button className="bg-white px-4 py-2 rounded-full text-gray-400 drop-shadow-md flex items-center space-x-1">
          <a href="#about" className="transition duration-300">about me</a>
          <AiOutlineArrowDown />
        </button>
      </div>

      <div id="about" className="space-y-6">
        <h1 className="text-5xl">
          <span className="text-white font-bold text-shadow mr-2">About</span>
          <span className="bg-white text-primary px-2 rounded-xl font-extrabold drop-shadow-lg">
            me
          </span>
        </h1>
        <p className="px-7 text-center text-sm text-gray-400">
          I have an educational background in software engineering. I am used to
          using Visual Studio Code. I am a fresh graduate with a curiosity in
          the world of programming. Able to work as a team and continuously
          strive to provide the best solutions
        </p>
      </div>

      <div id="portofolio" className="px-7 space-y-5">
        <h1 className="text-5xl">
          <span className="bg-white text-primary px-2 rounded-xl mr-2 font-extrabold drop-shadow-lg">
            My
          </span>
          <span className="text-white font-bold text-shadow">portofolio</span>
        </h1>
        <div className="p-5 bg-white rounded-xl bg-opacity-50 drop-shadow-lg flex flex-col">
          <img
            src="https://source.unsplash.com/360x200?technologi"
            alt="tech"
            className="opacity-90 rounded-lg mb-2"
          />
          <h1 className="text-center text-gray-500 text-2xl font-bold mb-1">
            New Project
          </h1>
          <p className="text-center text-sm text-gray-500 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam
            harum quos voluptate explicabo tenetur
          </p>
          <button className="border-2 border-gray-400 text-gray-500 px-8 py-1 mx-auto rounded-full">
            view
          </button>
        </div>
      </div>

      <div id="contact" className="px-7 space-y-2">
        <h1 className="text-[44px]">
          <span className="text-white font-bold text-shadow mr-2">Let's</span>
          <span className="bg-white text-primary px-2 rounded-xl font-extrabold drop-shadow-lg">
            be
          </span>
          <span className="text-white font-bold text-shadow ml-2">friends</span>
        </h1>
        <div className="flex space-x-2">
          <div className="bg-white p-3 rounded-full drop-shadow-sm">
            <IoLogoWhatsapp className="text-3xl text-gray-500" />
          </div>
          <div className="bg-white p-3 rounded-full">
            <BsFacebook className="text-3xl text-gray-500" />
          </div>
          <div className="bg-white p-3 rounded-full">
            <AiFillInstagram className="text-3xl text-gray-500" />
          </div>
          <div className="bg-white p-3 rounded-full">
            <BsGithub className="text-3xl text-gray-500" />
          </div>
          <div className="bg-white p-3 rounded-full">
            <AiFillGitlab className="text-3xl text-gray-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
