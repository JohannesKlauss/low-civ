import React from 'react';
import { Story } from '@storybook/react';
import LandBlock, { LandBlockProps } from './LandBlock';
import { ClimateZone } from '../../const/world';

export default {
  title: 'Blocks/LandBlock',
  component: LandBlock,
  argTypes: {
    climateZone: {
      options: [
        ClimateZone.CONTINENTAL,
        ClimateZone.DRY,
        ClimateZone.DESERT,
        ClimateZone.POLAR
      ]
    }
  },
};

const Template: Story<LandBlockProps> = args => <LandBlock {...args} />;

export const Continental = Template.bind({})
export const Dry = Template.bind({})
export const Desert = Template.bind({})
export const Polar = Template.bind({})

Continental.args = {
  climateZone: ClimateZone.CONTINENTAL
}

Dry.args = {
  climateZone: ClimateZone.DRY
}

Desert.args = {
  climateZone: ClimateZone.DESERT
}

Polar.args = {
  climateZone: ClimateZone.POLAR
}