"use client";

import { useEffect, useRef } from "react";

const TECHS = [
  "React",
  "Next.js",
  "Node.js",
  "TypeScript",
  "MongoDB",
  "Tailwind",
];
const DOTS = [0, 90, 180, 270]; // degrees for the 4 outer dots

function CodeOrbit() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const SIZE = 500;
    const CX = 250;
    const CY = 250;

    let animId: number;
    let startTime = performance.now();

    // Tech label positions (fixed on middle ring)
    const techAngles = TECHS.map((_, i) => (i / TECHS.length) * Math.PI * 2);
    const MIDDLE_R = 160;
    const OUTER_R = 220;
    const INNER_R = 100;

    function draw(now: number) {
      const elapsed = (now - startTime) / 1000; // seconds
      ctx!.clearRect(0, 0, SIZE, SIZE);

      // ── scanner angle — one full lap every 4s
      const scanAngle = (elapsed / 4) * Math.PI * 2;

      // ── OUTER RING ──────────────────────────────────────────────
      // Static dashed ring
      ctx!.save();
      ctx!.setLineDash([8, 4]);
      ctx!.strokeStyle = "rgba(0,212,255,0.18)";
      ctx!.lineWidth = 1;
      ctx!.beginPath();
      ctx!.arc(CX, CY, OUTER_R, 0, Math.PI * 2);
      ctx!.stroke();
      ctx!.restore();

      // Glowing scanner dot travelling around outer ring
      const scanX = CX + OUTER_R * Math.cos(scanAngle);
      const scanY = CY + OUTER_R * Math.sin(scanAngle);
      // Trail behind scanner
      for (let t = 1; t <= 30; t++) {
        const trailAngle = scanAngle - (t / 30) * 0.8;
        const tx = CX + OUTER_R * Math.cos(trailAngle);
        const ty = CY + OUTER_R * Math.sin(trailAngle);
        const alpha = (1 - t / 30) * 0.6;
        ctx!.beginPath();
        ctx!.arc(tx, ty, 2.5, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(0,212,255,${alpha})`;
        ctx!.fill();
      }
      // Scanner head glow
      const scanGlow = ctx!.createRadialGradient(
        scanX,
        scanY,
        0,
        scanX,
        scanY,
        12,
      );
      scanGlow.addColorStop(0, "rgba(0,212,255,0.9)");
      scanGlow.addColorStop(1, "rgba(0,212,255,0)");
      ctx!.beginPath();
      ctx!.arc(scanX, scanY, 12, 0, Math.PI * 2);
      ctx!.fillStyle = scanGlow;
      ctx!.fill();
      ctx!.beginPath();
      ctx!.arc(scanX, scanY, 3.5, 0, Math.PI * 2);
      ctx!.fillStyle = "#00d4ff";
      ctx!.fill();

      // 4 static dots on outer ring — highlight when scanner is near
      DOTS.forEach((deg) => {
        const rad = (deg * Math.PI) / 180;
        const dx = CX + OUTER_R * Math.cos(rad);
        const dy = CY + OUTER_R * Math.sin(rad);

        // Angular distance between scanner and this dot
        let diff = Math.abs((scanAngle % (Math.PI * 2)) - rad);
        if (diff > Math.PI) diff = Math.PI * 2 - diff;
        const proximity = Math.max(0, 1 - diff / 0.3); // highlight within ~17deg

        if (proximity > 0) {
          // Outer glow ring
          const g = ctx!.createRadialGradient(
            dx,
            dy,
            0,
            dx,
            dy,
            16 + proximity * 8,
          );
          g.addColorStop(0, `rgba(0,212,255,${0.4 * proximity})`);
          g.addColorStop(1, "rgba(0,212,255,0)");
          ctx!.beginPath();
          ctx!.arc(dx, dy, 24, 0, Math.PI * 2);
          ctx!.fillStyle = g;
          ctx!.fill();
        }

        // Dot itself
        ctx!.beginPath();
        ctx!.arc(dx, dy, 4, 0, Math.PI * 2);
        ctx!.fillStyle =
          proximity > 0
            ? `rgba(0,212,255,${0.4 + proximity * 0.6})`
            : "rgba(0,212,255,0.35)";
        ctx!.fill();
        if (proximity > 0) {
          ctx!.strokeStyle = `rgba(0,212,255,${proximity})`;
          ctx!.lineWidth = 1;
          ctx!.stroke();
        }
      });

      // ── MIDDLE RING ─────────────────────────────────────────────
      ctx!.save();
      ctx!.setLineDash([4, 8]);
      ctx!.strokeStyle = "rgba(121,40,202,0.3)";
      ctx!.lineWidth = 0.5;
      ctx!.beginPath();
      ctx!.arc(CX, CY, MIDDLE_R, 0, Math.PI * 2);
      ctx!.stroke();
      ctx!.restore();

      // Tech labels — fixed positions, spin on own axis
      const labelSpin = elapsed * 60; // degrees/s own-axis spin
      ctx!.font = "10px 'JetBrains Mono', monospace";
      ctx!.textAlign = "center";
      ctx!.textBaseline = "middle";

      TECHS.forEach((tech, i) => {
        const angle = techAngles[i];
        const lx = CX + MIDDLE_R * Math.cos(angle);
        const ly = CY + MIDDLE_R * Math.sin(angle);

        ctx!.save();
        ctx!.translate(lx, ly);
        ctx!.rotate((labelSpin * Math.PI) / 180); // spin on own axis
        ctx!.fillStyle = "rgba(136,146,164,0.85)";
        ctx!.fillText(tech, 0, 0);
        ctx!.restore();
      });

      // ── INNER RING ──────────────────────────────────────────────
      ctx!.save();
      ctx!.setLineDash([2, 6]);
      ctx!.strokeStyle = "rgba(0,212,255,0.2)";
      ctx!.lineWidth = 0.5;
      ctx!.beginPath();
      ctx!.arc(CX, CY, INNER_R, 0, Math.PI * 2);
      ctx!.stroke();
      ctx!.restore();

      // ── CENTER ICON ─────────────────────────────────────────────
      ctx!.font = "bold 32px monospace";
      ctx!.textAlign = "center";
      ctx!.textBaseline = "middle";
      ctx!.fillStyle = "rgba(0,212,255,0.55)";
      ctx!.fillText("</>", CX, CY + 4);

      animId = requestAnimationFrame(draw);
    }

    animId = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] pointer-events-none hidden lg:block">
      <canvas
        ref={canvasRef}
        width={500}
        height={500}
        className="w-full h-full"
      />
    </div>
  );
}

export default CodeOrbit;
