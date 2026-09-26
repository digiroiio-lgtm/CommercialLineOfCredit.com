import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "CLOC — Commercial Line of Credit";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#1B2C65",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            background: "#006FCF",
            color: "white",
            fontSize: 18,
            fontWeight: 800,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            padding: "8px 18px",
            borderRadius: 4,
            marginBottom: 32,
          }}
        >
          CLOC
        </div>
        <div
          style={{
            color: "white",
            fontSize: 64,
            fontWeight: 800,
            lineHeight: 1.1,
            marginBottom: 24,
            maxWidth: 800,
          }}
        >
          Commercial Line of Credit
        </div>
        <div
          style={{
            color: "rgba(255,255,255,0.7)",
            fontSize: 28,
            fontWeight: 400,
            lineHeight: 1.4,
            maxWidth: 700,
          }}
        >
          Rates, requirements, and financing options for U.S. businesses
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 60,
            right: 80,
            color: "rgba(255,255,255,0.4)",
            fontSize: 20,
          }}
        >
          commerciallineofcredit.com
        </div>
      </div>
    ),
    { ...size }
  );
}
