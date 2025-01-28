import GUI from "lil-gui";
import * as THREE from "three";

export const initializeAmbientLightControls = (gui: GUI, light: THREE.AmbientLight) => {
  const colorHolder = new THREE.Color(light.color);

  const ambientLightProps = {
    color: colorHolder.getStyle(),
    intensity: light.intensity,
  };

  const ambienLightFolder = gui.addFolder("Ambient Light");
  ambienLightFolder
    .add(ambientLightProps, "intensity", 0, 5, 0.1)
    .onChange((i: number) => (light.intensity = i));
  ambienLightFolder.addColor(ambientLightProps, "color").onChange((c: string) => {
    light.color.setStyle(c);
  });
};
