import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const Loader3D = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const currentMount = mountRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    const textureLoader = new THREE.TextureLoader();
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    currentMount.appendChild(renderer.domElement);
    
    // Load screen texture
    const screenTexture = textureLoader.load('@/public/c.jpg'); // Replace with your image path
    screenTexture.minFilter = THREE.LinearFilter;
    screenTexture.magFilter = THREE.LinearFilter;
    
    const baseGeometry = new THREE.BoxGeometry(3, 0.2, 2);
    const baseMaterial = new THREE.MeshPhongMaterial({ 
      color: '#FA812F',
      shininess: 100,
      specular: 0x444444
    });
    const base = new THREE.Mesh(baseGeometry, baseMaterial);

    const screenOuterGeometry = new THREE.BoxGeometry(3, 2, 0.1);
    const screenOuter = new THREE.Mesh(screenOuterGeometry, baseMaterial);
    
    const screenDisplayGeometry = new THREE.PlaneGeometry(2.8, 1.8);
    const screenDisplayMaterial = new THREE.MeshPhongMaterial({ 
      map: screenTexture,
      emissive: 0x333333,
      emissiveMap: screenTexture,
      emissiveIntensity: 0.5
    });
    const screenDisplay = new THREE.Mesh(screenDisplayGeometry, screenDisplayMaterial);
    
    const keyboardGeometry = new THREE.PlaneGeometry(2.8, 1.6);
    const keyboardMaterial = new THREE.MeshPhongMaterial({ 
      color: 0x333333,
      shininess: 30
    });
    const keyboard = new THREE.Mesh(keyboardGeometry, keyboardMaterial);
    
    const trackpadGeometry = new THREE.PlaneGeometry(1, 0.6);
    const trackpadMaterial = new THREE.MeshPhongMaterial({ 
      color: 0x222222,
      shininess: 60
    });
    const trackpad = new THREE.Mesh(trackpadGeometry, trackpadMaterial);
    
    screenOuter.position.y = 1;
    screenOuter.position.z = -1;
    screenOuter.rotation.x = Math.PI * 0.1;
    
    screenDisplay.position.y = 1;
    screenDisplay.position.z = -0.95;
    screenDisplay.rotation.x = Math.PI * 0.1;
    
    keyboard.rotation.x = -Math.PI * 0.5;
    keyboard.position.y = 0.11;
    
    trackpad.rotation.x = -Math.PI * 0.5;
    trackpad.position.y = 0.11;
    trackpad.position.z = 0.6;
    
    const keys = new THREE.Group();
    const keyGeometry = new THREE.BoxGeometry(0.15, 0.15, 0.05);
    const keyMaterial = new THREE.MeshPhongMaterial({ color: 0x444444 });
    
    for(let i = 0; i < 6; i++) {
      for(let j = 0; j < 10; j++) {
        const key = new THREE.Mesh(keyGeometry, keyMaterial);
        key.position.set(-1.3 + j * 0.3, 0.12, -0.4 + i * 0.2);
        keys.add(key);
      }
    }
    
    const laptopGroup = new THREE.Group();
    laptopGroup.add(base);
    laptopGroup.add(screenOuter);
    laptopGroup.add(screenDisplay);
    laptopGroup.add(keyboard);
    laptopGroup.add(trackpad);
    laptopGroup.add(keys);
    
    scene.add(laptopGroup);
    
    const mainLight = new THREE.DirectionalLight(0xffffff, 1);
    mainLight.position.set(0, 5, 5);
    scene.add(mainLight);
    
    const backLight = new THREE.DirectionalLight(0xffffff, 0.5);
    backLight.position.set(0, 5, -5);
    scene.add(backLight);
    
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    
    camera.position.z = 5;
    camera.position.y = 2;
    camera.lookAt(0, 0, 0);
    
    const animate = () => {
      requestAnimationFrame(animate);
      laptopGroup.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    
    animate();
    
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      currentMount.removeChild(renderer.domElement);
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return <div ref={mountRef} className="w-full h-full absolute top-0 left-0" />;
};

export default Loader3D;