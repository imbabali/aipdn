// Site takedown proxy.
//
// Every request (except Next.js internal assets under /_next) is intercepted
// and answered with a self-contained barebones 404 page. This includes pages,
// API-style routes, /robots.txt, /sitemap.xml, /favicon.ico, /donate, and any
// other URL on the site.
//
// To bring the site back online, delete this file. No other file in the
// project needs to change.
//
// Convention: in Next.js 16 the `middleware` file convention was renamed to
// `proxy`. See node_modules/next/dist/docs/01-app/03-api-reference/03-file-conventions/proxy.md

import { NextResponse } from "next/server";

const OFFLINE_HTML = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <meta name="robots" content="noindex,nofollow">
    <title>404 - Page Not Found</title>
    <style>
      :root {
        --background: #ffffff;
        --foreground: #0a0c0a;
        --muted-foreground: #5c625c;
        --green-200: #b3e0bb;
      }
      *, *::before, *::after { box-sizing: border-box; }
      html, body { margin: 0; padding: 0; height: 100%; }
      body {
        background: var(--background);
        color: var(--foreground);
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 100vh;
        padding: 1.5rem;
        text-align: center;
        -webkit-font-smoothing: antialiased;
      }
      main { max-width: 32rem; }
      .code {
        font-size: clamp(5rem, 18vw, 8rem);
        font-weight: 800;
        line-height: 1;
        color: var(--green-200);
        letter-spacing: -0.02em;
      }
      h1 {
        margin: 1rem 0 0;
        font-size: clamp(1.5rem, 4vw, 1.875rem);
        font-weight: 700;
        color: var(--foreground);
      }
      p {
        margin: 1rem 0 0;
        font-size: 1rem;
        line-height: 1.6;
        color: var(--muted-foreground);
      }
    </style>
  </head>
  <body>
    <main>
      <div class="code" aria-hidden="true">404</div>
      <h1>Page Not Found</h1>
      <p>The page you are looking for does not exist or has been moved.</p>
    </main>
  </body>
</html>`;

export function proxy() {
  return new NextResponse(OFFLINE_HTML, {
    status: 404,
    headers: {
      "content-type": "text/html; charset=utf-8",
      "cache-control": "no-store",
      "x-robots-tag": "noindex, nofollow",
    },
  });
}

export const config = {
  // Match every path except Next.js build assets and image optimization,
  // which the framework needs internally even when no page renders.
  matcher: "/((?!_next).*)",
};
