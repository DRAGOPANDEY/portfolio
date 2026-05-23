import { ImageResponse } from "next/og";
import { siteConfig } from "@/data/site";

export const runtime = "edge";
export const alt = "Mohit Pandey — DevOps Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background:
            "linear-gradient(135deg, #0a0a0f 0%, #11111a 50%, #1a1033 100%)",
          color: "white",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
        }}
      >
        {/* Glow accents */}
        <div
          style={{
            position: "absolute",
            top: -200,
            left: -100,
            width: 600,
            height: 600,
            borderRadius: "50%",
            background: "rgba(124, 58, 237, 0.35)",
            filter: "blur(120px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -200,
            right: -100,
            width: 600,
            height: 600,
            borderRadius: "50%",
            background: "rgba(6, 182, 212, 0.25)",
            filter: "blur(120px)",
          }}
        />

        {/* Top row: logo + availability */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            position: "relative",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div
              style={{
                width: 64,
                height: 64,
                borderRadius: 16,
                background: "linear-gradient(135deg, #7c3aed, #06b6d4)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 800,
                fontSize: 32,
                color: "white",
              }}
            >
              M
            </div>
            <div
              style={{
                fontSize: 28,
                fontWeight: 700,
                letterSpacing: "-0.02em",
              }}
            >
              mohitpandey.dev
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              padding: "10px 22px",
              borderRadius: 999,
              background: "rgba(16, 185, 129, 0.15)",
              border: "1px solid rgba(16, 185, 129, 0.4)",
              fontSize: 22,
              color: "#6ee7b7",
              fontWeight: 600,
            }}
          >
            <span
              style={{
                width: 12,
                height: 12,
                borderRadius: 6,
                background: "#10b981",
              }}
            />
            Available for hire
          </div>
        </div>

        {/* Middle: name + tagline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 24,
            position: "relative",
          }}
        >
          <div
            style={{
              fontSize: 36,
              color: "#a78bfa",
              fontWeight: 600,
              letterSpacing: "0.04em",
              textTransform: "uppercase",
            }}
          >
            {siteConfig.role}
          </div>
          <div
            style={{
              fontSize: 96,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
            }}
          >
            Mohit Pandey
          </div>
          <div
            style={{
              fontSize: 44,
              color: "#cbd5e1",
              fontWeight: 500,
              lineHeight: 1.2,
              maxWidth: 1000,
            }}
          >
            I ship infrastructure to production.
          </div>
        </div>

        {/* Bottom: tech chips + clients */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            position: "relative",
          }}
        >
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {[
              "Docker",
              "Jenkins",
              "Ansible",
              "AWS EC2",
              "Nginx",
              "Jetson Nano",
            ].map((t) => (
              <div
                key={t}
                style={{
                  padding: "8px 18px",
                  borderRadius: 999,
                  background: "rgba(255, 255, 255, 0.06)",
                  border: "1px solid rgba(255, 255, 255, 0.12)",
                  fontSize: 22,
                  color: "#e2e8f0",
                  fontWeight: 500,
                }}
              >
                {t}
              </div>
            ))}
          </div>
          <div
            style={{
              fontSize: 22,
              color: "#94a3b8",
              textAlign: "right",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              gap: 4,
            }}
          >
            <div style={{ color: "#cbd5e1", fontWeight: 600 }}>
              Trusted by · Maruti · BARC · Defence
            </div>
            <div>Delhi NCR, India · Remote · Worldwide</div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
