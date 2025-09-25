import React from "react";
import { Mail, Phone, Github, MapPin } from "lucide-react";

export default function SiteFooter() {
  return (
    <footer className="mt-12 bg-gradient-to-r from-violet-700 via-indigo-700 to-cyan-600 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <div className="space-y-3">
            <h3 className="text-2xl font-extrabold tracking-tight">Shubham Jangra</h3>
            <p className="text-sm text-white/90">Frontend Engineer — crafting delightful interfaces since 2022</p>
            <div className="mt-4 flex items-center gap-3">
              <a
                href="mailto:shubhamjnagra1205@gmail.com"
                aria-label="Email"
                className="flex items-center gap-2 rounded-md bg-white/10 px-3 py-2 text-sm hover:bg-white/20 transition"
              >
                <Mail className="h-4 w-4" />
                <span className="text-sm">Email</span>
              </a>

              <a
                href="tel:+917082545147"
                aria-label="Phone"
                className="flex items-center gap-2 rounded-md bg-white/10 px-3 py-2 text-sm hover:bg-white/20 transition"
              >
                <Phone className="h-4 w-4" />
                <span className="text-sm">Call</span>
              </a>
            </div>
          </div>

          <div className="flex flex-col md:items-center">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/90 mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm text-white/90">
              <li>
                <a href="/main" className="hover:underline hover:text-white transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="hover:underline hover:text-white transition">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="hover:underline hover:text-white transition">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:underline hover:text-white transition">
                  Contact
                </a>
              </li>
            </ul>

            <div className="mt-6 md:mt-10 flex gap-3">
              <a
                href="https://github.com/shubhamjangra-1234"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="rounded-full bg-white/10 p-2 hover:bg-white/20 transition"
              >
                <Github className="h-5 w-5" />
              </a>

              <a
                href="https://www.instagram.com/ig.shubham.jangra/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="rounded-full bg-white/10 p-2 hover:bg-white/20 transition"
              >
                {/* Instagram SVG */}
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                </svg>
              </a>

              <a
                href="tel:+917082545147"
                aria-label="Call"
                className="rounded-full bg-white/10 p-2 hover:bg-white/20 transition"
              >
                <Phone className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="md:text-right">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/90 mb-3">Contact Details</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3 justify-start md:justify-end">
                <Mail className="h-4 w-4 text-white/90" />
                <a href="mailto:shubhamjnagra1205@gmail.com" className="text-white/90 hover:underline">
                  shubhamjnagra1205@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-3 justify-start md:justify-end">
                <Phone className="h-4 w-4 text-white/90" />
                <a href="tel:+917082545147" className="text-white/90 hover:underline">+91 7082545147</a>
              </div>

              <div className="flex items-center gap-3 justify-start md:justify-end">
                <MapPin className="h-4 w-4 text-white/90" />
                <span className="text-white/90">Bahadurgarh, Haryana (124507)</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-6 text-center text-sm text-white/80">
          © {new Date().getFullYear()} Shubham Jangra. Built with ♥ and React.
        </div>
      </div>
    </footer>
  );
}
