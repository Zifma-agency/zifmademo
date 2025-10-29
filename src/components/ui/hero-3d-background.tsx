import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, Wireframe } from '@react-three/drei';
import { Suspense, useRef } from 'react';
import * as THREE from 'three';

const FloatingShape = ({ position, geometry, color }: { position: [number, number, number], geometry: THREE.BufferGeometry, color: string }) => {
  return (
    <Float
      speed={1.5}
      rotationIntensity={0.5}
      floatIntensity={0.5}
      floatingRange={[-0.5, 0.5]}
    >
      <mesh position={position} castShadow>
        <primitive object={geometry} />
        <meshStandardMaterial color={color} transparent opacity={0.6} />
      </mesh>
    </Float>
  );
};

const WireframeShape = ({ position, geometry }: { position: [number, number, number], geometry: THREE.BufferGeometry }) => {
  return (
    <Float
      speed={2}
      rotationIntensity={0.8}
      floatIntensity={0.3}
      floatingRange={[-0.3, 0.3]}
    >
      <mesh position={position}>
        <primitive object={geometry} />
        <meshBasicMaterial color="#ef4444" wireframe />
      </mesh>
    </Float>
  );
};

const Scene3D = () => {
  const boxGeometry = new THREE.BoxGeometry(1.5, 1.5, 1.5);
  const torusGeometry = new THREE.TorusGeometry(1, 0.4, 16, 32);
  const octahedronGeometry = new THREE.OctahedronGeometry(1);
  const icosahedronGeometry = new THREE.IcosahedronGeometry(1);

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -5]} intensity={0.5} color="#ef4444" />
      
      {/* Floating solid shapes */}
      <FloatingShape position={[-4, 2, 0]} geometry={boxGeometry} color="#fecaca" />
      <FloatingShape position={[4, -1, 0]} geometry={torusGeometry} color="#fee2e2" />
      <FloatingShape position={[2, 3, -2]} geometry={octahedronGeometry} color="#fca5a5" />
      
      {/* Wireframe shapes */}
      <WireframeShape position={[-3, -2, -1]} geometry={icosahedronGeometry} />
      <WireframeShape position={[5, 1, -3]} geometry={boxGeometry} />
      <WireframeShape position={[-1, 3, -2]} geometry={torusGeometry} />
      
      {/* Grid plane for depth */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -5, 0]}>
        <planeGeometry args={[20, 20, 20, 20]} />
        <meshBasicMaterial color="#fecaca" wireframe opacity={0.2} transparent />
      </mesh>
    </>
  );
};

const Hero3DBackground = () => {
  return (
    <div className="absolute inset-0 z-0 opacity-40">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 50 }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          <Scene3D />
          <OrbitControls 
            enableZoom={false} 
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.5}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Hero3DBackground;
