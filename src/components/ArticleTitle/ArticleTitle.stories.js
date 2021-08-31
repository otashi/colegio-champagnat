import React from 'react';
import { ArticleTitle } from '.';

export default {
  title: 'Components/Article Title',
  component: ArticleTitle,
};

export const Primary = (args) => <ArticleTitle {...args} />;
Primary.args = {
  title: 'Title of the article',
  category: 'Category',
  time: '4 horas',
};
