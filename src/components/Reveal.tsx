"use client";

import React, { useEffect, useRef, useState } from "react";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
}

export const Reveal: React.FC<RevealProps> = ({ children, className = "" }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.12 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal-init ${isIntersecting ? "reveal-active" : ""} ${className}`}
    >
      {children}
    </div>
  );
};
