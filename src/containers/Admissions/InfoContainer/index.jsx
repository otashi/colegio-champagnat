import React from 'react';
import { useContent } from '../../../hooks/useContent';
import { Info } from '../../../pages/Admissions/Info';

const InfoContainer = () => {
  const { content } = useContent('info');
  return <Info content={content} />;
};

export { InfoContainer };
