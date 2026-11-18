"use client";

// Last resort when the root layout itself fails: no site CSS or fonts here, so keep it self-contained.
export default function GlobalError({ retry }: { error: unknown; retry: () => void }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, minHeight: "100vh", display: "grid", placeItems: "center", textAlign: "center", background: "#fbfaf6", color: "#15140f", fontFamily: "Georgia, serif" }}>
        <div>
          <p style={{ fontSize: "clamp(6rem,22vw,14rem)", margin: 0, lineHeight: 1 }}>5<em style={{ color: "#3a49d4" }}>0</em>0</p>
          <h1 style={{ fontWeight: 400 }}>Something went wrong</h1>
          <p style={{ color: "#6b6a62" }}>An unexpected error on our side. Please try again.</p>
          <button onClick={retry} style={{ marginTop: 16, padding: "12px 24px", borderRadius: 999, border: 0, background: "#4a5af0", color: "#fff", fontSize: 16, cursor: "pointer" }}>Try again</button>
        </div>
      </body>
    </html>
  );
}
