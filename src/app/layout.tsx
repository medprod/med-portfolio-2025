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
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
