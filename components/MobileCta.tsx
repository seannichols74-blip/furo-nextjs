import { Phone, ClipboardList } from "lucide-react";

export default function MobileCta() {
  return (
    <div className="mobile-cta-bar md:hidden fixed bottom-0 left-0 right-0 z-40 bg-neutral-950/95 backdrop-blur-md border-t border-neutral-800 px-4 pt-3 flex items-center gap-3">
      <a
        href="tel:2072490162"
        className="flex-1 inline-flex items-center justify-center gap-2 bg-white/10 border border-white/15 rounded-xl py-3 font-semibold text-sm"
      >
        <Phone className="w-4 h-4" /> Call Now
      </a>
      <a
        href="#contact"
        className="btn-shine flex-1 inline-flex items-center justify-center gap-2 btn-orange rounded-xl py-3 font-semibold text-sm"
      >
        <ClipboardList className="w-4 h-4" /> Free Quote
      </a>
    </div>
  );
}
