import React from 'react';
import { useContent } from '../../../hooks/useContent';
import { EvangelizacionMarista } from '../../../pages/About/EvangelizacionMarista';

const EvangelizacionMaristaContainer = () => {
  const { content } = useContent('evangelizacion-marista');
  return <EvangelizacionMarista content={content} />;
};

export { EvangelizacionMaristaContainer };
