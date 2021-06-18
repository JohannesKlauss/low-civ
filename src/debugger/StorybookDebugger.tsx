import React from 'react';
import useCameraZoom from '../hooks/scene/useCameraZoom';
import OrbitControls from './OrbitControls';

interface Props {

}

const StorybookDebugger: React.FC<Props> = ({}) => {
  useCameraZoom();

  return (
    <>
      <OrbitControls/>
      <axesHelper args={[40]} />
      <gridHelper rotation={[0, 0, -Math.PI / 2]} args={[10, 1]} />
    </>
  );
};

export default StorybookDebugger;
