import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          fontFamily: '"Public Sans"',
          fontSize: 64,
          backgroundColor: "#37323e",
          color: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "0 100px",
          textAlign: "center",
        }}
      >
        Samantha Whelpley
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
