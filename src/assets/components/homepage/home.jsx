/* eslint-disable no-unused-vars */
import { useState } from "react";
// import { FaGithub, FaLinkedin } from "react-icons/fa";
import Slider from "../Slider";
// import { FaSquareInstagram } from "react-icons/fa6";
import "./home.css";
import { motion } from "framer-motion";
// import { Link } from "react-router-dom";

function IntroSection() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div
      className={`p-4 bg-zinc-800 h-full overflow-hidden flex flex-col justify-center ${
        menuOpen ? "items-end" : "items-center"
      } `}
    >
      <section className="h-full w-full flex flex-col md:flex-row items-center  lg:justify-end">
        <motion.div
          id="box"
          className="w-full py-4 sm:py-4 lg:py-6 lg:w-5/6 xl:w-full md:w-full p-2 rounded-xl flex-wrap flex flex-row items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="w-full flex flex-col lg:flex-row items-center justify-end">
            <div className="w-full pb-5 border-dashed lg:w-full lg:mb-0 lg:pr-8">
              <motion.div
                data-aos="zoom-out"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <h1 className="text-left  overflow-hidden whitespace-nowrap text-xl sm:text-3xl md:text-4xl lg:text-4xl font-serif text-zinc-200">
                  hi! Coders I am shubham.
                </h1>
                <p className="text-left mt-2 w-fit py-1 px-3 rounded-lg overflow-hidden bg-blue-100 whitespace-nowrap text-sm sm:text-xl md:text-sm lg:text-md mb-4 text-blue-500">
                  Web Developer & Designer
                </p>

                <p className="font-mono text-sm mt-8 text-left sm:text-lg md:text-sm mb-2 text-gray-300">
                  -&gt; Practising since{" "}
                  <span className="font-semibold text-[#5046e6]">2022</span>,
                </p>
                <p className="font-mono text-sm mt-2 text-left sm:text-lg md:text-sm mb-2 text-gray-300">
                  -&gt; I strive to craft intuitive and engaging user
                  experiences that meet the evolving needs of the digital
                  landscape.
                </p>
                <p className="font-mono text-sm mt-2 text-left sm:text-lg md:text-sm mb-2 text-gray-300">
                  -&gt; I create beautiful, functional websites and applications
                  with a focus on user experience and clean code.
                </p>
              </motion.div>
              <div className="flex flex-wrap gap-4 my-8">
                <button
                  className="border-b border-black text-zinc-200 hover:bg-zinc-700 font-bold py-1 px-4 transition duration-300 ease-in-out"
                  onClick={() => (window.location.href = "/about")}
                >
                  About...
                </button>
                <button
                  className="border-b border-black text-zinc-200 hover:bg-zinc-700 font-bold py-1 px-4 transition duration-300 ease-in-out"
                  onClick={() => (window.location.href = "/contact")}
                >
                  Contact...
                </button>
              </div>
              <div className="mt-5 lg:mt-10 w-full overflow-hidden">
                <Slider />
              </div>
              <div className="flex flex-wrap gap-4 justify-center items-center p-4">
                <div>
                  <div className="p-6 rounded-xl border border-zinc-500">
                    <ul className="space-y-2">
                      <li>
                        <div className="text-xl text-zinc-300 font-bold mb-2">
                          Bachelor of Computer Science
                        </div>
                        <div className="text-sm text-muted-foreground">
                          MDU University, 2021-2025
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Ganga Institute of Technology and Management
                        </div>
                        <button
                          className="mt-4 border  border-blue-600 text-blue-300 hover:bg-blue-600 hover:text-white font-bold py-1 px-4 rounded-md transition duration-300 ease-in-out"
                          onClick={() => (window.location.href = "/about")}
                        >
                          More...
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
                <div>
                  <div className="p-6 rounded-xl border border-zinc-500">
                    <ul className="space-y-2">
                      <li>
                        <div className="text-xl  text-zinc-300 font-bold mb-2">
                          Contact
                        </div>
                        <div className="text-sm text-muted-foreground">
                          shubhamjangra1205@gmail.com || 7082545147
                        </div>
                        <div className="text-sm text-muted-foreground">
                          715/7 Ashoka colony LinePar Bahadurgarh Haryana
                          (124507)
                        </div>
                        <button
                          className="my-2 border border-blue-600 text-blue-300 hover:bg-blue-600 hover:text-white font-bold py-1 px-4 rounded-md transition duration-300 ease-in-out"
                          onClick={() => (window.location.href = "/contact")}
                        >
                          More...
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="sm:col-span-2 p-6 rounded-xl border border-zinc-500">
                  <div className="">
                    <h4 className="text-xl text-zinc-300 font-bold text-left mb-2">
                      Interests
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      <li
                        data-aos="zoom-in"
                        className="shadow-md shadow-zinc-700 bg-blue-400 px-3 text-zinc-50 font-bold font-mono py-2 rounded-3xl"
                      >
                        Web Development
                      </li>
                      <li
                        data-aos="zoom-in"
                        className="shadow-md shadow-zinc-700 bg-blue-400  px-3 text-zinc-50 font-bold font-mono py-2 rounded-3xl"
                      >
                        UI/UX Design
                      </li>
                      <li
                        data-aos="zoom-in"
                        className="shadow-md shadow-zinc-700 bg-blue-400  px-3 text-zinc-50 font-bold font-mono py-2 rounded-3xl"
                      >
                        Artificial Intelligence
                      </li>
                      <li
                        data-aos="zoom-in"
                        className="shadow-md shadow-zinc-700 bg-blue-400 px-3 text-zinc-50 font-bold font-mono py-2 rounded-3xl"
                      >
                        Photography
                      </li>
                      <li
                        data-aos="zoom-in"
                        className="shadow-md shadow-zinc-700 bg-blue-400  px-3 text-zinc-50 font-bold font-mono py-2 rounded-3xl"
                      >
                        UpSkilling
                      </li>
                      <li
                        data-aos="zoom-in"
                        className="shadow-md shadow-zinc-700 bg-blue-400 px-3 text-zinc-50 font-bold font-mono py-2 rounded-3xl"
                      >
                        Programming
                      </li>
                      <li
                        data-aos="zoom-in"
                        className="shadow-md shadow-zinc-700 bg-blue-400 px-3 text-zinc-50 font-bold font-mono py-2 rounded-3xl"
                      >
                        Travel
                      </li>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

export default IntroSection;
