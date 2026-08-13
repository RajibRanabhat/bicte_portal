"use client";

import { useEffect, useRef, useState, ReactNode, CSSProperties } from "react";

type Direction =
  | "up"
  | "down"
  | "left"
  | "right"
  | "scale"
  | "blur"
  | "wipe"
  | "draw"
  | "fade";

const variants: Record<Direction, { hidden: string; shown: string }> = {
  up: { hidden: "opacity-0 translate-y-6", shown: "opacity-100 translate-y-0" },
  down: { hidden: "opacity-0 -translate-y-6", shown: "opacity-100 translate-y-0" },
  left: { hidden: "opacity-0 -translate-x-10", shown: "opacity-100 translate-x-0" },
  right: { hidden: "opacity-0 translate-x-10", shown: "opacity-100 translate-x-0" },
  scale: { hidden: "opacity-0 scale-90", shown: "opacity-100 scale-100" },
  blur: { hidden: "opacity-0 blur-[10px]", shown: "opacity-100 blur-0" },
  wipe: {
    hidden: "[clip-path:inset(0_50%_0_50%)]",
    shown: "[clip-path:inset(0_0_0_0)]",
  },
  draw: {
    hidden: "[clip-path:inset(0_100%_0_0)]",
    shown: "[clip-path:inset(0_0_0_0)]",
  },
  fade: { hidden: "opacity-0", shown: "opacity-100" },
};

export default function Reveal({
  children,
  delay = 0,
  duration = 700,
  direction = "up",
  threshold = 0.15,
  className = "",
  style,
}: {
  children: ReactNode;
  delay?: number;
  duration?: number;
  direction?: Direction;
  threshold?: number;
  className?: string;
  style?: CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  const v = variants[direction];

  return (
    <div
      ref={ref}
      style={{
        transitionDelay: `${delay}ms`,
        transitionDuration: `${duration}ms`,
        ...style,
      }}
      className={`transition-all ease-out ${visible ? v.shown : v.hidden} ${className}`}
    >
      {children}
    </div>
  );
}