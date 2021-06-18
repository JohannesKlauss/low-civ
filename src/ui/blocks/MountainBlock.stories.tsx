import React from 'react';
import MountainBlock from './MountainBlock';

export default {
  title: 'Blocks/MountainBlock',
  component: MountainBlock,
  argTypes: {},
};

const Template = (args: any) => <MountainBlock {...args} />;

export const Default = Template.bind({});