/*
"use client";

import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';
import { useEffect } from 'react';

function TestMesh() {
  // console.log('[TestMesh] Rendering mesh component');
  
  useEffect(() => {
    // console.log('[TestMesh] Mesh mounted!');
  }, []);
  
  return (
    <>
      <ambientLight intensity={1} />
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[2, 2, 2]} />
        <meshBasicMaterial color="red" />
      </mesh>
    </>
  );
}

export function TestCanvas() {
  // console.log('[TestCanvas] Rendering');
  
  return (
    <div style={{ width: '400px', height: '400px', background: 'black', position: 'relative' }}>
      <Canvas
        style={{ width: '100%', height: '100%', display: 'block' }}
        camera={{ position: [0, 0, 5], fov: 75 }}
        resize={{ scroll: false, debounce: 0 }}
        onCreated={(state) => {
          // console.log('[TestCanvas] Canvas created!', state);
          // console.log('[TestCanvas] GL size:', state.gl.getSize(new THREE.Vector2()));
          // Force resize to parent dimensions
          state.gl.setSize(400, 400);
        }}
      >
        <TestMesh />
      </Canvas>
    </div>
  );
}
*/