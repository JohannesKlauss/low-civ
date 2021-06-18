export const cameraProps = (aspect: number) => ({
  zoom: 40,
  position: [40, 40, 40],
  left: -20 * aspect,
  right: 20 * aspect,
  top: 20,
  bottom: 20,
  near: 1,
  far: 1000,
  rotation: {
    y: Math.PI / 4,
    x: Math.atan(-1 / Math.sqrt(2)),
  },
})