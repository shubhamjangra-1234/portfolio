import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Landing() {
  const skills = useMemo(
    () => ["Web Designing", "React Dev", "NextJs Dev", "Frontend", "Backend", "MERN Stack"],
    [],
  );

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % skills.length), 2200);
    return () => clearInterval(t);
  }, [skills.length]);

  return (
    <div className="relative flex h-screen w-full items-center justify-center bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      {/* subtle animated shapes */}
      <motion.div
        aria-hidden
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -left-10 -top-8 h-56 w-56 rounded-full bg-gradient-to-br from-violet-300/30 to-cyan-300/20 blur-3xl"
      />

      <motion.div
        aria-hidden
        animate={{ x: [0, 10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -right-12 -bottom-10 h-64 w-64 rounded-full bg-gradient-to-br from-rose-300/25 to-amber-200/15 blur-3xl"
      />

      <main className="relative z-10 mx-auto w-full max-w-3xl px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mt-6 text-3xl  leading-tight tracking-tight text-slate-900 sm:text-4xl md:text-xl"
        >
          Hi, I’m
          <br />
          <span className="bg-gradient-to-r from-violet-600 md:text-4xl to-cyan-400 bg-clip-text text-transparent">Shubham Jangra</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.22, duration: 0.6 }}
          className="mt-4 max-w-xl text-md text-slate-700 mx-auto"
        >
          I design and build beautiful, high-performance web experiences.
        </motion.p>

        <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 6 }}
              transition={{ duration: 0.25 }}
              className="rounded-lg border border-slate-200 bg-white/60 px-4 py-2 text-sm font-medium text-slate-800 shadow-sm"
            >
              {skills[index]}
            </motion.div>
          </AnimatePresence>

          <a
            href="/main"
            aria-label="Enter site"
            className="group flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-cyan-400 px-5 py-3 text-sm font-semibold text-white shadow-lg transition-transform hover:-translate-y-0.5 sm:w-auto"
          >
            Explore 
            <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="mt-6 text-sm text-slate-600">
          Available for freelance • Remote friendly
        </motion.p>
      </main>
    </div>
  );
}
