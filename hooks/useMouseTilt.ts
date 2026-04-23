"use client";

import { gsap } from "gsap";
import { useEffect, useRef } from "react";

export function useMouseTilt(intensity: number = 10) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const rotateX = ((e.clientY - centerY) / (rect.height / 2)) * -intensity;
      const rotateY = ((e.clientX - centerX) / (rect.width / 2)) * intensity;

      gsap.to(el, {
        rotateX,
        rotateY,
        duration: 0.5,
        ease: "power2.out",
        transformPerspective: 1000,
      });
    };

    const handleMouseLeave = () => {
      gsap.to(el, {
        rotateX: 0,
        rotateY: 0,
        duration: 0.8,
        ease: "elastic.out(1, 0.5)",
      });
    };

    el.addEventListener("mousemove", handleMouseMove);
    el.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [intensity]);

  return ref;
}
