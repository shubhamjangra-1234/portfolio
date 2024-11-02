/* eslint-disable no-unused-vars */
import React, { useRef, useEffect } from "react";

const brands = [
  {
    name: "MongoDB",
    logo: "https://kangaroot.net/sites/default/files/media/images/2021-07/mongodb.png",
  },
  {
    name: "NodeJs",
    logo: "https://static-00.iconduck.com/assets.00/node-js-icon-454x512-nztofx17.png",
  },
  {
    name: "React",
    logo: "https://dac.digital/wp-content/uploads/2023/11/react-logo-optimized.png",
  },
  {
    name: "Tailwind",
    logo: "https://seeklogo.com/images/T/tailwind-css-logo-5AD4175897-seeklogo.com.png",
  },
  {
    name: "ExpressJs",
    logo: "https://adware-technologies.s3.amazonaws.com/uploads/technology/thumbnail/20/express-js.png",
  },
  {
    name: "Javascript",
    logo: "https://axissoftwaredynamics.com/wp-content/uploads/2022/09/image-6-2.png",
  },
  {
    name: "Github",
    logo: "https://seeklogo.com/images/G/github-icon-logo-E5FF767098-seeklogo.com.png",
  },
  {
    name: "VsCode",
    logo: "https://carleton.ca/scs/wp-content/uploads/vscode-1.png",
  },
];

const BrandSlider = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    let scrollAmount = 0;
    const scrollSpeed = 1;

    const scrollSlider = () => {
      if (slider) {
        scrollAmount += scrollSpeed;
        slider.scrollLeft = scrollAmount;
        if (scrollAmount >= slider.scrollWidth / 2) {
          scrollAmount = 0;
          slider.scrollLeft = 0;
        }
      }
    };

    const interval = setInterval(scrollSlider, 30);

    const handleMouseEnter = () => clearInterval(interval);
    const handleMouseLeave = () => {
      scrollAmount = slider.scrollLeft;
      clearInterval(interval);
      const newInterval = setInterval(scrollSlider, 30);
    };

    if (slider) {
      slider.addEventListener("mouseenter", handleMouseEnter);
      slider.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      clearInterval(interval);
      if (slider) {
        slider.removeEventListener("mouseenter", handleMouseEnter);
        slider.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return (
    <div
      className="w-full my-2 relative overflow-hidden"
      //   style={{ zIndex: -1 }}
    >
      <div
        ref={sliderRef}
        className="opacity-90 w-full shadow-xl shadow-zinc-800 flex overflow-x-auto whitespace-nowrap scroll-smooth scrollbar-hide"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          maskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        }}
      >
        {brands.concat(brands).map((brand, index) => (
          <div
            className="w-20 rounded-xl h-10 m-2 flex items-center justify-center flex-shrink-0"
            key={index}
          >
            <img
              src={brand.logo}
              alt={`${brand.name} logo`}
              className="max-w-full max-h-full rounded-xl"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandSlider;
