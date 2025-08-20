import { useState } from "react";
import Slider from "../Slider";
import "./home.css";
import { motion } from "framer-motion";
import Skills from "../Skills/Skills";
import About from "../About/About";
import Contact from "../contact/Contact";
function IntroSection() {
  const [menuOpen, setMenuOpen] = useState(false);
  
  return (
    <div
      className={`p-4 h-full overflow-hidden flex flex-col justify-center ${
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
          {/* Sticky Navbar */}
          <nav className="w-full md:w-full  flex justify-between items-center">
            <div className="font-mono  pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-blacks to-gray-700/80 bg-clip-text text-center text-2xl md:text-2xl sm:text-2xl  leading-none text-transparent dark:from-zinc-800 dark:to-slate-700/8">
              Shubham Jangra{" "}
            </div>
            <div className="space-x-4">
              <button className="bg-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-gray-700 transition">
                <a href="#contact"> Let’s Talk</a>
              </button>
            </div>
          </nav>
          <div className="w-full flex flex-col lg:flex-row items-center justify-end">
            <div className="w-full pb-5 border-dashed my-6  lg:w-full lg:mb-0 lg:pl-20">
              <motion.div
                data-aos="zoom-out"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className=" "
              >
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 3 }}
                  className=""
                >
                  
                  <p className="my-5 pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-blacks to-gray-900 bg-clip-text text-center text-5xl md:text-6xl sm:text-5xl leading-none text-transparent dark:from-zinc-900 dark:to-slate-700/">
                    {" "}
                    Let's craft exceptional digital experiences together.
                  </p>
                </motion.span>
                <p className="text-center font-mono mt-10 whitespace-wrap text-sm  text-zinc-800">
                  Explore my portfolio, from user interface and experience to
                  prototyping and testing.
                </p>

                <p className="font-mono text-sm mt-5 text-center  mb-2 text-gray-800">
                  Practising since{" "}
                  <span className="font-semibold text-[#5046e6]">2022</span>
                </p>
                <p className="font-mono text-sm mt-2 text-center  mb-2 text-gray-800">
                  I strive to craft intuitive and engaging user experiences that
                  meet the evolving needs of the digital landscape.
                </p>
              </motion.div>
              <div className="mt-2 lg:mt-10 w-full overflow-hidden">
                <Slider />
              </div>
            </div>
          </div>
        </motion.div>
      </section>
      {/* Skills-Section */}
      <Skills id="skills" />
      {/* About-section */}
      <About id="about"/>
      {/* Contact-Section */}
      < Contact  id="contact"/>
    </div>
  );
}

export default IntroSection;
