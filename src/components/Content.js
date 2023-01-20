import React from "react";

const Content = () => {
  return (
    <div className="content">
      <div className="space-y-8">
        <h1 className="text-5xl">
          <span className="bg-white text-primary px-2 rounded-xl font-extrabold mr-2 shadow-sm">
            Hi
          </span>
          <span className="text-white font-semibold text-shadow">
            I am ferdi
          </span>
        </h1>
        <button className="bg-white px-4 py-2 rounded-full text-gray-400 shadow-sm">
          about me
        </button>
      </div>

      <div className="space-y-5">
        <h1 className="text-5xl">
          <span className="text-white font-semibold text-shadow mr-2">
            About
          </span>
          <span className="bg-white text-primary px-2 rounded-xl font-extrabold shadow-md">
            me
          </span>
        </h1>
        <p className="px-[10%] whitespace-pre-line text-center text-shadow-primary text-sm text-gray-400">
          I have an educational background in software engineering. I am used to
          using Visual Studio Code. I am a fresh graduate with a curiosity in
          the world of programming. Able to work as a team and continuously
          strive to provide the best solutions
        </p>
      </div>
      <div className="">h1</div>
    </div>
  );
};

export default Content;
