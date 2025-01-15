"use client";

import { useState, useEffect } from "react";
import TopBar from "@/components/topBar";
import NavBar from "@/components/navBar";
import "./global.css";

export default function AcetBooth({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isCompact, setIsCompact] = useState(false);
  const [isNavBarShown, setIsNavBarShown] = useState(false);
  useEffect(() => {
    const handleResize = () => setIsCompact(window.innerWidth <= 480);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <html lang="en" style={{ height: "100%" }}>
      <head>
        <title>AwesBooth</title>
        <meta name="description" content="Acetbug's personal website" />
        <meta name="color-scheme" content="light dark" />
      </head>
      <body style={{ height: "100%", margin: 0 }}>
        {children}
        <div
          style={{
            position: "absolute",
            height: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <TopBar />
          <NavBar isCompact={isCompact} isShown={isNavBarShown} />
        </div>
        <button
          style={{ position: "absolute", bottom: 0, left: 0 }}
          onClick={() => setIsNavBarShown(!isNavBarShown)}
        >
          ☰
        </button>
      </body>
    </html>
  );
}
