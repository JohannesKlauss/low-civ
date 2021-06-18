import { Canvas } from '@react-three/fiber';
import React, { Suspense } from 'react';
import { useWindowSize } from 'react-use';
import StorybookDebugger from '../src/debugger/StorybookDebugger';
import { cameraProps } from '../src/const/camera';
import { RecoilRoot } from 'recoil';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => {
    const { width, height } = useWindowSize();

    const aspect = width / height;

    return (
      <div style={{ width: '100vw', height: '100vh' }}>
        <Canvas pixelRatio={window.devicePixelRatio} orthographic={true} camera={cameraProps(aspect)}>

          <directionalLight position={[20, 60, 50]} intensity={2} isLight={true} />
          <directionalLight position={[-30, 200, 50]} intensity={1} isLight={true} />

          <StorybookDebugger />

          <RecoilRoot>

            <Suspense fallback={null}>
              <Story />
            </Suspense>
          </RecoilRoot>
        </Canvas>
      </div>
    );
  },
];
