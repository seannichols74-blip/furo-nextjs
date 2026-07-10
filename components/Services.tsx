"use client";

import { motion } from "framer-motion";
import { Truck, TreePine, Route, Hammer, Droplets, Car } from "lucide-react";
import { services, type ServiceIcon } from "@/lib/data";

const iconMap: Record<ServiceIcon, typeof Truck> = {
  excavation: Truck,
  clearing: TreePine,
  driveway: Route,
  demolition: Hammer,
  septic: Droplets,
  undercoating: Car,
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.2, 0.7, 0.2, 1] } },
};

export default function Services() {
  return (
    <section id="services" className="scroll-mt-20 md:scroll-mt-28 py-24 md:py-32 bg-neutral-900 border-t border-neutral-800">
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
              What We Do
            </span>
            <span className="kicker-line" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-display mt-3 mb-5">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-neutral-400 text-lg">
            Full-service earthwork and site solutions, backed by a growing fleet and a crew that
            knows Maine ground.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={service.title}
                variants={item}
                whileHover={{ y: -10 }}
                className="accent-bar bg-neutral-950 p-8 rounded-3xl border border-neutral-800 overflow-hidden transition-colors hover:border-[#FF6200]/60 hover:bg-[#131313]"
              >
                <div className="w-14 h-14 rounded-2xl bg-orange-500/10 flex items-center justify-center mb-6 text-orange">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-neutral-400 leading-relaxed">{service.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
