"use client";

import HomeIcon from "@/components/homeIcon";
import "./globals.css";

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
      <body>
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
