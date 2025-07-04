import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Medha - Analytics Engineer Portfolio",
  description: "Analytics Engineer passionate about data, databases, and making data work for us. SQL enthusiast, ETL pipeline builder, and data visualization creator.",
  keywords: ["analytics engineer", "data engineering", "SQL", "ETL", "data visualization", "database design"],
  authors: [{ name: "Medha Prodduturi" }],
  openGraph: {
    title: "Medha - Analytics Engineer Portfolio",
    description: "Analytics Engineer passionate about data, databases, and making data work for us. SQL enthusiast, ETL pipeline builder, and data visualization creator.",
    type: "website",
    url: "https://medprod.vercel.app",
  },
  twitter: {
    card: "summary_large_image",
    title: "Medha - Analytics Engineer Portfolio",
    description: "Analytics Engineer passionate about data, databases, and making data work for us.",
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
