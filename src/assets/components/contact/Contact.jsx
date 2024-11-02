/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unknown-property */
import React from "react";
import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";
import "./contact.css";
const Contact = () => {
  return (
    <div className="w-full py-4 bg-gradient-to-t from-zinc-950 to-zinc-900">
      <div className="lg:ml-56">
        <div className=" max-w-7xl rounded-xl md:py-10">
          <p className="mt-4 text-lg text-gray-600">
            <p className="text-2xl font-bold md:text-4xl">Get in touch</p>
            Feel free to get in touch! I'm eager to hear from you. Contact me
            directly for any inquiries or collaborations.
          </p>
          <div className="grid   lg:grid-cols-2">
            <div className="flex items-center  justify-center">
              <div className="w-full px-5  md:px-12">
                <form
                  action="https://api.web3forms.com/submit"
                  method="POST"
                  className="mt-8 space-y-4"
                >
                  <input
                    type="hidden"
                    name="access_key"
                    defaultValue="7e826987-e3de-435f-af8d-9b40b46c3b95"
                  />
                  <div className="grid  w-full gap-y-4 md:gap-x-4 lg:grid-cols-2">
                    <div className="grid w-full  gap-1.5">
                      <input
                        className=" h-10 w-full border-b placeholder:text-left border-purple-900 bg-transparent px-3 py-2 text-lg placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-purple-900 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-red-600 dark:focus:border-none rounded-md dark:focus:ring-offset-gray-900"
                        type="text"
                        id="first_name"
                        name="Name"
                        placeholder="First Name"
                      />
                    </div>
                    <div className="grid w-full  items-center gap-1.5">
                      <input
                        className=" h-10 w-full border-b placeholder:text-left border-purple-900 bg-transparent px-3 py-2 text-lg placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-purple-900 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-red-600 dark:focus:border-none rounded-md dark:focus:ring-offset-gray-900"
                        type="text"
                        id="last_name"
                        name="Last"
                        placeholder="Last Name"
                      />
                    </div>
                  </div>
                  <div className="grid w-full  items-center gap-1.5">
                    <input
                      className=" h-10 w-full border-b placeholder:text-left border-purple-900 bg-transparent px-3 py-2 text-lg placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-purple-900 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-red-600 dark:focus:border-none rounded-md dark:focus:ring-offset-gray-900"
                      type="text"
                      id="email"
                      name="email"
                      placeholder="Email"
                    />
                  </div>
                  <div className="grid w-full  items-center gap-1.5">
                    <input
                      className=" h-10 w-full border-b placeholder:text-left border-purple-900 bg-transparent px-3 py-2 text-lg placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-purple-900 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-red-600 dark:focus:border-none rounded-md dark:focus:ring-offset-gray-900"
                      type="tel"
                      id="phone_number"
                      name="number"
                      placeholder="Phone number"
                    />
                  </div>
                  <div className="grid w-full  items-center gap-1.5">
                    <textarea
                      className="  w-full border-b scrollbar-none placeholder:text-left border-purple-900 bg-transparent px-3  text-lg placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-purple-900 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-red-600 dark:focus:border-none rounded-md dark:focus:ring-offset-gray-900"
                      id="message"
                      name="message"
                      placeholder="Leave me a message"
                      cols="3"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-md border bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
            <img
              alt="Contact us"
              className="hidden max-h-full w-96 rounded-lg object-cover lg:block"
              src="/reactimg/contact.png"
            />
          </div>
        </div>

        <div className=" map w-full flex p-1 justify-evenly align-middle flex-row">
          <iframe
            className="rounded-xl  "
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3499.3093063405004!2d76.93314507550367!3d28.71030097562231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDQyJzM3LjEiTiA3NsKwNTYnMDguNiJF!5e0!3m2!1sen!2sin!4v1722417885742!5m2!1sen!2sin"
            width="800"
            height="600"
            fullscreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <div className=" flex  justify-center align-middle flex-col space-y-3 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="h-5 w-5"
            >
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            <p className="w-full text-xl font-semibold text-zinc-500  ">
              house Address
            </p>
            <p className="text-sm font-medium text-zinc-300 ">
              Ashoka colony, line par, bahadurgarh, jhajjar(124507)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
