import React, { useEffect } from "react";
import * as THREE from 'three'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const Model13D = () => {
  useEffect(() => {
    let particles = [];
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('background').appendChild(renderer.domElement);

    for (let i = 0; i < 1000; i++) {
      const geometry = new THREE.BoxGeometry(1, 1, 1);
      const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
      particles[i] = new THREE.Mesh(geometry, material);
      particles[i].position.x = Math.random() * 200 - 100;
      particles[i].position.z = Math.random() * 200 - 100;
      particles[i].position.y = Math.random() * 200 - 100;
      scene.add(particles[i]);

      const speed = Math.random() * 0.1 + 0.01; // adjust speed range to preference
      particles[i].userData = { speed };
      particles[i].userData.direction = new THREE.Vector3(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5).normalize();
    }

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.autoRotate = false;
    controls.rotateSpeed = 10;
    controls.enableZoom = true;

    function animate() {
      requestAnimationFrame(animate);

      particles.forEach((element) => {
        const { speed, direction } = element.userData;
        element.position.addScaledVector(direction, speed);

        // Bounce off walls of the cube
        if (Math.abs(element.position.x) >= 100) {
          element.position.x = Math.sign(element.position.x) * 100;
          element.userData.direction.x = -element.userData.direction.x;
        }
        if (Math.abs(element.position.y) >= 100) {
          element.position.y = Math.sign(element.position.y) * 100;
          element.userData.direction.y = -element.userData.direction.y;
        }
        if (Math.abs(element.position.z) >= 100) {
          element.position.z = Math.sign(element.position.z) * 100;
          element.userData.direction.z = -element.userData.direction.z;
        }
        element.rotation.x += 0.05;
        element.rotation.y += 0.05;
      });

      controls.update();
      renderer.render(scene, camera);
    }

    animate();

    return () => {
      document.getElementById('background').removeChild(renderer.domElement);
    }
  }, []);

  return (
    <div
      id='background'
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
      }}
    ></div>
  )
};

export default Model13D;

