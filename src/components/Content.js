import React from "react";

const Content = () => {
  return (
    <div className="w-full bg-fixed bg-gradient-to-t from-primary to-secondary">
      <div className="flex flex-col h-screen items-center justify-center space-y-8">
        <h1 className="text-5xl">
          <span className="bg-white text-primary px-2 rounded-xl font-extrabold mr-2 shadow-sm">
            Hi
          </span>
          <span className="text-white font-semibold text-shadow">
            I am ferdi
          </span>
        </h1>
        <button className="bg-white px-4 py-2 rounded-full text-gray-400 shadow-sm">about me</button>
      </div>
      <div className="h-screen">h1</div>
      <div className="h-screen">h1</div>
    </div>
  );
};

export default Content;
