import * as THREE from "three";
export const floatingFloor = (scene: THREE.Scene, size: number) => {
  const s = size ? size : 6;
  const geo = new THREE.BoxGeometry(s, 0.25, s, 10, 10, 10);
  const mat = new THREE.MeshStandardMaterial({
    color: 0xdddddd,
  });
  const mesh = new THREE.Mesh(geo, mat);
  mesh.position.set(0, -2, -1);
  mesh.receiveShadow = true;
  mesh.name = "floating-floor";
  scene.add(mesh);

  return mesh;
};
