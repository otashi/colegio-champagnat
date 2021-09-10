import React from 'react';
import { useContent } from '../../../hooks/useContent';
import { Identidad } from '../../../pages/About/Identidad';

const IdentidadContainer = () => {
  const { content } = useContent('identidad');
  return <Identidad content={content} />;
};

export { IdentidadContainer };
