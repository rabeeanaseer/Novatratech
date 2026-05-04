import { Suspense, lazy, useEffect, useRef, useState } from "react";

const ThreeDInner = lazy(() => import("./ThreeDSceneInner"));

interface Props {
  color?: string;
}

function FallbackCanvas({ color = "#4F7CFF" }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf: number;
    let W = (canvas.width = canvas.offsetWidth * window.devicePixelRatio);
    let H = (canvas.height = canvas.offsetHeight * window.devicePixelRatio);
    canvas.style.width = "100%";
    canvas.style.height = "100%";

    const COLORS = [color, "#7B61FF", "#00D4FF"];
    const N = 24;
    const nodes = Array.from({ length: N }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      z: Math.random(),
      vx: (Math.random() - 0.5) * 0.8,
      vy: (Math.random() - 0.5) * 0.8,
      r: Math.random() * 2.5 + 2,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
    }));

    function draw() {
      ctx!.clearRect(0, 0, W, H);
      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > W) n.vx *= -1;
        if (n.y < 0 || n.y > H) n.vy *= -1;
      }
      // Connection lines
      for (let i = 0; i < N; i++) {
        for (let j = i + 1; j < N; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          const maxD = W * 0.22;
          if (d < maxD) {
            ctx!.beginPath();
            ctx!.moveTo(nodes[i].x, nodes[i].y);
            ctx!.lineTo(nodes[j].x, nodes[j].y);
            ctx!.strokeStyle = `rgba(79,124,255,${0.22 * (1 - d / maxD)})`;
            ctx!.lineWidth = 1;
            ctx!.stroke();
          }
        }
      }
      // Nodes with glow
      for (const n of nodes) {
        const r = n.r * (0.7 + n.z * 0.6);
        const gradient = ctx!.createRadialGradient(n.x, n.y, 0, n.x, n.y, r * 4);
        gradient.addColorStop(0, n.color + "CC");
        gradient.addColorStop(0.4, n.color + "44");
        gradient.addColorStop(1, "transparent");
        ctx!.beginPath();
        ctx!.arc(n.x, n.y, r * 4, 0, Math.PI * 2);
        ctx!.fillStyle = gradient;
        ctx!.fill();

        ctx!.beginPath();
        ctx!.arc(n.x, n.y, r, 0, Math.PI * 2);
        ctx!.fillStyle = n.color;
        ctx!.fill();
      }
      raf = requestAnimationFrame(draw);
    }

    draw();
    return () => cancelAnimationFrame(raf);
  }, [color]);

  return <canvas ref={canvasRef} style={{ width: "100%", height: "100%", display: "block" }} />;
}

function checkWebGL(): boolean {
  try {
    const canvas = document.createElement("canvas");
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
    );
  } catch {
    return false;
  }
}

export default function ThreeDScene({ color = "#4F7CFF" }: Props) {
  const [webgl, setWebgl] = useState<boolean | null>(null);

  useEffect(() => {
    setWebgl(checkWebGL());
  }, []);

  // Always show canvas fallback while detecting or if WebGL unavailable
  if (!webgl) {
    return (
      <div className="w-full h-full relative">
        {webgl === false || webgl === null ? (
          <FallbackCanvas color={color} />
        ) : null}
        {webgl === true && (
          <Suspense fallback={<FallbackCanvas color={color} />}>
            <ThreeDInner color={color} />
          </Suspense>
        )}
      </div>
    );
  }

  return (
    <div className="w-full h-full relative">
      <Suspense fallback={<FallbackCanvas color={color} />}>
        <ThreeDInner color={color} />
      </Suspense>
    </div>
  );
}
