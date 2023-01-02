import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, Plane, useGLTF, Text3D } from "@react-three/drei";
import { Suspense } from "react";
import { motion } from "framer-motion-3d";

function ComputerModel(props) {
  const { nodes, materials } = useGLTF("/pc.glb");
  const { viewport } = useThree();
  return (
    <motion.group
      {...props}
      dispose={null}
      initial={[{ scale: 0 }, { rotateY: 5 }]}
      animate={[
        { scale: Math.min(Math.max(viewport.width / 5, 0.1), 1) },
        { rotateY: 0 },
      ]}
      transition={{ ease: "easeInOut", duration: 2 }}
      // scale={}
    >
      <group position={[0, -1, 0]} rotation={[0, Math.PI / 2, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.PC.geometry}
          material={materials["Chassis Beige"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.PC_1.geometry}
          material={materials["Chassis Beige2"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.PC_2.geometry}
          material={materials["Black Glass"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.PC_3.geometry}
          material={materials.Screen}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.PC_4.geometry}
          material={materials["Chassis Black"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.PC_5.geometry}
          material={materials["Green Glow"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.PC_6.geometry}
          material={materials["Shadow Black"]}
        />
      </group>
      <Plane
        receiveShadow
        args={[50, 50]}
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -1, 0]}
        scale={viewport.width / 5}
      >
        <meshLambertMaterial opacity={0} transparent={true} />
      </Plane>
      <Text3D
        position={[-0.7, 0, 0.2]}
        font={"/fonts/Poppins Medium_Regular.json"}
        size={0.4}
        letterSpacing={0.063}
        bevelEnabled={true}
        bevelThickness={0.01}
        bevelSize={0.01}
        bevelOffset={0.01}
        bevelSegments={10}
      >
        RELL
        <meshPhongMaterial color={"hsl(90, 64%, 57%)"} />
      </Text3D>
      <Text3D
        position={[-0.7, -0.5, 0.2]}
        font={"/fonts/Poppins Medium_Regular.json"}
        size={0.4}
        bevelEnabled={true}
        bevelThickness={0.01}
        bevelSize={0.01}
        bevelOffset={0.01}
        bevelSegments={10}
        specular={111111}
        shininess={100}
      >
        SOFT
        <meshPhongMaterial color={"hsl(90, 64%, 57%)"} shininess={1000} />
      </Text3D>
    </motion.group>
  );
}
useGLTF.preload("/pc.glb");

export function ComputerScene() {
  return (
    <motion.div className="bg-darkMidnight mx-auto w-full absolute h-full">
      <Suspense>
        <Canvas
          className="z-0"
          shadows
          orthographic
          camera={{ position: [10, 1, 20], zoom: 240 }}
        >
          <pointLight
            position={[0, 5, 3]}
            intensity={0.5}
            shadow-bias={-0.001}
          />
          <pointLight
            position={[0, 1, -5]}
            intensity={1}
            shadow-bias={-0.001}
          />
          <ambientLight intensity={0.3} />
          <ComputerModel />
          <OrbitControls
            makeDefault
            autoRotate={false}
            enablePan={false}
            minPolarAngle={Math.PI / 3}
            maxPolarAngle={Math.PI / 3}
            enableZoom={false}
          />
        </Canvas>
      </Suspense>
    </motion.div>
  );
}
