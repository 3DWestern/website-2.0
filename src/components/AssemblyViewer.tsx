"use client";

import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { EffectComposer, Bloom, Noise, ToneMapping } from '@react-three/postprocessing';
import React, { Suspense } from 'react';
import { GLTF } from 'three-stdlib';
import * as THREE from 'three';
import { Mesh } from 'three';

// Preload the model for faster loading
useGLTF.preload('/animations/assembly.glb');

// Main scene component with lighting and controls
function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <OrbitControls 
        enablePan={false} 
        enableZoom={false} 
        enableRotate={true}
        maxPolarAngle={Math.PI / 2}
      />
      <Suspense fallback={null}>
        <Model />
      </Suspense>
      <EffectComposer>
        <Bloom luminanceThreshold={0.2} luminanceSmoothing={0.9} intensity={1.5} />
        <Noise opacity={0.02} />
        <ToneMapping />
      </EffectComposer>
    </>
  );
}

const Model = () => {
  console.log('[Model] Component rendering...');
  
  const gltf = useGLTF('/animations/assembly.glb') as GLTF;
  console.log('[Model] GLTF loaded via useGLTF hook:', gltf);

  // Find meshes by name
  const meshRFDD = gltf.scene.getObjectByName('RFDD_0') as Mesh;
  const meshEdges = gltf.scene.getObjectByName('RFDD_edges_0') as Mesh;

  console.log('[Model] Meshes found:', { meshRFDD: !!meshRFDD, meshEdges: !!meshEdges });

  // Clone and enhance the edges material for bloom effect
  const edgesMaterial = React.useMemo(() => {
    if (!meshEdges?.material) return null;
    const mat = (meshEdges.material as THREE.Material).clone() as THREE.MeshStandardMaterial;
    mat.toneMapped = false;
    if ('emissiveIntensity' in mat) {
      mat.emissiveIntensity = 3.65;
    }
    return mat;
  }, [meshEdges?.material]);

  const groupRef = React.useRef<THREE.Group>(null);

  // Slow rotation animation
  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.z += delta * 0.15;
    }
  });

  if (!meshRFDD || !meshEdges || !edgesMaterial) {
    console.warn('[Model] Missing meshes or material, returning null');
    return null;
  }

  console.log('[Model] Rendering group with meshes');

  return (
    <group position={[2, -2, -0.25]} rotation={[-Math.PI / 2, 0, 0]}>
      <group ref={groupRef} dispose={null}>
        <mesh
          geometry={meshRFDD.geometry}
          material={meshRFDD.material}
          scale={[1, 1, 1]}
          position={[0, 0.13, 0.13]}
        />
        <mesh
          geometry={meshEdges.geometry}
          material={edgesMaterial}
          scale={[1, 1, 1]}
          position={[0, 0.13, 0.13]}
        />
      </group>
    </group>
  );
};

// Old implementation with manual loading - commented out
/*
const ModelOld = ({ onAfterRender, onError }: { onAfterRender?: () => void; onError?: () => void }) => {
  const [model, setModel] = useState<GLTF>();

  console.log('[Model] Component render, model state:', model ? 'loaded' : 'null');

  React.useEffect(() => {
    console.log('[Model] useEffect triggered - starting model load');
    const loadModel = async () => {
      try {
        console.log('[Model] Loading model from /animations/assembly.glb');
        const gltf = await new GLTFLoader().loadAsync('/animations/assembly.glb');
        setModel(gltf);
        console.log("[Model] Model loaded successfully", gltf);
      } catch (err) {
        onError && onError();
        console.error("[Model] Error loading model:", err);
      }
    };
    loadModel();
  }, [onError]);

  if (!model) {
    console.log('[Model] Returning null - model not loaded yet');
    return null;
  }

  // Find meshes by name
  const meshRFDD = model.scene.getObjectByName('RFDD_0') as Mesh;
  const meshEdges = model.scene.getObjectByName('RFDD_edges_0') as Mesh;

  console.log('[Model] Meshes found:', { meshRFDD: !!meshRFDD, meshEdges: !!meshEdges });

  if (!meshRFDD || !meshEdges) {
    console.warn('[Model] Missing meshes, returning null');
    return null;
  }

  console.log('[Model] Rendering group with meshes');

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
*/

const gradientBg = {
  width: '100%',
  height: '100%',
  position: 'relative' as const,
  borderRadius: '1rem',
  backgroundImage:
    'radial-gradient(circle closest-corner at 25% 60%, rgba(238, 39, 39, 0.25), rgba(255, 255, 255, 0)), ' +
    'radial-gradient(circle farthest-side at 71% 16%, rgba(154, 39, 238, 0.15), rgba(255, 255, 255, 0) 35%), ' +
    'radial-gradient(circle closest-corner at 32% 38%, rgba(238, 164, 39, 0.1), rgba(255, 255, 255, 0) 76%), ' +
    'radial-gradient(circle farthest-side at 69% 81%, rgba(255, 0, 48, 0.1), rgba(255, 255, 255, 0) 76%), ' +
    'linear-gradient(#202124, #202124)',
};


const AssemblyViewer = () => {
  console.log('[AssemblyViewer] Component render');
  
  const dpr = 1.25;
  const fallback = false;

  console.log('[AssemblyViewer] State:', { dpr, fallback });

  // Hardware acceleration check (optional, simplified)
  const hasHWA = typeof window !== 'undefined';
  console.log('[AssemblyViewer] Hardware acceleration:', hasHWA);

  React.useEffect(() => {
    console.log('[AssemblyViewer] Component mounted');
    
    // Check if Canvas is rendering
    setTimeout(() => {
      const canvas = document.querySelector('canvas');
      console.log('[AssemblyViewer] Canvas element:', canvas);
      if (canvas) {
        console.log('[AssemblyViewer] Canvas dimensions:', canvas.width, 'x', canvas.height);
        console.log('[AssemblyViewer] Canvas client dimensions:', canvas.clientWidth, 'x', canvas.clientHeight);
        
        // Check parent dimensions
        let parent = canvas.parentElement;
        let depth = 0;
        while (parent && depth < 5) {
          const computed = window.getComputedStyle(parent);
          console.log(`[AssemblyViewer] Parent ${depth}:`, {
            tag: parent.tagName,
            class: parent.className,
            width: computed.width,
            height: computed.height,
            position: computed.position
          });
          parent = parent.parentElement;
          depth++;
        }
      }
    }, 100);
    
    return () => console.log('[AssemblyViewer] Component unmounted');
  }, []);


  
  return (
    <div style={{ position: 'absolute', inset: 0, borderRadius: '1rem', backgroundImage: gradientBg.backgroundImage }}>
      {hasHWA && !fallback ? (
        <div style={{ position: 'absolute', inset: 0 }}>
          <Canvas
            style={{ width: '100%', height: '100%', display: 'block' }}
            camera={{ position: [0, 0, 12], fov: 75 }}
            gl={{ preserveDrawingBuffer: true }}
            resize={{ scroll: false, debounce: 0 }}
            onCreated={(state) => {
              console.log('[AssemblyViewer] Canvas created!', state);
              const parent = state.gl.domElement.parentElement;
              if (parent) {
                const width = parent.clientWidth;
                const height = parent.clientHeight;
                console.log('[AssemblyViewer] Setting size to:', width, height);
                state.gl.setSize(width, height);
              }
            }}
          >
            <Scene />
          </Canvas>
        </div>
      ) : (
        <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
          <span>3D model could not be loaded or hardware acceleration is disabled.</span>
        </div>
      )}
    </div>
  );
};

export default AssemblyViewer;
