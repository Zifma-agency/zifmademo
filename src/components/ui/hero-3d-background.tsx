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
  const boxGeometry = new THREE.BoxGeometry(0.4, 0.4, 0.4);
  const torusGeometry = new THREE.TorusGeometry(0.3, 0.15, 8, 16);
  const octahedronGeometry = new THREE.OctahedronGeometry(0.3);
  const icosahedronGeometry = new THREE.IcosahedronGeometry(0.3);
  const sphereGeometry = new THREE.SphereGeometry(0.25, 16, 16);

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -5]} intensity={0.5} color="#ef4444" />
      
      {/* Floating solid shapes - distributed uniformly */}
      <FloatingShape position={[-6, 3, -2]} geometry={boxGeometry} color="#fecaca" />
      <FloatingShape position={[7, -2, 1]} geometry={torusGeometry} color="#fee2e2" />
      <FloatingShape position={[3, 4, -3]} geometry={octahedronGeometry} color="#fca5a5" />
      <FloatingShape position={[-8, -3, 0]} geometry={sphereGeometry} color="#fecaca" />
      <FloatingShape position={[5, 2, -4]} geometry={icosahedronGeometry} color="#fee2e2" />
      <FloatingShape position={[-3, -4, 2]} geometry={boxGeometry} color="#fca5a5" />
      <FloatingShape position={[8, 1, -1]} geometry={torusGeometry} color="#fecaca" />
      <FloatingShape position={[-5, 4, -3]} geometry={octahedronGeometry} color="#fee2e2" />
      <FloatingShape position={[2, -3, 3]} geometry={sphereGeometry} color="#fca5a5" />
      <FloatingShape position={[-7, 1, 1]} geometry={icosahedronGeometry} color="#fecaca" />
      <FloatingShape position={[6, 3, -2]} geometry={boxGeometry} color="#fee2e2" />
      <FloatingShape position={[-2, -1, 4]} geometry={torusGeometry} color="#fca5a5" />
      
      {/* Wireframe shapes - distributed uniformly */}
      <WireframeShape position={[-4, -2, -1]} geometry={icosahedronGeometry} />
      <WireframeShape position={[9, 1, -2]} geometry={boxGeometry} />
      <WireframeShape position={[-1, 5, -4]} geometry={torusGeometry} />
      <WireframeShape position={[4, -4, 0]} geometry={octahedronGeometry} />
      <WireframeShape position={[-9, 2, 2]} geometry={sphereGeometry} />
      <WireframeShape position={[1, 0, -3]} geometry={icosahedronGeometry} />
      <WireframeShape position={[-6, -4, 3]} geometry={boxGeometry} />
      <WireframeShape position={[7, 4, 1]} geometry={torusGeometry} />
      <WireframeShape position={[-3, 2, -2]} geometry={octahedronGeometry} />
      <WireframeShape position={[5, -1, 4]} geometry={sphereGeometry} />
      <WireframeShape position={[-8, 0, -3]} geometry={icosahedronGeometry} />
      <WireframeShape position={[3, -2, 2]} geometry={boxGeometry} />
      
      {/* Grid plane for depth */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -5, 0]}>
        <planeGeometry args={[30, 30, 30, 30]} />
        <meshBasicMaterial color="#fecaca" wireframe opacity={0.15} transparent />
      </mesh>
    </>
  );
};

const Hero3DBackground = () => {
  return (
    <div className="absolute inset-0 z-0 opacity-40">
      <Canvas
        camera={{ position: [0, 0, 12], fov: 60 }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          <Scene3D />
          <OrbitControls 
            enableZoom={false} 
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.3}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Hero3DBackground;
