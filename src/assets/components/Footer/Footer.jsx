/* eslint-disable no-unused-vars */
import React from "react";

function Footer() {
  return (
    <>
      <footer className=" h-full bg-gradient-to-t from-zinc-950 to-zinc-800 to-zinc-750 text-white py-8 transition-all duration-300 ease-in-out">
        <div className="w-5/6  container mx-auto lg:ml-56 ">
          <div className="flex flex-wrap justify-between items-start">
            <div className="w-full sm:w-1/2  lg:w-1/3 mb-6 lg:mb-0">
              <div className=" text-left ">
                <h2 className="text-2xl font-bold text-gray-400 ">
                  Shubham Jangra
                </h2>
              </div>
              <p className="mt-2 text-zinc-400">Practicing since 2022</p>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/3 mb-6 lg:mb-0">
              <h3 className="text-xl text-blue-400 font-semibold mb-4">
                Contacts
              </h3>
              <ul>
                <li className="text-left text-zinc-400">
                  Email: Shubhamjangra1205@gmail.com
                </li>
                <li className="text-left text-zinc-400">
                  Phone: +91 7082545147{" "}
                </li>
                <li className="text-left text-zinc-400">
                  Address: Ashoka colony, line par, bahadurgarh, jhajjar(124507)
                </li>
              </ul>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/3">
              <h3 className="text-xl text-blue-400 font-semibold mb-4">
                Portfolio
              </h3>
              <ul>
                <li>
                  <a href="/main" className="hover:text-gray-300 text-zinc-400">
                    home
                  </a>
                </li>
                <li>
                  <a
                    href="/skills"
                    className="hover:text-gray-300 text-zinc-400"
                  >
                    Skills
                  </a>
                </li>
                <li>
                  <a
                    href="/about"
                    className="hover:text-gray-300 text-zinc-400"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="hover:text-gray-300 text-zinc-400"
                  >
                    contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p>&copy; {new Date().getFullYear()} Shubham Jangra</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
