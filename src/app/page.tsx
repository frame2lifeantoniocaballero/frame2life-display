'use client';

import { useSearchParams } from 'next/navigation';
import { useMemo } from 'react';

export default function DisplayPage() {
  const sp = useSearchParams();

  // Lee y limpia parámetros del query en el cliente
  const { videoId, title, coverUrl } = useMemo(() => {
    const v = (sp.get('v') || '').replace(/[<>]/g, '').trim();
    const t = sp.get('title') || '';
    const c = sp.get('cover') || '';
    return {
      videoId: v,
      title: t ? safeDecode(t) : 'Tu recuerdo, tu historia',
      coverUrl: c ? safeDecode(c) : '',
    };
  }, [sp]);

  if (!videoId) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-6 text-center">
        <img src="/brand/logo.svg" alt="Frame2Life" className="h-24 w-auto mb-6" />
        <h1 className="text-3xl font-semibold mb-4">Falta el vídeo</h1>
        <p className="opacity-80">Añade <code>?v=&lt;UID&gt;</code> en la URL.</p>
        <p className="opacity-70 mt-2 text-sm">Ej.: <code>/v?v=abcd1234&title=Mi%20vídeo</code></p>
      </main>
    );
  }

  const iframeSrc =
    `https://iframe.videodelivery.net/${videoId}` +
    (coverUrl ? `?poster=${encodeURIComponent(coverUrl)}` : '');

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

      <p className="mt-8 text-xs opacity-60">© {new Date().getFullYear()} Frame2Life</p>
    </main>
  );
}

function safeDecode(s: string) {
  try { return decodeURIComponent(s); } catch { return s; }
}
