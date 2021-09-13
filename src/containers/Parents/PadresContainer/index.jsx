import React from 'react';
import { useContent } from '../../../hooks/useContent';
import { Padres } from '../../../pages/Parents/Padres';

const PadresContainer = () => {
  const { content } = useContent('padres');
  return <Padres content={content} />;
};

export { PadresContainer };
