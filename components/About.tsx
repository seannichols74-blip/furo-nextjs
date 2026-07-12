"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const checks = [
  "Fully insured & Maine DEP licensed",
  "Recently expanded equipment fleet",
  "Free, no-pressure estimates",
  "Local crew, local accountability",
];

export default function About() {
  return (
    <section id="about" className="scroll-mt-20 md:scroll-mt-28 py-24 md:py-32 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="kicker-line" />
            <span className="text-orange font-semibold tracking-widest text-sm uppercase">
              About Furo Enterprises
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-display mt-3 mb-6 leading-tight">
            Built on Maine Ground.
            <br />
            Backed by a <span className="text-gradient">Growing Fleet.</span>
          </h2>
          <p className="text-neutral-400 text-lg leading-relaxed mb-6">
            Furo Enterprises LLC is a Linneus-based excavation and landscaping company serving
            Northern Maine with heavy equipment work that&apos;s honest, on-schedule, and built to
            last. We&apos;re fully insured and Maine DEP licensed, so every septic, drainage, and
            site prep job is handled to code &mdash; no shortcuts.
          </p>
          <p className="text-neutral-400 text-lg leading-relaxed mb-8">
            We just expanded our fleet with additional excavators, skid steers, and hauling
            equipment &mdash; meaning faster turnaround and more capacity for driveway, land
            clearing, and shoreline projects across the region.
          </p>
          <div className="grid sm:grid-cols-2 gap-5">
            {checks.map((check) => (
              <div key={check} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-orange mt-0.5 flex-shrink-0" />
                <span className="text-neutral-200">{check}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          whileHover="hover"
          className="relative rounded-3xl border border-neutral-800 overflow-hidden"
        >
          <motion.div variants={{ hover: { scale: 1.06 } }} transition={{ duration: 0.7 }}>
            <Image
              src="/images/project3.png"
              alt="Furo Enterprises fleet: excavator, skid steer, and dump truck"
              width={1179}
              height={928}
              className="w-full h-[420px] object-cover object-center"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
