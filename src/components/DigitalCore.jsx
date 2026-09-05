import { useRef, useEffect } from 'react';

export default function DigitalCore({ isDark = true }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const dpr = window.devicePixelRatio || 1;
    let width = canvas.parentElement.clientWidth;
    let height = canvas.parentElement.clientHeight || 460;

    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.parentElement.clientWidth;
      height = canvas.parentElement.clientHeight || 460;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    window.addEventListener('resize', handleResize);

    // Mouse coordinates with smooth damping
    const mouse = { x: width / 2, y: height / 2, targetX: width / 2, targetY: height / 2 };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', () => {
      mouse.targetX = width / 2;
      mouse.targetY = height / 2;
    });

    // Calibrated constellation nodes
    const nodeCount = 36;
    const nodes = [];
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.55,
        vy: (Math.random() - 0.5) * 0.55,
        radius: Math.random() * 1.8 + 1.2,
        color: i % 3 === 0 ? '#38bdf8' : i % 3 === 1 ? '#818cf8' : '#34d399',
      });
    }

    // Rotating 3D Polyhedron core
    const coreVertices = [];
    const coreRings = 4;
    const pointsPerRing = 8;
    for (let r = 0; r < coreRings; r++) {
      const theta = ((r + 1) * Math.PI) / (coreRings + 1) - Math.PI / 2;
      const ringRadius = 70 * Math.cos(theta);
      const ringY = 70 * Math.sin(theta);
      for (let p = 0; p < pointsPerRing; p++) {
        const phi = (p * 2 * Math.PI) / pointsPerRing;
        coreVertices.push({
          x: ringRadius * Math.cos(phi),
          y: ringY,
          z: ringRadius * Math.sin(phi),
        });
      }
    }

    let coreAngleX = 0;
    let coreAngleY = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse lerp
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      const centerX = width / 2;
      const centerY = height / 2;

      // Soft ambient diffuse center glow
      const gradient = ctx.createRadialGradient(
        centerX + (mouse.x - centerX) * 0.1,
        centerY + (mouse.y - centerY) * 0.1,
        5,
        centerX,
        centerY,
        170
      );
      if (isDark) {
        gradient.addColorStop(0, 'rgba(56, 189, 248, 0.12)');
        gradient.addColorStop(0.5, 'rgba(99, 102, 241, 0.06)');
        gradient.addColorStop(1, 'rgba(6, 7, 9, 0)');
      } else {
        gradient.addColorStop(0, 'rgba(2, 132, 199, 0.09)');
        gradient.addColorStop(0.5, 'rgba(99, 102, 241, 0.04)');
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
      }
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(centerX, centerY, 180, 0, Math.PI * 2);
      ctx.fill();

      // Draw and update ambient nodes
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;

        // Mouse gentle repulsion
        const dx = mouse.x - node.x;
        const dy = mouse.y - node.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 110) {
          const force = (110 - dist) / 110;
          node.x -= (dx / dist) * force * 1.1;
          node.y -= (dy / dist) * force * 1.1;
        }

        ctx.fillStyle = isDark ? node.color : '#0284c7';
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fill();

        for (let j = i + 1; j < nodes.length; j++) {
          const other = nodes[j];
          const ndx = other.x - node.x;
          const ndy = other.y - node.y;
          const nDist = Math.sqrt(ndx * ndx + ndy * ndy);
          if (nDist < 80) {
            const alpha = (1 - nDist / 80) * (isDark ? 0.2 : 0.12);
            ctx.strokeStyle = isDark ? `rgba(56, 189, 248, ${alpha})` : `rgba(2, 132, 199, ${alpha})`;
            ctx.lineWidth = 0.65;
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(other.x, other.y);
            ctx.stroke();
          }
        }
      }

      // Rotate 3D Polyhedron Core
      coreAngleY += 0.007 + (mouse.x - centerX) * 0.000025;
      coreAngleX += 0.0035 + (mouse.y - centerY) * 0.000025;

      const projected = coreVertices.map((v) => {
        const cosY = Math.cos(coreAngleY);
        const sinY = Math.sin(coreAngleY);
        const x1 = v.x * cosY - v.z * sinY;
        const z1 = v.z * cosY + v.x * sinY;

        const cosX = Math.cos(coreAngleX);
        const sinX = Math.sin(coreAngleX);
        const y2 = v.y * cosX - z1 * sinX;
        const z2 = z1 * cosX + v.y * sinX;

        const fov = 320;
        const scale = fov / (fov + z2);
        return {
          x: centerX + x1 * scale,
          y: centerY + y2 * scale,
          scale,
          z: z2,
        };
      });

      // Core connections
      ctx.lineWidth = 0.8;
      for (let i = 0; i < projected.length; i++) {
        const p1 = projected[i];
        for (let j = i + 1; j < projected.length; j++) {
          const p2 = projected[j];
          const cdx = p1.x - p2.x;
          const cdy = p1.y - p2.y;
          const cdist = Math.sqrt(cdx * cdx + cdy * cdy);
          if (cdist < 40) {
            const alpha = Math.max(0.08, (1 - cdist / 40) * 0.38);
            ctx.strokeStyle = isDark ? `rgba(129, 140, 248, ${alpha})` : `rgba(99, 102, 241, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }

        const dotAlpha = Math.max(0.2, (p1.z + 100) / 200);
        ctx.fillStyle = isDark ? `rgba(56, 189, 248, ${dotAlpha})` : `rgba(2, 132, 199, ${dotAlpha})`;
        ctx.beginPath();
        ctx.arc(p1.x, p1.y, Math.max(1, p1.scale * 1.8), 0, Math.PI * 2);
        ctx.fill();
      }

      // Central pulsing nucleus
      const pulse = 1 + Math.sin(Date.now() * 0.003) * 0.12;
      const coreGrad = ctx.createRadialGradient(centerX, centerY, 1, centerX, centerY, 20 * pulse);
      coreGrad.addColorStop(0, '#ffffff');
      coreGrad.addColorStop(0.35, isDark ? '#38bdf8' : '#0284c7');
      coreGrad.addColorStop(1, 'rgba(56, 189, 248, 0)');
      ctx.fillStyle = coreGrad;
      ctx.beginPath();
      ctx.arc(centerX, centerY, 20 * pulse, 0, Math.PI * 2);
      ctx.fill();

      // Precision Orbital Radar Rings
      ctx.strokeStyle = isDark ? 'rgba(56, 189, 248, 0.18)' : 'rgba(2, 132, 199, 0.18)';
      ctx.lineWidth = 0.8;
      ctx.beginPath();
      ctx.arc(centerX, centerY, 92, 0, Math.PI * 2);
      ctx.stroke();

      ctx.strokeStyle = isDark ? 'rgba(129, 140, 248, 0.14)' : 'rgba(99, 102, 241, 0.14)';
      ctx.beginPath();
      ctx.arc(centerX, centerY, 115, 0, Math.PI * 2);
      ctx.stroke();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, [isDark]);

  return (
    <div className="relative w-full h-[380px] sm:h-[450px] lg:h-[490px] flex items-center justify-center select-none overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-b from-white/[0.025] to-transparent shadow-card">
      <canvas
        ref={canvasRef}
        className="w-full h-full cursor-crosshair"
      />
      {/* Precision Core Status Chip */}
      <div className="absolute bottom-4 right-4 flex items-center gap-2 px-3 py-1.5 rounded-full glass-panel border border-white/10 text-[10px] font-mono tracking-wider text-slate-300 pointer-events-none">
        <span className="w-1.5 h-1.5 rounded-full bg-cyber-cyan animate-ping" />
        <span>COMPUTATIONAL CORE ACTIVE</span>
      </div>
    </div>
  );
}
