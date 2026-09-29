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
    let height = canvas.parentElement.clientHeight || 520;

    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.parentElement.clientWidth;
      height = canvas.parentElement.clientHeight || 520;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    window.addEventListener('resize', handleResize);

    // Mouse coordinates with fluid damping for parallax
    const mouse = {
      x: width / 2,
      y: height / 2,
      targetX: width / 2,
      targetY: height / 2,
    };

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

    // --- 3D MODULAR CUBES ARCHITECTURE ---
    // A 3D clustered formation of dark metallic modular blocks with gold glowing seams
    const unitSize = 42; // half-width of each sub-cube
    const gap = 8;       // spacing between cubes

    // Definitions of sub-cubes offsets in space [ox, oy, oz]
    const cubeOffsets = [
      // Core 2x2x2 cluster with subtle artistic dislodgements matching reference image
      { ox: -(unitSize + gap), oy: -(unitSize + gap), oz: -(unitSize + gap), scale: 1 },
      { ox: (unitSize + gap), oy: -(unitSize + gap), oz: -(unitSize + gap), scale: 1 },
      { ox: -(unitSize + gap), oy: (unitSize + gap), oz: -(unitSize + gap), scale: 1 },
      { ox: (unitSize + gap), oy: (unitSize + gap), oz: -(unitSize + gap), scale: 1 },
      { ox: -(unitSize + gap), oy: -(unitSize + gap), oz: (unitSize + gap), scale: 1 },
      { ox: (unitSize + gap), oy: -(unitSize + gap), oz: (unitSize + gap), scale: 1 },
      { ox: -(unitSize + gap), oy: (unitSize + gap), oz: (unitSize + gap), scale: 1 },
      { ox: (unitSize + gap) * 1.35, oy: (unitSize + gap) * 1.2, oz: (unitSize + gap) * 1.3, scale: 0.95 }, // floating offset block
      { ox: -(unitSize + gap) * 1.4, oy: 0, oz: 0, scale: 0.8 }, // left floating satellite block
      { ox: 0, oy: -(unitSize + gap) * 1.45, oz: (unitSize + gap) * 0.8, scale: 0.75 }, // top satellite
    ];

    // Standard 8 vertices for a cube centered at origin
    const baseCubeVertices = [
      { x: -unitSize, y: -unitSize, z: -unitSize },
      { x: unitSize, y: -unitSize, z: -unitSize },
      { x: unitSize, y: unitSize, z: -unitSize },
      { x: -unitSize, y: unitSize, z: -unitSize },
      { x: -unitSize, y: -unitSize, z: unitSize },
      { x: unitSize, y: -unitSize, z: unitSize },
      { x: unitSize, y: unitSize, z: unitSize },
      { x: -unitSize, y: unitSize, z: unitSize },
    ];

    // 6 faces of a cube (indices of vertices, wound clockwise)
    const cubeFaces = [
      { indices: [0, 1, 2, 3], normal: { x: 0, y: 0, z: -1 } }, // back
      { indices: [5, 4, 7, 6], normal: { x: 0, y: 0, z: 1 } },  // front
      { indices: [4, 5, 1, 0], normal: { x: 0, y: -1, z: 0 } }, // top
      { indices: [3, 2, 6, 7], normal: { x: 0, y: 1, z: 0 } },  // bottom
      { indices: [4, 0, 3, 7], normal: { x: -1, y: 0, z: 0 } }, // left
      { indices: [1, 5, 6, 2], normal: { x: 1, y: 0, z: 0 } },  // right
    ];

    // 12 edges of a cube
    const cubeEdges = [
      [0, 1], [1, 2], [2, 3], [3, 0],
      [4, 5], [5, 6], [6, 7], [7, 4],
      [0, 4], [1, 5], [2, 6], [3, 7]
    ];

    // Ambient floating particles (warm champagne gold & starlight)
    const particleCount = 45;
    const particles = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: (Math.random() - 0.5) * 440,
        y: (Math.random() - 0.5) * 440,
        z: (Math.random() - 0.5) * 440,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        vz: (Math.random() - 0.5) * 0.25,
        size: Math.random() * 2 + 0.8,
        color: i % 3 === 0 ? '#fae188' : i % 3 === 1 ? '#d4af37' : '#ffffff',
      });
    }

    let rotX = 0.42;
    let rotY = 0.65;
    let rotZ = 0.12;

    // 3D rotation helper
    const rotatePoint = (p, ax, ay, az) => {
      // Rotate Y
      const cosY = Math.cos(ay);
      const sinY = Math.sin(ay);
      let x1 = p.x * cosY + p.z * sinY;
      let y1 = p.y;
      let z1 = -p.x * sinY + p.z * cosY;

      // Rotate X
      const cosX = Math.cos(ax);
      const sinX = Math.sin(ax);
      let x2 = x1;
      let y2 = y1 * cosX - z1 * sinX;
      let z2 = y1 * sinX + z1 * cosX;

      // Rotate Z
      const cosZ = Math.cos(az);
      const sinZ = Math.sin(az);
      let x3 = x2 * cosZ - y2 * sinZ;
      let y3 = x2 * sinZ + y2 * cosZ;
      let z3 = z2;

      return { x: x3, y: y3, z: z3 };
    };

    // Perspective projection
    const project = (p, centerX, centerY) => {
      const fov = 480;
      const scale = fov / (fov + p.z + 280);
      return {
        x: centerX + p.x * scale,
        y: centerY + p.y * scale,
        scale,
        z: p.z,
      };
    };

    // Light source position for realistic metallic shading
    const lightDir = { x: 0.5, y: -0.8, z: -0.6 };
    const lightLen = Math.hypot(lightDir.x, lightDir.y, lightDir.z);
    lightDir.x /= lightLen;
    lightDir.y /= lightLen;
    lightDir.z /= lightLen;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse lerp
      mouse.x += (mouse.targetX - mouse.x) * 0.04;
      mouse.y += (mouse.targetY - mouse.y) * 0.04;

      const centerX = width / 2;
      const centerY = height / 2;

      // Subtle mouse parallax tilt
      const mouseOffsetX = (mouse.x - centerX) * 0.00025;
      const mouseOffsetY = (mouse.y - centerY) * 0.00025;

      rotY += 0.004 + mouseOffsetX;
      rotX += 0.002 + mouseOffsetY;
      rotZ += 0.0008;

      // 1. CELESTIAL GOLDEN HALO / ORBITAL ARC (From reference image)
      // Large atmospheric luminous arc wrapping around the cubes
      const arcCenterX = centerX + 10;
      const arcCenterY = centerY - 10;
      const arcRadius = 185;

      // Deep celestial radial backdrop glow
      const celestialGlow = ctx.createRadialGradient(
        arcCenterX,
        arcCenterY,
        10,
        arcCenterX,
        arcCenterY,
        280
      );
      celestialGlow.addColorStop(0, 'rgba(212, 175, 55, 0.18)');
      celestialGlow.addColorStop(0.3, 'rgba(180, 140, 40, 0.09)');
      celestialGlow.addColorStop(0.65, 'rgba(212, 175, 55, 0.02)');
      celestialGlow.addColorStop(1, 'rgba(0, 0, 0, 0)');

      ctx.fillStyle = celestialGlow;
      ctx.beginPath();
      ctx.arc(arcCenterX, arcCenterY, 280, 0, Math.PI * 2);
      ctx.fill();

      // Sharp golden celestial arc (crescent rim)
      ctx.save();
      ctx.translate(arcCenterX, arcCenterY);
      ctx.rotate(-Math.PI / 4 + Math.sin(rotY * 0.5) * 0.1);

      // Outer golden glowing arc
      ctx.shadowColor = '#d4af37';
      ctx.shadowBlur = 24;
      ctx.strokeStyle = 'rgba(243, 231, 196, 0.85)';
      ctx.lineWidth = 2.4;
      ctx.beginPath();
      ctx.arc(0, 0, arcRadius, 0.8 * Math.PI, 1.95 * Math.PI);
      ctx.stroke();

      // Secondary fine orbital ring
      ctx.shadowBlur = 10;
      ctx.strokeStyle = 'rgba(212, 175, 55, 0.4)';
      ctx.lineWidth = 1.0;
      ctx.beginPath();
      ctx.ellipse(0, 0, arcRadius * 1.15, arcRadius * 0.65, Math.PI / 5, 0, Math.PI * 2);
      ctx.stroke();

      ctx.restore();

      // 2. AMBIENT PARTICLES
      for (let i = 0; i < particles.length; i++) {
        const pt = particles[i];
        pt.x += pt.vx;
        pt.y += pt.vy;
        pt.z += pt.vz;

        if (pt.x > 220) pt.x = -220;
        if (pt.x < -220) pt.x = 220;
        if (pt.y > 220) pt.y = -220;
        if (pt.y < -220) pt.y = 220;
        if (pt.z > 220) pt.z = -220;
        if (pt.z < -220) pt.z = 220;

        const rotatedPt = rotatePoint(pt, rotX * 0.5, rotY * 0.5, 0);
        const projectedPt = project(rotatedPt, centerX, centerY);

        const pAlpha = Math.max(0.2, (projectedPt.z + 220) / 440);
        ctx.fillStyle = pt.color;
        ctx.globalAlpha = pAlpha * 0.85;
        ctx.beginPath();
        ctx.arc(projectedPt.x, projectedPt.y, pt.size * projectedPt.scale, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1.0;
      }

      // 3. COLLECT ALL FACES & EDGES FOR 3D PAINTER'S ALGORITHM
      const allFacesToRender = [];
      const allEdgesToRender = [];

      cubeOffsets.forEach((cubeDef) => {
        const { ox, oy, oz, scale } = cubeDef;

        // Compute rotated offset
        const rotatedCenter = rotatePoint({ x: ox, y: oy, z: oz }, rotX, rotY, rotZ);

        // Compute 8 transformed vertices for this sub-cube
        const transformedVertices = baseCubeVertices.map((v) => {
          const scaledV = {
            x: v.x * scale + ox,
            y: v.y * scale + oy,
            z: v.z * scale + oz,
          };
          const rotV = rotatePoint(scaledV, rotX, rotY, rotZ);
          const projV = project(rotV, centerX, centerY);
          return { rot: rotV, proj: projV };
        });

        // Collect Faces
        cubeFaces.forEach((face) => {
          // Compute face normal in world space
          const rotNormal = rotatePoint(face.normal, rotX, rotY, rotZ);

          // Calculate face center in 3D
          let centerZ = 0;
          let centerXFace = 0;
          let centerYFace = 0;
          face.indices.forEach((idx) => {
            centerZ += transformedVertices[idx].rot.z;
            centerXFace += transformedVertices[idx].proj.x;
            centerYFace += transformedVertices[idx].proj.y;
          });
          centerZ /= 4;
          centerXFace /= 4;
          centerYFace /= 4;

          // Back-face culling check: face points toward camera
          // Vector from camera to face
          if (rotNormal.z < 0.15) {
            allFacesToRender.push({
              vertices: face.indices.map((idx) => transformedVertices[idx].proj),
              z: centerZ,
              normal: rotNormal,
              centerX: centerXFace,
              centerY: centerYFace,
            });
          }
        });

        // Collect Edges
        cubeEdges.forEach(([iA, iB]) => {
          const pA = transformedVertices[iA];
          const pB = transformedVertices[iB];
          const edgeZ = (pA.rot.z + pB.rot.z) / 2;
          allEdgesToRender.push({
            p1: pA.proj,
            p2: pB.proj,
            z: edgeZ,
          });
        });
      });

      // Sort faces back-to-front (highest Z first)
      allFacesToRender.sort((a, b) => b.z - a.z);

      // 4. RENDER 3D METALLIC FACES
      allFacesToRender.forEach((face) => {
        const pts = face.vertices;
        ctx.beginPath();
        ctx.moveTo(pts[0].x, pts[0].y);
        ctx.lineTo(pts[1].x, pts[1].y);
        ctx.lineTo(pts[2].x, pts[2].y);
        ctx.lineTo(pts[3].x, pts[3].y);
        ctx.closePath();

        // Calculate diffuse lighting
        const dot = Math.max(0.08, -(face.normal.x * lightDir.x + face.normal.y * lightDir.y + face.normal.z * lightDir.z));
        
        // Dark metallic obsidian palette: #0a0b0e to #1c1e26 with specular gold rim
        const baseVal = Math.floor(10 + dot * 32);
        const r = baseVal + Math.floor(dot * 8);
        const g = baseVal + Math.floor(dot * 6);
        const b = baseVal + Math.floor(dot * 4);

        ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
        ctx.fill();

        // Fine dark seam stroke
        ctx.strokeStyle = 'rgba(10, 10, 14, 0.9)';
        ctx.lineWidth = 1;
        ctx.stroke();
      });

      // 5. RENDER GLOWING GOLDEN SEAMS AND SPECULAR EDGES
      // Sort edges back-to-front
      allEdgesToRender.sort((a, b) => b.z - a.z);

      allEdgesToRender.forEach((edge) => {
        const depthAlpha = Math.max(0.2, (edge.z + 180) / 360);

        ctx.beginPath();
        ctx.moveTo(edge.p1.x, edge.p1.y);
        ctx.lineTo(edge.p2.x, edge.p2.y);

        // Warm gold glowing edges
        ctx.strokeStyle = `rgba(229, 193, 88, ${depthAlpha * 0.75})`;
        ctx.lineWidth = Math.max(0.8, edge.p1.scale * 1.5);
        ctx.stroke();
      });

      // 6. INNER GOLDEN GLOW PULSE AT SEAMS
      const pulse = 1 + Math.sin(Date.now() * 0.0035) * 0.15;
      const coreLight = ctx.createRadialGradient(
        centerX,
        centerY,
        2,
        centerX,
        centerY,
        75 * pulse
      );
      coreLight.addColorStop(0, 'rgba(255, 235, 160, 0.45)');
      coreLight.addColorStop(0.35, 'rgba(212, 175, 55, 0.25)');
      coreLight.addColorStop(0.7, 'rgba(180, 140, 40, 0.08)');
      coreLight.addColorStop(1, 'rgba(0, 0, 0, 0)');

      ctx.fillStyle = coreLight;
      ctx.beginPath();
      ctx.arc(centerX, centerY, 80 * pulse, 0, Math.PI * 2);
      ctx.fill();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, [isDark]);

  return (
    <div className="relative w-full h-[420px] sm:h-[480px] lg:h-[520px] flex items-center justify-center select-none overflow-visible">
      <canvas
        ref={canvasRef}
        className="w-full h-full cursor-grab active:cursor-grabbing"
      />
    </div>
  );
}
