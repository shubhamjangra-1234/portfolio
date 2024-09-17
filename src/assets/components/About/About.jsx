/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { FaRegLightbulb } from "react-icons/fa";
import { HiComputerDesktop } from "react-icons/hi2";
import "./About.css"
const About = () => {
  const [color, SetColor] = useState("#18181b");
  const [text, SetText] = useState("white");
  const [head , SetHead] = useState("green");
  const dark = function () {
    SetColor("#18181b");
    SetText("white");
  };
  const light = function () {
    SetColor("whitesmoke");
    SetText("black");
  };

  return (
    <section style={{ backgroundColor: color }}>
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

        <div className="item w-3/4 mx-auto md:py-5 lg:py-10 bg-muted">
          <div className="container grid grid-cols-1 gap-12 px-4 md:px-6">
            <div className="space-y-6">
              <div>
                <div className="space-y-4">
          <h2  style={{color : text}} className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
            Hi,
          </h2>
          <h2 style={{color : text}} className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
          I'm Shubham jangra 
          </h2>
          <p style={{color : text}}  className="max-w-full text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            I have a strong background in web development, with expertise in building high-quality, user-friendly web
            applications using modern technologies and frameworks like React, Next.js, and Tailwind CSS. I'm constantly
            learning and staying up-to-date with the latest industry trends and best practices to deliver exceptional
            results for my clients.
          </p>
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
              <div>
                <h2 style={{color : head}}  className="text-3xl border-b-2 border-purple-600 font-bold tracking-tighter">
                  Education
                </h2>
                <div className="mt-4 space-y-4">
                  <h2 className="font-bold border-b-2 text-blue-700 border-purple-600 text-xl">Graduation</h2>
                  <div>
                    <h3 className="text-xl font-semibold">
                      Bachelor of Science in Computer Science
                    </h3>
                    <p style={{color : text}}  className="text-muted-foreground">
                      Ganga Institute of technology and management | 2021 - 2025
                    </p>
                    <p style={{color : text}}  className="text-muted-foreground">
                      [Kablana,Jhajjar,haryana]
                    </p>
                  </div>
                  <div className="mt-4 space-y-4">
                    <h2 className="font-bold border-b-2 text-blue-700 border-purple-600 text-xl">Schooling</h2>
                    <h3  className="text-xl font-semibold">
                      12TH
                    </h3>
                    <p style={{color : text}}  className="text-muted-foreground">
                      Govt. Sr sec School a, Parnala , Bahadurgarh<br />-
                      91%
                    </p>
                    <h3  className="text-xl font-semibold">
                      10TH
                    </h3>
                    <p style={{color : text}}  className="text-muted-foreground">
                      Man singh high School , Bahadurgarh<br />-
                      85%
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <h2 style={{color : head}}  className="text-3xl  border-b-2 border-purple-600 font-bold tracking-tighter">
                  Objectives
                </h2>
                <div className="mt-4 space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold">
                      Continuous Learning
                    </h3>
                    <p style={{color : text}}  className="text-muted-foreground">
                      I am committed to staying up-to-date with the latest web
                      development trends and technologies.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">
                      Innovative Solutions
                    </h3>
                    <p style={{color : text}}  className="text-muted-foreground">
                      I strive to create innovative and user-friendly web
                      applications that solve real-world problems. I am always
                      exploring new ideas and techniques to improve the user
                      experience and push the boundaries of what is possible on
                      the web.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">
                      Collaborative Approach
                    </h3>
                    <p style={{color : text}}  className="text-muted-foreground">
                      I believe in the power of collaboration and enjoy working
                      with cross-functional teams to deliver high-quality
                      projects. I am a strong communicator and am skilled at
                      translating technical concepts into easy-to-understand
                      terms.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-7xl p-16  lg:px-8">
    <div className="w-full mb-12 text-center"><h2  style={{color : text}} className="font-bold text-3xl">services</h2></div>
  <div className="grid grid-cols-1 gap-y-8 text-center sm:grid-cols-2 sm:gap-12 lg:grid-cols-4">
    <div>
      <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-100 hover:scale-95 duration-200 ">
      <HiComputerDesktop className="text-5xl" />
      </div>
      <h3 style={{color:text}} className="mt-8 text-lg font-semibold text-black">Static Webpages</h3>
      <p style={{color:text}}  className="mt-4 text-sm text-gray-600">
      I specialize in creating visually appealing and responsive static web pages, utilizing modern design principles and technologies.
      </p>
    </div>
    <div>
      <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-orange-100 hover:scale-95 duration-200">
      <FaReact className="text-5xl" />
      </div>
      <h3 style={{color:text}}  className="mt-8 text-lg font-semibold text-black">
        React
      </h3>
      <p style={{color:text}}  className="mt-4 text-sm text-gray-600">
      I offer professional services in developing responsive and dynamic React-based web applications, tailored to meet diverse client needs. My expertise ensures efficient, scalable, and user-friendly solutions.
      </p>
    </div>
    <div>
      <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100 hover:scale-95 duration-200 ">
        <FaCode className="text-5xl" />
      </div>
      <h3 style={{color:text}}  className="mt-8 text-lg font-semibold text-black">
        Web designing
      </h3>
      <p style={{color:text}}  className="mt-4 text-sm text-gray-600">
        
I offer professional web design services, crafting visually appealing and user-friendly websites tailored to meet your business needs. Let me help you establish a strong online presence with custom, responsive designs.
      </p>
    </div>
    <div>
      <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-red-100 hover:scale-95 duration-200">
      <FaRegLightbulb className="text-5xl" />
      </div>
      <h3  style={{color:text}} className="mt-8 text-lg font-semibold text-black">problem solving</h3>
      <p style={{color:text}}  className="mt-4 text-sm text-gray-600">
      I offer a series of innovative ideas and expert advice on problem-solving strategies, tailored to enhance your decision-making processes. Let's collaborate to find effective and creative solutions for your challenges.
      </p>
    </div>
  </div>
</div>
<div className="w-full h-60  flex align-middle justify-center">
<div className="main">
  <div className="up">
    <a href="https://www.instagram.com/ig.shubham.jangra/">
    <button className="card1">
      <svg className="instagram" fill-rule="nonzero" height="30px" width="30px" viewBox="0,0,256,256" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg"><g  text-anchor="none" font-size="none" font-weight="none" font-family="none" stroke-dashoffset="0" stroke-dasharray="" stroke-miterlimit="10" stroke-linejoin="miter" stroke-linecap="butt" stroke-width="1" stroke="none" fill-rule="nonzero"><g transform="scale(8,8)"><path d="M11.46875,5c-3.55078,0 -6.46875,2.91406 -6.46875,6.46875v9.0625c0,3.55078 2.91406,6.46875 6.46875,6.46875h9.0625c3.55078,0 6.46875,-2.91406 6.46875,-6.46875v-9.0625c0,-3.55078 -2.91406,-6.46875 -6.46875,-6.46875zM11.46875,7h9.0625c2.47266,0 4.46875,1.99609 4.46875,4.46875v9.0625c0,2.47266 -1.99609,4.46875 -4.46875,4.46875h-9.0625c-2.47266,0 -4.46875,-1.99609 -4.46875,-4.46875v-9.0625c0,-2.47266 1.99609,-4.46875 4.46875,-4.46875zM21.90625,9.1875c-0.50391,0 -0.90625,0.40234 -0.90625,0.90625c0,0.50391 0.40234,0.90625 0.90625,0.90625c0.50391,0 0.90625,-0.40234 0.90625,-0.90625c0,-0.50391 -0.40234,-0.90625 -0.90625,-0.90625zM16,10c-3.30078,0 -6,2.69922 -6,6c0,3.30078 2.69922,6 6,6c3.30078,0 6,-2.69922 6,-6c0,-3.30078 -2.69922,-6 -6,-6zM16,12c2.22266,0 4,1.77734 4,4c0,2.22266 -1.77734,4 -4,4c-2.22266,0 -4,-1.77734 -4,-4c0,-2.22266 1.77734,-4 4,-4z"></path></g></g></svg>
    </button>
    </a>
    <a href="https://www.facebook.com/profile.php?id=100086444626301">
    <button className="card2">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="24" className="facebook" width="24">
        <path d="M9.19795 21.5H13.198V13.4901H16.8021L17.198 9.50977H13.198V7.5C13.198 6.94772 13.6457 6.5 14.198 6.5H17.198V2.5H14.198C11.4365 2.5 9.19795 4.73858 9.19795 7.5V9.50977H7.19795L6.80206 13.4901H9.19795V21.5Z"></path>
      </svg>
    </button>
    </a>
  </div>
  <div className="down">
    <a href="https://www.linkedin.com/in/shubham-jangra-1a945129b/">
    <button className="card3">
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 50 50" className="linkedin">
    <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
</svg>
    </button>
</a>
    <a href="https://github.com/shubhamjangra-1234">
    <button className="card4 ">
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 32 32" className="github">
<path fill-rule="evenodd" d="M 16 4 C 9.371094 4 4 9.371094 4 16 C 4 21.300781 7.4375 25.800781 12.207031 27.386719 C 12.808594 27.496094 13.027344 27.128906 13.027344 26.808594 C 13.027344 26.523438 13.015625 25.769531 13.011719 24.769531 C 9.671875 25.492188 8.96875 23.160156 8.96875 23.160156 C 8.421875 21.773438 7.636719 21.402344 7.636719 21.402344 C 6.546875 20.660156 7.71875 20.675781 7.71875 20.675781 C 8.921875 20.761719 9.554688 21.910156 9.554688 21.910156 C 10.625 23.746094 12.363281 23.214844 13.046875 22.910156 C 13.15625 22.132813 13.46875 21.605469 13.808594 21.304688 C 11.144531 21.003906 8.34375 19.972656 8.34375 15.375 C 8.34375 14.0625 8.8125 12.992188 9.578125 12.152344 C 9.457031 11.851563 9.042969 10.628906 9.695313 8.976563 C 9.695313 8.976563 10.703125 8.65625 12.996094 10.207031 C 13.953125 9.941406 14.980469 9.808594 16 9.804688 C 17.019531 9.808594 18.046875 9.941406 19.003906 10.207031 C 21.296875 8.65625 22.300781 8.976563 22.300781 8.976563 C 22.957031 10.628906 22.546875 11.851563 22.421875 12.152344 C 23.191406 12.992188 23.652344 14.0625 23.652344 15.375 C 23.652344 19.984375 20.847656 20.996094 18.175781 21.296875 C 18.605469 21.664063 18.988281 22.398438 18.988281 23.515625 C 18.988281 25.121094 18.976563 26.414063 18.976563 26.808594 C 18.976563 27.128906 19.191406 27.503906 19.800781 27.386719 C 24.566406 25.796875 28 21.300781 28 16 C 28 9.371094 22.628906 4 16 4 Z"></path>
</svg>
    </button>
    </a>
  </div>
</div>
</div>
    </section>
  );
};

export default About;
