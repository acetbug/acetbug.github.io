import { useState } from "react";

export default function HoverExpandText({
  isHovered,
  text,
  style,
}: HoverExpandTextProps) {
  const [count, setCount] = useState(1);
  const target = isHovered ? text.length : 1;
  if (count != target) {
    const step = target > count ? 1 : -1;
    setTimeout(() => setCount(count + step), 100);
  }
  return (
    <span
      style={{
        ...style,
        display: "inline-block",
        transition: "all 0.1s linear",
      }}
    >
      {text.slice(0, count)}
    </span>
  );
}

interface HoverExpandTextProps {
  isHovered: boolean;
  text: string;
  style: React.CSSProperties;
}
