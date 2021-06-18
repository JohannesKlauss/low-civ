import React from 'react';
import { Story } from '@storybook/react';
import UndiscoveredBlock, { UndiscoveredBlockProps } from './UndiscoveredBlock';

export default {
  title: 'Blocks/UndiscoveredBlock',
  component: UndiscoveredBlock,
  argTypes: {},
};

const Template: Story<UndiscoveredBlockProps> = args => <UndiscoveredBlock {...args} />;

export const Default = Template.bind({});