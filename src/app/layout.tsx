import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import React from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Medha Portfolio",
  description: "Passionate about all things data.",
  keywords: ["analytics engineer", "data engineering", "SQL", "ETL", "data visualization", "database design"],
  authors: [{ name: "Medha Prodduturi" }],
  openGraph: {
    title: "Medha Portfolio",
    description: "Passionate about all things data.",
    type: "website",
    url: "https://medprod.vercel.app",
  },
  twitter: {
    card: "summary_large_image",
    title: "Medha Portfolio",
    description: "Passionate about all things data.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Theme state and effect for toggling dark mode
  const [theme, setTheme] = React.useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'light';
    }
    return 'light';
  });

  React.useEffect(() => {
    if (typeof document !== 'undefined') {
      const html = document.documentElement;
      if (theme === 'dark') {
        html.classList.add('dark');
      } else {
        html.classList.remove('dark');
      }
      localStorage.setItem('theme', theme);
    }
  }, [theme]);

  // Provide theme and setter via context for children (optional, or window event)

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Provide theme setter globally via window for page.tsx to use */}
        <script dangerouslySetInnerHTML={{__html: `window.setTheme = function(theme) { localStorage.setItem('theme', theme); document.documentElement.classList.toggle('dark', theme === 'dark'); }`}} />
        {children}
      </body>
    </html>
  );
}
