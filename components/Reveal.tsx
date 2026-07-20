"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

type Direction = "up" | "left" | "right";

const directionClasses: Record<Direction, string> = {
  up: "translate-y-6",
  left: "-translate-x-10",
  right: "translate-x-10",
};

export default function Reveal({
  children,
  delay = 0,
  direction = "up",
}: {
  children: ReactNode;
  delay?: number;
  direction?: Direction;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${
        visible
          ? "translate-x-0 translate-y-0 opacity-100"
          : `opacity-0 ${directionClasses[direction]}`
      }`}
    >
      {children}
    </div>
  );
}