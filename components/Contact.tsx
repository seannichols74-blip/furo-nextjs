"use client";

import { motion } from "framer-motion";
import { Phone, MapPin, ShieldCheck } from "lucide-react";
import ContactForm from "@/components/ContactForm";

const ADDRESS = "1172 Hodgdon Mills Rd, Linneus, ME 04730";

// google.com/maps?output=embed redirects to a response with X-Frame-Options:
// SAMEORIGIN, so it cannot be framed. /maps/embed?pb= serves a frameable map
// and needs no API key.
const MAP_EMBED_SRC = `https://www.google.com/maps/embed?origin=mfe&pb=!1m2!2m1!1s${encodeURIComponent(
  ADDRESS
)}`;

const infoRows = [
  {
    icon: Phone,
    label: "Call or Text",
    value: "(207) 249-0162",
    href: "tel:2072490162",
  },
  {
    icon: MapPin,
    label: "Address",
    value: ADDRESS,
  },
  {
    icon: ShieldCheck,
    label: "Credentials",
    value: "Fully Insured & Maine DEP Licensed",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 md:scroll-mt-28 py-24 md:py-32 bg-neutral-900 border-t border-neutral-800">
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
              Get In Touch
            </span>
            <span className="kicker-line" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-display mt-3 mb-5">
            Request Your <span className="text-gradient">Free Estimate</span>
          </h2>
          <p className="text-neutral-400 text-lg">
            Tell us about your project and we&apos;ll get back to you fast &mdash; no obligation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <ContactForm />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="accent-bar overflow-hidden bg-neutral-950 border border-neutral-800 rounded-3xl p-7 space-y-5">
              {infoRows.map((row) =>
                row.href ? (
                  <a key={row.label} href={row.href} className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange text-lg flex-shrink-0">
                      <row.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-neutral-500 uppercase tracking-wide">{row.label}</div>
                      <div className="font-semibold group-hover:text-orange transition-colors">
                        {row.value}
                      </div>
                    </div>
                  </a>
                ) : (
                  <div key={row.label} className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange text-lg flex-shrink-0">
                      <row.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-neutral-500 uppercase tracking-wide">{row.label}</div>
                      <div className="font-semibold">{row.value}</div>
                    </div>
                  </div>
                )
              )}
            </div>

            <div className="rounded-3xl overflow-hidden border border-neutral-800 h-64">
              <iframe
                title="Furo Enterprises LLC location map"
                className="w-full h-full grayscale contrast-125 opacity-90"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src={MAP_EMBED_SRC}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
