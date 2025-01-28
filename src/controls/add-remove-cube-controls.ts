import GUI from "lil-gui";
import * as THREE from "three";
import { addCube } from "../components/mesh/cube";

export const initializeAddRemoveCubeControls = (
  gui: GUI,
  parent: THREE.Object3D,
  material: THREE.Material
) => {
  const addRemoveProps = {
    addCube: () => addCube(parent, material),
    removeCube: () => removeCube(parent),
  };

  gui.add(addRemoveProps, "addCube");
  gui.add(addRemoveProps, "removeCube");
};

const removeCube = (parent: THREE.Object3D) => {
  parent.children.pop();
};
