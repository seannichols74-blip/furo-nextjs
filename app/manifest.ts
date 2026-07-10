import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Furo Enterprises LLC",
    short_name: "Furo Enterprises",
    description:
      "Fully insured, Maine DEP licensed excavation, demolition, land clearing, driveways, drainage, septic systems & vehicle undercoating in Linneus, Maine.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0a",
    theme_color: "#0a0a0a",
    icons: [
      {
        src: "/logo.png",
        sizes: "any",
        type: "image/png",
      },
    ],
  };
}
