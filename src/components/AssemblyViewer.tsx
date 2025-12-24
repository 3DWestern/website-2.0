import { Canvas, extend } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment, PerformanceMonitor, Preload } from '@react-three/drei';
import { EffectComposer, Bloom, Noise, ToneMapping } from '@react-three/postprocessing';
import React, { Suspense, useState } from 'react';
import { suspend } from 'suspend-react';
import { GLTFLoader } from 'three-stdlib';
import { Mesh } from 'three';
extend({ OrbitControls });


const environment = import('@pmndrs/assets/hdri/city.exr').then((module) => module.default);
useGLTF.preload('/animations/assembly.glb');

const Model = ({ onAfterRender, onError }: { onAfterRender?: () => void; onError?: () => void }) => {
  const [model, setModel] = useState<any>();

  React.useEffect(() => {
    const loadModel = async () => {
      try {
        const gltf = await new GLTFLoader().loadAsync('/animations/assembly.glb');
        setModel(gltf);
      } catch (err) {
        onError && onError();
      }
    };
    loadModel();
  }, [onError]);

  if (!model) return null;

  // Find meshes by name
  const meshRFDD = model.scene.getObjectByName('RFDD_0');
  const meshEdges = model.scene.getObjectByName('RFDD_edges_0');

  if (!meshRFDD || !meshEdges) return null;

  return (
    <group dispose={null} position={[2, -2, -0.25]} rotation={[-Math.PI / 2, 0, 0]}>
      <mesh
        geometry={meshRFDD.geometry}
        material={meshRFDD.material}
        scale={[1, 1, 1]}
        position={[0, 0.13, 0.13]}
      />
      <mesh
        geometry={meshEdges.geometry}
        material={meshEdges.material}
        scale={[1, 1, 1]}
        position={[0, 0.13, 0.13]}
        material-toneMapped={false}
        material-emissiveIntensity={3.65}
        onAfterRender={onAfterRender}
      />
    </group>
  );
};


const gradientBg = {
  width: '100%',
  height: '100%',
  borderRadius: '1rem',
  backgroundImage:
    'radial-gradient(circle closest-corner at 25% 60%, rgba(238, 39, 39, 0.25), rgba(255, 255, 255, 0)), ' +
    'radial-gradient(circle farthest-side at 71% 16%, rgba(154, 39, 238, 0.15), rgba(255, 255, 255, 0) 35%), ' +
    'radial-gradient(circle closest-corner at 32% 38%, rgba(238, 164, 39, 0.1), rgba(255, 255, 255, 0) 76%), ' +
    'radial-gradient(circle farthest-side at 69% 81%, rgba(255, 0, 48, 0.1), rgba(255, 255, 255, 0) 76%), ' +
    'linear-gradient(#202124, #202124)',
};


const AssemblyViewer = () => {
  const [dpr, setDpr] = useState(1.25);
  const [fallback, setFallback] = useState(false);

  // Hardware acceleration check (optional, simplified)
  const hasHWA = typeof window !== 'undefined';

  return (
    <div style={gradientBg}>
      {hasHWA && !fallback ? (
        <Canvas
          camera={{ position: [0, 5, 10], filmOffset: 0 }}
          style={{ cursor: 'move' }}
          dpr={dpr}
        >
          <PerformanceMonitor
            onIncline={() => setDpr(Math.min(dpr + 0.25, 1.5))}
            onDecline={() => setDpr(Math.max(dpr - 0.25, 0.75))}
          />
          <Suspense fallback={null}>
            <Model onError={() => setFallback(true)} />
            <Environment files={suspend(environment) as string} />
            <Preload all />
          </Suspense>
          <OrbitControls
            target={[0, 0, 0]}
            autoRotate
            autoRotateSpeed={0.5}
            rotateSpeed={1}
            maxPolarAngle={1.6}
            enablePan={false}
            enableZoom={false}
          />
          <EffectComposer enableNormalPass={false} multisampling={4}>
            <Bloom mipmapBlur luminanceThreshold={1} intensity={5} />
            <Noise opacity={0.05} />
            <ToneMapping
              adaptive
              resolution={256}
              middleGrey={0.4}
              maxLuminance={16.0}
              averageLuminance={1.0}
              adaptationRate={1.0}
            />
          </EffectComposer>
        </Canvas>
      ) : (
        <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
          <span>3D model could not be loaded or hardware acceleration is disabled.</span>
        </div>
      )}
    </div>
  );
};

export default AssemblyViewer;
