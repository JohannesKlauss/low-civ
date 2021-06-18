import React, { useRef } from 'react';
import { MeshProps, useFrame, useLoader } from '@react-three/fiber';
import { Mesh, TextureLoader } from 'three';
import { getRandomFloat } from '../../utils/random';

export interface FogProps extends MeshProps {

}

const Fog: React.FC<FogProps> = (props) => {
  const ref = useRef<Mesh>()
  const [fogMap] = useLoader(TextureLoader, ['gfx/textures/smoke-1.png']);

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.002
    }
  })

  return (
    <mesh {...props} ref={ref}>
      {(Array.from(new Array(50).keys())).map(value => (
        <mesh key={value} position={[0, getRandomFloat(0, 0.4), 0]} rotation={[0, Math.random() * 2 * Math.PI, 0]}>
          <mesh rotation={[1.5 * Math.PI, 0, 0]}>
            <planeBufferGeometry args={[10, 10]} />
            <meshLambertMaterial map={fogMap} transparent={true} opacity={0.15} />
          </mesh>
        </mesh>
      ))}
    </mesh>
  );
};

export default Fog;
