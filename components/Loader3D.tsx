"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Html, Stars } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";
import Image from "next/image";

import { FaReact, FaLaravel, FaAws, FaNodeJs, FaPython } from "react-icons/fa";

import {
  SiNextdotjs,
  SiFlutter,
  SiDocker,
  SiTailwindcss,
  SiTypescript,
  SiMysql,
  SiPhp,
  SiMongodb,
  SiFirebase,
  SiRedis,
  SiPostgresql,
} from "react-icons/si";

function OrbitingIcon({
  radius,
  speed,
  offset,
  icon,
}: {
  radius: number;
  speed: number;
  offset: number;
  icon: React.ReactNode;
}) {
  const ref = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * speed + offset;

    if (ref.current) {
      ref.current.position.x = Math.cos(t) * radius;
      ref.current.position.y = Math.sin(t) * (radius * 0.45);
      ref.current.position.z = 0;
    }
  });

  return (
    <group ref={ref}>
      <Html center>
        <div className="text-4xl">{icon}</div>
      </Html>
    </group>
  );
}

function CenterLogo() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.z = Math.sin(clock.elapsedTime * 0.3) * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      <Html center>
        <div className="relative flex items-center justify-center">
          {/* Outer Glow */}
          <div className="absolute w-44 h-44 rounded-full bg-cyan-400/10 blur-[80px]" />

          {/* Orbit Core */}
          <div className="absolute w-42 h-42 rounded-full border border-cyan-400/30 animate-spin" />

          {/* Inner Pulse */}
          <div className="absolute w-40 h-40 rounded-full bg-cyan-400/10 animate-pulse" />

          {/* Logo */}
          <div className="relative w-36 h-36">
            <Image
              src="/logo2.png"
              alt="TechStrota"
              fill
              className="object-contain drop-shadow-[0_0_40px_rgba(34,211,238,0.8)]"
            />
          </div>
        </div>
      </Html>
    </group>
  );
}

function OrbitRing({ radiusX, radiusY }: { radiusX: number; radiusY: number }) {
  const points: THREE.Vector3[] = [];

  for (let i = 0; i <= 128; i++) {
    const angle = (i / 128) * Math.PI * 2;

    points.push(
      new THREE.Vector3(
        Math.cos(angle) * radiusX,
        Math.sin(angle) * radiusY,
        0,
      ),
    );
  }

  const geometry = new THREE.BufferGeometry().setFromPoints(points);

  return (
    <primitive
      object={
        new THREE.Line(
          geometry,
          new THREE.LineBasicMaterial({
            color: "#67e8f9",
            transparent: true,
            opacity: 0.65,
          }),
        )
      }
    />
  );
}

export default function Loader3D() {
  return (
    <div className="fixed inset-0 z-[100] bg-black">
      <Canvas camera={{ position: [0, 0, 12], fov: 50 }}>
        <ambientLight intensity={2} />
        <pointLight position={[0, 0, 0]} intensity={10} />

        <Stars radius={100} depth={50} count={5000} factor={4} fade />

        <CenterLogo />

        <OrbitRing radiusX={2.5} radiusY={1.2} />
        <OrbitRing radiusX={4.5} radiusY={2.2} />
        <OrbitRing radiusX={7} radiusY={3.5} />
        <OrbitingIcon
          radius={2.5}
          speed={1}
          offset={0}
          icon={<FaReact className="text-[#61DAFB]" />}
        />

        <OrbitingIcon
          radius={2.5}
          speed={1}
          offset={2.1}
          icon={<FaLaravel className="text-[#FF2D20]" />}
        />

        <OrbitingIcon
          radius={2.5}
          speed={1}
          offset={4.2}
          icon={<SiNextdotjs className="text-white" />}
        />

        <OrbitingIcon
          radius={4.5}
          speed={0.7}
          offset={0}
          icon={<FaNodeJs className="text-[#339933]" />}
        />

        <OrbitingIcon
          radius={4.5}
          speed={0.7}
          offset={1}
          icon={<FaPython className="text-[#3776AB]" />}
        />

        <OrbitingIcon
          radius={4.5}
          speed={0.7}
          offset={2}
          icon={<SiFlutter className="text-[#02569B]" />}
        />

        <OrbitingIcon
          radius={4.5}
          speed={0.7}
          offset={3}
          icon={<SiTailwindcss className="text-[#06B6D4]" />}
        />

        <OrbitingIcon
          radius={4.5}
          speed={0.7}
          offset={4}
          icon={<SiTypescript className="text-[#3178C6]" />}
        />

        <OrbitingIcon
          radius={4.5}
          speed={0.7}
          offset={5}
          icon={<SiMysql className="text-[#4479A1]" />}
        />

        <OrbitingIcon
          radius={7}
          speed={0.4}
          offset={0}
          icon={<FaAws className="text-[#FF9900]" />}
        />

        <OrbitingIcon
          radius={7}
          speed={0.4}
          offset={1}
          icon={<SiPhp className="text-[#777BB4]" />}
        />

        <OrbitingIcon
          radius={7}
          speed={0.4}
          offset={2}
          icon={<SiMongodb className="text-[#47A248]" />}
        />

        <OrbitingIcon
          radius={7}
          speed={0.4}
          offset={3}
          icon={<SiFirebase className="text-[#FFCA28]" />}
        />

        <OrbitingIcon
          radius={7}
          speed={0.4}
          offset={4}
          icon={<SiDocker className="text-[#2496ED]" />}
        />

        <OrbitingIcon
          radius={7}
          speed={0.4}
          offset={5}
          icon={<SiRedis className="text-[#DC382D]" />}
        />

        <OrbitingIcon
          radius={7}
          speed={0.4}
          offset={6}
          icon={<SiPostgresql className="text-[#336791]" />}
        />
      </Canvas>
    </div>
  );
}
