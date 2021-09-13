import React from 'react';
import { useContent } from '../../../hooks/useContent';
import { PQRSF } from '../../../pages/Contact/PQRSF';

const PQRSFContainer = () => {
  const { content } = useContent('pqrsf');
  return <PQRSF content={content} />;
};

export { PQRSFContainer };
