/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import Skills from "./../Skills/Skills";
import Dock from './BitsUI';
import { FaUser, FaBriefcase, FaEnvelope, FaPhone } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import { SlSocialInstagram, SlSocialGithub } from "react-icons/sl";
import {
  FcShop,
  // FcGraduationCap,
  // FcAbout,
  FcVoicePresentation,
} from "react-icons/fc";
import { VscHome, VscArchive, VscAccount, VscSettingsGear } from "react-icons/vsc";
import { SiHyperskill } from "react-icons/si";
import { CiUser } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { RiContactsLine } from "react-icons/ri";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 1050);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 1050);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
 
  return (
    <>
      <button
        className={`fixed top-4 right-4 z-50 ${
          isLargeScreen ? "hidden" : ""
        } bg-zinc-900 shadow-md shadow-zinc-700 text-zinc-200 p-2 rounded-md`}
        onClick={toggleMenu}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      <nav
        className={`overflow-hidden ml-2 mt-2 fixed w-52 top-0 left-0 bg-gradient-to-t from-zinc-950 to-zinc-900 to-zinc-800 text-zinc-300 p-5 transform transition-transform duration-300 ease-in-out z-40 backdrop-filter backdrop-blur-lg bg-opacity-30 ${
          isOpen || isLargeScreen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{
          borderRadius: "10px",
          height: "98vh",
        }}
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-center rounded-xl">
            <div className="p-2">
              <div className="">
                <a href="/">
                  <span className="flex justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="4rem"
                      height="4rem"
                      fill="none"
                      viewBox="0 0 602 602"
                    >
                      {" "}
                      <g>
                        {" "}
                        <path
                          stroke="#fff"
                          stroke-miterlimit="10"
                          stroke-width="24"
                          d="M274.151 201.657c66.903-17.997 131.399-24.32 182.018-19.756l1.077-11.95-1.077 11.95c30.477 2.747 55.643 9.518 73.763 18.622 18.414 9.252 27.823 19.969 30.45 29.72h0c2.776 10.303-.231 25.206-12.364 43.484-11.936 17.98-31.68 37.56-58.646 56.139v.001c-40.663 28.018-98.24 52.637-161.885 69.759-65.406 17.596-128.7 26.024-178.487 21.651h0c-31.569-2.772-57.609-10.095-76.356-19.82-19.058-9.886-28.938-21.326-31.677-31.495h0c-2.636-9.786-.088-23.613 10.677-40.523 10.622-16.687 28.385-34.904 52.944-52.425l-6.724-9.425 6.724 9.425c41.556-29.647 101.985-57.176 169.563-75.357zm0 0l-3.116-11.583 3.116 11.583z"
                        ></path>{" "}
                        <path
                          stroke="#fff"
                          stroke-miterlimit="10"
                          stroke-width="24"
                          d="M373.214 228.061c49.036 48.941 86.758 101.635 108.114 147.755l10.889-5.042-10.889 5.042c12.859 27.768 19.578 52.949 20.754 73.194 1.194 20.573-3.382 34.081-10.514 41.232h0c-7.535 7.555-21.944 12.403-43.839 11.035-21.539-1.346-48.366-8.656-77.939-22.719l-.001-.001c-44.594-21.205-94.702-58.759-141.351-105.317l-8.138 8.153 8.138-8.153c-47.94-47.846-86.885-98.447-107.99-143.751h0c-13.383-28.726-20.062-54.939-21.013-76.038-.967-21.448 4-35.725 11.437-43.182h0c7.157-7.176 20.405-11.883 40.432-11.016 19.761.856 44.419 7.13 71.872 19.639l4.975-10.92-4.975 10.92c46.451 21.165 100.505 59.734 150.038 109.169zm0 0l8.477-8.494-8.477 8.494z"
                        ></path>{" "}
                        <path
                          stroke="#fff"
                          stroke-miterlimit="10"
                          stroke-width="24"
                          d="M325.98 494.55l9.811 6.909-9.811-6.909c-17.619 25.02-36.067 43.429-53.012 54.569-17.221 11.322-31.207 14.112-40.966 11.511h0c-10.311-2.747-21.714-12.801-31.476-32.447-9.604-19.326-16.687-46.213-19.294-78.855v-.001c-3.933-49.221 3.537-111.393 20.533-175.07l-11.594-3.095 11.594 3.095c17.467-65.44 41.817-124.466 70.5-165.396h0c18.186-25.953 37.549-44.843 55.345-56.216 18.091-11.562 32.94-14.398 43.117-11.686h0c9.793 2.61 20.494 11.73 29.756 29.506 9.139 17.541 16.035 42.032 18.928 72.06 4.896 50.811-1.48 116.906-19.526 184.519-17.867 66.937-44.642 125.951-73.905 167.506z"
                        ></path>{" "}
                        <animateTransform
                          attributeName="transform"
                          attributeType="XML"
                          dur="20s"
                          from="0 301 301"
                          repeatCount="indefinite"
                          to="360 301 301"
                          type="rotate"
                        ></animateTransform>{" "}
                      </g>{" "}
                      <path
                        fill="white"
                        d="M301.007 269.002a62.496 62.496 0 00-4.799-4.301c-1.568-1.254-3.439-2.596-5.615-4.026a30.06 30.06 0 00-7.055-3.411c-2.527-.842-5.007-1.264-7.436-1.264-8.779 0-15.657 2.43-20.635 7.29-4.979 4.859-7.467 11.601-7.467 20.223 0 8.661 4.488 17.479 13.463 26.455 0 0 24.492 21.967 39.544 36.043 15.053-14.076 39.545-36.043 39.545-36.043 8.975-8.976 13.463-17.794 13.463-26.455 0-8.622-2.488-15.364-7.467-20.223-4.978-4.86-11.856-7.29-20.635-7.29-2.429 0-4.909.422-7.436 1.264a30.06 30.06 0 00-7.055 3.411c-2.176 1.43-4.047 2.772-5.615 4.026a62.699 62.699 0 00-4.8 4.301z"
                      ></path>{" "}
                    </svg>
                  </span>
                </a>
                <h1 className="font-sans text-3xl text-zinc-600">Shubham</h1>
                <p className="description text-sm text-zinc-600">
                  Developer | Dreamer{" "}
                </p>

                <ul className="social-media flex justify-evenly my-4">
                  <a href="https://github.com/shubhamjangra-1234">
                    <SlSocialGithub className="text-2xl" />
                  </a>
                  <a href="https://www.instagram.com/ig.shubham.jangra/">
                    <SlSocialInstagram className="text-2xl" />
                  </a>
                  <a href="tel:7082545147" target="_blank">
                    <IoCallOutline className="text-2xl" />
                  </a>
                </ul>
              </div>
            </div>
          </div>
          <div className="py-2">
            <NavLink
              to="/main"
              className="flex items-center border bg-white/5 border-zinc-700 my-2 px-2 py-2 hover:bg-gray-700 rounded backdrop-filter backdrop-blur-lg bg-opacity-30"
            >
              <VscHome className="h-7 w-7 mr-8" />
              <p className="text-base">Home</p>
            </NavLink>

            <NavLink
              to="/Skills"
              className="flex items-center border bg-white/5 border-zinc-700 my-2 px-2 py-2 hover:bg-gray-700 rounded backdrop-filter backdrop-blur-lg bg-opacity-30"
            >
              <LiaLaptopCodeSolid className="h-7 mr-7 w-8" />
              <p className="text-base">Skills</p>
            </NavLink>

            <NavLink
              to="/about"
              className="flex items-center border bg-white/5 border-zinc-700 my-2 px-2 py-2 hover:bg-gray-700 rounded backdrop-filter backdrop-blur-lg bg-opacity-30"
            >
              <CiUser className="h-7 w-7 mr-8" />
              <p className="">About</p>
            </NavLink>

            <NavLink
              to="/contact"
              className="flex items-center border bg-white/5 border-zinc-700 my-2 px-2 py-2 hover:bg-gray-700 rounded backdrop-filter backdrop-blur-lg bg-opacity-30"
            >
              
              <CiMail className="h-7 w-7 mr-8  " />
              <p className=" text-base ">Contact</p>
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
