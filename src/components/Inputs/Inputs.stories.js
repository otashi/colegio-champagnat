import React from 'react';
import { TextAreaInput, TextInput } from '.';

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

export const Textarea = (args) => <TextAreaInput {...args} />;
Textarea.args = {
  name: 'Textarea',
  placeholder: 'Text',
  label: 'Field label',
  required: true,
};
