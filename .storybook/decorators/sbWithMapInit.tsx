import useInitMap from '../../src/hooks/game/useInitMap';

export default function sbWithMapInit(Story) {
  useInitMap({
    numOfBlocks: 64,
  });

  return (
    <Story />
  );
}