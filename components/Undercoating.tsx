"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, Clock, DollarSign, Snowflake, ArrowRight } from "lucide-react";

const benefits = [
  {
    icon: ShieldCheck,
    title: "Stops Corrosion at the Source",
    description:
      "A sealed coating locks out road salt, moisture, and grime before rust can take hold of your frame and undercarriage.",
  },
  {
    icon: Clock,
    title: "Extends Vehicle Life",
    description:
      "Protecting the frame and brake and fuel lines keeps trucks and equipment on the road for years longer.",
  },
  {
    icon: DollarSign,
    title: "Saves You Money",
    description:
      "A single treatment costs a fraction of the frame, line, and floor repairs that rust damage leads to down the road.",
  },
  {
    icon: Snowflake,
    title: "Built for Maine Winters",
    description:
      "Engineered for the salt-and-slush season that eats through untreated metal from the inside out.",
  },
];

type GalleryEntry =
  | { kind: "single"; src: string; caption: string }
  | { kind: "feature"; src: string; caption: string }
  | { kind: "split"; src: string; caption: string }
  | { kind: "pair"; before: string; after: string; caption: string };

const gallery: GalleryEntry[] = [
  {
    kind: "feature",
    src: "/images/project11.jpg",
    caption: "What your undercoating looks like after one year",
  },
  { kind: "single", src: "/images/project9.jpg", caption: "Full Vehicle Undercoating" },
  { kind: "single", src: "/images/project10.jpg", caption: "Frame & Undercarriage Sealing" },
  {
    kind: "pair",
    before: "/images/project14.jpg",
    after: "/images/project15.jpg",
    caption: "Truck Undercarriage Before & After",
  },
  {
    kind: "split",
    src: "/images/project12.jpg",
    caption: "Fleet Corrosion Prevention – Before vs After Undercoating",
  },
  {
    kind: "pair",
    before: "/images/project16.jpg",
    after: "/images/project17.jpg",
    caption: "Heavy Equipment Undercoating Results",
  },
  { kind: "single", src: "/images/project13.jpg", caption: "Truck Chassis Coating" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.2, 0.7, 0.2, 1] } },
};

export default function Undercoating() {
  return (
    <section
      id="undercoating"
      className="scroll-mt-20 md:scroll-mt-28 py-24 md:py-32 bg-neutral-900 border-t border-neutral-800"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
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
              Vehicle Undercoating
            </span>
            <span className="kicker-line" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-display mt-3 mb-5">
            Protect Your <span className="text-gradient">Equipment</span>
          </h2>
          <p className="text-neutral-400 text-lg">
            Professional rust-proofing that shields your trucks, trailers, and equipment from
            the road salt and moisture that destroy untreated metal.
          </p>
        </motion.div>

        {/* Benefits */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {benefits.map((benefit) => (
            <motion.div
              key={benefit.title}
              variants={item}
              className="accent-bar overflow-hidden bg-neutral-950 border border-neutral-800 rounded-3xl p-6"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500/10 text-orange mb-4">
                <benefit.icon className="h-5 w-5" />
              </div>
              <h3 className="mb-1.5 text-lg font-semibold">{benefit.title}</h3>
              <p className="text-sm leading-relaxed text-neutral-400">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Gallery */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-flow-row-dense grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[240px] lg:auto-rows-[260px]"
        >
          {gallery.map((entry) => {
            if (entry.kind === "feature") {
              return (
                <motion.div
                  key={entry.src}
                  variants={item}
                  whileHover={{ y: -8 }}
                  className="accent-bar group relative h-full overflow-hidden rounded-3xl border-2 border-[#FF6200]/60 bg-neutral-950 sm:col-span-2 lg:row-span-2"
                >
                  <Image
                    src={entry.src}
                    alt={entry.caption}
                    fill
                    sizes="(max-width: 640px) 100vw, 66vw"
                    className="object-cover object-bottom transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Caption sits at the top so it never covers the red text at the bottom of the photo */}
                  <div className="pointer-events-none absolute inset-x-0 top-0 bg-gradient-to-b from-black/85 via-black/40 to-transparent p-5">
                    <span className="inline-block rounded-md bg-orange px-2.5 py-1 text-xs font-bold uppercase tracking-wide text-black">
                      One Year Later
                    </span>
                    <h3 className="mt-2 text-lg font-semibold text-white sm:text-xl">
                      {entry.caption}
                    </h3>
                  </div>
                </motion.div>
              );
            }

            if (entry.kind === "split") {
              // A single photo that is itself a before/after composite (rusty left, coated right).
              return (
                <motion.div
                  key={entry.src}
                  variants={item}
                  whileHover={{ y: -8 }}
                  className="accent-bar group relative h-full overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-950 transition-colors hover:border-[#FF6200]/50"
                >
                  <Image
                    src={entry.src}
                    alt={entry.caption}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute top-3 left-3 z-10 rounded-md bg-black/75 px-2.5 py-1 text-xs font-bold uppercase tracking-wide text-neutral-200">
                    Before
                  </span>
                  <span className="absolute top-3 right-3 z-10 rounded-md bg-orange px-2.5 py-1 text-xs font-bold uppercase tracking-wide text-black">
                    After
                  </span>
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent p-5">
                    <h3 className="text-sm font-semibold text-white transition-colors group-hover:text-orange">
                      {entry.caption}
                    </h3>
                  </div>
                </motion.div>
              );
            }

            if (entry.kind === "pair") {
              return (
                <motion.div
                  key={entry.caption}
                  variants={item}
                  whileHover={{ y: -8 }}
                  className="accent-bar group relative h-full overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-950 transition-colors hover:border-[#FF6200]/50 sm:col-span-2"
                >
                  <div className="grid h-full grid-cols-2 gap-px bg-neutral-800">
                    <div className="relative h-full overflow-hidden">
                      <Image
                        src={entry.before}
                        alt={`Before: ${entry.caption}`}
                        fill
                        sizes="(max-width: 640px) 50vw, 33vw"
                        className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      />
                      <span className="absolute top-3 left-3 z-10 rounded-md bg-black/75 px-2.5 py-1 text-xs font-bold uppercase tracking-wide text-neutral-200">
                        Before
                      </span>
                    </div>
                    <div className="relative h-full overflow-hidden">
                      <Image
                        src={entry.after}
                        alt={`After: ${entry.caption}`}
                        fill
                        sizes="(max-width: 640px) 50vw, 33vw"
                        className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      />
                      <span className="absolute top-3 left-3 z-10 rounded-md bg-orange px-2.5 py-1 text-xs font-bold uppercase tracking-wide text-black">
                        After
                      </span>
                    </div>
                  </div>
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-5">
                    <h3 className="font-semibold text-white transition-colors group-hover:text-orange">
                      {entry.caption}
                    </h3>
                  </div>
                </motion.div>
              );
            }

            return (
              <motion.div
                key={entry.src}
                variants={item}
                whileHover={{ y: -8 }}
                className="accent-bar group relative h-full overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-950 transition-colors hover:border-[#FF6200]/50"
              >
                <Image
                  src={entry.src}
                  alt={entry.caption}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-90" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <h3 className="font-semibold text-white transition-colors group-hover:text-orange">
                    {entry.caption}
                  </h3>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-14 text-center"
        >
          <a
            href="#contact"
            className="btn-shine inline-flex w-full items-center justify-center gap-3 btn-orange px-8 py-4 rounded-xl font-semibold text-lg sm:w-auto"
          >
            Protect My Vehicle
            <ArrowRight className="h-5 w-5" />
          </a>
          <p className="mt-3 text-sm text-neutral-500">
            Free estimates on single vehicles and full fleets.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
