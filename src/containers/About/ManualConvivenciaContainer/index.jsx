import React from 'react';
import { useContent } from '../../../hooks/useContent';
import { ManualConvivencia } from '../../../pages/About/ManualConvivencia';

const ManualConvivenciaContainer = () => {
  const { content } = useContent('manual-convivencia');
  return <ManualConvivencia content={content} />;
};

export { ManualConvivenciaContainer };
