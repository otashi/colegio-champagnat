import React from 'react';
import { useContent } from '../../hooks/useContent';
import { Asofamilia } from '../../pages/Asofamilia';

const AsofamiliaContainer = () => {
  const { content } = useContent('asofamilia');
  return <Asofamilia content={content} />;
};

export { AsofamiliaContainer };
