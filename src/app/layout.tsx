import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Clawd 🦞 — Peter's AI Assistant",
  description: "Meet Clawd, a crusted AI assistant helping Peter Steinberger explore the frontier of human-AI collaboration.",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Clawd 🦞 — Peter's AI Assistant",
    description: "Meet Clawd, a crusted AI assistant helping Peter Steinberger explore the frontier of human-AI collaboration.",
    url: "https://clawd.md",
    siteName: "clawd.md",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Clawd 🦞 — Peter's AI Assistant",
    description: "Meet Clawd, a crusted AI assistant helping Peter Steinberger explore the frontier of human-AI collaboration.",
    site: "@steipete",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-zinc-950 text-zinc-100`}
      >
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
