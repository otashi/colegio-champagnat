import React from 'react';
import { StyledPartnerCard, StyledPartnerIcon } from './style';

const PartnerCard = ({ path }) => {
  return (
    <StyledPartnerCard>
      <StyledPartnerIcon src={path} alt='partner icon' />
    </StyledPartnerCard>
  );
};

export { PartnerCard };
