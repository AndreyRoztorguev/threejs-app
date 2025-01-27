import * as THREE from "three";

export const torusknotMesh = (scene: THREE.Scene) => {
  const torusKnotGeom = new THREE.TorusGeometry(0.5, 0.2, 100, 100);
  const torusKnotMat = new THREE.MeshStandardMaterial({
    color: 0x00ff88,
    roughness: 0.1,
  });
  const torusKnot = new THREE.Mesh(torusKnotGeom, torusKnotMat);
  torusKnot.position.x = 2;
  torusKnot.castShadow = true;
  scene.add(torusKnot);

  return torusKnot;
};
