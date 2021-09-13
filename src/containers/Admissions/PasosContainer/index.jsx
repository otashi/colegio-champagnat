import React from 'react';
import { useContent } from '../../../hooks/useContent';
import { Pasos } from '../../../pages/Admissions/Pasos';

const PasosContainer = () => {
  const { content } = useContent('pasos');
  return <Pasos content={content} />;
};

export { PasosContainer };
