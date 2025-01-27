import * as THREE from "three";
export const foreverPlane = (scene: THREE.Scene) => {
  const geo = new THREE.PlaneGeometry(10000, 10000);
  const mat = new THREE.MeshLambertMaterial({
    color: 0xffffff,
  });
  const mesh = new THREE.Mesh(geo, mat);
  mesh.position.set(0, -2, 0);
  mesh.rotation.set(Math.PI / -2, 0, 0);
  mesh.receiveShadow = true;
  mesh.name = "forever-floor";
  scene.add(mesh);

  return mesh;
};
