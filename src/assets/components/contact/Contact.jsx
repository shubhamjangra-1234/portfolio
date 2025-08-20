import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeIn}
      id="contact"
      className="w-full  overflow-hidden"
    >
      <div className="lg:ml-56 p-2">
        <div className=" max-w-7xl rounded-xl">
          <div className=" flex justify-between space-x-2 items-center  text-zinc-800 text-center py-2 font-bold font-times mb-5 text-2xl tracking-tighter md:text-4xl/tight">
            Get In Touch
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlSpace="preserve"
              id="Layer_1"
              width="54"
              height="54"
              fill="#000"
              version="1.1"
              viewBox="0 0 451.296 451.296"
            >
              <g id="SVGRepo_iconCarrier">
                <circle
                  cx="225.638"
                  cy="225.638"
                  r="225.638"
                  fill="#EA8953"
                ></circle>
                <path
                  d="M352.243 121.029c-1.796-1.909-4.326-3.114-7.143-3.114h-2.21L324.555 99.58c-2.022-1.975-4.795-3.244-7.851-3.244h-209.25c-6.112 0-11.095 4.983-11.095 11.142v236.329c0 3.274 1.434 6.175 3.673 8.2l97.481 97.481c9.221 1.148 18.594 1.807 28.126 1.807 124.627 0 225.658-101.031 225.658-225.658 0-1.919-.097-3.814-.145-5.721l-98.9-98.9z"
                  opacity="0.1"
                ></path>
                <path
                  fill="#3A556A"
                  d="M107.473 96.355c-6.14 0-11.117 4.978-11.117 11.117v236.332c0 6.14 4.977 11.117 11.117 11.117h38.133V96.355z"
                ></path>
                <path
                  fill="#FCD462"
                  d="M344.213 180.682h-16.38v-62.779h16.38c5.914 0 10.708 4.794 10.708 10.708v41.363c0 5.914-4.794 10.708-10.708 10.708"
                ></path>
                <path
                  fill="#44C4A1"
                  d="M344.213 243.461h-16.379v-62.779h16.38c5.914 0 10.708 4.794 10.708 10.708v41.362c-.001 5.914-4.795 10.709-10.709 10.709"
                ></path>
                <path
                  fill="#FFF"
                  d="M344.213 306.239h-16.38v-62.778h16.38c5.914 0 10.708 4.794 10.708 10.708v41.363c0 5.913-4.794 10.707-10.708 10.707"
                ></path>
                <path
                  fill="#27A2DB"
                  d="M316.716 96.355h-171.11v258.566L324.562 99.599a11.08 11.08 0 0 0-7.846-3.244"
                ></path>
                <path
                  fill="#2D93BA"
                  d="M324.562 99.599 145.606 354.921h171.111c6.14 0 11.117-4.977 11.117-11.117V107.472a11.09 11.09 0 0 0-3.272-7.873"
                ></path>
                <g fill="#FFF">
                  <path d="M279.176 251.066a273 273 0 0 1-8.081 5.752l-.282.189 28.196 41.436a280 280 0 0 0 8.337-7.099 3.78 3.78 0 0 0 .61-4.965l-23.402-34.389a3.784 3.784 0 0 0-5.378-.924M263.339 261.12c-11.318 1.512-24.094-4.448-33.805-15.941-12.868-15.229-17.512-36.382-11.534-50.686l-29.223-42.945c-7.265 4.417-13.873 9.318-14.55 12.878-8.376 44.054 56.219 144.615 100.911 148.293 3.577.294 10.467-4.016 17.171-9.026zM205.953 142.244a261 261 0 0 0-9.79 5.061l28.135 41.347.064-.044c2.673-1.819 5.645-3.72 8.538-5.515a3.786 3.786 0 0 0 1.13-5.352l-23.284-34.217a3.78 3.78 0 0 0-4.793-1.28"></path>
                </g>
              </g>
            </svg>
          </div>
          <p className=" py-4 text-sm text-zinc-800">
            Feel free to get in touch! I'm eager to hear from you. Contact me
            directly for any inquiries or collaborations.
          </p>
        </div>
        <div className="grid  lg:grid-cols-2">
          <div className="flex items-center  justify-center ">
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
                      className=" h-10 bg-white/5  w-full border placeholder:text-left border-zinc-600 rounded-md  px-3 py-2 text-sm placeholder:text-gray-400 "
                      type="text"
                      id="first_name"
                      name="Name"
                      placeholder="First Name"
                    />
                  </div>
                  <div className="grid w-full  items-center gap-1.5">
                    <input
                      className=" text-zinc-200 bg-white/5  h-10 w-full border placeholder:text-left border-zinc-600 rounded-md  px-3 py-2 text-sm placeholder:text-gray-400 "
                      type="text"
                      id="last_name"
                      name="Last"
                      placeholder="Last Name"
                    />
                  </div>
                </div>
                <div className="grid w-full  items-center gap-1.5">
                  <input
                    className=" text-zinc-200 bg-white/5  h-10 w-full border placeholder:text-left border-zinc-600 rounded-md  px-3 py-2 text-sm placeholder:text-gray-400 "
                    type="text"
                    id="email"
                    name="email"
                    placeholder="Email"
                  />
                </div>
                <div className="grid w-full  items-center gap-1.5">
                  <input
                    className=" text-zinc-200 bg-white/5  h-10 w-full border placeholder:text-left border-zinc-600 rounded-md  px-3 py-2 text-sm placeholder:text-gray-400 "
                    type="tel"
                    id="phone_number"
                    name="number"
                    placeholder="Phone number"
                  />
                </div>
                <div className="grid w-full  items-center gap-1.5">
                  <textarea
                    className=" text-zinc-200 w-full border scrollbar-none placeholder:text-left border-zinc-600  bg-white/5 px-3  text-sm placeholder:text-gray-400"
                    id="message"
                    name="message"
                    placeholder="Leave me a message"
                    cols="3"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full rounded-md  bg-blue-400 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
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
        <h1 className="text-xl text-zinc-800 text-left  my-2 font-bold border-b border-dashed border-zinc-800 p-2 w-fit">
          Contact Details
        </h1>
        <div className="flex  flex-wrap overflow-hidden bg-zinc-100 p-2 justify-evenly items-center space-y-2 rounded-md border border-zinc-600  bg-white/5 mt-4">

            <div className="p-2 rounded-xl shadow-sm bg-white shadow-zinc-700">
              <div className="space-y-2 ">
                <li>
                  <div className=" flex items-center space-x-4  px-6 py-3  text-zinc-100">
                    <Mail className="text-zinc-500 text-2xl p-1  " />{" "}
                    <span>
                      <p className="text-left font-bold text-md text-zinc-800">mail</p>
                      <a
                        className="text-xs text-wrap text-zinc-800"
                        href=" shubhamjnagra1205@gmail.com"
                      >
                        {" "}
                        shubhamjnagra1205@gmail.com
                      </a>
                    </span>
                  </div>
                </li>
              </div>
            </div>
          
          
            <div className="p-2 rounded-xl shadow-sm bg-white shadow-zinc-700 ">
              <div className="space-y-2 ">
                <div className=" flex items-center space-x-4 px-6 py-3  text-zinc-100">
                  <Phone className="text-zinc-500 text-2xl p-1 " />
                  <span>
                    <p className="text-left font-bold text-md text-zinc-800">Phone</p>
                      <a
                        className="text-xs text-zinc-800"
                        href=" shubhamjnagra1205@gmail.com"
                      >
                        {" "}
                        +91 7082545147
                      </a>
                    </span>
                  </div>                
              </div>
            </div>
          
          <div className=" p-2 rounded-xl shadow-sm bg-white shadow-zinc-700 ">
              <div className="space-y-2 ">
              <div className=" flex items-center space-x-4  px-6 py-3  text-zinc-100">
                <MapPin className="text-zinc-500 text-2xl p-1 " />
                <span>
                  <p className="text-left text-ms font-bold text-zinc-800">Address</p>
                  <a className="text-xs text-zinc-800" href=" shubhamjnagra1205@gmail.com">
                    Bahadurgarh , Haryana (124507)
                  </a>
                </span>
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
          
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
