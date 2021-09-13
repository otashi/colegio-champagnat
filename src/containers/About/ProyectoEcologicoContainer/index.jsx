import React from 'react';
import { useContent } from '../../../hooks/useContent';
import { ProyectoEcologico } from '../../../pages/About/ProyectoEcologico';

const ProyectoEcologicoContainer = () => {
  const { content } = useContent('proyecto-ecologico');
  return <ProyectoEcologico content={content} />;
};

export { ProyectoEcologicoContainer };
