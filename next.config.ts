import type { NextConfig } from "next";

// Sicherheitsheader. Die CSP ist bewusst pragmatisch: Next.js bettet Hydration-Daten als
// Inline-Skripte ein, und der Nonce-Weg (Middleware setzt `nonce`, Next uebernimmt ihn) greift in
// Next 16 in dieser Konstellation nicht - getestet: alle Inline-Skripte wurden blockiert.
// Deshalb `script-src 'self' 'unsafe-inline'`: Inline bleibt erlaubt, externe Skripte und
// Frames bleiben verboten. Eine strikte Policy braucht Framework-Unterstuetzung oder Hashes
// aus dem Build und ist ein eigener Schritt.
const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=()",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline'",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: blob:",
      "font-src 'self'",
      "connect-src 'self'",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "frame-ancestors 'none'",
      "upgrade-insecure-requests",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  async headers() {
    return [{ source: "/(.*)", headers: securityHeaders }];
  },
};

export default nextConfig;
