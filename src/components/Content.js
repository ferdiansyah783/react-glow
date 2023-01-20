import React from "react";

const Content = () => {
  return (
    <div className="content">
      <div className="space-y-8">
        <h1 className="text-5xl">
          <span className="bg-white text-primary px-2 rounded-xl font-extrabold mr-2 drop-shadow-lg">
            Hi
          </span>
          <span className="text-white font-semibold text-shadow">
            I am ferdi
          </span>
        </h1>
        <button className="bg-white px-4 py-2 rounded-full text-gray-400 drop-shadow-md">
          about me
        </button>
      </div>

      <div className="space-y-6">
        <h1 className="text-5xl">
          <span className="text-white font-bold text-shadow mr-2">
            About
          </span>
          <span className="bg-white text-primary px-2 rounded-xl font-extrabold drop-shadow-lg">
            me
          </span>
        </h1>
        <p className="px-7 tracking-wider whitespace-pre-line text-center text-sm text-gray-400">
          I have an educational background in software engineering. I am used to
          using Visual Studio Code. I am a fresh graduate with a curiosity in
          the world of programming. Able to work as a team and continuously
          strive to provide the best solutions
        </p>
      </div>
      <div className="px-7 space-y-3">
        <h1 className="text-white font-bold text-5xl text-shadow">Portofolio</h1>
        <div className="p-5 bg-white rounded-xl bg-opacity-50 drop-shadow-lg flex flex-col">
            <img src="https://source.unsplash.com/360x200?technologi" className="opacity-90 rounded-lg mb-2" />
            <h1 className="text-center text-gray-500 text-2xl font-bold mb-1">New Project</h1>
            <p className="text-center text-sm text-gray-500 mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam harum quos voluptate explicabo tenetur</p>
            <button className="border-2 border-gray-400 text-gray-500 px-8 py-1 mx-auto rounded-full">view</button>
        </div>
      </div>
    </div>
  );
};

export default Content;
