import { useEffect, useRef, useState } from "react";

export default function HoverExpandText({
  isHovered,
  text,
  style,
}: HoverExpandTextProps) {
  const [count, setCount] = useState(1);
  const intervalRef = useRef(0);
  const timesRef = useRef(-1);
  useEffect(() => {
    const clear = () => window.clearInterval(intervalRef.current);
    if (timesRef.current >= 0) clear();
    const length = text.length;
    const target = isHovered ? length : 1;
    if (count != target) {
      const speed = 600 / length;
      const step = target > count ? 1 : -1;
      timesRef.current = (target - count) * step;
      intervalRef.current = window.setInterval(() => {
        window.console.log(text, timesRef.current);
        if (timesRef.current--) setCount(count + step);
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
