import * as THREE from "three";
import { initOrbitControls } from "../controller/orbit-controller";
import { initLighting } from "./lighting";
import { onResize } from "../utils/update-on-resize";
import { OrbitControls } from "three/examples/jsm/Addons.js";

export type InitSceneProps = {
  backgroundColor: THREE.Color;
  fogColor: THREE.Color;
  disableShadows: boolean;
  disableLights: boolean;
  disableDefaultControls: boolean;
};

export const initiScene = ({
  backgroundColor,
  fogColor,
  disableShadows,
  disableLights,
  disableDefaultControls,
}: InitSceneProps) => {
  function init(
    fn: (options: {
      scene: THREE.Scene;
      camera: THREE.Camera;
      renderer: THREE.WebGLRenderer;
      orbitControls: OrbitControls;
    }) => void
  ) {
    // basic scene setup
    const scene = new THREE.Scene();
    if (backgroundColor) {
      scene.background = backgroundColor;
    }
    if (fogColor) {
      scene.fog = new THREE.Fog(fogColor, 0.0025, 50);
    }
    // setup camera and basic renderer
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.VSMShadowMap;
    renderer.setClearColor(backgroundColor);

    onResize(camera, renderer);
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // initialize orbit controls
    let orbitControls!: OrbitControls;
    if (!disableDefaultControls) {
      orbitControls = initOrbitControls(camera, renderer);
    }
    // add some basic lighting to the scene
    if (!disableLights) {
      initLighting(scene, { disableShadows });
    }
    fn({ scene, camera, renderer, orbitControls });
  }
  return init;
};
