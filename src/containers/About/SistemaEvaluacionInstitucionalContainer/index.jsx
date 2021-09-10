import React from 'react';
import { useContent } from '../../../hooks/useContent';
import { SistemaEvaluacionInstitucional } from '../../../pages/About/SistemaEvaluacionInstitucional';

const SistemaEvaluacionInstitucionalContainer = () => {
  const { content } = useContent('sistema-evaluacion-institucional');
  return <SistemaEvaluacionInstitucional content={content} />;
};

export { SistemaEvaluacionInstitucionalContainer };
