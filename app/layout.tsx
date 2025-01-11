"use client";

import { Geist, Geist_Mono } from "&/next/font/google";
import HomeIcon from "@/components/homeIcon";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Awes Booth - acetbug</title>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div
          style={{
            position: "sticky",
            zIndex: 2,
            height: 32,
            padding: 6,
            backdropFilter: "blur(8px)",
          }}
        >
          <HomeIcon />
        </div>
        {children}
      </body>
    </html>
  );
}
