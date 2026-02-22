"use client";

import { useEffect, useRef } from "react";

type Fish = {
  x: number;
  y: number;
  s: number; // scale
  vx: number;
  vy: number;
  a: number; // alpha
  flip: 1 | -1;
  wiggle: number;
};

type Bubble = {
  x: number;
  y: number;
  r: number;
  vy: number;
  a: number;
};

function rand(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

export default function OceanBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    let w = 0;
    let h = 0;

    const fishCount = 14;
    const bubbleCount = 26;

    const fish: Fish[] = [];
    const bubbles: Bubble[] = [];

    const resize = () => {
      w = canvas.clientWidth;
      h = canvas.clientHeight;

      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const makeFish = (): Fish => {
      const leftToRight = Math.random() > 0.5;
      return {
        x: leftToRight ? rand(-200, w) : rand(0, w + 200),
        y: rand(0, h),
        s: rand(0.35, 0.9),
        vx: leftToRight ? rand(0.15, 0.45) : -rand(0.15, 0.45),
        vy: rand(-0.05, 0.05),
        a: rand(0.08, 0.18),
        flip: leftToRight ? 1 : -1,
        wiggle: rand(0, Math.PI * 2),
      };
    };

    const makeBubble = (): Bubble => ({
      x: rand(0, w),
      y: rand(0, h),
      r: rand(1.5, 5.5),
      vy: rand(0.15, 0.55),
      a: rand(0.05, 0.16),
    });

    const drawFish = (f: Fish, t: number) => {
      // Colors from your CSS variables (fallbacks)
      const ocean = getComputedStyle(document.documentElement)
        .getPropertyValue("--ocean-700")
        .trim() || "#064e7a";
      const teal = getComputedStyle(document.documentElement)
        .getPropertyValue("--teal-500")
        .trim() || "#14b8a6";

      ctx.save();
      ctx.globalAlpha = f.a;
      ctx.translate(f.x, f.y);

      // gentle wiggle
      const wob = Math.sin(t * 0.001 + f.wiggle) * 2.2;
      ctx.rotate(wob * 0.01);

      ctx.scale(f.s * f.flip, f.s);

      // Fish silhouette (simple + clean)
      // body
      ctx.beginPath();
      ctx.moveTo(-34, 0);
      ctx.bezierCurveTo(-18, -18, 12, -16, 26, 0);
      ctx.bezierCurveTo(12, 16, -18, 18, -34, 0);
      ctx.closePath();

      const grd = ctx.createLinearGradient(-34, 0, 26, 0);
      grd.addColorStop(0, ocean);
      grd.addColorStop(1, teal);
      ctx.fillStyle = grd;
      ctx.fill();

      // tail
      ctx.beginPath();
      ctx.moveTo(26, 0);
      ctx.lineTo(44, -14);
      ctx.lineTo(44, 14);
      ctx.closePath();
      ctx.fillStyle = ocean;
      ctx.fill();

      // tiny fin
      ctx.beginPath();
      ctx.moveTo(-4, 0);
      ctx.lineTo(10, -8);
      ctx.lineTo(8, 2);
      ctx.closePath();
      ctx.fillStyle = "rgba(255,255,255,0.12)";
      ctx.fill();

      ctx.restore();
    };

    const drawBubble = (b: Bubble) => {
      const teal = getComputedStyle(document.documentElement)
        .getPropertyValue("--teal-400")
        .trim() || "#2dd4bf";

      ctx.save();
      ctx.globalAlpha = b.a;
      ctx.beginPath();
      ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
      ctx.strokeStyle = teal;
      ctx.lineWidth = 1;
      ctx.stroke();
      ctx.restore();
    };

    const tick = (t: number) => {
      ctx.clearRect(0, 0, w, h);

      // subtle overall haze
      ctx.save();
      ctx.globalAlpha = 0.06;
      const haze = ctx.createRadialGradient(w * 0.5, h * 0.2, 50, w * 0.5, h * 0.2, Math.max(w, h));
      haze.addColorStop(0, "rgba(20,184,166,0.25)");
      haze.addColorStop(1, "rgba(6,78,122,0)");
      ctx.fillStyle = haze;
      ctx.fillRect(0, 0, w, h);
      ctx.restore();

      // bubbles
      for (const b of bubbles) {
        drawBubble(b);
        if (!prefersReduced) {
          b.y -= b.vy;
          b.x += Math.sin(t * 0.001) * 0.03;
          if (b.y + b.r < -10) {
            b.y = h + rand(10, 80);
            b.x = rand(0, w);
          }
        }
      }

      // fish
      for (const f of fish) {
        drawFish(f, t);

        if (!prefersReduced) {
          f.x += f.vx;
          f.y += f.vy + Math.sin(t * 0.001 + f.wiggle) * 0.06;

          // wrap-around
          if (f.vx > 0 && f.x - 120 > w) {
            f.x = -160;
            f.y = rand(0, h);
          }
          if (f.vx < 0 && f.x + 120 < 0) {
            f.x = w + 160;
            f.y = rand(0, h);
          }

          // keep within bounds vertically
          if (f.y < -40) f.y = h + 40;
          if (f.y > h + 40) f.y = -40;
        }
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    // init
    resize();
    fish.length = 0;
    bubbles.length = 0;

    for (let i = 0; i < fishCount; i++) fish.push(makeFish());
    for (let i = 0; i < bubbleCount; i++) bubbles.push(makeBubble());

    const onResize = () => resize();
    window.addEventListener("resize", onResize);

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("resize", onResize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 h-full w-full opacity-70"
    />
  );
}