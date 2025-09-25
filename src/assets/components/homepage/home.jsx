import { useState } from "react";
import { motion } from "framer-motion";
import Skills from "../Skills/Skills";
import About from "../About/About";
import Contact from "../contact/Contact";
import { Button } from "../UI/Button";  
function IntroSection() {
  const [menuOpen, setMenuOpen] = useState(false);
  
  return (
    <div
      className={`relative pt-3 min-h-screen overflow-hidden bg-gradient-to-b from-slate-50 to-white ${
        menuOpen ? "items-end" : "items-center"
      } flex flex-col justify-center`}
    >
      <main className="container relative  mx-auto flex min-h-screen items-center justify-center">
        <section className="grid w-full grid-cols-1 items-center justify-items-center gap-8 py-12 md:grid-cols-2">
          <div className="max-w-xl w-full flex flex-col items-center justify-center md:items-start md:justify-start">
            <motion.div
              id="box"
              className="w-full py-6 lg:py-8 p-4 rounded-xl flex flex-col items-center md:items-start justify-center gap-4"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="hidden md:block text-sm font-medium text-violet-600">Freelance • Frontend Engineer</div>

              <motion.h2
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08, duration: 0.6 }}
                className="mt-2 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl md:text-3xl text-center md:text-left"
              >
                Let’s craft exceptional digital
                <br /> experiences together.
              </motion.h2>

              <motion.p className="mt-3 max-w-xl text-base text-slate-700 text-center md:text-left" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.18, duration: 0.6 }}>
                Explore my portfolio — from UI/UX design and prototyping to
                production React apps. I focus on performance, accessibility,
                and beautiful, usable interfaces.
              </motion.p>

              <div className="mt-4 flex w-full flex-col gap-3 sm:flex-row sm:items-center justify-center md:justify-start">
                <a href="#contact" className="w-full sm:w-auto">
                  <Button size="lg" className="w-full justify-center bg-gradient-to-r from-violet-600 to-cyan-400 text-white shadow-lg">
                    Let’s Talk
                  </Button>
                </a>
                <a href="#work" className="w-full sm:w-auto">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">
                    View work
                  </Button>
                </a>
              </div>

              <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-slate-700 justify-center md:justify-start">
                <div className="flex items-center gap-2 rounded-full border border-slate-100 bg-white px-3 py-1">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-violet-600 text-white text-xs font-semibold">✓</span>
                  Pixel‑perfect UIs
                </div>
                <div className="flex items-center gap-2 rounded-full border border-slate-100 bg-white px-3 py-1">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-cyan-500 text-white text-xs font-semibold">⚡</span>
                  Fast & accessible
                </div>
                <div className="flex items-center gap-2 rounded-full border border-slate-100 bg-white px-3 py-1">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-amber-500 text-white text-xs font-semibold">★</span>
                  Reliable delivery
                </div>
              </div>
              <div className="mt-6 flex text-center gap-3 text-sm justify-center md:justify-start">
                <span className="text-slate-700">Practising since</span>
                <span className="rounded-md bg-violet-50 px-2 py-1 font-semibold text-violet-700">2022</span>
              </div>
            </motion.div>
          </div>

          <div className="relative flex items-center justify-center">
            <motion.div
              initial={{ scale: 0.98, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7 }}
              className="relative w-full max-w-full rounded-3xl p-4 shadow-2xl"
            >
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-violet-500/8 to-cyan-400/6 blur-lg" />

              <div className="relative rounded-2xl overflow-hidden border border-slate-100 bg-white p-6">
                <h3 className="text-lg font-semibold">What I offer</h3>
                <p className="mt-2 text-sm text-slate-700">Design-focused frontend development tailored to your product needs.</p>

                <ul className="mt-4 grid gap-3">
                  <li className="flex items-start gap-3 rounded-lg border border-slate-100 p-3">
                    <div className="h-9 w-9 flex-none rounded-full bg-violet-600 text-white grid place-items-center font-semibold">UI</div>
                    <div>
                      <div className="font-medium">UI/UX Design</div>
                      <div className="text-xs text-slate-600">User research, prototypes, and polished interfaces.</div>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 rounded-lg border border-slate-100 p-3">
                    <div className="h-9 w-9 flex-none rounded-full bg-cyan-500 text-white grid place-items-center font-semibold">FE</div>
                    <div>
                      <div className="font-medium">Frontend Engineering</div>
                      <div className="text-xs text-slate-600">React, Next.js, performance and accessibility.</div>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 rounded-lg border border-slate-100 p-3">
                    <div className="h-9 w-9 flex-none rounded-full bg-amber-500 text-white grid place-items-center font-semibold">IS</div>
                    <div>
                      <div className="font-medium">Integration Services</div>
                      <div className="text-xs text-slate-600">Connect Frontend with Backend APIs seamlessly.</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3 rounded-lg border border-slate-100 p-3">
                    <div className="h-9 w-9 flex-none rounded-full bg-amber-500 text-white grid place-items-center font-semibold">FM</div>
                    <div>
                      <div className="font-medium">Fixes and Maintenance</div>
                      <div className="text-xs text-slate-600">Debugging and resolving issues promptly.</div>
                    </div>
                  </li>
                </ul>

                <div className="mt-5 flex items-center justify-between">
                  <a href="#services" className="rounded-md bg-violet-600 px-4 py-2 text-sm font-semibold text-white">See services</a>
                  <a href="#contact" className="text-sm text-slate-700 hover:underline">Start a project</a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      {/* Skills-Section */}
      <Skills id="services" />
      {/* About-section */}
      <div id="about" className="w-full">
        <About />
      </div>
      {/* Contact-Section */}
      <Contact id="contact" />
    </div>
  );
}

export default IntroSection;
