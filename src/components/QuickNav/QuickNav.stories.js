import React from 'react';
import { QuickNav } from '.';

export default {
  title: 'Components/QuickNav',
  component: QuickNav,
};

export const Mobile = (args) => <QuickNav {...args} />;
Mobile.args = {
  section: 'Quienes somos',
};
