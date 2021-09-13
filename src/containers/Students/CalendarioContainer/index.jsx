import React from 'react';
import { useContent } from '../../../hooks/useContent';
import { Calendario } from '../../../pages/Students/Calendario';

const CalendarioContainer = () => {
  const { content } = useContent('calendario');
  return <Calendario content={content} />;
};

export { CalendarioContainer };
