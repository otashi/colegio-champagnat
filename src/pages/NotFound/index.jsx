import React from 'react';
import { StyledNotFound, StyledHeading, StyledText } from './style';

const NotFound = () => {
  return (
    <StyledNotFound>
      <StyledHeading>Página no encontrada...</StyledHeading>
      <StyledText>
        Regresa a la página anterior o dale click al logo del colegio para
        volver al inicio.
      </StyledText>
    </StyledNotFound>
  );
};

export { NotFound };
