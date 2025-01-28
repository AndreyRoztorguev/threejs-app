import * as THREE from "three";

export const onResize = (camera: THREE.PerspectiveCamera, renderer: THREE.WebGLRenderer) => {
  const resize = () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  };

  window.addEventListener("resize", resize);
};
