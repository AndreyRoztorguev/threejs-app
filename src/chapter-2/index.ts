import GUI from "lil-gui";
import * as THREE from "three";
import { initiScene, InitSceneProps } from "../bootstrap/bootstrap";
import { floatingFloor } from "../bootstrap/floor";
import { intializeRendererControls } from "../controls/renderer-control";
import { initializeHelperControls } from "../controls/helpers-control";
import { initializeSceneControls } from "../controls/scene-controls";
import { initializeAddRemoveCubeControls } from "../controls/add-remove-cube-controls";

const props: InitSceneProps = {
  backgroundColor: new THREE.Color(0xffffff),
  fogColor: new THREE.Color(0xffffff),
  disableShadows: false,
  disableLights: false,
  disableDefaultControls: false,
};
const gui = new GUI();

initiScene(props)(({ scene, camera, renderer, orbitControls }) => {
  camera.position.set(-7, 2, 5);
  orbitControls.update();

  floatingFloor(scene, 10);

  intializeRendererControls(gui, renderer);
  initializeHelperControls(gui, scene);
  initializeSceneControls(gui, scene, true);
  initializeAddRemoveCubeControls(gui, scene, new THREE.MeshStandardMaterial({ color: 0xffffff }));

  function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
  }
  animate();
});
