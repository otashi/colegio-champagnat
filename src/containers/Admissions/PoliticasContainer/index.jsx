import React from 'react';
import { useContent } from '../../../hooks/useContent';
import { Politicas } from '../../../pages/Admissions/Politicas';

const PoliticasContainer = () => {
  const { content } = useContent('politicas');
  return <Politicas content={content} />;
};

export { PoliticasContainer };
