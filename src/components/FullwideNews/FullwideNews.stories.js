import React from 'react';
import { FullwideNews } from '.';
import photo from '../../assets/colegio.jpg';

export default {
  title: 'Components/Fullwide News',
  component: FullwideNews,
};

export const Primary = (args) => <FullwideNews {...args} />;
Primary.args = {
  photo: photo,
  title: 'Title of the article',
  category: 'Category',
};
