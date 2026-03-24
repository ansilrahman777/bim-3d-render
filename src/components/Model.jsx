import { useGLTF } from "@react-three/drei";
import { useEffect, useState } from "react";
import * as THREE from "three";
export default function Model({ setSelected, setTarget }) {
  const { scene } = useGLTF("/models/model.glb");
  const [meshes, setMeshes] = useState([]);

  useEffect(() => {
    const tempMeshes = [];

    scene.traverse((child) => {
      if (child.isMesh) {
        console.log("Mesh found:", child.name);

        // Ensure raycasting works
        child.raycast = THREE.Mesh.prototype.raycast;

        tempMeshes.push(child);
      }
    });

    setMeshes(tempMeshes);
  }, [scene]);

  return (
    <>
      {meshes.map((mesh, index) => (
        <primitive
          key={index}
          object={mesh}
            onClick={(e) => {
            e.stopPropagation();

            const mesh = e.object;

            console.log("CLICKED:", mesh.name);

            setSelected(mesh.name || "Unnamed");

            // 🔥 FIX: use bounding box center
            const box = new THREE.Box3().setFromObject(mesh);
            const center = box.getCenter(new THREE.Vector3());

            console.log("CENTER:", center);

            setTarget(center);
            }}
        />
      ))}
    </>
  );
}
