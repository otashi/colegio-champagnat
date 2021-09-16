import React from 'react';
import { Blanket } from '../Blanket';
import { StyledLoading, StyledIcon, StyledText } from './style';

const Loading = () => {
  return (
    <Blanket>
      <StyledLoading>
        <StyledIcon className='ci-settings_filled' />
        <StyledText>Cargando...</StyledText>
      </StyledLoading>
    </Blanket>
  );
};

export { Loading };
