"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { galleryItems } from "@/lib/data";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.2, 0.7, 0.2, 1] } },
};

export default function Gallery() {
  return (
    <section id="gallery" className="scroll-mt-20 md:scroll-mt-28 py-24 md:py-32 bg-black border-t border-neutral-900">
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
              Recent Work
            </span>
            <span className="kicker-line" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-display mt-3 mb-5">
            Real Projects, Real <span className="text-gradient">Results</span>
          </h2>
          <p className="text-neutral-400 text-lg">
            A look at recent excavation, clearing, and drainage work across Northern Maine.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {galleryItems.map((project) => (
            <motion.div
              key={project.title}
              variants={item}
              whileHover={{ y: -8 }}
              className={`accent-bar group bg-neutral-950 rounded-3xl border border-neutral-800 overflow-hidden transition-colors hover:border-[#FF6200]/50 ${
                project.type === "composite" ? "self-start" : ""
              }`}
            >
              {project.type === "before-after" ? (
                <div className="grid grid-cols-2 gap-px bg-neutral-800 overflow-hidden">
                  <div className="relative h-40 sm:h-48 overflow-hidden">
                    <Image
                      src={project.before}
                      alt={`Before: ${project.title}`}
                      fill
                      sizes="(max-width: 640px) 50vw, 25vw"
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
                    />
                    <span className="ba-tag absolute top-2 left-2 bg-black/75 text-neutral-200 font-bold uppercase px-2 py-1 rounded-md z-10">
                      Before
                    </span>
                  </div>
                  <div className="relative h-40 sm:h-48 overflow-hidden">
                    <Image
                      src={project.after}
                      alt={`After: ${project.title}`}
                      fill
                      sizes="(max-width: 640px) 50vw, 25vw"
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
                    />
                    <span className="ba-tag absolute top-2 left-2 bg-orange text-black font-bold uppercase px-2 py-1 rounded-md z-10">
                      After
                    </span>
                  </div>
                </div>
              ) : project.type === "composite" ? (
                <div className="overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={project.width}
                    height={project.height}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              ) : (
                <div className="relative h-56 sm:h-[248px] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 640px) 100vw, 33vw"
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              )}
              <div className="p-6">
                <h3 className="font-semibold text-lg mb-1.5">{project.title}</h3>
                <p className="text-sm text-neutral-400 leading-relaxed">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
