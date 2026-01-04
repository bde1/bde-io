import { useEffect, useRef } from "react";

export default function AnimatedHeroBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener("resize", resize);
    resize();

    // Beam configuration
    const beams: { x: number; y: number; speed: number; length: number; opacity: number }[] = [];
    const beamCount = 15;

    for (let i = 0; i < beamCount; i++) {
      beams.push({
        x: Math.random() * width,
        y: Math.random() * height,
        speed: 0.5 + Math.random() * 1.5,
        length: 100 + Math.random() * 200,
        opacity: Math.random() * 0.5 + 0.1,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw subtle grid
      ctx.strokeStyle = "rgba(255, 255, 255, 0.03)";
      ctx.lineWidth = 1;
      const gridSize = 50;

      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }

      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Draw glowing beams
      beams.forEach((beam) => {
        beam.y -= beam.speed;
        if (beam.y + beam.length < 0) {
          beam.y = height + beam.length;
          beam.x = Math.random() * width;
        }

        const gradient = ctx.createLinearGradient(beam.x, beam.y, beam.x, beam.y + beam.length);
        gradient.addColorStop(0, "rgba(255, 215, 0, 0)"); // Gold color (transparent)
        gradient.addColorStop(0.5, `rgba(255, 215, 0, ${beam.opacity})`); // Gold color (opaque)
        gradient.addColorStop(1, "rgba(255, 215, 0, 0)"); // Gold color (transparent)

        ctx.fillStyle = gradient;
        ctx.fillRect(beam.x, beam.y, 2, beam.length);
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
    />
  );
}
