import { Suspense, useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, Html } from "@react-three/drei";
import * as THREE from "three";
import CanvasLoader from "../Loader";

// Interface für Props
interface ISceneProps {
  isMobile: boolean;
}

// Animierte Webentwicklungs-Szene
const WebDevScene = ({ isMobile }: ISceneProps) => {
  const groupRef = useRef<THREE.Group>(null!);
  const coreRef = useRef<THREE.Mesh>(null!);
  const ringsRef = useRef<THREE.Group>(null!);
  const particlesRef = useRef<THREE.Mesh[]>([]);

  // Animation mit useFrame
  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime();

    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.1; // Gesamtrotation
    }
    if (coreRef.current) {
      coreRef.current.rotation.x += delta * 0.05; // Kern rotiert subtil
      coreRef.current.rotation.z += delta * 0.05;
    }
    if (ringsRef.current) {
      ringsRef.current.rotation.y += delta * 0.15; // Ringe kreisen schneller
      ringsRef.current.children.forEach((ring, i) => {
        ring.position.y = Math.sin(time + i) * 0.2; // Dynamische Ringbewegung
      });
    }
    particlesRef.current.forEach((particle, i) => {
      particle.position.set(
        Math.cos(i * 0.25 + time) * (isMobile ? 2.5 : 3),
        Math.sin(i * 0.25 + time) * (isMobile ? 2.5 : 3),
        Math.sin(i * 0.5 + time) * 0.5
      ); // Partikelbewegung
    });
  });

  return (
    <group ref={groupRef}>
      {/* Zentraler Code-Kern */}
      <mesh ref={coreRef} castShadow receiveShadow>
        <icosahedronGeometry args={[isMobile ? 0.8 : 1, 2]} />
        <meshPhysicalMaterial
          color="#1e90ff" // Blau für Technologie
          emissive="#1e90ff"
          emissiveIntensity={2}
          metalness={0.9}
          roughness={0.1}
          clearcoat={1}
          wireframe // Wireframe für "Code"-Look
        />
      </mesh>

      {/* Glow um den Kern */}
      <mesh>
        <sphereGeometry args={[isMobile ? 1.2 : 1.5, 32, 32]} />
        <meshBasicMaterial
          color="#1e90ff"
          transparent
          opacity={0.3}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* Technologie-Ringe (Frameworks/Tools) */}
      <group ref={ringsRef}>
        {Array.from({ length: 3 }).map((_, i) => (
          <mesh
            key={i}
            rotation={[Math.PI / 2, 0, i * (Math.PI / 1.5)]}
            castShadow
          >
            <torusGeometry args={[isMobile ? 1.5 + i * 0.5 : 2 + i * 0.7, 0.1, 16, 100]} />
            <meshStandardMaterial
              color="#ffaa00" // Orange für Kreativität
              emissive="#ffaa00"
              emissiveIntensity={1.5}
              metalness={0.8}
              roughness={0.2}
            />
          </mesh>
        ))}
      </group>

      {/* Schwebende Partikel (Datenflüsse/Code-Snippets) */}
      <group>
        {Array.from({ length: 25 }).map((_, i) => (
          <mesh
            key={i}
            ref={(el) => (particlesRef.current[i] = el!)} // Ref für Animation
            castShadow
          >
            <boxGeometry args={[isMobile ? 0.08 : 0.1, isMobile ? 0.08 : 0.1, isMobile ? 0.08 : 0.1]} />
            <meshStandardMaterial
              color="#00ffcc" // Cyan für digitale Daten
              emissive="#00ffcc"
              emissiveIntensity={1.2}
            />
          </mesh>
        ))}
      </group>

      {/* Bodenfläche für Tiefe */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]} receiveShadow>
        <circleGeometry args={[isMobile ? 8 : 10, 64]} />
        <meshStandardMaterial color="#0d1b2a" transparent opacity={0.5} roughness={1} />
      </mesh>
    </group>
  );
};

// Haupt-Canvas-Komponente
const WebDevCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Responsives Design
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
    };
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="always"
      shadows
      camera={{ position: [isMobile ? 4 : 5, 3, isMobile ? 8 : 10], fov: 50 }}
      gl={{ preserveDrawingBuffer: true, alpha: true }}
      style={{ background: "radial-gradient(circle, #0d1b2a, #1b263b)" }}
    >
      <Suspense fallback={<Html center><CanvasLoader /></Html>}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 3}
          rotateSpeed={0.4}
        />
        <ambientLight intensity={0.7} color="#ffffff" />
        <directionalLight
          position={[5, 10, 5]}
          intensity={2}
          castShadow
          shadow-mapSize={[1024, 1024]}
          color="#ffffff"
        />
        <spotLight
          position={[-10, 15, 10]}
          angle={0.3}
          penumbra={1}
          intensity={2.5}
          color="#1e90ff"
          castShadow
        />
        <WebDevScene isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default WebDevCanvas;