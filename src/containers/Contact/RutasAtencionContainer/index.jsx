import React from 'react';
import { useContent } from '../../../hooks/useContent';
import { RutasAtencion } from '../../../pages/Contact/RutasAtencion';

const RutasAtencionContainer = () => {
  const { content } = useContent('rutas-atencion');
  return <RutasAtencion content={content} />;
};

export { RutasAtencionContainer };
