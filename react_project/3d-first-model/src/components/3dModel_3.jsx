import React, { useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { BufferGeometry } from "three";

const Model13D = () => {
useEffect(() => {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    100
  );
  camera.position.z = 5;

  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  //document.body.appendChild(renderer.domElement);
  document.getElementById("background").appendChild(renderer.domElement);

  const generateSpheres = () => {
    const geometry = new THREE.BoxGeometry(0.05, 0.05, 0.05);
    const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const sphere = new THREE.Mesh(geometry, material);
    sphere.position.x = Math.random() * 10 - 5;
    sphere.position.z = Math.random() * 10 - 5;
    sphere.position.y = Math.random() * 10 - 5;
    scene.add(sphere);

    const speed = Math.random() * 0.05 - 0.025;
    const direction = Math.random() > 0.5 ? 1 : -1;
    const initialY = sphere.position.y;
    sphere.userData = {
      speed,
      direction,
      initialY,
    };
  };
  for (let i = 0; i < 500; i++) {
    generateSpheres();  
  }
// Define your maximum distance threshold for connections
  const thresholdDistance = 1;

// Get all spheres in the scene
  const spheres = scene.children.filter(
    (o) => o.type === "Mesh" && o.geometry.type === "BoxGeometry"
  );

// Iterate through each pair of spheres
  for (let i = 0; i < spheres.length; i++) {
    for (let j = i + 1; j < spheres.length; j++) {
      const sphere1 = spheres[i];
      const sphere2 = spheres[j];

    // Calculate the distance between the two spheres
      const distance = sphere1.position.distanceTo(sphere2.position);

    // If the distance is less than the threshold, create a line object
      if (distance < thresholdDistance) {
        const material = new THREE.LineBasicMaterial({ color: 0xffffff });
        const geometry = new THREE.Geometry();
        geometry.vertices.push(sphere1.position);
        geometry.vertices.push(sphere2.position);
        const line = new THREE.Line(geometry, material);
        scene.add(line);
      }
    }
  }

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.autoRotate = true;
  controls.rotateSpeed = 10;
  controls.enableZoom = false;
  controls.update();
  controls.addEventListener("change", () => {
    renderer.render(scene, camera);
  });

  function animate() {
    requestAnimationFrame(animate);

  // Update the position of each sphere based on its speed and direction
    for (let i = 0; i < spheres.length; i++) {
      const sphere = spheres[i];
      sphere.position.y +=
      sphere.userData.speed * sphere.userData.direction;
      if (sphere.position.y > sphere.userData.initialY + 2 || sphere.position.y < sphere.userData.initialY - 2){
        sphere.userData.direction *= -1;
      }
    }

    controls.update();

    renderer.render(scene, camera);
  }

  animate();
  renderer.render(scene, camera);

// Clean up, or this element repeat itself every time in the page.
  return () => {
  //document.body.removeChild(renderer.domElement);
  };

  }, []);

return (
<div
id="background"
style={{
position: "fixed",
top: 0,
left: 0,
//overflow: 'hidden',
}}
></div>
);
};

export default Model13D;
