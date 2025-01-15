"use client";

import type { Metadata, Viewport } from "next";
import { useState, useEffect } from "react";
import TopBar from "@/components/topBar";
import NavBar from "@/components/navBar";
import "./global.css";

export const metadata: Metadata = {
  title: "AwesBooth",
  description: "Acetbug's personal website",
};

export const viewport: Viewport = {
  colorScheme: "light dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isCompact, setIsCompact] = useState(false);
  useEffect(() => {
    const handleResize = () => setIsCompact(window.innerWidth <= 480);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const [isNavBarShown, setIsNavBarShown] = useState(false);
  return (
    <html lang="en">
      <body style={{ margin: 0, height: "100%", overflow: "hidden" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <TopBar />
          {children}
        </div>
        <NavBar
          translateX={isNavBarShown ? "0" : "-100%"}
          width={isCompact ? "100%" : "200px"}
        />
        <button
          style={{ position: "absolute", top: 0, left: 0 }}
          onClick={() => setIsNavBarShown(!isNavBarShown)}
        >
          ☰
        </button>
      </body>
    </html>
  );
}
