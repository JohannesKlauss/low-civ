import React from 'react';
import { Story } from '@storybook/react';
import Map, { MapProps } from './Map';
import sbWithMapInit from '../../../.storybook/decorators/sbWithMapInit';

export default {
  title: 'Map/Map',
  component: Map,
  decorators: [sbWithMapInit],
  argTypes: {},
};

const Template: Story<MapProps> = args => <Map {...args} />;

export const Default = Template.bind({});