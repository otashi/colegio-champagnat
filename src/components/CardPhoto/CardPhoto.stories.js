import React from 'react';
import { CardPhoto } from '.';
import photo from '../../assets/colegio.jpg';

export default {
  title: 'Components/Card Photo',
  component: CardPhoto,
};

export const Primary = (args) => <CardPhoto {...args} />;
Primary.args = {
  path: photo,
};
