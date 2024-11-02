/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { FaRegLightbulb } from "react-icons/fa";
import {
  SlSocialInstagram,
  SlSocialGithub,
  SlSocialLinkedin,
} from "react-icons/sl";

import {
  FcBusinessman,
  FcMultipleDevices,
  FcStatistics,
  FcReadingEbook,
  FcRating,
  FcMindMap,
} from "react-icons/fc";
import { HiComputerDesktop } from "react-icons/hi2";
import "./About.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
const About = () => {
  return (
    <section className="w-full py-4 bg-gradient-to-t from-zinc-950 to-zinc-900 to-zinc-800">
      <div className=" lg:ml-56 item w-3/4 mx-auto md:py-5 lg:py-10 bg-muted">
        <div className="grid grid-cols-1 gap-6 px-4 md:px-6">
          <div className="space-y-6">
            <div>
              <div className="space-y-4">
                <h2 className="text-zinc-500 text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Hey Coders!
                </h2>
                <h2 className="text-zinc-500 text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  I&apos;m Shubham Jangra
                </h2>
                <p className="text-zinc-300 text-lg md:text-xl font-normal mt-2">
                  I strive to craft intuitive and engaging user experiences that
                  meet the evolving needs of the digital landscape.{" "}
                </p>

                <div className="my-8">
                  <a
                    href="https://drive.google.com/file/d/10oOEq6ILNC2oUbQLfRlaj_KH4X5M0uct/view?usp=drive_link"
                    className="border text-white px-4 py-2 rounded-xl font-semibold hover:bg-zinc-600 transition duration-200 inline-block"
                  >
                    Resume
                  </a>
                </div>
              </div>
            </div>

            <h1 className="text-center text-zinc-400">OverView</h1>
            <VerticalTimeline className="p-4">
              <VerticalTimelineElement
                className="vertical-timeline-element--work "
                contentStyle={{
                  background: "rgb(32 32 32)",
                  color: "#fff",
                  boxShadow: " 2px 2px 10px 0px white",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid white",
                }}
                date="2022 - present"
                iconStyle={{
                  background: "rgb(32 32 32)",
                  color: "#fff",
                }}
                icon={<FcBusinessman />}
              >
                <h3 className="vertical-timeline-element-title text-xl text-yellow-400 ">
                  Professional Overview:
                </h3>
                <p className="text-zinc-100">
                  MERN stack developer with a strong focus on building
                  responsive, user-friendly web applications using React,
                  Node.js, and Tailwind CSS
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                contentStyle={{
                  background: "rgb(32 32 32)",
                  color: "#fff",
                  boxShadow: " 2px 2px 10px 0px white",
                }}
                date="2022 - present"
                className="vertical-timeline-element--work"
                iconStyle={{ background: "rgb(32 32 32)", color: "white" }}
                icon={<FcMultipleDevices />}
              >
                <h3 className="vertical-timeline-element-title text-yellow-400">
                  Skills and Expertise:
                </h3>

                <ul>
                  <li>
                    <b>Frontend</b>: React.js, HTML5, CSS3, JavaScript, Tailwind
                    CSS, EJS
                  </li>
                  <li>
                    <b>Backend</b>: Node.js, Express.js
                  </li>
                  <li>
                    <b>Database</b>: MongoDB
                  </li>
                  <li>
                    <b>Version Control</b>: Git, GitHub
                  </li>
                  <li>
                    <b> Deployment</b>: Vercel, Heroku
                  </li>
                  <li>
                    <b>UI/UX Design</b>: Responsive Design, Flexbox/Grid
                  </li>
                </ul>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                contentStyle={{
                  background: "rgb(32 32 32)",
                  color: "#fff",
                  boxShadow: " 2px 2px 10px 0px white",
                }}
                date=" present"
                className="vertical-timeline-element--work"
                iconStyle={{
                  background: "rgb(32 32 32)",
                  color: "#fff",
                }}
                icon={<FcStatistics />}
              >
                <h3 className="vertical-timeline-element-title text-yellow-400  ">
                  Experience
                </h3>

                <p>Fresher</p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: "rgb(32 32 32)",
                  color: "#fff",
                  boxShadow: " 2px 2px 10px 0px white",
                }}
                iconStyle={{ background: "rgb(32 32 32)", color: "white" }}
                icon={<FcReadingEbook />}
              >
                <h3 className="vertical-timeline-element-title text-yellow-400 ">
                  Passion and Interests
                </h3>

                <p>
                  Driven MERN dev with a strong passion for crafting responsive,
                  user-centric web applications{" "}
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--education"
                contentStyle={{
                  background: "rgb(32 32 32)",
                  color: "#fff",
                  boxShadow: " 2px 2px 10px 0px white",
                }}
                iconStyle={{
                  background: "rgb(32 32 32)",
                  color: "#fff",
                }}
                icon={<FcRating />}
              >
                <h3 className="vertical-timeline-element-title text-yellow-400 ">
                  Goals and Ambitions:
                </h3>

                <p>
                  Ambitious Developer striving to lead innovative, scalable web
                  projects.
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--education"
                contentStyle={{
                  background: "rgb(32 32 32)",
                  color: "#fff",
                  boxShadow: " 2px 2px 10px 0px white",
                }}
                iconStyle={{ background: "rgb(32 32 32)", color: "white" }}
                icon={<FcMindMap />}
              >
                <h3 className="vertical-timeline-element-title text-yellow-400 ">
                  Personal Interests
                </h3>

                <p>
                  Enthusiastic about exploring new technologies, solving complex
                  problems, and continuously enhancing web development skills.
                </p>
              </VerticalTimelineElement>
            </VerticalTimeline>
          </div>
        </div>
      </div>

      <div className=" lg:ml-56 item p-5 my-4">
        <h1 className="text-zinc-500 text-6xl font-bold tracking-tighter md:text-4xl/tight">
          Services
        </h1>
        <div className="cols gap overflow-hidden">
          <div className="col" onTouchStart="this.classList.toggle('hover');">
            <div className="container">
              <div
                className="front "
                style={{
                  backgroundImage:
                    "url('https://imgs.search.brave.com/pLVcty_QgzAIRDidaazPaIqwY5L2iBX5TQEPNe4khHg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by93ZWItZGV2ZWxv/cG1lbnQtdGVjaG5v/bG9neS1jb2Rpbmct/Y2VudGVyXzEwMTYx/NTUtMTE4OTQuanBn/P3NpemU9NjI2JmV4/dD1qcGc')",
                }}
              >
                <div className="inner">
                  <p>Mern Stack </p>
                  <span>Web Development</span>
                </div>
              </div>
              <div className="back overflow-hidden">
                <div className="inner">
                  <p>
                    Build complete web applications using MongoDB, Express.js,
                    React, and Node.js.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col" onTouchStart="this.classList.toggle('hover');">
            <div className="container">
              <div
                className="front"
                style={{
                  backgroundImage:
                    "url('https://imgs.search.brave.com/tN7aVf1fdLwVTB5VZWkdq8EWE39tsKa8JR0oqX3cK8Y/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cHJvZC53ZWJzaXRl/LWZpbGVzLmNvbS82/MjA0NWM2YjI3MGM4/ODA2YmNlOWIzOGIv/NjIxMTBjZTY2ZjBk/ZGU0NmFiNDhkYTAw/XzguJTIwRGlnaXRh/bCUyMEZvcm0lMjBC/dWlsZGVyLnBuZw')",
                }}
              >
                <div className="inner">
                  <p>API </p>
                  <span>Development</span>
                </div>
              </div>
              <div className="back">
                <div className="inner">
                  <p>
                    Develop and integrate RESTful APIs to connect your front-end
                    and back-end seamlessly.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col" onTouchStart="this.classList.toggle('hover');">
            <div className="container">
              <div
                className="front"
                style={{
                  backgroundImage:
                    "url('https://imgs.search.brave.com/-q-ZLANaTICr6owjyQilmMilygPWwZdHMQJGIvabZVI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAwLzQyLzAxLzE4/LzM2MF9GXzQyMDEx/ODAzXzZHZ3ZtZnh1/UVlsaHdlcTBwRFBt/ejR4YkRqUXFpWHdm/LmpwZw')",
                }}
              >
                <div className="inner">
                  <p>Database </p>
                  <span>Management</span>
                </div>
              </div>
              <div className="back">
                <div className="inner">
                  <p>
                    Create and manage efficient, scalable databases using
                    MongoDB.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col" onTouchStart="this.classList.toggle('hover');">
            <div className="container">
              <div
                className="front"
                style={{
                  backgroundImage:
                    "url('https://imgs.search.brave.com/xmgFhF0zsq_SG1YBw0bKPg9IZ3geyJrE9I1ixLHwFcw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by93ZWItYXBwbGlj/YXRpb25zLWF1dGhl/bnRpY2F0aW9uLXN5/c3RlbS1iZWluZy1k/ZXZlbG9wZWQtd2l0/aC11c2VyLWxvZ2lu/LXNlc3Npb24tbWFu/YWdlbWVudF8xMzE0/NDY3LTIxNDY5OS5q/cGc_c2l6ZT02MjYm/ZXh0PWpwZw')",
                }}
              >
                <div className="inner">
                  <p>Web App</p>
                  <span>Development</span>
                </div>
              </div>
              <div className="back">
                <div className="inner">
                  <p>
                    Build custom web applications tailored to your business
                    needs
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col" onTouchStart="this.classList.toggle('hover');">
            <div className="container">
              <div
                className="front"
                style={{
                  backgroundImage:
                    "url('https://imgs.search.brave.com/j8UQKcx0RlcgVjOyN_-RzOS87-LCtMWSm7_kcSVijCM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZGVzaWduc3R1ZGlv/dWl1eC5jb20vc3Rh/dGljL3VpLXV4LTY2/NDAyMmVkODEyNWQz/NmE1NmFmM2QzMTIx/ZGZkYjYyLmpwZw')",
                }}
              >
                <div className="inner">
                  <p> UI/UX Design</p>
                </div>
              </div>
              <div className="back">
                <div className="inner">
                  <p>
                    Develop intuitive and user-friendly interfaces using React
                    and Tailwind CSS.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
