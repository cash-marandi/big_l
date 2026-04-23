"use client";

import { useRef, useEffect } from "react";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
}

export default function TiltCard({ children, className = "", intensity = 15 }: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);
  const currentRotation = useRef({ x: 0, y: 0 });
  const targetRotation = useRef({ x: 0, y: 0 });
  const isHovering = useRef(false);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    // Use CSS custom properties for smooth transforms
    card.style.setProperty("--rotate-x", "0deg");
    card.style.setProperty("--rotate-y", "0deg");
    card.style.setProperty("--translate-z", "0px");

    const animate = () => {
      // Smooth interpolation
      const lerp = 0.1;
      currentRotation.current.x += (targetRotation.current.x - currentRotation.current.x) * lerp;
      currentRotation.current.y += (targetRotation.current.y - currentRotation.current.y) * lerp;

      // Apply transform
      card.style.transform = `
        perspective(1000px)
        rotateX(${currentRotation.current.x}deg)
        rotateY(${currentRotation.current.y}deg)
        translateZ(${isHovering.current ? 20 : 0}px)
        scale(${isHovering.current ? 1.02 : 1})
      `;

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const rotateX = ((e.clientY - centerY) / (rect.height / 2)) * -intensity;
      const rotateY = ((e.clientX - centerX) / (rect.width / 2)) * intensity;

      targetRotation.current = { x: rotateX, y: rotateY };
      isHovering.current = true;
    };

    const handleMouseLeave = () => {
      targetRotation.current = { x: 0, y: 0 };
      isHovering.current = false;
    };

    card.addEventListener("mousemove", handleMouseMove);
    card.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      card.removeEventListener("mousemove", handleMouseMove);
      card.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(rafRef.current);
    };
  }, [intensity]);

  return (
    <div 
      ref={cardRef} 
      className={`transform-gpu will-change-transform ${className}`}
      style={{ 
        transformStyle: "preserve-3d",
        transition: "box-shadow 0.3s ease",
      }}
    >
      {children}
    </div>
  );
}
