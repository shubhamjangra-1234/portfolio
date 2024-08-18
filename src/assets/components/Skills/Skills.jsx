import React from "react";
import "./Skills.css";
import { useState } from "react";
import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";

function Skills() {
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
    <div style={{ backgroundColor: color }}>
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
      <div className="side " style={{ color: text }}>
        <h1 style={{ color: text }}> Skills </h1>
        <p>
          I am practicing AS a web dev Since 2022 ,I have a Gain lot of skills
          and knowledge in WEb dev Filed.
        </p>
        <p>I am trying to keep learning new Skills and technologies</p>
      </div>
      <div className="skills  flex justify-center flex-row">
        <div className="bars  flex-wrap justify-between align-middle flex-col">
          <li>
            <h3>html </h3>
            <h2 style={{ color: text }}>100%</h2>
            <span className="bar">
              <span className="html"></span>
            </span>
          </li>
          <li>
            <h3>css</h3>
            <h2 style={{ color: text }}>90%</h2>
            <span className="bar">
              <span className="css"></span>
            </span>
          </li>
          <li>
            <h3>javascript</h3>
            <h2 style={{ color: text }}>70%</h2>
            <span className="bar">
              <span className="javascript"></span>
            </span>
          </li>
          <li>
            <h3>react</h3>
            <h2 style={{ color: text }}>80%</h2>
            <span className="bar">
              <span className="react"></span>
            </span>
          </li>
          <li>
            <h3>node</h3>
            <h2 style={{ color: text }}>80%</h2>
            <span className="bar">
              <span className="node"></span>
            </span>
          </li>
          <li>
            <h3>express</h3>
            <h2 style={{ color: text }}>80%</h2>
            <span className="bar">
              <span className="express"></span>
            </span>
          </li>
          <li>
            <h3>mongoDb</h3>
            <h2 style={{ color: text }}>60%</h2>
            <span className="bar">
              <span className="mongodb"></span>
            </span>
          </li>
          <li>
            <h3>Tailwind</h3>
            <h2 style={{ color: text }}>90%</h2>
            <span className="bar">
              <span className="tailwind"></span>
            </span>
          </li>
          <li>
            <h3>Git</h3>
            <h2 style={{ color: text }}>80%</h2>
            <span className="bar">
              <span className="git"></span>
            </span>
          </li>
          <li>
            <h3>Github</h3>
            <h2 style={{ color: text }}>90%</h2>
            <span className="bar">
              <span className="git"></span>
            </span>
          </li>
        </div>
      </div>

      <div className="w-full text-center">
        <p style={{ color: text }} className="font-bold text-5xl">Services</p>
      </div>
      <div className="w-full h-fit mt-8 p-12 gap-10 justify-evenly flex flex-wrap">
        <div className=" duration-300 relative h-[400px] w-[300px] rounded-md hover:scale-105 ">
          <img
            src="/reactimg/team.jpeg"
            alt="AirMax Pro"
            className="z-0 h-full w-full rounded-md object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
          <div className="absolute bottom-4 left-4 text-left">
            <h1 className="text-lg font-semibold text-white">
              Team Management
            </h1>
            <p className="mt-2 text-sm text-gray-300">
              i am good in team management and performing my role in a team
              project.
            </p>
          </div>
        </div>
        <div className="relative hover:scale-105 duration-300 h-[400px] w-[300px] rounded-md">
          <img
            src="/reactimg/responsive.png"
            alt="AirMax Pro"
            className="z-0 h-full w-full rounded-md object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
          <div className="absolute bottom-4 left-4 text-left">
            <h1 className="text-lg font-semibold text-white">
              Responsive web Design
            </h1>
            <p className="mt-2 text-sm text-gray-300">
              I built responsive web designs suitable for of devices and also
              user friendly.
            </p>
          </div>
        </div>
        <div className="relative object-cover  hover:scale-105 duration-300 h-[400px] w-[300px] rounded-md">
          <img
            src="/reactimg/problem.png"
            alt="AirMax Pro"
            className="z-0 h-full w-full rounded-md object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
          <div className="absolute bottom-4 left-4 text-left">
            <h1 className="text-lg font-semibold text-white">
              Problem SOLving
            </h1>
            <p className="mt-2 text-sm text-gray-300">
              i can manage and face the problems with ideas.
            </p>
          </div>
        </div>
        <div className="relative hover:scale-105 duration-300 h-[400px] w-[300px] rounded-md">
          <img
            src="/reactimg/Development.png"
            alt="AirMax Pro"
            className="z-0 h-full w-full rounded-md object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
          <div className="absolute bottom-4 left-4 text-left">
            <h1 className="text-lg font-semibold text-white">Web Devlopment</h1>
            <p className="mt-2 text-sm text-gray-300">
              i can built user friendly app and website with effective designs.
            </p>
          </div>
        </div>
        <div className="relative hover:scale-105 duration-300 h-[400px] w-[300px] rounded-md">
          <img
            src="/reactimg/Api.png"
            alt="AirMax Pro"
            className="z-0 h-full w-full rounded-md object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
          <div className="absolute bottom-4 left-4 text-left">
            <h1 className="text-lg font-semibold text-white">Api Handeling</h1>
            <p className="mt-2 text-sm text-gray-300">
              i also know the working and can handle the apis
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
