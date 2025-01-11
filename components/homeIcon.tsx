import { useState } from "react";
import Link from "&/next/link";
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
        text={"Awes "}
        style={{ fontSize: 20, color: "red" }}
      />
      <HoverExpandText
        isHovered={isHovered}
        text={"Booth"}
        style={{ fontSize: 20, color: "blue" }}
      />
      <HoverExpandText
        isHovered={isHovered}
        text={" - "}
        style={{ fontSize: 18, color: "gray" }}
      />
      <HoverExpandText
        isHovered={isHovered}
        text={"acet"}
        style={{ fontSize: 16, color: "gray" }}
      />
      <HoverExpandText
        isHovered={isHovered}
        text={"bug"}
        style={{ fontSize: 16, color: "gray" }}
      />
    </Link>
  );
}
