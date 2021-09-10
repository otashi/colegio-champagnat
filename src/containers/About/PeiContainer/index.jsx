import React from 'react';
import { useContent } from '../../../hooks/useContent';
import { Pei } from '../../../pages/About/Pei';

const PeiContainer = () => {
  const { content } = useContent('pei');
  return <Pei content={content} />;
};

export { PeiContainer };
