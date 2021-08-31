import React from 'react';
import { SectionTitle } from '.';

export default {
  title: 'Components/Section Title',
  component: SectionTitle,
};

export const Primary = (args) => <SectionTitle {...args} />;
Primary.args = {
  title: 'Title of the section',
};
