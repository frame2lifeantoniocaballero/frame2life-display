"use client";

import { useSearchParams } from "next/navigation";

// 🚀 Desactivar prerendering
export const dynamic = "force-dynamic";

export default function VideoPage() {
  const searchParams = useSearchParams();
  const videoId = searchParams.get("v");
  const message = searchParams.get("m") ?? "Tu recuerdo, tu historia.";

  if (!videoId) {
    return (
      <main
        style={{
          display: "grid",
          placeItems: "center",
          minHeight: "100vh",
          backgroundColor: "#000",
          color: "#fff",
        }}
      >
        <p>Falta el parámetro “v” con el ID del video.</p>
      </main>
    );
  }

  const videoUrl = `https://arweave.net/${videoId}`;

  return (
    <main
      style={{
        backgroundColor: "#000",
        color: "#fff",
        textAlign: "center",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "1rem",
      }}
    >
      <img
        src="/logo-frame2life.svg"
        alt="Frame2Life"
        style={{ width: 150, marginBottom: "0.5rem" }}
      />

      <h2 style={{ fontSize: "1.1rem", fontWeight: 500 }}>{message}</h2>

      <div
        style={{
          width: "90%",
          maxWidth: 400,
          borderRadius: 12,
          overflow: "hidden",
        }}
      >
        <video
          controls
          playsInline
          preload="metadata"
          style={{ width: "100%", borderRadius: 12 }}
        >
          <source src={videoUrl} type="video/mp4" />
          Tu navegador no soporta el video.
        </video>
      </div>

      <p style={{ fontSize: "0.8rem", color: "#aaa", marginTop: "1rem" }}>
        © 2025 Frame2Life · Todos los derechos reservados
      </p>
    </main>
  );
}
