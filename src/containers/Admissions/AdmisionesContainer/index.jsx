import React from 'react';
import { useContent } from '../../../hooks/useContent';
import { Admisiones } from '../../../pages/Admissions/Admisiones';

const AdmisionesContainer = () => {
  const { content } = useContent('admisiones');
  return <Admisiones content={content} />;
};

export { AdmisionesContainer };
