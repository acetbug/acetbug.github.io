import { useRef, useState } from "react";

export default function HoverExpandText({
  isHovered,
  text,
  style,
}: HoverExpandTextProps) {
  const [count, setCount] = useState(1);
  const target = isHovered ? text.length : 1;

  const timeoutRef = useRef(0);
  window.clearTimeout(timeoutRef.current);

  if (count != target) {
    const step = target > count ? 1 : -1;
    timeoutRef.current = window.setTimeout(() => setCount(count + step), 150);
  }

  return <span style={style}>{text.slice(0, count)}</span>;
}

interface HoverExpandTextProps {
  isHovered: boolean;
  text: string;
  style: React.CSSProperties;
}
