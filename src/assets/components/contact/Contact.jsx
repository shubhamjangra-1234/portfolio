import React from "react";
import { useState } from "react";
import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";
import "./contact.css"
const Contact = () => {
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
      <div className="mx-auto  max-w-7xl ">
        <div className="mx-auto max-w-7xl  py-12 rounded-xl md:py-24">
          <div className="grid items-center justify-items-center gap-x-4 gap-y-10 lg:grid-cols-2">
            <div className="flex items-center justify-center">
              <div className="px-2 md:px-12">
                <p
                  style={{ color: text }}
                  className="text-2xl font-bold md:text-4xl"
                >
                  Get in touch
                </p>
                <p
                  style={{ color: text }}
                  className="mt-4 text-lg text-gray-600"
                >
                  Feel free to get in touch! I'm eager to hear from you. Contact
                  me directly for any inquiries or collaborations.
                </p>
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
                  <div className="grid w-full gap-y-4 md:gap-x-4 lg:grid-cols-2">
                    <div className="grid w-full  items-center gap-1.5">
                      <label
                        style={{ color: text }}
                        className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        for="first_name"
                      >
                        First Name
                      </label>
                      <input
                        style={{ color: text }}
                        className="flex h-10 w-full rounded-md border  border-purple-900 bg-transparent px-3 py-2 text-lg placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-purple-900 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                        type="text"
                        id="first_name"
                        name="Name"
                        placeholder="First Name"
                      />
                    </div>
                    <div className="grid w-full  items-center gap-1.5">
                      <label
                        style={{ color: text }}
                        className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        for="last_name"
                      >
                        Last Name
                      </label>
                      <input
                        style={{ color: text }}
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-lg placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                        type="text"
                        id="last_name"
                        name="Last"
                        placeholder="Last Name"
                      />
                    </div>
                  </div>
                  <div className="grid w-full  items-center gap-1.5">
                    <label
                      style={{ color: text }}
                      className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      for="email"
                    >
                      Email
                    </label>
                    <input
                      style={{ color: text }}
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-lg placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                      type="text"
                      id="email"
                      name="email"
                      placeholder="Email"
                    />
                  </div>
                  <div className="grid w-full  items-center gap-1.5">
                    <label
                      style={{ color: text }}
                      className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      for="phone_number"
                    >
                      Phone number
                    </label>
                    <input
                      style={{ color: text }}
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-lg placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                      type="tel"
                      id="phone_number"
                      name="number"
                      placeholder="Phone number"
                    />
                  </div>
                  <div className="grid w-full  items-center gap-1.5">
                    <label
                      style={{ color: text }}
                      className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      for="message"
                    >
                      Message
                    </label>
                    <textarea
                      style={{ color: text }}
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                      id="message"
                      name="message"
                      placeholder="Leave us a message"
                      cols="3"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
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
      </div>
      <div className=" map w-full flex p-1 justify-evenly align-middle flex-row">
        <iframe className="rounded-xl  " src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3499.3093063405004!2d76.93314507550367!3d28.71030097562231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDQyJzM3LjEiTiA3NsKwNTYnMDguNiJF!5e0!3m2!1sen!2sin!4v1722417885742!5m2!1sen!2sin" width="800" height="600" fullscreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        <div className=" flex  justify-center align-middle flex-col space-y-3 ">
        <svg style={{color:text}} 
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
        <p style={{color:text}}  className="w-full text-xl font-semibold  ">
         hause  Address
        </p>
        <p style={{color:text}} className="text-sm font-medium">
           Ashoka colony, linepar, bahadurgarh, jhajjar(124507)
        </p>
      </div>
      </div>
      
    </div>
  );
};

export default Contact;
