// src/app/v/page.tsx

export const metadata = {
  title: "Frame2Life • Play",
  description: "Reproduce tu recuerdo con el sello Frame2Life",
};

// Fuerza ejecución en Node y evita cacheo estático
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type Q = string | string[] | undefined;
const first = (v: Q) => (Array.isArray(v) ? (v[0] ?? "") : (v ?? ""));

export default function DisplayPage({
  searchParams,
}: {
  searchParams?: Record<string, Q>;
}) {
  // Lee parámetros del query desde el servidor (sin hooks)
  const videoId = first(searchParams?.v).replace(/[<>]/g, "").trim();
  const rawTitle = first(searchParams?.title).trim();
  const rawCover = first(searchParams?.cover).trim();

  // No usamos decodeURIComponent para evitar errores en SSR
  const title = rawTitle || "Tu recuerdo, tu historia";
  const coverUrl = rawCover || "";

  if (!videoId) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-6 text-center">
        <img src="/brand/logo.svg" alt="Frame2Life" className="h-24 w-auto mb-6" />
        <h1 className="text-3xl font-semibold mb-4">Falta el vídeo</h1>
        <p className="opacity-80">
          Añade el parámetro <code>?v=&lt;UID&gt;</code> en la URL.
        </p>
        <p className="opacity-70 mt-2 text-sm">
          Ej.: <code>/v?v=abcd1234&title=Mi%20vídeo</code>
        </p>
      </main>
    );
  }

  const iframeSrc =
    `https://iframe.videodelivery.net/${videoId}` +
    (coverUrl ? `?poster=${encodeURIComponent(coverUrl)}` : "");

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4">
      <img src="/brand/logo.svg" alt="Frame2Life" className="h-24 w-auto mb-6" />
      <h1 className="text-2xl font-semibold mb-4">{title}</h1>

      <div className="w-full max-w-3xl aspect-video rounded-2xl overflow-hidden shadow-2xl">
        <iframe
          src={iframeSrc}
          allow="accelerometer; autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
          title={title}
        />
      </div>

      <p className="mt-8 text-xs opacity-60">
        © {new Date().getFullYear()} Frame2Life
      </p>
    </main>
  );
}
