import type { NextConfig } from 'next';
const isDevelopment = process.env.NODE_ENV === 'development';
const csp = ["default-src 'self'", "base-uri 'self'", "form-action 'self'", "frame-ancestors 'none'", "object-src 'none'", `script-src 'self' 'unsafe-inline'${isDevelopment ? " 'unsafe-eval'" : ''}`, "style-src 'self' 'unsafe-inline'", "img-src 'self' data: blob:", "connect-src 'self' https://*.supabase.co wss://*.supabase.co", "font-src 'self' data:", "upgrade-insecure-requests"].join('; ');
const config: NextConfig = { async headers() { return [{source:'/:path*',headers:[{key:'Content-Security-Policy',value:csp},{key:'X-Content-Type-Options',value:'nosniff'},{key:'X-Frame-Options',value:'DENY'},{key:'Referrer-Policy',value:'strict-origin-when-cross-origin'},{key:'Permissions-Policy',value:'camera=(), microphone=(), geolocation=()'},{key:'Strict-Transport-Security',value:'max-age=63072000; includeSubDomains; preload'}]}]; } };
export default config;
