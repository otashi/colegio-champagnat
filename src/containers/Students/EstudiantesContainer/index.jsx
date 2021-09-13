import React from 'react';
import { useContent } from '../../../hooks/useContent';
import { Estudiantes } from '../../../pages/Students/Estudiantes';

const EstudiantesContainer = () => {
  const { content } = useContent('estudiantes');
  return <Estudiantes content={content} />;
};

export { EstudiantesContainer };
