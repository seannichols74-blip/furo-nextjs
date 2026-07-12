"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, Layers, MapPin, Zap, Phone, ArrowRight, ChevronDown } from "lucide-react";

const stats = [
  { icon: ShieldCheck, value: "100%", label: "Insured & Licensed" },
  { icon: Layers, value: "7", label: "Core Services" },
  { icon: MapPin, value: "Local", label: "Northern Maine Crew" },
  { icon: Zap, value: "Fast", label: "Free Estimates" },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.2, 0.7, 0.2, 1] } },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="hero-bg min-h-screen flex items-center pt-36 md:pt-40 relative scroll-mt-20"
    >
      <Image
        src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="hero-overlay absolute inset-0" />
      <div className="blob blob-orange animate-float" />
      <div className="blob blob-amber animate-float" style={{ animationDelay: "-5s" }} />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-7xl mx-auto px-6 pt-16 pb-24 w-full relative z-10"
      >
        <div className="max-w-3xl">
          <motion.div variants={item} className="flex items-center gap-2 mb-5">
            <span className="kicker-line" />
            <span className="text-orange font-semibold tracking-[0.12em] sm:tracking-[0.2em] text-[11px] sm:text-xs uppercase">
              Northern Maine&apos;s Excavation Crew
            </span>
          </motion.div>

          <motion.div
            variants={item}
            className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-3.5 py-2 rounded-full text-xs sm:text-sm mb-7 backdrop-blur-sm"
          >
            <span className="relative flex h-2.5 w-2.5 flex-shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
            </span>
            Linneus, Maine &middot; Fully Insured &amp; Maine DEP Licensed
          </motion.div>

          <motion.h1
            variants={item}
            className="text-4xl sm:text-6xl md:text-7xl font-bold leading-[1.02] sm:leading-[0.98] tracking-tight sm:tracking-tighter font-display mb-7"
          >
            HEAVY EQUIPMENT
            <br />
            <span className="text-gradient">SERVICES</span>
            <br className="sm:hidden" /> DONE RIGHT
          </motion.h1>

          <motion.p variants={item} className="text-base sm:text-lg md:text-xl text-neutral-300 mb-5 max-w-2xl">
            From dug foundations to cleared land, Northern Maine trusts Furo Enterprises to show
            up, get it done, and leave the site better than we found it.
          </motion.p>

          <motion.p
            variants={item}
            className="text-xs sm:text-sm uppercase tracking-widest text-neutral-400 mb-10 font-medium"
          >
            Excavation &middot; Landscaping &middot; Land Clearing &middot; Driveways &middot;
            Drainage &middot; Septic &middot; Undercoating
          </motion.p>

          <motion.div variants={item} className="flex flex-col sm:flex-row gap-4">
            <motion.a
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
              href="#contact"
              className="btn-shine w-full sm:w-auto inline-flex items-center justify-center gap-3 btn-orange px-8 py-4 rounded-xl font-semibold text-lg"
            >
              <Phone className="w-5 h-5" /> (207) 249-0162
            </motion.a>
            <motion.a
              whileHover={{ y: -3, borderColor: "rgba(255,98,0,0.5)" }}
              whileTap={{ scale: 0.98 }}
              href="#gallery"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 border border-white/15 px-8 py-4 rounded-xl font-semibold text-lg transition-colors"
            >
              See Our Work <ArrowRight className="w-4 h-4" />
            </motion.a>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20 max-w-4xl">
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={item}
              whileHover={{ y: -6 }}
              className="accent-bar counter-card backdrop-blur-sm border border-neutral-800 rounded-2xl p-5 text-center overflow-hidden"
            >
              <stat.icon className="w-5 h-5 text-orange mb-2 mx-auto" />
              <div className="text-2xl sm:text-3xl font-bold font-display text-orange">
                {stat.value}
              </div>
              <div className="text-xs uppercase tracking-wide text-neutral-400 mt-1">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.a
        href="#services"
        animate={{ y: [0, 8, 0], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-neutral-400 hover:text-orange transition-colors"
      >
        <ChevronDown className="w-6 h-6" />
      </motion.a>
    </section>
  );
}
