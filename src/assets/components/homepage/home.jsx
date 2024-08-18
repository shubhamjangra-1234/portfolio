import React from "react";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";
import "./home.css";
function IntroSection() {
  const [color, SetColor] = useState("#18181b");
  const [text, SetText] = useState("white");

  const dark = function () {
    SetColor("#18181b");
    SetText("white");
  };
  const light = function () {
    SetColor("whitesmoke");
    SetText("black");
  };
  return (
    <div className="" style={{ backgroundColor: color }}>
      <div className="w-28 p-3 flex  justify-between">
        <button
          className="text-3xl hover:scale-105  bg-orange-400 w-10 p-1  rounded-xl flex justify-center"
          onClick={dark}
        >
          <FaSun />
        </button>
        <button
          className="text-3xl hover:scale-105  bg-orange-400 w-10 p-1  rounded-xl flex justify-center"
          onClick={light}
        >
          <FaMoon />
        </button>
      </div>
      <section className=" w-full  m-0 p-0 flex flex-col md:flex-row items-center justify-around md:p-16   ">
        <div
          id="box"
          className=" w-12/12  p-2 rounded-xl flex-wrap flex flex-row items-center justify-center"
        >
          <div className=" flex justify-center  md:w-1/2 mb-8 md:mb-0">
            <div className="round  relative h-fit  flex items-center justify-center">
              <div className="profileCard_container relative p-10 border-2 border-dashed rounded-full border-spacing-4 border-gray-400/50">
                <button className="profile_item left-[45px] -top-[4px] absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
                  <span className="block w-14 h-14 transition-all duration-500 rounded-full z-[2] bg-white p-1">
                    <svg viewBox="0 0 128 128">
                      <g fill="#61DAFB">
                        <circle r="11.4" cy="64" cx="64"></circle>
                        <path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z"></path>
                      </g>
                    </svg>
                  </span>
                </button>

                <button className="profile_item right-[45px] -top-[4px] absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
                  <span className="block  w-14 h-14  transition-all duration-500 rounded-full z-[2] bg-white p-1">
                    <svg
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path
                          fill-rule="nonzero"
                          clip-rule="nonzero"
                          d="M7.62016 0.102166C7.85488 -0.0340553 8.14512 -0.0340553 8.37984 0.102166L14.626 3.72717C14.8576 3.86157 15 4.10825 15 4.375V11.625C15 11.8918 14.8576 12.1384 14.626 12.2728L8.37984 15.8978C8.14512 16.0341 7.85488 16.0341 7.62016 15.8978L1.374 12.2728C1.14241 12.1384 1 11.8918 1 11.625V4.375C1 4.10825 1.14241 3.86157 1.374 3.72717L7.62016 0.102166ZM2.50769 4.80578V11.1942L8 14.3817L13.4923 11.1942V4.80578L8 1.61828L2.50769 4.80578ZM4.98331 4.55709C5.265 4.441 5.58925 4.50517 5.80484 4.71967L10.0462 8.93934V5.25C10.0462 4.83579 10.3837 4.5 10.8 4.5C11.2163 4.5 11.5538 4.83579 11.5538 5.25V10.75C11.5538 11.0533 11.3702 11.3268 11.0885 11.4429C10.8068 11.559 10.4825 11.4948 10.2669 11.2803L6.02564 7.06066V10.75C6.02564 11.1642 5.68813 11.5 5.27179 11.5C4.85546 11.5 4.51795 11.1642 4.51795 10.75V5.25C4.51795 4.94665 4.70162 4.67318 4.98331 4.55709Z"
                          fill="#0dfd1d"
                        ></path>{" "}
                      </g>
                    </svg>
                  </span>
                </button>

                <button className="profile_item -left-4 top-20 absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
                  <span className="block  w-14 h-14  transition-all duration-500 rounded-full z-[2] bg-white p-2">
                    <svg
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path
                          fill-rule="nonzero"
                          clip-rule="nonzero"
                          d="M3 1.5C2.86193 1.5 2.75 1.61193 2.75 1.75V11.3003C2.75 11.3896 2.79769 11.4722 2.87509 11.5168L7.73381 14.3194C7.80942 14.363 7.90231 14.364 7.97886 14.3221L13.1201 11.5048C13.2002 11.4609 13.25 11.3769 13.25 11.2856V1.75C13.25 1.61193 13.1381 1.5 13 1.5H3ZM1.25 1.75C1.25 0.783502 2.0335 0 3 0H13C13.9665 0 14.75 0.783503 14.75 1.75V11.2856C14.75 11.9248 14.4015 12.5131 13.841 12.8203L8.69968 15.6375C8.16383 15.9311 7.51363 15.924 6.98434 15.6187L2.12562 12.8162C1.58382 12.5037 1.25 11.9258 1.25 11.3003V1.75ZM5 4.25C5 3.83579 5.33579 3.5 5.75 3.5H10.3654C10.7796 3.5 11.1154 3.83579 11.1154 4.25C11.1154 4.66421 10.7796 5 10.3654 5H6.5V6.71154H10.3654C10.7796 6.71154 11.1154 7.04732 11.1154 7.46154V10.3462C11.1154 10.6302 10.9549 10.8899 10.7008 11.017L8.3931 12.1708C8.18196 12.2764 7.93343 12.2764 7.72228 12.1708L5.41459 11.017C5.1605 10.8899 5 10.6302 5 10.3462V9.76923C5 9.35502 5.33579 9.01923 5.75 9.01923C6.16421 9.01923 6.5 9.35502 6.5 9.76923V9.88263L8.05769 10.6615L9.61539 9.88263V8.21154H5.75C5.33579 8.21154 5 7.87575 5 7.46154V4.25Z"
                          fill="#1e6bbe"
                        ></path>{" "}
                      </g>
                    </svg>
                  </span>
                </button>

                <button className="profile_item -right-4 top-20 absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
                  <span className="block overflow-hidden w-14 h-14  transition-all duration-500 rounded-full z-[2] bg-blue-900 p-2">
                    <svg
                      width="40px"
                      height="40px"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path
                          fill-rule="nonzero"
                          clip-rule="nonzero"
                          d="M0 1.75C0 0.783501 0.783502 0 1.75 0H14.25C15.2165 0 16 0.783502 16 1.75V3.75C16 4.16421 15.6642 4.5 15.25 4.5C14.8358 4.5 14.5 4.16421 14.5 3.75V1.75C14.5 1.61193 14.3881 1.5 14.25 1.5H1.75C1.61193 1.5 1.5 1.61193 1.5 1.75V14.25C1.5 14.3881 1.61193 14.5 1.75 14.5H15.25C15.6642 14.5 16 14.8358 16 15.25C16 15.6642 15.6642 16 15.25 16H1.75C0.783501 16 0 15.2165 0 14.25V1.75ZM8.25 5.75C8.66421 5.75 9 6.08579 9 6.5V10.5C9 11.5048 8.72399 12.2584 8.15514 12.7324C7.61223 13.1848 6.95384 13.25 6.5 13.25C6.08579 13.25 5.75 12.9142 5.75 12.5C5.75 12.0858 6.08579 11.75 6.5 11.75C6.84617 11.75 7.06277 11.6902 7.19486 11.5801C7.301 11.4916 7.5 11.2452 7.5 10.5V6.5C7.5 6.08579 7.83578 5.75 8.25 5.75ZM11.2757 6.58011C11.6944 6.08164 12.3507 5.75 13.25 5.75C14.0849 5.75 14.7148 6.03567 15.1394 6.48481C15.4239 6.78583 15.4105 7.26052 15.1095 7.54505C14.8085 7.82958 14.3338 7.81621 14.0493 7.51519C13.9394 7.39898 13.7204 7.25 13.25 7.25C12.7493 7.25 12.5306 7.41836 12.4243 7.54489C12.2934 7.70065 12.25 7.896 12.25 8C12.25 8.104 12.2934 8.29935 12.4243 8.45511C12.5306 8.58164 12.7493 8.75 13.25 8.75C13.3257 8.75 13.3988 8.76121 13.4676 8.78207C14.1307 8.87646 14.6319 9.17251 14.9743 9.58011C15.3684 10.0493 15.5 10.604 15.5 11C15.5 11.396 15.3684 11.9507 14.9743 12.4199C14.5556 12.9184 13.8993 13.25 13 13.25C12.1651 13.25 11.5352 12.9643 11.1106 12.5152C10.8261 12.2142 10.8395 11.7395 11.1405 11.4549C11.4415 11.1704 11.9162 11.1838 12.2007 11.4848C12.3106 11.601 12.5296 11.75 13 11.75C13.5007 11.75 13.7194 11.5816 13.8257 11.4551C13.9566 11.2993 14 11.104 14 11C14 10.896 13.9566 10.7007 13.8257 10.5449C13.7194 10.4184 13.5007 10.25 13 10.25C12.9243 10.25 12.8512 10.2388 12.7824 10.2179C12.1193 10.1235 11.6181 9.82749 11.2757 9.41989C10.8816 8.95065 10.75 8.396 10.75 8C10.75 7.604 10.8816 7.04935 11.2757 6.58011Z"
                          fill="#f8fc03"
                        ></path>{" "}
                      </g>
                    </svg>
                  </span>
                </button>

                <button className="profile_item bottom-8 -left-0 absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
                  <span className="block  w-14 h-14  transition-all duration-500 rounded-full z-[2] bg-white">
                    <svg
                      width="55px"
                      height="55px"
                      viewBox="0 0 1024 1024"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#000000"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <circle
                          cx="512"
                          cy="512"
                          r="512"
                          fill="#13aa52"
                        ></circle>{" "}
                        <path d="M648.86 449.44c-32.34-142.73-108.77-189.66-117-207.59-9-12.65-18.12-35.15-18.12-35.15-.15-.38-.39-1.05-.67-1.7-.93 12.65-1.41 17.53-13.37 30.29-18.52 14.48-113.54 94.21-121.27 256.37-7.21 151.24 109.25 241.36 125 252.85l1.79 1.27v-.11c.1.76 5 36 8.44 73.34H526a726.68 726.68 0 0 1 13-78.53l1-.65a204.48 204.48 0 0 0 20.11-16.45l.72-.65c33.48-30.93 93.67-102.47 93.08-216.53a347.07 347.07 0 0 0-5.05-56.76zM512.35 659.12s0-212.12 7-212.08c5.46 0 12.53 273.61 12.53 273.61-9.72-1.17-19.53-45.03-19.53-61.53z"></path>{" "}
                      </g>
                    </svg>
                  </span>
                </button>

                <button className="profile_item bottom-8 -right-0 absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
                  <span className="block  w-14 h-14  transition-all duration-500 rounded-full z-[2] bg-white p-2 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="42"
                      height="43"
                      viewBox="0 0 50 50"
                    >
                      <path d="M49.729 11h-.85c-1.051 0-2.041.49-2.68 1.324l-8.7 11.377-8.7-11.377C28.162 11.49 27.171 11 26.121 11h-.85l10.971 14.346L25.036 40h.85c1.051 0 2.041-.49 2.679-1.324L37.5 26.992l8.935 11.684C47.073 39.51 48.063 40 49.114 40h.85L38.758 25.346 49.729 11zM21.289 34.242c-2.554 3.881-7.582 5.87-12.389 4.116C4.671 36.815 2 32.611 2 28.109L2 27h12v0h11l0-4.134c0-6.505-4.818-12.2-11.295-12.809C6.273 9.358 0 15.21 0 22.5l0 5.573c0 5.371 3.215 10.364 8.269 12.183 6.603 2.376 13.548-1.17 15.896-7.256 0 0 0 0 0 0h-.638C22.616 33 21.789 33.481 21.289 34.242zM2 22.5C2 16.71 6.71 12 12.5 12S23 16.71 23 22.5V25H2V22.5z"></path>
                    </svg>
                  </span>
                </button>

                <button className="profile_item right-[40%] -bottom-6 absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
                  <span className="block  w-14 h-14  transition-all duration-500 rounded-full z-[2] bg-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="58"
                      height="58"
                      viewBox="0 0 30 30"
                    >
                      <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
                    </svg>
                  </span>
                </button>

                <button className="profile_item w-[250px] h-[250px] p-1 border-2 rounded-full hover:border-gray-400/50 cursor-pointer transition-all duration-500 z-0">
                  <div className="w-full h-full flex items-center justify-center p-2 rounded-full active:scale-95 hover:scale-95 object-cover transition-all duration-500">
                    <span className="w-full h-full inline-block">
                      <img
                        src="/images/dp.png"
                        alt="Shubham Jangra"
                        className="w-full h-full object-cover rounded-full border-none hover:scale-95 duration-300 "
                      />
                    </span>
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="w-full h-full md:w-1/2 text-center md:text-left">
            <h1
              className="text-2xl md:text-4xl font-bold  mb-4"
              style={{ color: text }}
            >
              Hello!
            </h1>
            <h1
              className="text-2xl md:text-4xl font-bold mb-4 text overflow-hidden whitespace-nowrap"
              style={{ color: text }}
            >
              I am Shubham Jangra
            </h1>
            <p className="text-xl" style={{ color: text }}>
              A passionate MERN stack developer. I am skilled at creating
              dynamic, user-friendly web applications. With expertise in
              MongoDB, Express.js, React, and Node.js, I transform ideas into
              scalable and efficient solutions. I thrive in collaborative
              environments and enjoy staying on the cutting edge of technology
              to deliver modern, responsive, and impactful web experiences.
              Let's build something amazing together!
            </p>

            <div className="flex  bg-blue-300 rounded-xl  mt-2 flex-row w-full justify-evenly  p-3 ">
              <a
                className="text-6xl hover:scale-95"
                href="https://github.com/shubhamjangra-1234"
              >
                <FaGithub />
              </a>
              <a
                className="text-6xl hover:scale-95 "
                href="https://www.linkedin.com/in/shubham-jangra-1a945129b/"
              >
                <FaLinkedin />
              </a>
              <a
                className="text-6xl hover:scale-95"
                href="https://www.instagram.com/ig.shubham.jangra/"
              >
                <FaSquareInstagram />
              </a>
            </div>
            <div className="my-8">
              <a
                href="/reactimg/Resume.pdf"
                className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition duration-200 inline-block"
                download
              >
                Resume
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default IntroSection;
