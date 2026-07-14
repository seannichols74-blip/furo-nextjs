"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ShieldCheck, MapPin, Phone, Menu, X, Calendar } from "lucide-react";

const links: { href: string; label: string; highlight?: boolean }[] = [
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#undercoating", label: "Undercoating", highlight: true },
  { href: "#gallery", label: "Projects" },
  { href: "#testimonials", label: "Reviews" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Top strip */}
      <div className="hidden md:block bg-black border-b border-neutral-900 text-xs text-neutral-400">
        <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="inline-flex items-center">
              <ShieldCheck className="w-3.5 h-3.5 text-orange mr-1.5" />
              Fully Insured &amp; Maine DEP Licensed
            </span>
            <span className="inline-flex items-center">
              <MapPin className="w-3.5 h-3.5 text-orange mr-1.5" />
              1172 Hodgdon Mills Rd, Linneus, ME
            </span>
          </div>
          <a href="tel:2072490162" className="inline-flex items-center hover:text-orange transition-colors">
            <Phone className="w-3.5 h-3.5 mr-1.5" />
            (207) 249-0162
          </a>
        </div>
      </div>

      {/* Navbar */}
      <nav
        className={`fixed top-0 md:top-8 w-full z-50 transition-all duration-300 py-2 md:py-3 ${
          scrolled ? "nav-scrolled" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <a href="#home" className="flex items-center py-1">
            <Image
              src="/logo.png"
              alt="Furo Enterprises LLC"
              width={1103}
              height={295}
              priority
              className="logo-glow h-14 sm:h-16 md:h-20 w-auto"
            />
          </a>

          <div className="hidden md:flex flex-1 items-center justify-center gap-7 text-sm font-medium text-neutral-200">
            {links.map((link) =>
              link.highlight ? (
                <a
                  key={link.href}
                  href={link.href}
                  className="inline-flex items-center gap-1.5 rounded-full border border-[#FF6200]/50 bg-[#FF6200]/10 px-4 py-1.5 font-semibold text-orange shadow-[0_0_20px_-6px_#FF6200] transition-all duration-300 hover:bg-[#FF6200] hover:text-black hover:shadow-[0_0_22px_-4px_#FF6200]"
                >
                  <ShieldCheck className="w-4 h-4" />
                  {link.label}
                </a>
              ) : (
                <a key={link.href} href={link.href} className="nav-link hover:text-orange transition-colors">
                  {link.label}
                </a>
              )
            )}
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://cal.com/furoenterprises"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shine hidden sm:inline-flex items-center gap-2 btn-orange px-6 py-3.5 rounded-xl font-bold text-sm tracking-wide shadow-[0_0_22px_-4px_#FF6200] ring-2 ring-[#FF6200]/60 transition-all hover:shadow-[0_0_26px_-2px_#FF6200]"
            >
              <Calendar className="w-4 h-4" />
              Book Undercoating Now
            </a>
            <a
              href="#contact"
              className="btn-shine hidden sm:inline-flex items-center gap-2 btn-orange px-6 py-3 rounded-xl font-semibold text-sm tracking-wide"
            >
              GET A FREE QUOTE
            </a>
            <button
              onClick={() => setMenuOpen((o) => !o)}
              aria-label="Toggle menu"
              className="md:hidden text-2xl w-10 h-10 flex items-center justify-center"
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden overflow-hidden bg-neutral-950 border-t border-neutral-900"
            >
              <div className="flex flex-col px-6 py-4 gap-1 text-neutral-200 font-medium divide-y divide-neutral-900">
                {links.map((link) =>
                  link.highlight ? (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="flex items-center gap-2 py-2 font-semibold text-orange"
                    >
                      <ShieldCheck className="w-4 h-4" />
                      {link.label}
                    </a>
                  ) : (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="block py-2"
                    >
                      {link.label}
                    </a>
                  )
                )}
                <a
                  href="tel:2072490162"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center py-2 text-orange"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  (207) 249-0162
                </a>
                <a
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="btn-shine btn-orange text-white text-center rounded-xl mt-3 py-3 font-semibold"
                >
                  Get a Free Quote
                </a>
                <a
                  href="https://cal.com/furoenterprises"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMenuOpen(false)}
                  className="btn-shine btn-orange text-white flex items-center justify-center gap-2 rounded-xl mt-2 py-3 font-bold ring-2 ring-[#FF6200]/60"
                >
                  <Calendar className="w-4 h-4" />
                  Book Undercoating Now
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
