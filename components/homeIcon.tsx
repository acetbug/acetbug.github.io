import { useState } from "react";
import Link from "next/link";
import HoverExpandText from "./hoverExpandText";

export default function HomeIcon() {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);
  return (
    <Link
      href={"/"}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <HoverExpandText
        isHovered={isHovered}
        text={"Awes"}
        style={{ fontSize: 24, color: "red" }}
      />
      <HoverExpandText
        isHovered={isHovered}
        text={"Booth"}
        style={{ fontSize: 24, color: "blue" }}
      />
      <span style={{ fontSize: 21, color: "gray" }}>-</span>
      <HoverExpandText
        isHovered={isHovered}
        text={"acet"}
        style={{ fontSize: 18, color: "gray" }}
      />
      <HoverExpandText
        isHovered={isHovered}
        text={"bug"}
        style={{ fontSize: 18, color: "gray" }}
      />
    </Link>
  );
}
