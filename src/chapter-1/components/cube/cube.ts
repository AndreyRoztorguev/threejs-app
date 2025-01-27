import * as THREE from "three";
export const cubeMesh = (scene: THREE.Scene) => {
  const cubeGeometry = new THREE.BoxGeometry();
  const cubeMaterial = new THREE.MeshPhongMaterial({
    color: 0x00ff,
  });

  const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
  cube.position.x = 0;
  cube.castShadow = true;
  scene.add(cube);

  return cube;
};
