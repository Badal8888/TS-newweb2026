"use client";
import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Particles({ count = 1500 }) {
  const points = useRef<THREE.Points>(null!);

  // Create random positions for particles
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 15; // X
      positions[i * 3 + 1] = (Math.random() - 0.5) * 15; // Y
      positions[i * 3 + 2] = (Math.random() - 0.5) * 15; // Z
    }
    return positions;
  }, [count]);

  useFrame((state) => {
    const { clock, mouse } = state;
    // Slow rotation
    points.current.rotation.y = clock.getElapsedTime() * 0.05;
    points.current.rotation.x = clock.getElapsedTime() * 0.03;

    // Slight movement based on mouse
    points.current.position.x = THREE.MathUtils.lerp(
      points.current.position.x,
      mouse.x * 0.5,
      0.03,
    );
    points.current.position.y = THREE.MathUtils.lerp(
      points.current.position.y,
      mouse.y * 0.5,
      0.03,
    );
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesPosition.length / 3}
          array={particlesPosition}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.015}
        color="#f2a93b" // TechStrota Yellow
        sizeAttenuation={true}
        transparent={true}
        opacity={0.4}
      />
    </points>
  );
}

export default function HeroBackground() {
  return (
    <div className="fixed inset-0 -z-10 bg-[#0a0f1a]">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <Particles />
      </Canvas>
      {/* Dark gradient overlay to ensure text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1a]/50 via-transparent to-[#0a0f1a]" />
    </div>
  );
}
