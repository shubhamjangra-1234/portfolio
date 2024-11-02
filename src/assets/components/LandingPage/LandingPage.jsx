import { useState, useEffect } from "react";
import "./Landing.css";
function LandingPage() {
  // Define an object with the text data
  const textData = {
    0: "Web Designing",
    1: "React Dev",
    2: "Development",
    3: "Deployment",
    4: "Frontend",
    5: "Backend",
    6: "Mern Stack",
  };

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
  }, []);
  return (
    <div className="w-full h-full  bg-cover">
      <div className="w-full h-full  text-white">
        <img
          src="/images/png.jpg"
          className="object-cover opacity-85 w-screen h-screen fixed top-0 left-0 z-0"
        />
        <div
          id="fixedContent"
          className="fixed inset-0 m-auto flex flex-col items-center justify-center bg-opacity-50 pointer-events-none"
          style={{ height: "85vh" }}
        >
          <div className="contain">
            <div className="typing text-5xl "></div>
          </div>
          <p className="font-mono text-xl text-zinc-100 text-center mt-2">
            Unlock Your Web Experience
          </p>
          <span className="flex justify-between items-center mt-4">
            <p className="font-mono text-xl"> Skilled at</p>
            <button className="h-8 ml-3  border-2 rounded-lg opacity-50">
              <p className="px-2 font-mono ">{textData[textIndex]}</p>
            </button>
          </span>
        </div>
      </div>

      <a href="/main">
        <button className=" z-10  bg-opacity-80 absolute top-0 right-0 m-4 backdrop-filter backdrop-blur-lg text-zinc-200  py-2 px-4 rounded-full border border-white border-opacity-25  hover:transition duration-300 ease-in-out flex items-center transform hover:scale-95 glow-white">
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
