import * as THREE from "three";
import { foreverPlane } from "./components/floor/foreverPlane";
import { cubeMesh } from "./components/cube/cube";
import { torusknotMesh } from "./components/torusknot/torusknot";
import Stats from "three/examples/jsm/libs/stats.module.js";
import { GLTFLoader, OrbitControls } from "three/examples/jsm/Addons.js";
import GUI from "lil-gui";

const scene = new THREE.Scene();
scene.background = new THREE.Color(0xffffff);
scene.fog = new THREE.Fog(0xffffff, 0.0025, 50);
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.2, 1000);
camera.position.x = 0;
camera.position.z = 3;
camera.position.y = 0;

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.outputColorSpace = "srgb";
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.VSMShadowMap;
// renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0xffffff);
const orbitControls = new OrbitControls(camera, renderer.domElement);
const gui = new GUI();
const props = {
  cubeSpeed: 0.01,
  torusSpeed: 0.01,
};
gui.add(props, "cubeSpeed", -0.2, 0.2, 0.01);
gui.add(props, "torusSpeed", -0.2, 0.2, 0.01);

let porsche: any = null;

const loader = new GLTFLoader();
loader.load(
  "https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Assets/main/Models/BrainStem/glTF/BrainStem.gltf",
  (loadedObject) => {
    porsche = loadedObject.scene.children[0];
    porsche.position.z = -2;
    porsche.position.x = 0;
    porsche.position.y = 0;
    porsche.castShadow = true;
    scene.add(porsche);
  },
  (xhr) => {
    console.log((xhr.loaded / xhr.total) * 100 + "% loaded"); // Progress
  }
);

// cube
const cube = cubeMesh(scene);
// torusknot
const torusKnot = torusknotMesh(scene);
// ground
// floatingFloor(scene, 3);
foreverPlane(scene);

// light
// const light = new THREE.DirectionalLight(0xffffff, 1);
// light.position.set(1, 5, 5);
// scene.add(light);
// light.castShadow = true;
scene.add(new THREE.AmbientLight(0xffffff));
const dirLight = new THREE.DirectionalLight(0xffffff, 1);
scene.add(dirLight);
dirLight.castShadow = true;
dirLight.position.set(1, 5, 5);

const stats = new Stats();
document.body.appendChild(stats.dom);
document.body.appendChild(renderer.domElement);
// renderer.render(scene, camera);

function animate() {
  requestAnimationFrame(animate);

  cube.rotation.x += props.cubeSpeed;
  cube.rotation.y += props.cubeSpeed;
  cube.rotation.z += props.cubeSpeed;
  torusKnot.rotation.x -= props.torusSpeed;
  torusKnot.rotation.y += props.torusSpeed;
  torusKnot.rotation.z -= props.torusSpeed;

  stats.update();
  orbitControls.update();
  if (porsche) {
    porsche.rotation.z += 0.01; // Rotate around the Y-axis
    porsche.position.x = Math.cos(Date.now() * 0.001) * 2;
  }

  renderer.render(scene, camera);
}
animate();
