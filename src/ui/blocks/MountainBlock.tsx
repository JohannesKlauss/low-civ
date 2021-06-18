import React from 'react';
import { BOX_GEOMETRY_BLOCK, SURFACE_COLORS } from '../../const/blocks';
import { MeshProps } from '@react-three/fiber';

export interface MountainBlockProps extends MeshProps {

}

const MountainBlock: React.FC<MountainBlockProps> = ({ children, ...props }) => {
  return (
    <mesh {...props}>
      <mesh
        scale={1}
      >
        <boxGeometry args={BOX_GEOMETRY_BLOCK} />
        <meshStandardMaterial color={SURFACE_COLORS.dirt} />
      </mesh>

      <mesh
        scale={1}
        position={[-1.5, 2.75, 1.5]}
        rotation={[0, Math.PI * 0.25, 0]}
      >
        <mesh>
          <coneGeometry args={[5, 3.5, 4]} />
          <meshStandardMaterial color={SURFACE_COLORS.mountain} />
        </mesh>

        <mesh>
          <coneGeometry args={[4, 6, 4]} />
          <meshStandardMaterial color={SURFACE_COLORS.mountainTop} />
        </mesh>
      </mesh>

      <mesh
        scale={1}
        position={[1.5, 2.75, -1.5]}
        rotation={[0, Math.PI * 0.25, 0]}
      >
        <mesh>
          <coneGeometry args={[5, 3.5, 4]} />
          <meshStandardMaterial color={SURFACE_COLORS.mountain} />
        </mesh>

        <mesh>
          <coneGeometry args={[4.5, 6, 4]} />
          <meshStandardMaterial color={SURFACE_COLORS.mountainTop} />
        </mesh>
      </mesh>

      <mesh
        scale={1.5}
        position={[-0.25, 2.95, -0.6]}
        rotation={[0, Math.PI * 0.69, 0]}
      >
        <mesh>
          <coneGeometry args={[4, 3.5, 4]} />
          <meshStandardMaterial color={SURFACE_COLORS.mountain} />
        </mesh>

        <mesh>
          <coneGeometry args={[3, 6, 4]} />
          <meshStandardMaterial color={SURFACE_COLORS.mountainTop} />
        </mesh>
      </mesh>

      {children}
    </mesh>
  )
};

export default MountainBlock;
