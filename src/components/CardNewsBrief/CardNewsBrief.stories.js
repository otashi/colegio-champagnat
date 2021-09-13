import React from 'react';
import { CardNewsBrief } from '.';
import photo from '../../assets/colegio.jpg';

export default {
  title: 'Components/Card News (Brief)',
  component: CardNewsBrief,
};

export const Primary = (args) => <CardNewsBrief {...args} />;
Primary.args = {
  title: 'Title of the article',
  category: 'Category',
  photo: photo,
};
