import { ImageResponse } from "@vercel/og";
import { constant } from "@/helpers/constants";

export const config = {
  runtime: "edge",
};

/**
 * Social preview card, rendered on demand at 1200x630 — the image LinkedIn,
 * Twitter and Slack show when the site is shared.
 */
export default function handler() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#08090b",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              color: "#60a5fa",
              fontSize: 22,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
            }}
          >
            {constant.workExperience[0].experiences[0].title}
          </div>

          <div
            style={{
              display: "flex",
              color: "#f9fafb",
              fontSize: 76,
              fontWeight: 600,
              marginTop: 24,
              letterSpacing: "-0.02em",
            }}
          >
            {constant.personalDetails.firstName} {constant.personalDetails.lastName}
          </div>

          <div
            style={{
              display: "flex",
              color: "#9ca3af",
              fontSize: 30,
              marginTop: 28,
              lineHeight: 1.4,
              maxWidth: 900,
            }}
          >
            {constant.positioning}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: "64px",
            borderTop: "1px solid rgba(255,255,255,0.12)",
            paddingTop: "32px",
          }}
        >
          {constant.impact.map((metric) => (
            <div
              key={metric.label}
              style={{ display: "flex", flexDirection: "column" }}
            >
              <div style={{ color: "#f9fafb", fontSize: 40, fontWeight: 500 }}>
                {metric.value}
              </div>
              <div style={{ color: "#6b7280", fontSize: 22, marginTop: 6 }}>
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
