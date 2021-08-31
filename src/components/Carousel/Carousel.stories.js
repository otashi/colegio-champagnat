import React from 'react';
import { Carousel } from '.';
import photo from '../../assets/colegio.jpg';

export default {
  title: 'Components/Carousel',
  component: Carousel,
};

export const Primary = (args) => <Carousel {...args} />;
Primary.args = {
  news: [
    {
      title: 'Title of the article',
      category: 'Category',
      photo: photo,
    },
    {
      title: 'Title of the article',
      category: 'Category',
      photo: photo,
    },
    {
      title: 'Title of the article',
      category: 'Category',
      photo: photo,
    },
    {
      title: 'Title of the article',
      category: 'Category',
      photo: photo,
    },
    {
      title: 'Title of the article',
      category: 'Category',
      photo: photo,
    },
    {
      title: 'Title of the article',
      category: 'Category',
      photo: photo,
    },
  ],
};
