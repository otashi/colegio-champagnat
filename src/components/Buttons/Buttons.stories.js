import React from 'react';
import { Button } from '.';

export default {
  component: Button,
  title: 'Components/Button',
};

export const Primary = (args) => <Button {...args} />;
Primary.args = {
  label: 'Cargar más',
};
