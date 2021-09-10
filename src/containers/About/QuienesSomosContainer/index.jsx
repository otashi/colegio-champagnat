import React from 'react';
import { useContent } from '../../../hooks/useContent';
import { QuienesSomos } from '../../../pages/About/QuienesSomos';

const QuienesSomosContainer = () => {
  const { content } = useContent('quienes-somos');
  return <QuienesSomos content={content} />;
};

export { QuienesSomosContainer };
