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
import { motion } from "framer-motion";
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
import NonPro from "./Non-pro";

const About = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };
  return (
    <section id="about" className="w-full">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
        className=" lg:ml-56 item mx-auto"
      >
        <div className="grid grid-cols-1 gap-6">
          <div className="p-2">
          <div className=" flex justify-between space-x-2 items-center  text-zinc-200 text-center py-2 font-bold font-times mb-5 text-2xl tracking-tighter md:text-4xl/tight">
            About
            <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    id="Layer_1"
    width="44"
    height="44"
    fill="#000"
    version="1.1"
    viewBox="0 0 503.68 503.68"
  >
    <g id="SVGRepo_iconCarrier">
      <path
        fill="#FFD7D7"
        d="M251.84 328.746c5.12 0 8.533 4.267 8.533 8.533s-3.413 8.533-8.533 8.533-8.533-4.267-8.533-8.533 3.413-8.533 8.533-8.533"
      ></path>
      <path
        fill="#F2EDDA"
        d="M499.307 38.613v256H379.84V72.746L337.173 4.48h128c17.067 0 34.134 17.066 34.134 34.133M123.84 260.48v34.133H4.373v-256C4.373 21.546 21.44 4.48 38.507 4.48h85.333v256m213.333-256-42.667 68.267v221.867h-34.133V4.48z"
      ></path>
      <path fill="#ECF4F7" d="m337.173 4.48 42.667 68.266h-85.333z"></path>
      <path
        fill="#80D6FA"
        d="M337.173 294.613h-42.666V72.746h85.333v221.867z"
      ></path>
      <path fill="#ECF4F7" d="M209.173 448.213h85.334v-68.266h-85.334z"></path>
      <path
        fill="#FFE079"
        d="M123.84 226.346V4.48h136.533v290.133H123.84V260.48z"
      ></path>
      <g fill="#ECF4F7">
        <path d="M499.307 294.613v51.2c0 17.067-17.067 34.133-34.133 34.133H38.507c-17.067 0-34.133-17.067-34.133-34.133v-51.2h494.933M465.173 490.88v8.533h-68.267v-8.533c0-14.507 11.093-25.6 25.6-25.6h17.067c14.507 0 25.6 11.093 25.6 25.6"></path>
      </g>
      <path
        fill="#51565F"
        d="M465.173 503.68h-68.267c-2.56 0-4.267-1.707-4.267-4.267v-8.533c0-16.213 13.653-29.867 29.867-29.867h17.067c16.213 0 29.867 13.653 29.867 29.867v8.533c0 2.56-1.707 4.267-4.267 4.267m-64-8.533h59.733v-4.267c0-11.947-9.387-21.333-21.333-21.333h-17.067c-11.947 0-21.333 9.387-21.333 21.333zm-55.466 8.533h-307.2c-2.56 0-4.267-1.707-4.267-4.267s1.707-4.267 4.267-4.267h12.8v-12.8c0-2.56 1.707-4.267 4.267-4.267s4.267 1.707 4.267 4.267v12.8h25.6v-12.8c0-2.56 1.707-4.267 4.267-4.267s4.267 1.707 4.267 4.267v12.8h25.6v-12.8c0-2.56 1.707-4.267 4.267-4.267s4.267 1.707 4.267 4.267v12.8h25.6v-12.8c0-2.56 1.707-4.267 4.267-4.267s4.267 1.707 4.267 4.267v12.8h25.6v-12.8c0-2.56 1.707-4.267 4.267-4.267s4.267 1.707 4.267 4.267v12.8h25.6v-12.8c0-2.56 1.707-4.267 4.267-4.267s4.267 1.707 4.267 4.267v12.8h25.6v-12.8c0-2.56 1.707-4.267 4.267-4.267s4.267 1.707 4.267 4.267v12.8h25.6v-12.8c0-2.56 1.707-4.267 4.267-4.267s4.267 1.707 4.267 4.267v12.8h25.6v-12.8c0-2.56 1.707-4.267 4.267-4.267s4.267 1.707 4.267 4.267v12.8h12.8c2.56 0 4.267 1.707 4.267 4.267s-1.713 4.267-4.273 4.267m-51.2-51.2c-2.56 0-4.267-1.707-4.267-4.267V414.08c0-2.56 1.707-4.267 4.267-4.267s4.267 1.707 4.267 4.267v34.133c-.001 2.56-1.707 4.267-4.267 4.267m-85.334 0c-2.56 0-4.267-1.707-4.267-4.267V414.08c0-2.56 1.707-4.267 4.267-4.267s4.267 1.707 4.267 4.267v34.133c0 2.56-1.707 4.267-4.267 4.267m256-68.267H38.507c-19.627 0-38.4-18.773-38.4-38.4v-51.2c0-2.56 1.707-4.267 4.267-4.267h460.8c2.56 0 4.267 1.707 4.267 4.267s-1.707 4.267-4.267 4.267H8.64v46.933c0 14.507 15.36 29.867 29.867 29.867h426.667c14.507 0 29.867-15.36 29.867-29.867v-307.2c0-14.507-15.36-29.867-29.867-29.867H379.84c-2.56 0-4.267-1.707-4.267-4.267S377.28.212 379.84.212h85.333c19.627 0 38.4 18.773 38.4 38.4v307.2c0 19.628-18.773 38.401-38.4 38.401M251.84 350.08c-6.827 0-12.8-5.973-12.8-12.8s5.973-12.8 12.8-12.8 12.8 5.973 12.8 12.8c0 6.826-5.973 12.8-12.8 12.8m0-17.067c-2.56 0-4.267 1.707-4.267 4.267s1.707 4.267 4.267 4.267 4.267-1.707 4.267-4.267-1.707-4.267-4.267-4.267m128-68.267c-2.56 0-4.267-1.707-4.267-4.267v-153.6c0-2.56 1.707-4.267 4.267-4.267s4.267 1.707 4.267 4.267v153.6c0 2.561-1.707 4.267-4.267 4.267m-42.667 0c-2.56 0-4.267-1.707-4.267-4.267v-153.6c0-2.56 1.707-4.267 4.267-4.267s4.267 1.707 4.267 4.267v153.6c0 2.561-1.707 4.267-4.267 4.267m-42.666 0c-2.56 0-4.267-1.707-4.267-4.267V72.746c0-.853 0-1.707.853-2.56L333.76 1.92c1.707-2.56 5.973-2.56 6.827 0l42.667 68.267c.853 1.707.853 2.56 0 4.267s-2.56 2.56-3.413 2.56h-51.2c-2.56 0-4.267-1.707-4.267-4.267s1.707-4.267 4.267-4.267h43.52l-34.987-56.32-38.4 61.44v186.88c-.001 2.56-1.707 4.266-4.267 4.266m-34.134 0c-2.56 0-4.267-1.707-4.267-4.267V8.746h-128v42.667h46.933c2.56 0 4.267 1.707 4.267 4.267s-1.707 4.267-4.267 4.267h-46.933v25.6h12.8c2.56 0 4.267 1.707 4.267 4.267s-1.707 4.267-4.267 4.267h-12.8v25.6h12.8c2.56 0 4.267 1.707 4.267 4.267s-1.707 4.267-4.267 4.267h-12.8v25.6h46.933c2.56 0 4.267 1.707 4.267 4.267s-1.707 4.267-4.267 4.267h-46.933v25.6h12.8c2.56 0 4.267 1.707 4.267 4.267s-1.707 4.267-4.267 4.267h-12.8v25.6h12.8c2.56 0 4.267 1.707 4.267 4.267s-1.707 4.267-4.267 4.267h-12.8v29.867c0 2.56-1.707 4.267-4.267 4.267s-4.267-1.707-4.267-4.267v-256c0-2.56 1.707-4.267 4.267-4.267h136.533c2.56 0 4.267 1.707 4.267 4.267v256c.001 2.556-1.706 4.262-4.266 4.262m-256 0c-2.56 0-4.267-1.707-4.267-4.267V38.613c0-19.627 18.773-38.4 38.4-38.4h51.2c2.56 0 4.267 1.707 4.267 4.267s-1.707 4.267-4.267 4.267h-51.2C24 8.746 8.64 24.106 8.64 38.613V260.48c0 2.56-1.707 4.266-4.267 4.266"
      ></path>
    </g>
  </svg>
          </div>
            <div>
                <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeIn}
                className="my-4 space-y-4">
                  <p className="font-mono text-md mt-8 text-left sm:text-lg md:text-sm text-gray-200">
                    -&gt; Graduated from{" "}
                    <span className="font-semibold text-[#36cc65]">
                      Gitam[Mdu-University ]
                    </span>
                    , with a degree in Computer Science and Engineering.
                  </p>
                  <p className="font-mono text-md mt-8 text-left sm:text-lg md:text-sm  text-gray-200">
                    -&gt; Originally from{" "}
                    <span className="font-semibold text-[#36cc65]">
                      {" "}
                      Bahadurgarh, Haryana [124507]
                    </span>
                    , where I cultivated a passion for innovative technology and
                    creative
                  </p>
                  <p className="font-mono text-md mt-8 text-left sm:text-lg md:text-sm  text-gray-200">
                    -&gt; Currently practicing as a{" "}
                    <span className="font-semibold text-[#36cc65]">
                      Full-Stack Developer and UI/UX Designer
                    </span>
                    , blending technical expertise with a keen eye for
                    aesthetics.
                  </p>
                  <p className="font-mono text-md mt-8 text-left sm:text-lg md:text-sm  text-gray-200">
                    -&gt; Focused on delivering user-centric, high-impact
                    digital solutions while continuously advancing my skills and
                    knowledge.{" "}
                  </p>
               

                <div className="my-8 text-left">
                  <a href=
                  "https://drive.google.com/file/d/1Y3pf2XcDD-JRN3oH8n8gML2CeuFV8GQf/view?usp=sharing">
                    <button className="offset">
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="34"
                        height="34"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          id="SVGRepo_iconCarrier"
                          stroke="#fff"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 12v7m0 0-2.25-2.333M12 19l2.25-2.333M6.6 17.833c-1.988 0-3.6-1.641-3.6-3.666 0-1.669 1.094-3.077 2.592-3.521A.15.15 0 0 0 5.7 10.5C5.7 7.462 8.118 5 11.1 5s5.4 2.462 5.4 5.5a.09.09 0 0 0 .11.089q.382-.088.79-.089c1.988 0 3.6 1.642 3.6 3.667s-1.612 3.666-3.6 3.666"
                        ></path>
                      </svg>
                    </button>
                  </a>
                </div>
              </motion.div>
            </div>
            <div className="w-full ">
              <h2 className="text-gray-100 w-fit text-left text-2xl mb-10 font-times border-b border-dashed border-zinc-300   md:text-2xl/tight">
                Professional Overview
              </h2>
              <VerticalTimeline className=" ">
                <VerticalTimelineElement
                  className=" line vertical-timeline-element--work "
                  contentStyle={{
                    background: "#c9edef",
                    color: "#fff",
                    boxShadow: "1px 1px 4px #27272a ",
                  }}
                  lineColor={{ background: "" }}
                  contentArrowStyle={{
                    borderRight: "10px solid #c9edef ",
                  }}
                  date="2022 - present"
                  iconStyle={{
                    background: "#c9edef",
                    color: "#fff",
                  }}
                  icon={<FcBusinessman />}
                >
                  <div className=" p-2 rounded-xl">
                    <h3 className="vertical-timeline-element-title border-b border-dashed  text-md text-blue-500 ">
                      Professional Overview:
                    </h3>
                    <p className="text-zinc-500 font-mono text-sm">
                      I'm a developer dedicated to continuous learning and
                      crafting efficient, innovative digital solutions.
                    </p>
                  </div>
                </VerticalTimelineElement>
                {/* <VerticalTimelineElement
                  contentStyle={{
                    background: "#b0eec3",
                    color: "#fff",
                    boxShadow: "1px 1px 4px #27272a ",
                  }}
                  contentArrowStyle={{
                    borderRight: "10px solid #b0eec3 ",
                  }}
                  className="vertical-timeline-element--work"
                  iconStyle={{ background: "#b0eec3", color: "white" }}
                  icon={<FcMultipleDevices />}
                >
                  <h3 className="vertical-timeline-element-title text-md text-green-600 ">
                    Skills and Expertise:
                  </h3>

                  <ul>
                    <li className="text-zinc-500 font-mono text-sm mt-2 ">
                      <b>Frontend</b>: React.js, HTML5, CSS3, JavaScript,
                      Tailwind CSS, EJS
                    </li>
                    <li className="text-zinc-500 font-mono text-sm">
                      <b>Backend</b>: Node.js, Express.js
                    </li>
                    <li className="text-zinc-500 font-mono text-sm">
                      <b>Database</b>: MongoDB(Compass , Atlas)
                    </li>
                    <li className="text-zinc-500 font-mono text-sm">
                      <b>Version Control</b>: Git, GitHub
                    </li>
                    <li className="text-zinc-500 font-mono text-sm">
                      <b> Deployment</b>: Vercel, Render
                    </li>
                    <li className="text-zinc-500 font-mono text-sm">
                      <b>UI/UX Design</b>: Responsive Design, Flexbox/Grid
                    </li>
                  </ul>
                </VerticalTimelineElement> */}
                <VerticalTimelineElement
                  contentStyle={{
                    background: "#c9edef",
                    color: "#fff",
                    boxShadow: "1px 1px 4px #27272a ",
                  }}
                  contentArrowStyle={{
                    borderRight: "10px solid #c9edef ",
                  }}
                  date=" present"
                  className="vertical-timeline-element--work"
                  iconStyle={{
                    background: "#c9edef",
                    color: "#fff",
                  }}
                  icon={<FcStatistics />}
                >
                  <h3 className="vertical-timeline-element-title text-md text-blue-500 ">
                    Work-Experience
                  </h3>

                  <p className="text-zinc-500 font-mono text-sm">Fresher</p>
                </VerticalTimelineElement>
                {/* <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  contentStyle={{
                    background: "#b0eec3",
                    color: "#fff",
                    boxShadow: "1px 1px 4px #27272a ",
                  }}
                  contentArrowStyle={{
                    borderRight: "10px solid #b0eec3 ",
                  }}
                  iconStyle={{ background: "#b0eec3", color: "white" }}
                  icon={<FcReadingEbook />}
                >
                  <h3 className="vertical-timeline-element- text-md text-green-500 ">
                    Passion and Interests
                  </h3>

                  <p className="text-zinc-500 font-mono text-sm">
                    Programming, UpSkilling, Photography, Problem Solving, UI/UX
                    Design, Web Development
                  </p>
                </VerticalTimelineElement> */}
                <VerticalTimelineElement
                  className="vertical-timeline-element--education"
                  contentStyle={{
                    background: "#c9edef",
                    color: "#fff",
                    boxShadow: "1px 1px 4px #27272a ",
                  }}
                  contentArrowStyle={{
                    borderRight: "10px solid #c9edef ",
                  }}
                  iconStyle={{
                    background: "#c9edef",
                    color: "#fff",
                  }}
                  icon={<FcRating />}
                >
                  <h3 className="vertical-timeline-element- text-md text-blue-500 ">
                    Goals and Ambitions:
                  </h3>

                  <p className="text-zinc-500 font-mono text-sm">
                    To become a skilled and innovative full-stack dev , creating
                    impactful and user-friendly web application
                  </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className="vertical-timeline-element--education"
                  contentStyle={{
                    background: "#c9edef",
                    color: "#fff",
                    boxShadow: "1px 1px 4px #27272a ",
                  }}
                  contentArrowStyle={{
                    borderRight: "10px solid #c9edef ",
                  }}
                  iconStyle={{ background: "#c9edef", color: "white" }}
                  icon={<FcMindMap />}
                >
                  <h3 className="vertical-timeline-element- text-md text-blue-500 ">
                    Personal Interests
                  </h3>

                  <p className="text-zinc-500 font-mono text-sm">
                    Enthusiastic about exploring new technologies, solving
                    complex problems, and continuously enhancing web development
                    skills.
                  </p>
                </VerticalTimelineElement>
              </VerticalTimeline>
            </div>
            <div className="w-full mt-10">
              <h2 className="text-gray-100 w-fit text-left text-2xl mb-4 font-times border-b border-dashed border-zinc-300 md:text-2xl/tight">
                Non-Professional Life
              </h2>
              <div className="space-y-4">
                <p className=" text-md text-left sm:text-lg md:text-sm text-gray-200">
                  In my free time, I enjoy exploring new technologies and
                  working on personal projects to enhance my skills. I have a
                  passion for photography and love capturing moments that tell a
                  story. I also enjoy traveling and experiencing different
                  cultures and cuisines.
                </p>
              </div>
            </div>
            <NonPro />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
