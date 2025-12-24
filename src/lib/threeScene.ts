
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export function initThreeScene(container: HTMLDivElement) {
  // Set up scene
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(container.clientWidth, container.clientHeight);
  container.appendChild(renderer.domElement);

  // Lighting
  const ambientLight = new THREE.AmbientLight(0xffffff, 1);
  scene.add(ambientLight);

  // Load GLB model
  const loader = new GLTFLoader();
  let model: THREE.Object3D | null = null;
  loader.load(
    '/animations/assembly.glb',
    (gltf) => {
      model = gltf.scene;
      scene.add(model);
      // Optionally, center and scale the model
      model.position.set(0, 0, 0);
      model.scale.set(1, 1, 1);
        // Set initial rotation so model faces camera
        model.rotation.y = Math.PI;
    },
    undefined,
    (error) => {
      // eslint-disable-next-line no-console
      console.error('Error loading GLB model:', error);
    }
  );

    camera.position.z = 8;

  // Mouse drag controls
  let isDragging = false;
  let previousX = 0;
  let previousY = 0;
  let targetRotationY = 0;
  let targetRotationX = 0;

  function onPointerDown(event: MouseEvent) {
    isDragging = true;
    previousX = event.clientX;
    previousY = event.clientY;
  }

  function onPointerMove(event: MouseEvent) {
    if (!isDragging || !model) return;
    const deltaX = event.clientX - previousX;
    const deltaY = event.clientY - previousY;
    previousX = event.clientX;
    previousY = event.clientY;
    // Adjust sensitivity as needed
    targetRotationY += deltaX * 0.01;
    targetRotationX += deltaY * 0.01;
    // Clamp X rotation to avoid flipping
    targetRotationX = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, targetRotationX));
  }

  function onPointerUp() {
    isDragging = false;
  }

  renderer.domElement.addEventListener('mousedown', onPointerDown);
  window.addEventListener('mousemove', onPointerMove);
  window.addEventListener('mouseup', onPointerUp);

  function animate() {
    requestAnimationFrame(animate);
    if (model) {
      // Smoothly interpolate to target rotation
      model.rotation.y += (targetRotationY - model.rotation.y) * 0.2;
      model.rotation.x += (targetRotationX - model.rotation.x) * 0.2;
    }
    renderer.render(scene, camera);
  }
  animate();

  // Return cleanup function
  return () => {
    renderer.domElement.removeEventListener('mousedown', onPointerDown);
    window.removeEventListener('mousemove', onPointerMove);
    window.removeEventListener('mouseup', onPointerUp);
    renderer.dispose();
    container.removeChild(renderer.domElement);
  };
}
