import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Furo Enterprises LLC — Northern Maine Excavation & Demolition";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background:
            "radial-gradient(circle at 20% 20%, #1a1a1a 0%, #0a0a0a 55%, #000000 100%)",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 12,
            background: "#FF6200",
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 28,
          }}
        >
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 999,
              background: "#FF6200",
            }}
          />
          <span
            style={{
              color: "#FF6200",
              fontSize: 28,
              letterSpacing: 6,
              textTransform: "uppercase",
              fontWeight: 600,
            }}
          >
            Northern Maine&apos;s Excavation Crew
          </span>
        </div>
        <div
          style={{
            display: "flex",
            color: "white",
            fontSize: 96,
            fontWeight: 700,
            letterSpacing: -2,
            lineHeight: 1.05,
          }}
        >
          FURO ENTERPRISES
        </div>
        <div
          style={{
            display: "flex",
            color: "#a3a3a3",
            fontSize: 34,
            marginTop: 22,
          }}
        >
          Excavation &middot; Demolition &middot; Land Clearing &middot; Linneus, ME
        </div>
      </div>
    ),
    { ...size }
  );
}
