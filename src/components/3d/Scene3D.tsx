import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, Float } from '@react-three/drei';
import { FloatingCube } from './FloatingCube';
import { FloatingSphere } from './FloatingSphere';
import { DNA } from './DNA';
import { ParticleField } from './ParticleField';

export const Scene3D = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 60 }}
      style={{ background: 'transparent' }}
      gl={{ alpha: true }}
    >
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#6366f1" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8b5cf6" />
      
      <Stars radius={100} depth={50} count={500} factor={4} saturation={0} fade speed={1} />
      
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <DNA />
      </Float>
      
      <FloatingCube position={[-4, 2, -2]} color="#6366f1" size={0.8} speed={1.2} />
      <FloatingCube position={[4, -1, -3]} color="#8b5cf6" size={0.6} speed={0.8} />
      <FloatingCube position={[2, 3, -1]} color="#ec4899" size={0.7} speed={1.5} />
      
      <FloatingSphere position={[-3, -2, -2]} color="#06b6d4" size={0.5} speed={1.1} />
      <FloatingSphere position={[3, 1, -4]} color="#10b981" size={0.4} speed={0.9} />
      <FloatingSphere position={[-1, -3, -1]} color="#f59e0b" size={0.6} speed={1.3} />
      
      <ParticleField />
      
      <OrbitControls 
        enableZoom={false} 
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
        enableDamping
        dampingFactor={0.05}
      />
    </Canvas>
  );
};