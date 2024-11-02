/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */

import { useState, useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Slider from "../Slider";
import { FaSquareInstagram } from "react-icons/fa6";
import "./home.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
function IntroSection() {
  const [text, SetText] = useState("white");
  const [menuOpen, setMenuOpen] = useState(false);

  const textData = {
    0: "Web Designing",
    1: "React Dev",
    2: "Development",
    3: "Deployment",
    4: "Frontend",
    5: "Backend",
    6: "Mern Stack",
  };
  const [textIndex, setTextIndex] = useState(0);
  useEffect(() => {
    // Update the text every 2 seconds
    const interval = setInterval(() => {
      setTextIndex(
        (prevIndex) => (prevIndex + 1) % Object.keys(textData).length
      );
    }, 2000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);
  return (
    <div
      className={`p-4  bg-gradient-to-t from-zinc-950 to-zinc-900 to-zinc-800 h-full overflow-hidden flex flex-col justify-center ${
        menuOpen ? "items-end" : "items-center"
      }`}
    >
      <section className="h-full w-full flex flex-col md:flex-row items-center lg:justify-end ">
        <div
          id="box"
          className="w-full py-8  sm:py-12 lg:py-16 md:w-5/6 p-2 rounded-xl flex-wrap flex flex-row items-center justify-center"
          style={{
            backgroundImage: "url(/images/luxa.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundBlendMode: "multiply",
            backgroundColor: "rgba(0, 0, 0, 0.3)",
          }}
        >
          <div className="w-full flex flex-col lg:flex-row items-center justify-end">
            <div className="w-full  pb-5 border-dashed  lg:w-full mb-8  lg:mb-0 lg:pr-8">
              <h2 className="  text overflow-hidden whitespace-nowrap font-serif text-xl sm:text-3xl md:text-4xl lg:text-4xl font-bold mb-4 text-gray-300">
                hi! Coders I am shubham
              </h2>

              <p className="text-2xl sm:text-lg md:text-xl mb-6 text-gray-600">
                I strive to craft intuitive and engaging user experiences that
                meet the evolving needs of the digital landscape.
              </p>
              <span className="flex justify-start items-center mt-4">
                <p className="font-mono text-gray-100 text-xl"> Skilled at</p>
                <button className="h-8 ml-3  border-2 rounded-lg opacity-50">
                  <p className="px-2 text-gray-100 font-mono ">
                    {textData[textIndex]}
                  </p>
                </button>
              </span>
            </div>
          </div>
          <div className="mt-5  w-full overflow-hidden">
            <Slider />
          </div>
          <div className="text-center mt-10 py-10 rounded-lg shadow-lg">
            <h2 className="text-4xl font-semibold mb-6">
              Explore My Portfolio
            </h2>
            <p className="mb-8 text-zinc-300">
              Discover the depth of my portfolio, showcasing my skills and
              accomplishments.
            </p>
            <button
              className="bg-zinc-900 border text-zinc-200  hover:bg-gray-800   font-bold py-3 px-4 rounded-xl transition duration-300 ease-in-out"
              onClick={() => (window.location.href = "/about")}
            >
              Explore...
            </button>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default IntroSection;
