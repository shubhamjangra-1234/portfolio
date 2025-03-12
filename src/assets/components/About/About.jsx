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
  return (
    <section
    
    className="w-full bg-zinc-800">
      <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className=" lg:ml-56 item p-6 mx-auto md:py-5 lg:py-10">
        <div className="grid grid-cols-1 gap-6">
          <div className="space-y-6">
            <div>
              <div className="">
                <h2 className="text-green-500 text-left text-md   md:text-md/tight">
                  Hey!
                </h2>
                <h2 className="text-zinc-200 text-left text-2xl  md:text-3xl/tight">
                  I&apos;m Shubham Jangra
                </h2>
                <div className="my-4 space-y-4">
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
                </div>

                <div className="my-8 text-left">
                  <a href="https://drive.google.com/file/d/10oOEq6ILNC2oUbQLfRlaj_KH4X5M0uct/view?usp=drive_link">
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
                      {/* <p className="text-sm font-bold">C V</p> */}
                    </button>
                  </a>
                </div>
              </div>
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
                <VerticalTimelineElement
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
                </VerticalTimelineElement>
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
                <VerticalTimelineElement
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
                    background: "#b0eec3",
                    color: "#fff",
                    boxShadow: "1px 1px 4px #27272a ",
                  }}
                  contentArrowStyle={{
                    borderRight: "10px solid #b0eec3 ",
                  }}
                  iconStyle={{ background: "#b0eec3", color: "white" }}
                  icon={<FcMindMap />}
                >
                  <h3 className="vertical-timeline-element- text-md text-green-500 ">
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
                <p className="font-mono text-md text-left sm:text-lg md:text-sm text-gray-200">
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
