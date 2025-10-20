import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/toni',
        destination:
          '/v?v=50b6d89c47e3557c2601a8c52e5ffced&title=Con%20mucho%20cari%C3%B1o%2C%20para%20un%20amigo%20durar%C3%A1%20toda%20la%20vida.%20Hoy%20y%20siempre%20TONIBE4LIFE',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
