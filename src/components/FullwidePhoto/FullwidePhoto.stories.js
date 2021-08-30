import React from 'react';
import { FullwidePhoto } from '.';
import photo from '../../assets/colegio.jpg';

export default {
  title: 'Components/Fullwide Photo',
  component: FullwidePhoto,
};

export const Primary = (args) => <FullwidePhoto {...args} />;
Primary.args = {
  path: photo,
};
