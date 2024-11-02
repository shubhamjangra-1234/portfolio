/* eslint-disable no-unused-vars */
import React from "react";
import "./Skills.css";

import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";

function Skills() {
  return (
    <div className="bg-gradient-to-t from-zinc-950 to-zinc-900 to-zinc-800 p-4">
      <div className=" lg:ml-56 ">
        <div className="side  ">
          <h2 className="text-zinc-500 mb-5 text-3xl font-bold tracking-tighter md:text-4xl/tight">
            My Skills
          </h2>
          <p>
            I am practicing AS a web dev Since 2022 ,I have Gain a lot of skills
            and knowledge in dev Filed.
          </p>
          <p>I am trying to keep learning new Skills and technologies</p>
        </div>
        <div className="skills  flex justify-center flex-row">
          <div className="bars  flex-wrap justify-between align-middle flex-col">
            <li className="h-10 flex my-5 justify-start items-center   ">
              <p className="text-blue-200 font-bold text-xl lg:text-3xl">
                frontend
              </p>
            </li>
            <li></li>
            <li className=" mx-2 ">
              <h3 className="text-left">html </h3>
              <h2 className="text-right mr-0">100%</h2>
              <span className="bar">
                <span className="html"></span>
              </span>
            </li>
            <li className=" mx-2 ">
              <h3 className="text-left">css</h3>
              <h2 className="text-right mr-0">90%</h2>
              <span className="bar">
                <span className="css"></span>
              </span>
            </li>
            <li className=" mx-2 ">
              <h3 className="text-left">javascript</h3>
              <h2 className="text-right mr-0">70%</h2>
              <span className="bar">
                <span className="javascript"></span>
              </span>
            </li>
            <li className=" mx-2 ">
              <h3 className="text-left">react</h3>
              <h2 className="text-right mr-0">80%</h2>
              <span className="bar">
                <span className="react"></span>
              </span>
            </li>
            <li className=" mx-2 ">
              <h3 className="text-left">Tailwind</h3>
              <h2 className="text-right mr-0">90%</h2>
              <span className="bar">
                <span className="tailwind"></span>
              </span>
            </li>
            <li className=" mx-2 ">
              <h3 className="text-left">Reactive Apps</h3>
              <h2 className="text-right mr-0">90%</h2>
              <span className="bar">
                <span className="html"></span>
              </span>
            </li>
            <li className=" mx-2 ">
              <h3 className="text-left">UI&ux</h3>
              <h2 className="text-right mr-0">90%</h2>
              <span className="bar">
                <span className="html"></span>
              </span>
            </li>
            <li></li>
            <li className="h-10 flex my-5 justify-start items-center   ">
              <p className="text-blue-200 font-bold text-xl lg:text-3xl">
                backend
              </p>
            </li>
            <li></li>
            <li className=" mx-2 ">
              <h3 className="text-left">node</h3>
              <h2 className="text-right mr-0">80%</h2>
              <span className="bar">
                <span className="node"></span>
              </span>
            </li>
            <li className=" mx-2 ">
              <h3 className="text-left">express</h3>
              <h2 className="text-right mr-0">80%</h2>
              <span className="bar">
                <span className="express"></span>
              </span>
            </li>
            <li className=" mx-2 ">
              <h3 className="text-left">Api Handeling</h3>
              <h2 className="text-right mr-0">60%</h2>
              <span className="bar">
                <span className="mongodb"></span>
              </span>
            </li>
            <li className=" mx-2 ">
              <h3 className="text-left">mongoDb</h3>
              <h2 className="text-right mr-0">60%</h2>
              <span className="bar">
                <span className="mongodb"></span>
              </span>
            </li>

            <li className="h-10 flex my-5 justify-start items-center   ">
              <p className="text-blue-200 font-bold text-xl lg:text-3xl">
                other skills
              </p>
            </li>
            <li></li>
            <li className=" mx-2 ">
              <h3 className="text-left">Git</h3>
              <h2 className="text-right mr-0">80%</h2>
              <span className="bar">
                <span className="git"></span>
              </span>
            </li>
            <li className=" mx-2 ">
              <h3 className="text-left">Github</h3>
              <h2 className="text-right mr-0">90%</h2>
              <span className="bar">
                <span className="css"></span>
              </span>
            </li>
            <li className=" mx-2 ">
              <h3 className="text-left">Deployment</h3>
              <h2 className="text-right mr-0">90%</h2>
              <span className="bar">
                <span className="css"></span>
              </span>
            </li>
          </div>
        </div>
        <div>
          <p className="text-zinc-100">
            I just trying to learn new things and be better day-by-day
          </p>
        </div>
        <projects>
          <section className="flex flex-col items-center justify-center px-6 py-12 md:px-12 lg:px-24">
            <h2 className="text-zinc-500 text-3xl mb-10 font-bold tracking-tighter md:text-4xl/tight">
              Projects
            </h2>

            <ul className="list-none text-zinc-300 max-w-2xl space-y-4">
              <li>
                <span className="font-semibold text-green-400">
                  Wide Range of Projects:
                </span>{" "}
                Extensive experience in developing various web applications
                focused on functionality and user experience.
              </li>
              <li>
                <span className="font-semibold text-green-400">
                  Core Skills Demonstrated:
                </span>
                <ul className="list-none ml-4 space-y-2">
                  <li> CRUD Operations</li>
                  <li> UI/UX Design</li>
                  <li> Responsive Design</li>
                  <li> Routing Fundamentals</li>
                </ul>
              </li>
              <li>
                <span className="font-semibold text-green-400">
                  Backend and Frontend Expertise:
                </span>
                <ul className="list-none ml-4 space-y-2">
                  <li>Backend Logic & API Management</li>
                  <li>Frontend Design & Responsiveness</li>
                </ul>
              </li>
              <li>
                <span className="font-semibold text-green-400">
                  MERN Stack Proficiency:
                </span>{" "}
                Advanced skills across MongoDB, Express.js, React, and Node.js
                for creating full-stack applications with scalability.
              </li>
            </ul>

            <a
              href="https://github.com/your-github-username"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 px-6 py-3 text-white border bg-gray-800 hover:bg-zinc-900 rounded-md shadow-lg text-center transition duration-300 ease-in-out"
            >
              Visit My GitHub Projects
            </a>
          </section>
        </projects>
      </div>
    </div>
  );
}

export default Skills;
