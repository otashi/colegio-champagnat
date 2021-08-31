import React from 'react';
import { CardNews } from '.';
import photo from '../../assets/colegio.jpg';

export default {
  title: 'Components/Card News',
  component: CardNews,
};

export const Primary = (args) => <CardNews {...args} />;
Primary.args = {
  title: 'Title of the article',
  category: 'Category',
  photo: photo,
  text:
    'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia..., Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia...',
  time: '4 horas',
};
