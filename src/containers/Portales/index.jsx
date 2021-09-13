import React from 'react';
import { useContent } from '../../hooks/useContent';
import { Portales } from '../../pages/Portales';

const PortalesContainer = () => {
  const { content } = useContent('portales');
  return <Portales content={content} />;
};

export { PortalesContainer };
