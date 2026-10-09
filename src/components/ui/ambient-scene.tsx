"use client";

import { useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";
import { useTheme } from "@/components/providers/theme-provider";
import { useAccessibleMotion } from "./motion";

// A projected 3D scene drawn with the browser canvas: no WebGL dependency.
export function AmbientScene() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { resolvedTheme } = useTheme();
  const reduced = useAccessibleMotion();
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;
    const compact = window.matchMedia("(max-width: 767px), (pointer: coarse)").matches;
    let width = 0,
      height = 0,
      frame = 0,
      clock = 0,
      last = 0;
    let scroll = window.scrollY,
      targetScroll = scroll;
    let lastPaint = 0;
    const steps = compact ? 24 : 48;
    const ringCount = compact ? 5 : 9;
    const objectCount = compact ? 2 : 3;
    const colors =
      resolvedTheme === "dark"
        ? ["138,164,255", "81,220,197", "255,146,123"]
        : ["36,87,230", "8,127,131", "201,82,62"];
    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, compact ? 1 : 1.5, Math.sqrt(2_000_000 / (width * height)));
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    const onScroll = () => {
      targetScroll = window.scrollY;
    };
    const draw = (time: number) => {
      frame = 0;
      if (document.hidden) return;
      if (!reduced && !paused && time - lastPaint < 33) { frame = requestAnimationFrame(draw); return; }
      lastPaint = time;
      const delta = Math.min(time - last, 50);
      last = time;
      if (!paused && !reduced && !document.hidden) clock += delta * 0.00008;
      scroll = reduced ? targetScroll : scroll + (targetScroll - scroll) * 0.15;
      ctx.clearRect(0, 0, width, height);
      const angle = reduced ? 0.3 : clock + scroll * 0.00035;
      const unit = Math.min(width, height);
      const project = (
        x: number,
        y: number,
        z: number,
        cx: number,
        cy: number,
      ) => {
        const rx = x * Math.cos(angle) + z * Math.sin(angle);
        const rz = z * Math.cos(angle) - x * Math.sin(angle);
        const ry = y * Math.cos(0.55) - rz * Math.sin(0.55);
        const depth = y * Math.sin(0.55) + rz * Math.cos(0.55);
        const perspective = 850 / (850 + depth);
        return { x: cx + rx * perspective, y: cy + ry * perspective, depth };
      };
      for (let object = 0; object < objectCount; object++) {
        const radius = unit * [0.33, 0.23, 0.16][object];
        const cx = width * [0.82, 0.08, 0.48][object];
        const cy =
          height * [0.38, 0.72, 0.07][object] +
          (reduced ? 0 : Math.sin(scroll * 0.0006 + object) * 40);
        const alpha = resolvedTheme === "dark" ? 0.22 : 0.17;
        ctx.strokeStyle = `rgba(${colors[object]},${alpha})`;
        ctx.lineWidth = 1;
        // Latitude rings and meridians form a translucent wireframe sphere.
        for (let ring = 0; ring < ringCount; ring++) {
          const latitude = (ring / (ringCount - 1) - 0.5) * Math.PI;
          const r = radius * Math.cos(latitude);
          ctx.beginPath();
          for (let step = 0; step <= steps; step++) {
            const phi = (step / steps) * Math.PI * 2;
            const point = project(
              r * Math.cos(phi),
              radius * Math.sin(latitude),
              r * Math.sin(phi),
              cx,
              cy,
            );
            if (step === 0) ctx.moveTo(point.x, point.y);
            else ctx.lineTo(point.x, point.y);
          }
          ctx.stroke();
        }
        for (let meridian = 0; meridian < ringCount - 1; meridian++) {
          const phi = (meridian / (ringCount - 1)) * Math.PI;
          ctx.beginPath();
          for (let step = 0; step <= steps; step++) {
            const theta = (step / steps) * Math.PI * 2;
            const point = project(
              radius * Math.cos(theta) * Math.cos(phi),
              radius * Math.sin(theta),
              radius * Math.cos(theta) * Math.sin(phi),
              cx,
              cy,
            );
            if (step === 0) ctx.moveTo(point.x, point.y);
            else ctx.lineTo(point.x, point.y);
          }
          ctx.stroke();
        }
        // A wider orbit adds depth around each globe.
        ctx.strokeStyle = `rgba(${colors[object]},${alpha * 1.7})`;
        ctx.beginPath();
        for (let step = 0; step <= steps; step++) {
          const phi = (step / steps) * Math.PI * 2;
          const point = project(
            radius * 1.35 * Math.cos(phi),
            radius * 0.25 * Math.sin(phi),
            radius * 1.35 * Math.sin(phi),
            cx,
            cy,
          );
          if (step === 0) ctx.moveTo(point.x, point.y);
          else ctx.lineTo(point.x, point.y);
        }
        ctx.stroke();
      }
      for (let i = 0; i < (compact ? 12 : 32); i++) {
        const x = (i * 137.5) % width;
        const y =
          ((i * 83.7 + (reduced ? 0 : scroll * 0.07 + clock * 35)) %
            (height + 40)) -
          20;
        ctx.fillStyle = `rgba(${colors[i % 3]},0.35)`;
        ctx.beginPath();
        ctx.arc(x, y, i % 5 === 0 ? 2 : 1, 0, Math.PI * 2);
        ctx.fill();
      }
      if (
        !document.hidden &&
        ((!paused && !reduced) || (!reduced && Math.abs(targetScroll - scroll) > 0.5))
      )
        frame = requestAnimationFrame(draw);
    };
    const refresh = () => {
      if (!frame) { last = performance.now(); frame = requestAnimationFrame(draw); }
    };
    const scrollUpdate = () => {
      onScroll();
      refresh();
    };
    const resized = () => {
      resize();
      refresh();
    };
    resize();
    refresh();
    window.addEventListener("resize", resized);
    window.addEventListener("scroll", scrollUpdate, { passive: true });
    document.addEventListener("visibilitychange", refresh);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resized);
      window.removeEventListener("scroll", scrollUpdate);
      document.removeEventListener("visibilitychange", refresh);
    };
  }, [resolvedTheme, paused, reduced]);

  return (
    <>
      <div className="ambient-scene" aria-hidden="true">
        <div className="ambient-wash" />
        <canvas ref={canvasRef} />
      </div>
      {!reduced && (
        <button
          type="button"
          className="ambient-toggle"
          aria-label={
            paused ? "Play background animation" : "Pause background animation"
          }
          aria-pressed={paused}
          onClick={() => setPaused(!paused)}
        >
          {paused ? (
            <Play className="h-4 w-4" />
          ) : (
            <Pause className="h-4 w-4" />
          )}
          <span className="sr-only">Background animation</span>
        </button>
      )}
    </>
  );
}
