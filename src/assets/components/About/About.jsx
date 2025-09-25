import React from "react";
import { Button } from "../UI/Button";

export default function AboutWork() {
  const projects = [
    {
      title: "Color-Checker (MERN)",
      desc: "A MERN-stack color compatibility tool for designers to validate color combinations and accessibility contrast.",
      repo: "https://color-check-shubhamjangra-1234s-projects.vercel.app/",
      tech: ["React", "Node", "Express", "MongoDB"],
      image: "/images/color-check.png",
    },
    {
      title: "Fit-Sync (MERN)",
      desc: "A fitness tracker built with MERN to log workouts, save calories and maintain progress over time.",
      repo: "https://fit-sync-mu.vercel.app/",
      tech: ["React", "Node", "Express", "MongoDB"],
      image: "/images/fit-sync.png",
    },
    {
      title: "Checkin360 (Next.js)",
      desc: "Attendance system built with Next.js — admin panel, location-based checkins and selfie verification for employees.",
      repo: "https://check-in-360.vercel.app/",
      tech: ["Next.js", "React", "Tailwind"],
      image: "/images/check-in-360.png",
    },
  ];

  return (
    <section id="about-work" className="container px-4">
      <div className=" max-full text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">About & Work</h2>
        <p className="mt-3 text-slate-700 ">
          I'm Shubham — a full-stack developer (specialist in React) skilled in React, Next.js, Tailwind, Node, MongoDB, Express, HTML, CSS, responsive design and REST APIs. Below are three highlighted projects — check repos or contact me to discuss.
        </p>


      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <article key={p.title} className="rounded-2xl  border border-slate-100 bg-white p-4 shadow-sm">
            <div className="h-40 w-full rounded-md bg-slate-100 shadow-sm overflow-hidden">
              <img src={p.image} alt={p.title} className="h-full w-full object-cover" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-slate-900">{p.title}</h3>
            <p className="mt-2 text-sm text-slate-700">{p.desc}</p>
            <div className="mt-3 flex flex-wrap items-center gap-2">
              {p.tech.map((t) => (
                <span key={t} className="rounded-full bg-slate-100 px-2 py-0.5 text-xs text-slate-700">{t}</span>
              ))}
            </div>
            <div className="mt-3 flex items-center justify-between">
              <a href={p.repo} target="_blank" rel="noreferrer" className="text-sm text-violet-600  hover:underline">Live</a>
              <a href="#contact" className="inline-block">
                <Button size="sm">Discuss</Button>
              </a>
            </div>
          </article>
        ))}
      </div>
        <div className="mt-6 flex items-center justify-center gap-3">
          <a href="/main#services" className="rounded-full bg-violet-600 px-4 py-2 text-white font-medium shadow">Services</a>
          <a href="https://github.com/shubhamjangra-1234" className="text-sm text-slate-700 hover:underline">View GitHub</a>
        </div>
      <div className="mt-10 mx-auto ">
        <h3 className="text-xl font-semibold text-slate-900">What I do</h3>
        <p className="mt-2 text-slate-700">
          I specialize in UI/UX design and frontend engineering, with deep experience across the full stack. I build interfaces and systems that are
          performant, accessible and production-ready.
        </p>

        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <div className="rounded-lg border border-slate-100 bg-white p-3">
            <h4 className="font-semibold">Core skills</h4>
            <ul className="mt-2 text-sm text-slate-700 space-y-1">
              <li>React, Next.js, TypeScript (specialist in React)</li>
              <li>Node, Express, MongoDB (MERN stack)</li>
              <li>HTML, CSS, Tailwind, Responsive design, REST APIs</li>
            </ul>
          </div>

          <div className="rounded-lg border border-slate-100 bg-white p-3">
            <h4 className="font-semibold">Process</h4>
            <ul className="mt-2 text-sm text-slate-700 space-y-1">
              <li>Research → Prototype → Build → Iterate</li>
              <li>Component-driven development and accessible UI</li>
              <li>Testing, CI, reliable deployments and maintenance</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

