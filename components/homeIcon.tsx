import { useState } from "react";
import HoverExpandText from "./hoverExpandText";
import MyLink from "./myLink";

export default function HomeIcon() {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);
  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <MyLink href={"/"}>
        <HoverExpandText
          isHovered={isHovered}
          text={"Awes"}
          style={{ fontSize: 20, color: "red" }}
        />
        <HoverExpandText
          isHovered={isHovered}
          text={"Booth"}
          style={{ fontSize: 20, color: "blue" }}
        />
        <span style={{ fontSize: 18, color: "gray" }}>-</span>
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
      </MyLink>
    </div>
  );
}
