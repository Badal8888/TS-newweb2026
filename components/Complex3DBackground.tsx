"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sphere, Stars } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function TechCore() {
  const meshRef = useRef<THREE.Mesh>(null);

  // Slowly rotate the entire structure
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.15;
      meshRef.current.rotation.y += delta * 0.2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
      {/* Outer Complex Geometric Shape (Solid Base) */}
      <mesh ref={meshRef} scale={2.2}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial color="#050505" roughness={0.3} metalness={0.8} />
      </mesh>

      {/* GLOW FACTOR 2.0: Swapped to native wireframe and increased opacity to 0.8 */}
      <mesh scale={2.21}>
        <icosahedronGeometry args={[1, 1]} />
        <meshBasicMaterial
          color="#1F6FEB"
          wireframe={true}
          transparent
          opacity={0.8}
        />
      </mesh>

      {/* GLOW FACTOR 2.0: Increased gold core opacity from 0.08 to 0.25 */}
      <Sphere args={[0.9, 32, 32]}>
        <meshBasicMaterial color="#F5B041" transparent opacity={0.25} />
      </Sphere>
    </Float>
  );
}

export default function Complex3DBackground() {
  return (
    // CRUCIAL FIX: Changed opacity-50 to opacity-100 so the scene is fully visible
    <div className="fixed inset-0 z-0 opacity-100 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 8] }}
        style={{ width: "100%", height: "100%" }}
      >
        {/* LIGHTING VALUES FROM YOUR IMAGE */}
        <ambientLight intensity={0.3} />
        <directionalLight
          position={[5, 5, 5]}
          intensity={2.5}
          color="#1F6FEB"
        />
        <pointLight position={[-5, -5, -2]} intensity={1.5} color="#F5B041" />

        <TechCore />

        {/* Tech/Data Particle Field */}
        <Stars
          radius={50}
          depth={50}
          count={2500}
          factor={3}
          saturation={0}
          fade
          speed={0.5}
        />
      </Canvas>
    </div>
  );
}
