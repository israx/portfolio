import type { Metadata } from "next";
import { Analytics } from '@vercel/analytics/next';
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Israel Arcos | Frontend Developer",
  description: "Full Stack Developer with focus on front-end. Passionate about creating seamless user experiences and building robust web applications with modern technologies.",
  keywords: "Israel Arcos, Frontend Developer, React, TypeScript, Next.js, Web Development, Full Stack Developer",
  authors: [{ name: "Israel Arcos" }],
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32', type: 'image/x-icon' },
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    title: "Israel Arcos | Full Stack Developer",
    description: "Full Stack Developer with focus on front-end. Building robust web applications with modern technologies.",
    url: "https://israx.dev",
    siteName: "Israel Arcos Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Israel Arcos | Full Stack Developer",
    description: "Full Stack Developer with focus on front-end. Building robust web applications with modern technologies.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jetbrainsMono.variable} font-mono antialiased`}
      >
        {children}
        <Analytics/>
      </body>
    </html>
  );
}
