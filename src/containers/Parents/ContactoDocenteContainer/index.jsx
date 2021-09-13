import React from 'react';
import { useContent } from '../../../hooks/useContent';
import { ContactoDocente } from '../../../pages/Parents/ContactoDocente';

const ContactoDocenteContainer = () => {
  const { content } = useContent('contacto-docente');
  return <ContactoDocente content={content} />;
};

export { ContactoDocenteContainer };
