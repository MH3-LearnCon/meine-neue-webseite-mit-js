import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#FF9B01",
          borderRadius: 6,
          fontFamily: "sans-serif",
        }}
      >
        <span
          style={{
            fontSize: 16,
            fontWeight: 800,
            color: "#FFFFFF",
            letterSpacing: -1,
          }}
        >
          MH
        </span>
      </div>
    ),
    { ...size }
  );
}
