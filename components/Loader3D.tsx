"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Html, Stars } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";
import Image from "next/image";
import { useEffect, useState } from "react";

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
  size = "text-4xl",
}: {
  radius: number;
  speed: number;
  offset: number;
  icon: React.ReactNode;
  size?: string;
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
      <Html center distanceFactor={8}>
        <div className={size}>{icon}</div>
      </Html>
    </group>
  );
}

function CenterLogo({ isMobile }: { isMobile: boolean }) {
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
          <div
            className={`absolute rounded-full bg-cyan-400/10 blur-[80px] ${
              isMobile ? "w-24 h-24" : "w-44 h-44"
            }`}
          />

          {/* Orbit Core */}
          <div
            className={`absolute rounded-full border border-cyan-400/30 animate-spin ${
              isMobile ? "w-24 h-24" : "w-40 h-40"
            }`}
          />

          {/* Inner Pulse */}
          <div
            className={`absolute rounded-full bg-cyan-400/10 animate-pulse ${
              isMobile ? "w-20 h-20" : "w-36 h-36"
            }`}
          />

          {/* Logo */}
          <div className={`relative ${isMobile ? "w-24 h-24" : "w-36 h-36"}`}>
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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);

    return () => window.removeEventListener("resize", check);
  }, []);

  const innerRadius = isMobile ? 2.5 : 2.5;
  const midRadius = isMobile ? 4.8 : 4.5;
  const outerRadius = isMobile ? 7.2 : 7;
  const innerIcon = isMobile ? "text-5xl" : "text-4xl";
  const midIcon = isMobile ? "text-5xl" : "text-5xl";
  const outerIcon = isMobile ? "text-5xl" : "text-5xl";

  return (
    <div className="fixed inset-0 z-[100] bg-black">
      <Canvas
        camera={{
          position: [0, 0, isMobile ? 18 : 12],
          fov: isMobile ? 75 : 50,
        }}
      >
        <ambientLight intensity={2} />
        <pointLight position={[0, 0, 0]} intensity={10} />

        <Stars radius={100} depth={50} count={5000} factor={4} fade />

        <CenterLogo isMobile={isMobile} />

        <OrbitRing radiusX={innerRadius} radiusY={innerRadius * 0.45} />
        <OrbitRing radiusX={midRadius} radiusY={midRadius * 0.45} />
        <OrbitRing radiusX={outerRadius} radiusY={outerRadius * 0.45} />
        <OrbitingIcon
          radius={innerRadius}
          size={innerIcon}
          speed={1}
          offset={0}
          icon={<FaReact className="text-[#61DAFB]" />}
        />

        <OrbitingIcon
          radius={innerRadius}
          size={innerIcon}
          speed={1}
          offset={2.1}
          icon={<FaLaravel className="text-[#FF2D20]" />}
        />

        <OrbitingIcon
          radius={innerRadius}
          size={innerIcon}
          speed={1}
          offset={4.2}
          icon={<SiNextdotjs className="text-white" />}
        />

        <OrbitingIcon
          radius={midRadius}
          size={midIcon}
          speed={0.7}
          offset={0}
          icon={<FaNodeJs className="text-[#339933]" />}
        />

        <OrbitingIcon
          radius={midRadius}
          size={midIcon}
          speed={0.7}
          offset={1}
          icon={<FaPython className="text-[#3776AB]" />}
        />

        <OrbitingIcon
          radius={midRadius}
          size={midIcon}
          speed={0.7}
          offset={2}
          icon={<SiFlutter className="text-[#02569B]" />}
        />

        <OrbitingIcon
          radius={midRadius}
          size={midIcon}
          speed={0.7}
          offset={3}
          icon={<SiTailwindcss className="text-[#06B6D4]" />}
        />

        <OrbitingIcon
          radius={midRadius}
          size={midIcon}
          speed={0.7}
          offset={4}
          icon={<SiTypescript className="text-[#3178C6]" />}
        />

        <OrbitingIcon
          radius={midRadius}
          size={midIcon}
          speed={0.7}
          offset={5}
          icon={<SiMysql className="text-[#4479A1]" />}
        />

        <OrbitingIcon
          radius={outerRadius}
          size={outerIcon}
          speed={0.4}
          offset={0}
          icon={<FaAws className="text-[#FF9900]" />}
        />

        <OrbitingIcon
          radius={outerRadius}
          size={outerIcon}
          speed={0.4}
          offset={1}
          icon={<SiPhp className="text-[#777BB4]" />}
        />

        <OrbitingIcon
          radius={outerRadius}
          size={outerIcon}
          speed={0.4}
          offset={2}
          icon={<SiMongodb className="text-[#47A248]" />}
        />

        <OrbitingIcon
          radius={outerRadius}
          size={outerIcon}
          speed={0.4}
          offset={3}
          icon={<SiFirebase className="text-[#FFCA28]" />}
        />

        <OrbitingIcon
          radius={outerRadius}
          size={outerIcon}
          speed={0.4}
          offset={4}
          icon={<SiDocker className="text-[#2496ED]" />}
        />

        <OrbitingIcon
          radius={outerRadius}
          size={outerIcon}
          speed={0.4}
          offset={5}
          icon={<SiRedis className="text-[#DC382D]" />}
        />

        <OrbitingIcon
          radius={outerRadius}
          size={outerIcon}
          speed={0.4}
          offset={6}
          icon={<SiPostgresql className="text-[#336791]" />}
        />
      </Canvas>
    </div>
  );
}
