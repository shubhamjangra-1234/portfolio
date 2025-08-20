import { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import "./Landing.css";
function LandingPage() {
  // Define an object with the text data
  const textData = useMemo(
    () => ({
      0: "Web Designing",
      1: "React Dev",
      2: "NextJs Dev",
      3: "Development",
      4: "Deployment",
      5: "Frontend",
      6: "Backend",
      7: "Mern Stack",
    }),
    []
  );

  // Set the initial state for the text and an index to track the current text
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
  }, [textData]);
  return (
    <div className="relatives  flex h-screen  w-full flex-col items-center justify-center overflow-hidden ">
      <div className="w-full h-full  text-black">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          id="fixedContent"
          className="fixed inset-0  m-auto  flex flex-col items-center justify-center bg-opacity-50 pointer-events-none"
          style={{ height: "85vh" }}
        >
          <div className="p-2">
            <h2 className="text-zinc-800 text-center mb-4 font-mono text-xl ">
              Hello! , I am{" "}
            </h2>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 3 }}
              className=" pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-blacks to-gray-700/80 bg-clip-text text-center text-6xl font-semibold leading-none text-transparent dark:from-zinc-900 dark:to-slate-700/10"
            >
              Shubham Jangra
            </motion.span>
          </div>
          <p className="font-mono text-xl text-zinc-500 text-center mt-2">
            Unlock Your Web Experience
          </p>
          <span className="flex justify-between items-center mt-4">
            <button className="h-8 ml-3 border border-zinc-800 rounded-lg opacity-50">
              <p className="px-2 text-zinc-800 font-mono ">
                {textData[textIndex]}
              </p>
            </button>
          </span>
        </motion.div>
      </div>
      <a href="/main">
        <button className="z-10  absolute top-0 right-0 m-4 text-zinc-800  py-2 px-4  flex items-center ">
          Get started
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 ml-2 transition-transform duration-300 ease-in-out group-hover:translate-x-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </a>
    </div>
  );
}

export default LandingPage;
