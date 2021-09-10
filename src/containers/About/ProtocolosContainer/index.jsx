import React from 'react';
import { useContent } from '../../../hooks/useContent';
import { Protocolos } from '../../../pages/About/Protocolos';

const ProtocolosContainer = () => {
  const { content } = useContent('protocolos');
  return <Protocolos content={content} />;
};

export { ProtocolosContainer };
