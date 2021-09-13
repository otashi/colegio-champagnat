import React from 'react';
import { useContent } from '../../../hooks/useContent';
import { Biblioteca } from '../../../pages/Students/Biblioteca';

const BibliotecaContainer = () => {
  const { content } = useContent('biblioteca');
  return <Biblioteca content={content} />;
};

export { BibliotecaContainer };
