import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

interface InteractiveOrbProps {
  position: [number, number, number];
}

export const InteractiveOrb = ({ position }: InteractiveOrbProps) => {
  const meshRef = useRef<Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
      
      const scale = hovered ? 1.2 : clicked ? 1.5 : 1;
      meshRef.current.scale.lerp({ x: scale, y: scale, z: scale } as any, 0.1);
      
      if (clicked) {
        meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 5) * 0.2;
      }
    }
  });

  return (
    <mesh
      ref={meshRef}
      position={position}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={() => setClicked(!clicked)}
    >
      <icosahedronGeometry args={[0.8, 1]} />
      <meshStandardMaterial
        color={clicked ? "#ff6b6b" : hovered ? "#4ecdc4" : "#6366f1"}
        wireframe={hovered}
        transparent
        opacity={hovered ? 0.8 : 1}
        emissive={clicked ? "#ff6b6b" : "#000000"}
        emissiveIntensity={clicked ? 0.3 : 0}
      />
    </mesh>
  );
};