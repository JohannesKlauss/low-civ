import React, { useRef } from 'react';
import { extend, useFrame, useThree } from '@react-three/fiber';
import {
  OrbitControls as TOrbitControls,
  OrbitControls as T3OrbitControls,
} from 'three/examples/jsm/controls/OrbitControls';

extend({ T3OrbitControls: T3OrbitControls });

interface Props {

}

const OrbitControls: React.FC<Props> = ({}) => {
  const controls = useRef<TOrbitControls>();

  const {
    camera,
    gl: { domElement },
  } = useThree();

  useFrame(() => controls.current?.update());

  return (
    // @ts-ignore
    <t3OrbitControls ref={controls} args={[camera, domElement]} enableZoom={true}
                   maxAzimuthAngle={Math.PI / 4}
                   maxPolarAngle={Math.PI}
                   minAzimuthAngle={-Math.PI / 4}
                   minPolarAngle={0} />
  );
};

export default OrbitControls;
