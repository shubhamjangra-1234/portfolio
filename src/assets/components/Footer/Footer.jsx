import React from 'react';
import { FaGithub, FaInstagram } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa6';

const Footer = () => {
  return (
    <section className="relative bg-zinc-800 border-t-2 overflow-hidden py-10">
  <div className="relative z-10 mx-auto max-w-7xl px-4">
    <div className="-m-6 flex flex-wrap">
      <div className="w-full p-6 md:w-1/2 lg:w-5/12">
        <div className="flex h-full flex-col justify-between">
          <div className="mb-4 inline-flex items-center">
            <span className="ml-4 text-3xl text-white  font-bold">Shubham Jangra</span>
          </div>
          <div>
            <p className="mb-4 text-white  text-base font-medium">
              Web Dev || React dev
            </p>
            <p className="text-sm text-white  ">
              © Copyright 2024. All Rights Reserved by Shubham Jangra.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full p-6 md:w-1/2 lg:w-2/12">
        <div className="h-full">
          <h3 className="tracking-px mb-9 text-purple-500  text-xl font-semibold uppercase text-gray-500">
            Technologies used
          </h3>
          <ul>
            <li className="mb-4">
              <a
                className=" text-base  font-medium text-white  hover:text-blue-700"
                href="#"
              >
                React
              </a>
            </li>
            <li className="mb-4">
              <a
                className=" text-base font-medium text-white  hover:text-blue-700"
                href="#"
              >
                Jsx
              </a>
            </li>
            <li className="mb-4">
              <a
                className=" text-base font-medium text-white  hover:text-blue-700"
                href="#"
              >
                Javascript
              </a>
            </li>
            <li>
              <a
                className=" text-base font-medium text-white  hover:text-blue-700"
                href="#"
              >
                Tailwind
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full p-6 md:w-1/2 lg:w-2/12">
        <div className="h-full">
          <h3 className="tracking-px mb-9  text-xl font-semibold uppercase text-purple-500">
            Softwares Used
          </h3>
          <ul>
            <li className="mb-4">
              <a
                className=" text-base font-medium text-white  hover:text-blue-700"
                href="#"
              >
                VScode
              </a>
            </li>
            
           
          </ul>
        </div>
      </div>
      <div className="w-full p-6 md:w-1/2 lg:w-3/12">
        <div className="h-full">
          <h3 className="tracking-px mb-9  text-xl font-semibold uppercase text-purple-500">
            Socials
          </h3>
          <ul>
            <li className="mb-4">
              <a
                className=" text-base font-medium text-gray-900 hover:text-gray-700"
                href="https://www.instagram.com/ig.shubham.jangra/"
              >
                <svg className="instagram" fill-rule="nonzero" height="30px" width="30px" viewBox="0,0,256,256" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg"><g  text-anchor="none" font-size="none" font-weight="none" font-family="none" stroke-dashoffset="0" stroke-dasharray="" stroke-miterlimit="10" stroke-linejoin="miter" stroke-linecap="butt" stroke-width="1" stroke="none" fill-rule="nonzero"><g transform="scale(8,8)"><path d="M11.46875,5c-3.55078,0 -6.46875,2.91406 -6.46875,6.46875v9.0625c0,3.55078 2.91406,6.46875 6.46875,6.46875h9.0625c3.55078,0 6.46875,-2.91406 6.46875,-6.46875v-9.0625c0,-3.55078 -2.91406,-6.46875 -6.46875,-6.46875zM11.46875,7h9.0625c2.47266,0 4.46875,1.99609 4.46875,4.46875v9.0625c0,2.47266 -1.99609,4.46875 -4.46875,4.46875h-9.0625c-2.47266,0 -4.46875,-1.99609 -4.46875,-4.46875v-9.0625c0,-2.47266 1.99609,-4.46875 4.46875,-4.46875zM21.90625,9.1875c-0.50391,0 -0.90625,0.40234 -0.90625,0.90625c0,0.50391 0.40234,0.90625 0.90625,0.90625c0.50391,0 0.90625,-0.40234 0.90625,-0.90625c0,-0.50391 -0.40234,-0.90625 -0.90625,-0.90625zM16,10c-3.30078,0 -6,2.69922 -6,6c0,3.30078 2.69922,6 6,6c3.30078,0 6,-2.69922 6,-6c0,-3.30078 -2.69922,-6 -6,-6zM16,12c2.22266,0 4,1.77734 4,4c0,2.22266 -1.77734,4 -4,4c-2.22266,0 -4,-1.77734 -4,-4c0,-2.22266 1.77734,-4 4,-4z"></path></g></g></svg>
              </a>
            </li>
            <li className="mb-4">
              <a
                className=" text-base font-medium text-gray-900 hover:text-gray-700"
                href="https://www.linkedin.com/in/shubham-jangra-1a945129b/"
              >
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 50 50" className="linkedin">
    <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
</svg>
              </a>
            </li>
    
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>
  );
};

export default Footer;
