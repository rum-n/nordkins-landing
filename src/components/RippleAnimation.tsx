import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const RippleAnimation: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const meshRef = useRef<THREE.Mesh | null>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const targetMouseRef = useRef({ x: 0, y: 0 });
  const animationIdRef = useRef<number | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      100,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;
    cameraRef.current = camera;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Geometry - plane with many vertices for ripple effect
    const geometry = new THREE.PlaneGeometry(15, 10, 50, 50);

    // Store original positions
    const positionAttribute = geometry.attributes.position;
    const originalPositions = new Float32Array(positionAttribute.count * 3);
    for (let i = 0; i < positionAttribute.count; i++) {
      originalPositions[i * 3] = positionAttribute.getX(i);
      originalPositions[i * 3 + 1] = positionAttribute.getY(i);
      originalPositions[i * 3 + 2] = positionAttribute.getZ(i);
    }

    // Material with gradient-like color
    const material = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      wireframe: true,
      transparent: true,
      opacity: 0.1,
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);
    meshRef.current = mesh;

    // Mouse move handler
    const handleMouseMove = (event: MouseEvent) => {
      targetMouseRef.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      targetMouseRef.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Animation loop
    const clock = new THREE.Clock();

    const animate = () => {
      const elapsedTime = clock.getElapsedTime();

      if (meshRef.current) {
        const geometry = meshRef.current.geometry;
        const positionAttribute = geometry.attributes.position;

        // Smooth mouse interpolation
        mouseRef.current.x +=
          (targetMouseRef.current.x - mouseRef.current.x) * 0.02;
        mouseRef.current.y +=
          (targetMouseRef.current.y - mouseRef.current.y) * 0.02;

        // Create ripple effect
        for (let i = 0; i < positionAttribute.count; i++) {
          const x = originalPositions[i * 3];
          const y = originalPositions[i * 3 + 1];

          // Multiple wave sources
          const distance1 = Math.sqrt(
            Math.pow(x - mouseRef.current.x * 1, 2) +
              Math.pow(y - mouseRef.current.y * 3, 2)
          );

          const distance2 = Math.sqrt(
            Math.pow(x + Math.sin(elapsedTime * 0.5) * 2, 2) +
              Math.pow(y + Math.cos(elapsedTime * 0.5) * 2, 2)
          );

          // Combine multiple ripple effects
          const wave1 = Math.sin(distance1 * 2 - elapsedTime * 2) * 0.3;
          const wave2 = Math.sin(distance2 * 1.5 - elapsedTime * 1.5) * 0.2;
          const wave3 =
            Math.sin(x * 0.5 + elapsedTime) *
            Math.cos(y * 0.5 + elapsedTime) *
            0.15;

          const newZ = wave1 + wave2 + wave3;
          positionAttribute.setZ(i, newZ);
        }

        positionAttribute.needsUpdate = true;

        // Gentle rotation
        meshRef.current.rotation.z = Math.sin(elapsedTime * 0.2) * 0.05;
      }

      renderer.render(scene, camera);
      animationIdRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      if (cameraRef.current && rendererRef.current) {
        cameraRef.current.aspect = window.innerWidth / window.innerHeight;
        cameraRef.current.updateProjectionMatrix();
        rendererRef.current.setSize(window.innerWidth, window.innerHeight);
      }
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);

      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }

      if (container && rendererRef.current) {
        container.removeChild(rendererRef.current.domElement);
      }

      geometry.dispose();
      material.dispose();
      rendererRef.current?.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: "none",
      }}
    />
  );
};

export default RippleAnimation;
