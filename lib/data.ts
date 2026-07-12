export type ServiceIcon =
  | "excavation"
  | "clearing"
  | "driveway"
  | "landscaping"
  | "septic"
  | "undercoating";

export type Service = {
  icon: ServiceIcon;
  title: string;
  description: string;
};

export const services: Service[] = [
  {
    icon: "excavation",
    title: "Excavation & Earthwork",
    description:
      "Foundations, utility trenching, grading, and precision digging for projects of any size.",
  },
  {
    icon: "clearing",
    title: "Land Clearing & Bush Hogging",
    description:
      "Site prep, brush cutting, and lot clearing to get your land building-ready.",
  },
  {
    icon: "driveway",
    title: "Driveways & Drainage",
    description:
      "Gravel and stone driveways engineered with proper drainage to hold up through Maine winters.",
  },
  {
    icon: "landscaping",
    title: "Landscaping",
    description:
      "Grading, mulch beds, and finish landscaping to shape, level, and beautify your property.",
  },
  {
    icon: "septic",
    title: "Septic Systems",
    description:
      "Septic installation and repair, done to Maine DEP code from day one.",
  },
  {
    icon: "undercoating",
    title: "Vehicle Undercoating",
    description:
      "Professional rust and corrosion prevention to protect your vehicle through road salt season.",
  },
];

export type GalleryItem =
  | {
      type: "before-after";
      title: string;
      description: string;
      before: string;
      after: string;
    }
  | {
      type: "single";
      title: string;
      description: string;
      image: string;
    }
  | {
      // A single photo that is itself a before/after composite (labels baked in).
      // Shown uncropped at its natural aspect ratio so the labels stay visible.
      type: "composite";
      title: string;
      description: string;
      image: string;
      width: number;
      height: number;
    };

export const galleryItems: GalleryItem[] = [
  {
    type: "before-after",
    title: "Driveway Grading & Drainage",
    description:
      "Regraded and armored with stone drainage to shed water and hold up through Maine winters.",
    before: "/images/project1-before.png",
    after: "/images/project1-after.png",
  },
  {
    type: "before-after",
    title: "Driveway Repair",
    description:
      "Precision grading and base installation for a new residential parking pad.",
    before: "/images/project2-after.png",
    after: "/images/project2-before.png",
  },
  {
    type: "composite",
    title: "Land Clearing & Site Grading",
    description:
      "An overgrown hilltop lot cleared and graded into a level, building-ready site.",
    image: "/images/project18.jpg",
    width: 1172,
    height: 774,
  },
  {
    type: "single",
    title: "Land Clearing & Grading",
    description:
      "Brush and tree clearing to open up a building lot for future construction.",
    image: "/images/project4.png",
  },
  {
    type: "before-after",
    title: "Lakefront Land Clearing",
    description:
      "Overgrown shoreline cleared and graded into usable, open waterfront space.",
    before: "/images/project5-before.png",
    after: "/images/project5-after.png",
  },
  {
    type: "before-after",
    title: "Shoreline Erosion Control",
    description:
      "Stone rip-rap installed to stabilize the bank and stop erosion for good.",
    before: "/images/project6-before.png",
    after: "/images/project6-after.png",
  },
  {
    type: "composite",
    title: "Private Road Rebuild",
    description:
      "A washed-out dirt road rebuilt with fresh gravel and rock-lined drainage for year-round access.",
    image: "/images/project19.jpg",
    width: 1177,
    height: 870,
  },
  {
    type: "composite",
    title: "Foundation Excavation & Backfill",
    description:
      "Excavated, formed, and backfilled with compacted gravel for a new home foundation.",
    image: "/images/project21.jpg",
    width: 1206,
    height: 1608,
  },
  {
    type: "composite",
    title: "Woods Road Reclamation",
    description:
      "A rutted, washed-out woods road regraded with proper drainage and stabilized banks.",
    image: "/images/project23.jpg",
    width: 1206,
    height: 1608,
  },
];

export type Testimonial = {
  name: string;
  location: string;
  rating: number;
  quote: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Mark T.",
    location: "Linneus, ME",
    rating: 5,
    quote:
      "Furo regraded our whole driveway and fixed a drainage problem that's plagued us for years. Showed up on time, worked fast, and cleaned up after themselves. Couldn't ask for more.",
  },
  {
    name: "Sarah K.",
    location: "Houlton, ME",
    rating: 5,
    quote:
      "We had a wooded lot that needed clearing before we could even think about building. The crew was professional, the price was fair, and the land looked better than we imagined.",
  },
  {
    name: "Dan R.",
    location: "Island Falls, ME",
    rating: 5,
    quote:
      "Called about a septic issue and they had someone out within a couple of days. Straightforward, honest, and explained exactly what was going on. Will use them for every project from here on out.",
  },
  {
    name: "Cheryl B.",
    location: "Hodgdon, ME",
    rating: 5,
    quote:
      "Our shoreline was eroding fast and Furo put in a rip-rap wall that solved the problem completely. A year later it still looks great. Highly recommend for waterfront work.",
  },
];
