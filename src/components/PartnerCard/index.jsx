import React from 'react';
import { Anchor } from '../Anchor';
import { StyledPartnerCard, StyledPartnerIcon } from './style';

const PartnerCard = ({ name, path, coverURL }) => {
  return (
    <Anchor href={path}>
      <StyledPartnerCard>
        <StyledPartnerIcon src={coverURL} alt={name} />
      </StyledPartnerCard>
    </Anchor>
  );
};

export { PartnerCard };
