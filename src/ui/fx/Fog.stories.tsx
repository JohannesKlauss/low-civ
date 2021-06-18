import React from 'react';
import { Story } from '@storybook/react';
import Fog, { FogProps } from './Fog';

export default {
  title: 'FX/Fog',
  component: Fog,
  argTypes: {},
};

const Template: Story<FogProps> = args => <Fog {...args} />;

export const Default = Template.bind({});