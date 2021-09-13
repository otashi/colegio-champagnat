import React from 'react';
import { useContent } from '../../../hooks/useContent';
import { TratamientoDatos } from '../../../pages/About/TratamientoDatos';

const TratamientoDatosContainer = () => {
  const { content } = useContent('tratamiento-datos');
  return <TratamientoDatos content={content} />;
};

export { TratamientoDatosContainer };
