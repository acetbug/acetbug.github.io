import { useEffect, useRef, useState } from "react";

export default function HoverExpandText({
  isHovered,
  text,
  style,
}: HoverExpandTextProps) {
  const [count, setCount] = useState(1);
  const intervalRef = useRef(0);
  useEffect(() => {
    const clear = () => window.clearInterval(intervalRef.current);
    clear();
    const length = text.length;
    const target = isHovered ? length : 1;
    if (count != target) {
      const speed = 600 / length;
      const step = target > count ? 1 : -1;
      let times = (target - count) * step;
      intervalRef.current = window.setInterval(() => {
        if (times--) setCount(count + step);
        else clear();
      }, speed);
    }
    return clear;
  }, [isHovered, text]);
  return <span style={style}>{text.slice(0, count)}</span>;
}

interface HoverExpandTextProps {
  isHovered: boolean;
  text: string;
  style: React.CSSProperties;
}
