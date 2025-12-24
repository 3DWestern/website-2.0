import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import React, { Suspense } from 'react';

const Model = () => {
  const gltf = useGLTF('/animations/assembly.glb');
  // Set rotation: [x, y, z] in radians
  return <primitive object={gltf.scene} rotation={[0, 0, 0]} />;
};

const AssemblyViewer = () => (
  <div style={{ width: '100%', height: '100%' }}>
    <Canvas camera={{ position: [0, -20, 65] }}>
      <ambientLight intensity={1} />
      <Suspense fallback={null}>
        <Model />
      </Suspense>
      <OrbitControls enablePan={false} enableZoom={false} />
      <EffectComposer enableNormalPass={false} multisampling={4}>
        <Bloom mipmapBlur luminanceThreshold={1} />
      </EffectComposer>
    </Canvas>
  </div>
);

export default AssemblyViewer;
