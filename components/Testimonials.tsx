"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { testimonials } from "@/lib/data";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.2, 0.7, 0.2, 1] } },
};

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="scroll-mt-20 md:scroll-mt-28 py-24 md:py-32 bg-neutral-900 border-t border-neutral-800"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-3 justify-center">
            <span className="kicker-line" />
            <span className="text-orange font-semibold tracking-widest text-sm uppercase">
              Reviews
            </span>
            <span className="kicker-line" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-display mt-3 mb-5">
            What Northern Maine <span className="text-gradient">Says</span>
          </h2>
          <p className="text-neutral-400 text-lg">
            Real feedback from real property owners across the region.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              variants={item}
              whileHover={{ y: -8 }}
              className="accent-bar bg-neutral-950 border border-neutral-800 rounded-3xl p-6 flex flex-col overflow-hidden"
            >
              <div className="flex gap-1 text-orange mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-neutral-300 leading-relaxed mb-6 flex-1">&ldquo;{t.quote}&rdquo;</p>
              <div>
                <div className="font-semibold">{t.name}</div>
                <div className="text-xs text-neutral-500 uppercase tracking-wide">{t.location}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
