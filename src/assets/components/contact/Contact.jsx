/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unknown-property */
import React from "react";
import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";
import "./contact.css";
import {motion} from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,

} from "lucide-react";

const Contact = () => {
  return (
    <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 1 }}
    className="w-full bg-zinc-800 p-2 overflow-hidden">
      <div className="lg:ml-56 p-2">
        <div className=" max-w-7xl rounded-xl md:py-2">
          <p className=" p-2 text-sm text-gray-200">
            <p className="text-xl text-left mx-4 my-2 border-b w-fit py-2 border-dashed border-zinc-500  ">
              Get in touch
            </p>
            Feel free to get in touch! I'm eager to hear from you. Contact me
            directly for any inquiries or collaborations.
          </p>

       
        </div>
        <div className="grid  lg:grid-cols-2">
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
                      className=" h-10 w-full border placeholder:text-left border-zinc-600 rounded-md bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 "
                      type="text"
                      id="first_name"
                      name="Name"
                      placeholder="First Name"
                    />
                  </div>
                  <div className="grid w-full  items-center gap-1.5">
                    <input
                      className=" text-zinc-200  h-10 w-full border placeholder:text-left border-zinc-600 rounded-md bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 "
                      type="text"
                      id="last_name"
                      name="Last"
                      placeholder="Last Name"
                    />
                  </div>
                </div>
                <div className="grid w-full  items-center gap-1.5">
                  <input
                    className=" text-zinc-200  h-10 w-full border placeholder:text-left border-zinc-600 rounded-md bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 "
                    type="text"
                    id="email"
                    name="email"
                    placeholder="Email"
                  />
                </div>
                <div className="grid w-full  items-center gap-1.5">
                  <input
                    className=" text-zinc-200  h-10 w-full border placeholder:text-left border-zinc-600 rounded-md bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 "
                    type="tel"
                    id="phone_number"
                    name="number"
                    placeholder="Phone number"
                  />
                </div>
                <div className="grid w-full  items-center gap-1.5">
                  <textarea
                    className=" text-zinc-200 w-full border scrollbar-none placeholder:text-left border-zinc-600 bg-transparent px-3  text-sm placeholder:text-gray-400"
                    id="message"
                    name="message"
                    placeholder="Leave me a message"
                    cols="3"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full rounded-md border border-zinc-600 bg-zinc-900 px-3 py-2 text-sm font-semibold text-zinc-100 shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  Send 
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
              <h1 className="text-xl text-left mx-4 my-2 font-bold border-b border-dashed border-zinc-300 p-2 w-fit" >Contact Details</h1>
        <div className="flex  flex-wrap gap-4 justify-start items-center mt-4">
            <div >
              <div className="p-6 rounded-xl border border-zinc-500">
                <ul className="space-y-2">
                  <li>
                    <div className=" flex items-center space-x-2  text-zinc-300">
                      <Mail className="text-blue-600" />{" "}
                    <a href=" shubhamjnagra1205@gmail.com">  shubhamjnagra1205@gmail.com</a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <div className="p-6 rounded-xl border border-zinc-500">
                <ul className="space-y-2">
                  <li>
                    <div className="flex items-center space-x-4 text-zinc-300 ">
                      <Phone className="text-blue-600" /><a href="tel:7082545147" target="_blank"> 7082545147</a>
                    </div>
                    <div className="text-sm text-muted-foreground"></div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="sm:col-span-2 p-6 rounded-xl border border-zinc-500">
              <div className="">
                <div className="flex items-center space-x-4 text-zinc-300 ">
                  <MapPin className="text-blue-600" />

                  <p className="text-sm text-zinc-200">
                    715/7 Ashoka colony LinePar Bahadurgarh Jhajjar Haryana
                    (124507)
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className=" map w-full flex p-1 justify-evenly align-middle flex-row">
        <iframe
          className="rounded-lg mt-2  "
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3499.3093063405004!2d76.93314507550367!3d28.71030097562231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDQyJzM3LjEiTiA3NsKwNTYnMDguNiJF!5e0!3m2!1sen!2sin!4v1722417885742!5m2!1sen!2sin"
          width="100%"
          height="300"
          fullscreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className=" flex  justify-center align-middle flex-col space-y-3 "></div>
      </div>
      </div>

      
    </motion.div>
  );
};

export default Contact;
