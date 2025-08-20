/* eslint-disable no-unused-vars */
import React from "react";
import "./Skills.css";
import { motion } from "framer-motion";

import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";

function Skills() {
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };
  return (
    <div className="">
      <div

        id="skills"
        className=" lg:ml-56 "
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeIn}
          className=" text-left  ">
          <div className=" flex justify-between space-x-2 items-center  text-zinc-800 text-center py-2 font-bold font-times mb-5 text-2xl tracking-tighter md:text-4xl/tight">
            My Capabilities
            <svg
              width="64px"
              height="64px"
              viewBox="0 0 64 64"
              data-name="Layer 1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <defs>
                  <style>
                    {`
                      .cls-1 { fill: #f5dd90; }
                      .cls-2 { fill: #f76c5e; }
                      .cls-3 { fill: #6096ba; }
                      .cls-4 { fill: #274c77; }
                    `}
                  </style>
                </defs>
                <path
                  className="cls-4"
                  d="M46.2,32c0-.9,.3-1.72,.8-2.4-.36-2.14-1.2-4.11-2.4-5.81-.83-.13-1.63-.49-2.26-1.13s-1.01-1.44-1.13-2.26c-1.7-1.2-3.67-2.04-5.81-2.4-.67,.5-1.5,.8-2.4,.8s-1.72-.3-2.4-.8c-2.14,.36-4.11,1.2-5.81,2.4-.13,.83-.49,1.63-1.13,2.26s-1.44,1.01-2.26,1.13c-1.2,1.7-2.04,3.67-2.4,5.81,.5,.67,.8,1.5,.8,2.4s-.3,1.72-.8,2.4c.36,2.14,1.2,4.11,2.4,5.81,.83,.13,1.63,.49,2.26,1.13,.64,.64,1.01,1.44,1.13,2.26,1.7,1.2,3.67,2.04,5.81,2.4,.67-.5,1.5-.8,2.4-.8s1.72,.3,2.4,.8c2.14-.36,4.11-1.2,5.81-2.4,.13-.83,.49-1.63,1.13-2.26,.64-.64,1.44-1.01,2.26-1.13,1.2-1.7,2.04-3.67,2.4-5.81-.5-.67-.8-1.5-.8-2.4Z"
                ></path>
                <circle className="cls-1" cx="33" cy="32" r="9"></circle>
                <path
                  className="cls-3"
                  d="M7,32c0-14.36,11.64-26,26-26v4c-12.15,0-22,9.85-22,22"
                ></path>
                <polygon
                  className="cls-2"
                  points="9 38 5 32 13 32 9 38"
                ></polygon>
                <path
                  className="cls-3"
                  d="M46,54.51c-12.44,7.18-28.34,2.92-35.52-9.52l3.46-2c6.08,10.52,19.53,14.13,30.05,8.05"
                ></path>
                <polygon
                  className="cls-2"
                  points="50.19 49.78 47 56.25 43 49.32 50.19 49.78"
                ></polygon>
                <path
                  className="cls-3"
                  d="M46,9.48c12.44,7.18,16.7,23.08,9.52,35.52l-3.46-2c6.08-10.52,2.47-23.98-8.05-30.05"
                ></path>
                <polygon
                  className="cls-2"
                  points="39.8 8.21 47 7.75 43 14.68 39.8 8.21"
                ></polygon>
              </g>
            </svg>
          </div>

          <p className="text-zinc-800 text-center text-sm font-sans">
            I am trying to keep learning new Skills and technologies  I am practicing AS a web dev Since 2022 ,I have Gain a lot of
            skills and knowledge in dev Field.
          </p>
          <div className="sm:col-span-2 py-4 rounded-xl border-zinc-500">
            <div className="">
              <div className="flex flex-wrap gap-4">
                <li
                  data-aos="zoom-in"
                  className="shadow-sm shadow-zinc-800 bg-blue-100 px-3 text-zinc-700 font-mono py-2 rounded-3xl"
                >
                  Web Development
                </li>
                <li
                  data-aos="zoom-in"
                  className="shadow-sm shadow-zinc-800 bg-blue-100 px-3 text-zinc-700 font-mono py-2 rounded-3xl"
                >
                  UI/UX Design
                </li>
                <li
                  data-aos="zoom-in"
                  className="shadow-sm shadow-zinc-800 bg-blue-100 px-3 text-zinc-700 font-mono py-2 rounded-3xl"
                >
                  Problem Solving
                </li>
                <li
                  data-aos="zoom-in"
                  className="shadow-sm shadow-zinc-800 bg-blue-100 px-3 text-zinc-700 font-mono py-2 rounded-3xl"
                >
                  Photography
                </li>
                <li
                  data-aos="zoom-in"
                  className="shadow-sm shadow-zinc-800 bg-blue-100 px-3 text-zinc-700 font-mono py-2 rounded-3xl"
                >
                  UpSkilling
                </li>
                <li
                  data-aos="zoom-in"
                  className="shadow-sm shadow-zinc-800 bg-blue-100 px-3 text-zinc-700 font-mono py-2 rounded-3xl"
                >
                  Programming
                </li>
                <li
                  data-aos="zoom-in"
                  className="shadow-sm shadow-zinc-800 bg-blue-100 px-3 text-zinc-700 font-mono py-2 rounded-3xl"
                >
                  react
                </li>
              </div>
            </div>
          </div>
        </motion.div>
        <div className="skills  flex justify-center flex-row">
          <div className="bars  flex-wrap justify-between align-middle flex-col">
            <li className="h-10 flex mb-4 justify-start items-center   ">
              <h2 className="text-gray-800 font-bold font-sans text-2xl lg:text-2xl border-b border-dashed border-zinc-800">
                frontend
              </h2>
            </li>
            <li></li>
            <li className=" mx-2 ">
              <h3 className="text-left w-fit bg-green-100 text-green-700 p-1 rounded-sm px-4 font-bold font-mono  ">
                html{" "}
              </h3>
              <h2 className="text-right font-mono text-red-500 text-sm mr-0">100%</h2>
              <span className="bar">
                <span className="html"></span>
              </span>
            </li>
            <li className=" mx-2 ">
              <h3 className="text-left w-fit bg-green-100  text-green-700 p-1 rounded-sm  px-4 font-bold font-mono  ">
                css
              </h3>
              <h2 className="text-right  font-mono text-red-500 mr-0 text-sm">100%</h2>
              <span className="bar">
                <span className="css "></span>
              </span>
            </li>
            <li className=" mx-2 ">
              <h3 className="text-left w-fit  bg-green-100  text-green-700 p-1 rounded-sm  px-4 font-bold font-mono  ">
                javascript
              </h3>
              <h2 className="text-right  font-mono text-red-500 mr-0 text-sm">90%</h2>
              <span className="bar">
                <span className="javascript"></span>
              </span>
            </li>
            <li className=" mx-2 ">
              <h3 className="text-left w-fit bg-green-100  text-green-700 p-1 rounded-sm  px-4 font-bold font-mono  ">
                ReactJS
              </h3>
              <h2 className="text-right  font-mono text-red-500 mr-0 text-sm">80%</h2>
              <span className="bar">
                <span className="react"></span>
              </span>
            </li>
            <li className=" mx-2 ">
              <h3 className="text-left w-fit bg-green-100  text-green-700 p-1 rounded-sm  px-4 font-bold font-mono  ">
                NextJs
              </h3>
              <h2 className="text-right  font-mono text-red-500 mr-0 text-sm">80%</h2>
              <span className="bar">
                <span className="react"></span>
              </span>
            </li>
            <li className=" mx-2 ">
              <h3 className="text-left w-fit bg-green-100  text-green-700 p-1 rounded-sm  px-4 font-bold font-mono  ">
                Redux
              </h3>
              <h2 className="text-right  font-mono text-red-500 mr-0 text-sm">80%</h2>
              <span className="bar">
                <span className="react"></span>
              </span>
            </li>
            <li className=" mx-2 ">
              <h3 className="text-left w-fit bg-green-100  text-green-700 p-1 rounded-sm  px-4 font-bold font-mono  ">
                Tailwind
              </h3>
              <h2 className="text-right  font-mono text-red-500 mr-0 text-sm">100%</h2>
              <span className="bar">
                <span className="tailwind"></span>
              </span>
            </li>
            <li className=" mx-2 ">
              <h3 className="text-left w-fit bg-green-100  text-green-700 p-1 rounded-sm  px-4 font-bold font-mono  ">
                UI&ux
              </h3>
              <h2 className="text-right  font-mono text-red-500 mr-0 text-sm">100%</h2>
              <span className="bar">
                <span className="html"></span>
              </span>
            </li>
             <li className=" mx-2 ">
              <h3 className="text-left w-fit sm:text-xs bg-green-100  text-green-700 p-1 rounded-xs  px-4 font-bold font-mono  ">
                Reactive Apps
              </h3>
              <h2 className="text-right  font-mono text-red-500 mr-0 text-sm">90%</h2>
              <span className="bar">
                <span className="html"></span>
              </span>
            </li>
            <li></li>
            <li className="h-10 flex my-5 justify-start items-center   ">
              <h2 className="text-gray-800 font-bold font-sans text-2xl lg:text-2xl border-b border-dashed border-zinc-800">
                backend
              </h2>
            </li>
            <li></li>
            <li className=" mx-2 ">
              <h3 className="text-left w-fit text-violet-700 bg-violet-100 p-1 rounded-sm px-2  font-bold font-mono  ">
                node
              </h3>
              <h2 className="text-right  font-mono text-red-500 mr-0 text-sm">80%</h2>
              <span className="bar">
                <span className="node"></span>
              </span>
            </li>
            <li className=" mx-2 ">
              <h3 className="text-left w-fit text-violet-700 bg-violet-100 p-1 rounded-sm px-2  font-bold font-mono  ">
                express
              </h3>
              <h2 className="text-right  font-mono text-red-500 mr-0 text-sm">80%</h2>
              <span className="bar">
                <span className="express"></span>
              </span>
            </li>
            <li className=" mx-2 ">
              <h3 className="text-left  sm:text-sm w-fit text-violet-700 bg-violet-100 p-1 rounded-sm px-2  font-bold font-mono  ">
                Api Handeling
              </h3>
              <h2 className="text-right  font-mono text-red-500 mr-0 text-sm">80%</h2>
              <span className="bar">
                <span className="mongodb"></span>
              </span>
            </li>
            <li className=" mx-2 ">
              <h3 className="text-left w-fit text-violet-700 bg-violet-100 p-1 rounded-sm px-2  font-bold font-mono  ">
                mongoDb
              </h3>
              <h2 className="text-right  font-mono text-red-500 mr-0 text-sm">80%</h2>
              <span className="bar">
                <span className="mongodb"></span>
              </span>
            </li>

            <li className="h-10 flex my-5 justify-start items-center   ">
              <h2 className="text-gray-800 font-bold font-sans text-2xl lg:text-2xl border-b border-dashed border-zinc-800">
                other skills
              </h2>
            </li>
            <li></li>
            <li className=" mx-2 ">
              <h3 className="text-left w-fit  text-zinc-700 bg-blue-100 p-1 rounded-sm  px-4 font-bold font-mono  ">
                Git
              </h3>
              <h2 className="text-right  font-mono text-red-500 mr-0 text-sm">80%</h2>
              <span className="bar">
                <span className="git"></span>
              </span>
            </li>
            <li className=" mx-2 ">
              <h3 className="text-left w-fit  text-zinc-700 bg-blue-100 p-1 rounded-sm  px-4 font-bold font-mono  ">
                Github
              </h3>
              <h2 className="text-right  font-mono text-red-500 mr-0 text-sm">100%</h2>
              <span className="bar">
                <span className="css"></span>
              </span>
            </li>
            <li className=" mx-2 ">
              <h3 className="text-left w-fit  text-zinc-700 bg-blue-100 p-1 rounded-sm  px-4 font-bold font-mono  ">
                Sql
              </h3>
              <h2 className="text-right  font-mono text-red-500 mr-0 text-sm">100%</h2>
              <span className="bar">
                <span className="css"></span>
              </span>
            </li>
            <li className=" mx-2 ">
              <h3 className="text-left w-fit  text-zinc-700 bg-blue-100 p-1 rounded-sm  px-4 font-bold font-mono  ">
                Vercel
              </h3>
              <h2 className="text-right  font-mono text-red-500 mr-0 text-sm">100%</h2>
              <span className="bar">
                <span className="css"></span>
              </span>
            </li>
            <li className=" mx-2 ">
              <h3 className="text-left w-fit  text-zinc-700 bg-blue-100 p-1 rounded-sm  px-4 font-bold font-mono  ">
                Render
              </h3>
              <h2 className="text-right  font-mono text-red-500 mr-0 text-sm">100%</h2>
              <span className="bar">
                <span className="css"></span>
              </span>
            </li>
            <li className=" mx-2 ">
              <h3 className="text-left w-fit  text-zinc-700 bg-blue-100 p-1 rounded-sm  px-4 font-bold font-mono  ">
                WordPress
              </h3>
              <h2 className="text-right  font-mono text-red-500 mr-0 text-sm">100%</h2>
              <span className="bar">
                <span className="css"></span>
              </span>
            </li>
            <li className=" mx-2 ">
              <h3 className="text-left w-fit  text-zinc-700 bg-blue-100 p-1 rounded-sm  px-4 font-bold font-mono  ">
                Deployment
              </h3>
              <h2 className="text-right  font-mono text-red-500 mr-0 text-sm">100%</h2>
              <span className="bar">
                <span className="css"></span>
              </span>
            </li>
            <li className=" mx-2 ">
              <h3 className="text-left w-fit  text-zinc-700 bg-blue-100 p-1 rounded-sm  px-4 font-bold font-mono  ">
                Libraries
              </h3>
              <h2 className="text-right  font-mono text-red-500 mr-0 text-sm">100%</h2>
              <span className="bar">
                <span className="css"></span>
              </span>
            </li>
          </div>
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeIn}
        >
          <p className="text-white bg-blue-400 rounded-xl text-sm p-4 text-left ">
            I just trying to learn new things and be better day by day.
            Currently, I’m focused on hands-on projects that allow me to explore
            and apply new technologies. Working on personal projects and
            collaborating with others gives me real-world insights that
            continuously shape my growth and improve my craft.
          </p>
        </motion.div>
        <motion.projects
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeIn}
        >
          <section className="flex flex-col items-start px-2 my-4 py-2 md:px-2 lg:px-2">
            <h2 className="text-gray-900 text-left text-2xl mb-10 font-times border-b border-dashed border-zinc-800 font-bold tracking-tighter md:text-3xl/tight">
              Projects
            </h2>

            <span className="text-left text-sm rounded-sm text-blue-600 bg-blue-300 p-1 ">
              # Wide Range of Projects:
            </span>
            <p className="text-left text-sm text-zinc-600 w-xl py-2 space-y-4">
              {" "}
              Extensive experience in developing various web applications
              focused on functionality and user experience.
            </p>

            <div className="list-none text-left  text-zinc-600 text-sm w-xl space-y-4">
              <span className="text-left text-green-700 bg-green-300 p-1 rounded-sm ">
                # Core Skills Demonstrated:
              </span>
              <li>
                <ul className="my-2">
                  <li className="text-left">-&gt; CRUD Operations</li>
                  <li className="text-left">-&gt; UI/UX Design</li>
                  <li className="text-left">-&gt; Responsive Design</li>
                  <li className="text-left">-&gt; Routing Fundamentals</li>
                </ul>
              </li>
              <span className=" text-yellow-700 bg-yellow-300 p-1 rounded-sm ">
                # Backend and Frontend Expertise:
              </span>
              <li>
                <ul className="my-2">
                  <li className="text-left">
                    -&gt;Backend Logic & API Management
                  </li>
                  <li className="text-left">
                    -&gt;Frontend Design & Responsiveness
                  </li>
                </ul>
              </li>
              <span className=" text-violet-700 bg-violet-300 p-1 rounded-sm ">
                # MERN Stack Proficiency:
              </span>{" "}
              <li className="text-left text-sm text-zinc-600 ">
                Advanced skills across MongoDB, Express.js, React, and Node.js
                for creating full-stack applications with scalability.
              </li>
            </div>
            <a href="https://github.com/shubhamjangra-1234" alt="github">
              <div className=" flex justify-center border border-zinc-800 p-3 my-4 hover:bg-zinc-300 hover:scale-95 rounded-xl space-x-2 items-center w-fit  text-zinc-800 text-left font-bold font-times mb-5 text-sm">
                Visit My GitHub
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  className="mx-2"
                  viewBox="0 0 20 20"
                >
                  <g id="SVGRepo_iconCarrier">
                    <g
                      id="Page-1"
                      fill="none"
                      fillRule="evenodd"
                      stroke="none"
                      strokeWidth="1"
                    >
                      <g
                        id="Dribbble-Light-Preview"
                        fill="rgba(7, 7, 7, 1)"
                        transform="translate(-140 -7559)"
                      >
                        <g id="icons" transform="translate(56 160)">
                          <path
                            id="github-[#fff]"
                            d="M94 7399c5.523 0 10 4.59 10 10.253 0 4.529-2.862 8.371-6.833 9.728-.507.101-.687-.219-.687-.492 0-.338.012-1.442.012-2.814 0-.956-.32-1.58-.679-1.898 2.227-.254 4.567-1.121 4.567-5.059 0-1.12-.388-2.034-1.03-2.752.104-.259.447-1.302-.098-2.714 0 0-.838-.275-2.747 1.051a9.4 9.4 0 0 0-2.505-.345 9.4 9.4 0 0 0-2.503.345c-1.911-1.326-2.751-1.051-2.751-1.051-.543 1.412-.2 2.455-.097 2.714-.639.718-1.03 1.632-1.03 2.752 0 3.928 2.335 4.808 4.556 5.067-.286.256-.545.708-.635 1.371-.57.262-2.018.715-2.91-.852 0 0-.529-.985-1.533-1.057 0 0-.975-.013-.068.623 0 0 .655.315 1.11 1.5 0 0 .587 1.83 3.369 1.21.005.857.014 1.665.014 1.909 0 .271-.184.588-.683.493-3.974-1.355-6.839-5.199-6.839-9.729 0-5.663 4.478-10.253 10-10.253"
                          ></path>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
              </div>
            </a>
          </section>
        </motion.projects>
      </div>
    </div>
  );
}

export default Skills;
