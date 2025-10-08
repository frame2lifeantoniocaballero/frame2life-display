export const metadata = {
    title: "Frame2Life • Play",
    description: "Reproduce tu recuerdo con el sello Frame2Life",
  };
  
  type Props = { searchParams?: { v?: string; title?: string; cover?: string } };
  
  export default function DisplayPage({ searchParams }: Props) {
    const videoId = searchParams?.v || "";
    const title = decodeURIComponent(searchParams?.title || "Tu recuerdo, tu historia");
    const coverUrl = searchParams?.cover ? decodeURIComponent(searchParams.cover) : "";
  
    // ⚠️ Si no hay video, mostramos mensaje
    if (!videoId) {
      return (
        <main className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-6 text-center">
          <img src="/brand/logo.svg" alt="Frame2Life" className="h-20 w-auto mb-6" />
          <h1 className="text-3xl font-semibold mb-4">Falta el vídeo</h1>
          <p className="opacity-80">
            Añade el parámetro <code>?v=&lt;UID&gt;</code> en la URL para ver tu vídeo.
          </p>
          <p className="opacity-70 mt-2 text-sm">
            Ejemplo: <code>/v?v=abcd1234efgh5678&title=Mi%20vídeo</code>
          </p>
        </main>
      );
    }
  
    // ✅ Generamos la URL del iframe
    const iframeSrc = `https://iframe.videodelivery.net/${videoId}${
      coverUrl ? `?poster=${encodeURIComponent(coverUrl)}` : ""
    }`;
  
    return (
      <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4">
        {/* Logo centrado arriba */}
        <img src="/brand/logo.svg" alt="Frame2Life" className="h-24 w-auto mb-6" />
  
        {/* Título del vídeo */}
        <h1 className="text-2xl font-semibold mb-4">{title}</h1>
  
        {/* Player de Cloudflare Stream */}
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
          © {new Date().getFullYear()} Frame2Life • Todos los derechos reservados
        </p>
      </main>
    );
  }
  