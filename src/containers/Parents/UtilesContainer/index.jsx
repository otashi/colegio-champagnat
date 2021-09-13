import React from 'react';
import { useContent } from '../../../hooks/useContent';
import { Utiles } from '../../../pages/Parents/Utiles';

const UtilesContainer = () => {
  const { content } = useContent('utiles');
  return <Utiles content={content} />;
};

export { UtilesContainer };
