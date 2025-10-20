// next.config.ts
import type { NextConfig } from 'next';

const SHORT: Record<string, string> = {
  // slug : destino largo
  toni:
    '/v?v=50b6d89c47e3557c2601a8c52e5ffced&title=Con%20mucho%20cari%C3%B1o%2C%20para%20un%20amigo%20durar%C3%A1%20toda%20la%20vida.%20Hoy%20y%20siempre%20TONIBE4LIFE',
  // paula: '/v?v=XYZ123&title=Te%20quiero%20Paula',
  // albania: '/v?v=ABC987&title=Recuerdo%20de%20Albania',
};

const nextConfig: NextConfig = {
  async redirects() {
    return Object.entries(SHORT).map(([slug, destination]) => ({
      source: `/${slug}`,
      destination,
      permanent: true,
    }));
  },
  // otras opciones que ya tuvieras (no dupliques otra vez nextConfig)
};

export default nextConfig;
