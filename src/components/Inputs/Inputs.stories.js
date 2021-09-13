import React from 'react';
import { RadioInput, SelectInput, TextAreaInput, TextInput } from '.';

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

export const Select = (args) => <SelectInput {...args} />;
Select.args = {
  name: 'Select',
  label: 'Field label',
  placeholder: 'Choose something...',
  required: true,
  options: ['One', 'Two', 'Three'],
};

export const Radio = (args) => <RadioInput {...args} />;
Radio.args = {
  name: 'Radio',
  label: 'Radio group label',
  options: ['One', 'Two', 'Three'],
  required: true,
};
