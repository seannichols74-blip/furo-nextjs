import Image from "next/image";
import { Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black py-12 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <Image
          src="/logo.png"
          alt="Furo Enterprises LLC"
          width={1103}
          height={295}
          className="h-11 w-auto opacity-90"
        />
        <p className="text-sm text-neutral-500 text-center">
          &copy; {new Date().getFullYear()} Furo Enterprises LLC &middot; 1172 Hodgdon Mills Rd,
          Linneus, ME 04730 &middot; Fully Insured &amp; Maine DEP Licensed
        </p>
        <a
          href="tel:2072490162"
          className="text-sm text-neutral-400 hover:text-orange transition-colors"
        >
          <Phone className="w-4 h-4 mr-2 inline-block" />
          (207) 249-0162
        </a>
      </div>
    </footer>
  );
}
