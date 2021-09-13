import React from 'react';
import { useContent } from '../../../hooks/useContent';
import { Rutas } from '../../../pages/Parents/Rutas';

const RutasContainer = () => {
  const { content } = useContent('rutas');
  return <Rutas content={content} />;
};

export { RutasContainer };
