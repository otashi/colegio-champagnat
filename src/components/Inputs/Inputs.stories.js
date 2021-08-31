import React from 'react';
import { TextInput } from '.';

export default {
  title: 'Components/Inputs',
  component: TextInput,
};

export const Text = (args) => <TextInput {...args} />;
Text.args = {
  name: 'Text',
  placeholder: 'Text',
  label: 'Field label',
  required: true,
};
