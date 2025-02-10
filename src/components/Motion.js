import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

const ParticleBackground = () => {
  const canvasRef = useRef(null);
  const [isScrolling, setIsScrolling] = useState(false);
  let scrollTimeout = null;

  useEffect(() => {
    // Create scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    canvasRef.current.appendChild(renderer.domElement);

    // Create particle system
    const particlesCount = 500;
    const positions = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 100;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    const material = new THREE.PointsMaterial({ color: 0xffffff, size: 0.005 });
    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    camera.position.z = 50;

    // Resize handling
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    // Scroll handling
    const handleScroll = () => {
      setIsScrolling(true);
      if (scrollTimeout) clearTimeout(scrollTimeout);

      // Set a delay to resume animation after scrolling stops
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 300); // 300ms delay after scrolling stops
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Animation function
    const animate = () => {
      requestAnimationFrame(animate);

      if (!isScrolling) {
        particles.rotation.x += 0.0005;
        particles.rotation.y += 0.0005;
        renderer.render(scene, camera);
      }
    };

    animate();

    // Cleanup
    return () => {
      renderer.dispose();
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
      if (canvasRef.current && renderer.domElement) {
        canvasRef.current.removeChild(renderer.domElement);
      }
    };
  }, [isScrolling]);

  return (
    <div
      ref={canvasRef}
      style={{
        width: "100vw",
        height: "100vh",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: -1,
        overflow: "hidden",
      }}
    ></div>
  );
};

export default ParticleBackground;
