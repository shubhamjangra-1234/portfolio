import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/60 backdrop-blur-md border-b border-slate-100">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="inline-flex items-center gap-3">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-violet-600 to-cyan-400 text-white font-semibold shadow">SJ</span>
          <span className="font-semibold text-slate-900">Shubham Jangra</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          <a href="/main#services" className="text-sm text-slate-700 hover:text-slate-900">Services</a>
          <a href="/main#about" className="text-sm text-slate-700 hover:text-slate-900">Work</a>
          <a href="/main#contact" className="text-sm text-slate-700 hover:text-slate-900">Contact</a>
        </nav>

        <div className="flex items-center gap-3">
          <a href="/main#contact" className="hidden md:inline-block">
            <button className="rounded-md bg-violet-600 px-4 py-2 text-sm font-semibold text-white shadow">Hire me</button>
          </a>

          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-slate-100 md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${open ? "block" : "hidden"}`}>
        <div className="border-t border-slate-100 bg-white/95 backdrop-blur-md">
          <div className="container mx-auto flex flex-col gap-2 px-4 py-4">
            <a href="/main#services" className="py-2 text-slate-700">Services</a>
            <a href="/main#about" className="py-2 text-slate-700">Work</a>
            <a href="/main#contact" className="py-2 text-slate-700">Contact</a>
            <a href="mailto:hello@shubham.dev" className="mt-2 inline-block rounded-md bg-violet-600 px-4 py-2 text-center text-sm font-semibold text-white">Hire me</a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
