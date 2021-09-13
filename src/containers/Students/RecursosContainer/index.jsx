import React from 'react';
import { useContent } from '../../../hooks/useContent';
import { Recursos } from '../../../pages/Students/Recursos';

const RecursosContainer = () => {
  const { content } = useContent('recursos');
  return <Recursos content={content} />;
};

export { RecursosContainer };
