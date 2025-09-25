import React from "react";
import { motion } from "framer-motion";
import { FiLayout, FiCode, FiLink, FiTool } from "react-icons/fi";

export default function Skills() {
  const card = {
    hidden: { opacity: 0, y: 14 },
    visible: (i) => ({ opacity: 1, y: 0, transition: { delay: 0.12 * i } }),
  };

  return (
    <section id="services" className="container mx-auto py-12 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl font-bold text-slate-900"
        >
          Services
        </motion.h2>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.12 }} className="mt-3 text-slate-700 max-w-2xl mx-auto">
          I offer end-to-end product-focused frontend services — from research and
          design to engineering, integration and ongoing maintenance. Here are the core
          services I provide for startups and product teams.
        </motion.p>
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <motion.article
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={card}
          className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm"
        >
          <div className="flex items-start gap-4">
            <div className="h-12 w-12 flex-none rounded-lg bg-violet-600 text-white grid place-items-center text-lg">
              <FiLayout />
            </div>
            <div className="text-left">
              <h3 className="font-semibold text-slate-900">UI/UX Design</h3>
              <p className="mt-1 text-sm text-slate-600">User research, prototypes, and polished interfaces focused on usability and conversion.</p>
            </div>
          </div>
        </motion.article>

        <motion.article
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={card}
          className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm"
        >
          <div className="flex items-start gap-4">
            <div className="h-12 w-12 flex-none rounded-lg bg-cyan-500 text-white grid place-items-center text-lg">
              <FiCode />
            </div>
            <div className="text-left">
              <h3 className="font-semibold text-slate-900">Frontend Engineering</h3>
              <p className="mt-1 text-sm text-slate-600">React, Next.js, performance and accessibility — production-ready code and fast interfaces.</p>
            </div>
          </div>
        </motion.article>

        <motion.article
          custom={2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={card}
          className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm"
        >
          <div className="flex items-start gap-4">
            <div className="h-12 w-12 flex-none rounded-lg bg-rose-500 text-white grid place-items-center text-lg">
              <FiLink />
            </div>
            <div className="text-left">
              <h3 className="font-semibold text-slate-900">Integration Services</h3>
              <p className="mt-1 text-sm text-slate-600">Connect frontend with backend APIs seamlessly, build robust data flows and integrations.</p>
            </div>
          </div>
        </motion.article>

        <motion.article
          custom={3}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={card}
          className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm"
        >
          <div className="flex items-start gap-4">
            <div className="h-12 w-12 flex-none rounded-lg bg-amber-500 text-white grid place-items-center text-lg">
              <FiTool />
            </div>
            <div className="text-left">
              <h3 className="font-semibold text-slate-900">Fixes &amp; Maintenance</h3>
              <p className="mt-1 text-sm text-slate-600">Bug fixing, performance tuning and ongoing updates to keep your product stable and secure.</p>
            </div>
          </div>
        </motion.article>
      </div>

      <div className="mt-8 mx-auto max-w-2xl text-center">
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.15 }} className="text-slate-700">
          Interested in working together? I typically work on short design sprints, feature-focused engagements and long-term
          partnerships. Click below to reach out and I’ll reply within one business day.
        </motion.p>

        <div className="mt-5 flex items-center justify-center gap-3">
          <a href="#contact" className="rounded-full bg-violet-600 px-4 py-2 text-white font-medium shadow">Get a quote</a>
          <a href="mailto:shubhamjangra1205@gmail.com" className="text-sm text-slate-700 hover:underline">Or email me</a>
        </div>
      </div>
    </section>
  );
}
