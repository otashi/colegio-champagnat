import React from 'react';
import { useContent } from '../../../hooks/useContent';
import { Contacto } from '../../../pages/Contact/Contacto';

const ContactoContainer = () => {
  const { content } = useContent('contacto');
  return <Contacto content={content} />;
};

export { ContactoContainer };
