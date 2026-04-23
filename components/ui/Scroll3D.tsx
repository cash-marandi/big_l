"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Scroll3DProps {
  children: React.ReactNode;
  className?: string;
  direction?: "left" | "right" | "up" | "down" | "rotateX" | "rotateY" | "rotateZ";
  intensity?: number;
  start?: string;
  end?: string;
  scrub?: boolean | number;
}

export default function Scroll3D({
  children,
  className = "",
  direction = "up",
  intensity = 100,
  start = "top 90%",
  end = "top 20%",
  scrub = 1,
}: Scroll3DProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const fromVars: gsap.TweenVars = {
      opacity: 0,
      ease: "power3.out",
    };

    const toVars: gsap.TweenVars = {
      opacity: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: element,
        start,
        end,
        scrub,
      },
    };

    switch (direction) {
      case "left":
        fromVars.x = -intensity;
        toVars.x = 0;
        break;
      case "right":
        fromVars.x = intensity;
        toVars.x = 0;
        break;
      case "up":
        fromVars.y = intensity;
        toVars.y = 0;
        break;
      case "down":
        fromVars.y = -intensity;
        toVars.y = 0;
        break;
      case "rotateX":
        fromVars.rotateX = -intensity;
        fromVars.transformPerspective = 1000;
        toVars.rotateX = 0;
        toVars.transformPerspective = 1000;
        break;
      case "rotateY":
        fromVars.rotateY = intensity;
        fromVars.transformPerspective = 1000;
        toVars.rotateY = 0;
        toVars.transformPerspective = 1000;
        break;
      case "rotateZ":
        fromVars.rotateZ = -intensity;
        toVars.rotateZ = 0;
        break;
    }

    gsap.fromTo(element, fromVars, toVars);
  }, [direction, intensity, start, end, scrub]);

  return (
    <div 
      ref={elementRef} 
      className={`transform-gpu will-change-transform ${className}`}
      style={{ transformStyle: "preserve-3d" }}
    >
      {children}
    </div>
  );
}
