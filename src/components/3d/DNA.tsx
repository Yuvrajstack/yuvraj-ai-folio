import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Group } from 'three';

export const DNA = () => {
  const groupRef = useRef<Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.5;
    }
  });

  const helixPoints = [];
  for (let i = 0; i < 50; i++) {
    const y = (i - 25) * 0.2;
    const angle = i * 0.3;
    const x1 = Math.cos(angle) * 1.5;
    const z1 = Math.sin(angle) * 1.5;
    const x2 = Math.cos(angle + Math.PI) * 1.5;
    const z2 = Math.sin(angle + Math.PI) * 1.5;
    
    helixPoints.push({ x: x1, y, z: z1, color: '#6366f1' });
    helixPoints.push({ x: x2, y, z: z2, color: '#8b5cf6' });
  }

  return (
    <group ref={groupRef}>
      {helixPoints.map((point, index) => (
        <mesh key={index} position={[point.x, point.y, point.z]}>
          <sphereGeometry args={[0.1, 8, 8]} />
          <meshStandardMaterial 
            color={point.color} 
            emissive={point.color}
            emissiveIntensity={0.3}
          />
        </mesh>
      ))}
    </group>
  );
};