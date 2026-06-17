"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
}

const NODE_COUNT      = 78;
const CONNECT_DIST    = 165;
const CONNECT_DIST_SQ = CONNECT_DIST * CONNECT_DIST;
const REPEL_DIST      = 130;
const REPEL_DIST_SQ   = REPEL_DIST * REPEL_DIST;

export function ParticleCanvas({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = 0;
    let h = 0;
    let mx = -2000;
    let my = -2000;
    let rafId: number;
    let nodes: Node[] = [];

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.offsetWidth;
      h = canvas.offsetHeight;
      canvas.width  = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const initNodes = () => {
      nodes = Array.from({ length: NODE_COUNT }, () => ({
        x:       Math.random() * w,
        y:       Math.random() * h,
        vx:      (Math.random() - 0.5) * 0.22,
        vy:      (Math.random() - 0.5) * 0.22,
        size:    Math.random() * 1.3 + 0.4,
        opacity: Math.random() * 0.38 + 0.32,
      }));
    };

    const onMouseMove = (e: MouseEvent) => {
      // Track relative to canvas position
      const rect = canvas.getBoundingClientRect();
      mx = e.clientX - rect.left;
      my = e.clientY - rect.top;
    };

    const onResize = () => {
      resize();
      initNodes();
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);

      for (const n of nodes) {
        // Repel from cursor
        const dx  = n.x - mx;
        const dy  = n.y - my;
        const dSq = dx * dx + dy * dy;
        if (dSq < REPEL_DIST_SQ && dSq > 1) {
          const d     = Math.sqrt(dSq);
          const force = ((REPEL_DIST - d) / REPEL_DIST) * 0.065;
          n.vx += (dx / d) * force;
          n.vy += (dy / d) * force;
        }

        n.vx *= 0.987;
        n.vy *= 0.987;
        n.x  += n.vx;
        n.y  += n.vy;

        // Seamless wrap
        if (n.x < 0)  n.x = w;
        if (n.x > w)  n.x = 0;
        if (n.y < 0)  n.y = h;
        if (n.y > h)  n.y = 0;

        // Draw node
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(167,139,250,${n.opacity})`;
        ctx.fill();
      }

      // Draw connection lines (O(n²) but n=78 → ~3000 checks/frame, ~180k/s ≈ fine)
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx  = nodes[i].x - nodes[j].x;
          const dy  = nodes[i].y - nodes[j].y;
          const dSq = dx * dx + dy * dy;
          if (dSq < CONNECT_DIST_SQ) {
            const alpha = (1 - Math.sqrt(dSq) / CONNECT_DIST) * 0.22;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(103,232,249,${alpha})`;
            ctx.lineWidth   = 0.55;
            ctx.stroke();
          }
        }
      }

      rafId = requestAnimationFrame(draw);
    };

    resize();
    initNodes();
    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("resize",    onResize,    { passive: true });
    draw();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize",    onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={cn("pointer-events-none", className)}
      style={{ width: "100%", height: "100%" }}
    />
  );
}
