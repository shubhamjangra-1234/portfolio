import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.section
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeIn}
      className="container mx-auto py-16 px-4"
    >
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-900">Get in touch</h2>
          <p className="mt-2 text-slate-700">Have a project, question or want to say hi? I reply within one business day.</p>
        </div>

        <div className="mt-8 grid gap-8 md:grid-cols-2 items-start">
          <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">Contact</h3>
            <p className="mt-2 text-sm text-slate-700">Email or call me — or send a message using the form.</p>

            <ul className="mt-6 space-y-3">
              <li className="flex items-start gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-violet-50 text-violet-700"><Mail /></span>
                <div>
                  <div className="text-sm font-medium text-slate-900">Email</div>
                  <a className="text-sm text-slate-700" href="mailto:shubhamjangra1205@gmail.com">shubhamjangra1205@gmail.com</a>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-cyan-50 text-cyan-700"><Phone /></span>
                <div>
                  <div className="text-sm font-medium text-slate-900">Phone</div>
                  <a className="text-sm text-slate-700" href="tel:+917082545147">+91 7082545147</a>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-amber-50 text-amber-700"><MapPin /></span>
                <div>
                  <div className="text-sm font-medium text-slate-900">Location</div>
                  <div className="text-sm text-slate-700">Bahadurgarh, Haryana, India</div>
                </div>
              </li>
            </ul>

            <div className="mt-6">
              <a href="mailto:shubhamjnagra1205@gmail.com" className="inline-flex items-center gap-2 rounded-md bg-violet-600 px-4 py-2 text-sm font-semibold text-white shadow">Email me</a>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">Send a message</h3>
            <p className="mt-2 text-sm text-slate-700">Briefly describe your project and I’ll get back to you with availability and next steps.</p>

            <form action="https://api.web3forms.com/submit" method="POST" className="mt-4 space-y-3">
              <input type="hidden" name="access_key" value="7e826987-e3de-435f-af8d-9b40b46c3b95" />

              <div className="grid gap-3 sm:grid-cols-2">
                <div>
                  <input name="name" placeholder="First name" className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm" />
                </div>
                <div>
                  <input name="last" placeholder="Last name" className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm" />
                </div>
              </div>

              <div>
                <input name="email" type="email" placeholder="Email" required className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm" />
              </div>

              <div>
                <textarea name="message" placeholder="Message" required rows={5} className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm" />
              </div>

              <div className="flex items-center justify-between gap-3">
                <button type="submit" className="rounded-md bg-cyan-600 px-4 py-2 text-sm font-semibold text-white shadow">Send message</button>
                <a href="/main" className="text-sm text-slate-700 hover:underline">Back to site</a>
              </div>
            </form>

            <div className="mt-6 text-xs text-slate-500">I usually respond within one business day. If this is urgent, email me directly.</div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

