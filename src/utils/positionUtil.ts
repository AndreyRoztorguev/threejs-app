import * as THREE from "three";

type RandomVectorProps = {
  xRange: { fromX: number; toX: number };
  yRange: { fromY: number; toY: number };
  zRange: { fromZ: number; toZ: number };
};
export const randomVector = ({
  xRange: { fromX, toX },
  yRange: { fromY, toY },
  zRange: { fromZ, toZ },
}: RandomVectorProps) => {
  const x = Math.random() * (toX - fromX) + fromX;
  const y = Math.random() * (toY - fromY) + fromY;
  const z = Math.random() * (toZ - fromZ) + fromZ;
  return new THREE.Vector3(x, y, z);
};
