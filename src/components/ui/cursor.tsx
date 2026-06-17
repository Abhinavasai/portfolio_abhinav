"use client";

import { useEffect, useRef } from "react";

export function CustomCursor() {
  const dotRef  = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ mx: -300, my: -300, rx: -300, ry: -300 });

  useEffect(() => {
    // Only enable on fine-pointer (desktop) devices
    if (!window.matchMedia("(pointer: fine)").matches) return;

    let rafId: number;

    const onMove = (e: MouseEvent) => {
      pos.current.mx = e.clientX;
      pos.current.my = e.clientY;
    };

    const onOver = (e: MouseEvent) => {
      const t = e.target as Element | null;
      if (t?.closest("a, button, [role='button'], input, textarea, select, label")) {
        ringRef.current?.setAttribute("data-hover", "true");
      }
    };

    const onOut = (e: MouseEvent) => {
      const t = e.relatedTarget as Element | null;
      if (!t?.closest("a, button, [role='button'], input, textarea, select, label")) {
        ringRef.current?.removeAttribute("data-hover");
      }
    };

    const onDown = () => {
      dotRef.current?.setAttribute("data-click", "true");
      ringRef.current?.setAttribute("data-click", "true");
    };

    const onUp = () => {
      dotRef.current?.removeAttribute("data-click");
      ringRef.current?.removeAttribute("data-click");
    };

    const animate = () => {
      const s = pos.current;
      // Ring lerps toward dot with smooth inertia
      s.rx += (s.mx - s.rx) * 0.10;
      s.ry += (s.my - s.ry) * 0.10;

      if (dotRef.current) {
        dotRef.current.style.left = `${s.mx}px`;
        dotRef.current.style.top  = `${s.my}px`;
      }
      if (ringRef.current) {
        ringRef.current.style.left = `${s.rx}px`;
        ringRef.current.style.top  = `${s.ry}px`;
      }

      rafId = requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove",  onMove);
    document.addEventListener("mouseover",  onOver);
    document.addEventListener("mouseout",   onOut);
    document.addEventListener("mousedown",  onDown);
    document.addEventListener("mouseup",    onUp);
    animate();

    return () => {
      document.removeEventListener("mousemove",  onMove);
      document.removeEventListener("mouseover",  onOver);
      document.removeEventListener("mouseout",   onOut);
      document.removeEventListener("mousedown",  onDown);
      document.removeEventListener("mouseup",    onUp);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <div ref={dotRef}  className="cursor-dot"  aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
    </>
  );
}
