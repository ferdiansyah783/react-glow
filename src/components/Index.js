import React, { useRef } from "react";
import {
  AiFillGitlab,
  AiFillInstagram,
  AiFillTwitterCircle,
  AiOutlineArrowDown,
} from "react-icons/ai";
import { BsFacebook, BsGithub, BsFillChatDotsFill } from "react-icons/bs";
import Footer from "./Footer";
import Header from "./Header";

const Index = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const portofolioRef = useRef(null);
  const contactRef = useRef(null);

  const goTo = (ref) => {
    window.scrollTo({
      top: ref.offsetTop,
    });
  };

  return (
    <div>
      <section>
        <Header
          homeRef={homeRef}
          aboutRef={aboutRef}
          portofolioRef={portofolioRef}
          contactRef={contactRef}
        />
      </section>

      <section className="content">
        <div ref={homeRef} className="space-y-8">
          <h1 className="text-5xl">
            <span className="bg-white text-primary px-2 rounded-xl font-extrabold mr-2 drop-shadow-lg">
              Hi
            </span>
            <span className="text-white font-semibold text-shadow">
              I am ferdi
            </span>
          </h1>
          <button
            onClick={() => goTo(aboutRef.current)}
            className="bg-white px-4 py-2 rounded-full text-gray-400 drop-shadow-md flex items-center space-x-1 hover:bg-slate-50"
          >
            <p>about me</p>
            <AiOutlineArrowDown />
          </button>
        </div>

        <div ref={aboutRef} className="space-y-6">
          <h1 className="text-5xl">
            <span className="text-white font-bold text-shadow mr-2">About</span>
            <span className="bg-white text-primary px-2 rounded-xl font-extrabold drop-shadow-lg">
              me
            </span>
          </h1>
          <p className="px-7 text-center text-sm text-gray-400">
            I have an educational background in software engineering. I am used
            to using Visual Studio Code. I am a fresh graduate with a curiosity
            in the world of programming. Able to work as a team and continuously
            strive to provide the best solutions
          </p>
        </div>

        <div ref={portofolioRef} className="px-7 space-y-5">
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

        <div ref={contactRef} className="px-7 space-y-2">
          <h1 className="text-[44px]">
            <span className="text-white font-bold text-shadow mr-2">Let's</span>
            <span className="bg-white text-primary px-2 rounded-xl font-extrabold drop-shadow-lg">
              be
            </span>
            <span className="text-white font-bold text-shadow ml-2">
              friends
            </span>
          </h1>
          <div className="flex space-x-2">
            <a
              href="https://twitter.com/WOLFY1407"
              className="bg-white p-3 rounded-full drop-shadow-sm"
            >
              <AiFillTwitterCircle className="text-3xl text-gray-500" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100069487220504"
              className="bg-white p-3 rounded-full"
            >
              <BsFacebook className="text-3xl text-gray-500" />
            </a>
            <a
              href="https://www.instagram.com/ferdiansyah_x/?hl=id"
              className="bg-white p-3 rounded-full"
            >
              <AiFillInstagram className="text-3xl text-gray-500" />
            </a>
            <a
              href="https://github.com/ferdiansyah783"
              className="bg-white p-3 rounded-full"
            >
              <BsGithub className="text-3xl text-gray-500" />
            </a>
            <a
              href="https://gitlab.com/ferdiansyah783"
              className="bg-white p-3 rounded-full"
            >
              <AiFillGitlab className="text-3xl text-gray-500" />
            </a>
          </div>
        </div>

        <div className="relative">
          <a href="mailto:mtskrmmarzuki67@gmail.com" className="fixed p-5 bg-white bottom-7 right-7 rounded-full drop-shadow-md">
              <BsFillChatDotsFill className="text-3xl text-gray-500" />
          </a>
        </div>
      </section>

      <section>
        <Footer
          homeRef={homeRef}
          aboutRef={aboutRef}
          portofolioRef={portofolioRef}
          contactRef={contactRef}
        />
      </section>
    </div>
  );
};

export default Index;
