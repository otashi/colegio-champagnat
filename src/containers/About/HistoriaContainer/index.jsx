import React from 'react';
import { useContent } from '../../../hooks/useContent';
import { Historia } from '../../../pages/About/Historia';

const HistoriaContainer = () => {
  const { content } = useContent('historia');
  return <Historia content={content} />;
};

export { HistoriaContainer };
