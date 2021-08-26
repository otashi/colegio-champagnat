import React from 'react';
import {
  StyledFooter,
  StyledSocialMedia,
  StyledSocialMediaIcon,
  StyledSocialMediaAnchor,
  StyledContact,
  StyledContactText,
  StyledTitle,
} from './style';

const Footer = () => {
  return (
    <StyledFooter>
      <StyledSocialMedia>
        <StyledSocialMediaAnchor
          href='https://www.facebook.com/col.champagnat.bog'
          target='_blank'
          rel='noreferrer'
        >
          <StyledSocialMediaIcon className='ci-facebook' />
        </StyledSocialMediaAnchor>
        <StyledSocialMediaAnchor
          href='https://instagram.com/col.champagnat.bog'
          target='_blank'
          rel='noreferrer'
        >
          <StyledSocialMediaIcon className='ci-instagram' />
        </StyledSocialMediaAnchor>
        <StyledSocialMediaAnchor
          href='https://www.youtube.com/user/COLEGIOCHAMPAGNATBOG/featured'
          target='_blank'
          rel='noreferrer'
        >
          <StyledSocialMediaIcon className='ci-youtube' />
        </StyledSocialMediaAnchor>
      </StyledSocialMedia>
      <StyledContact>
        <StyledContactText>Bogotá / Cra 17 # 39B - 51</StyledContactText>
        <StyledContactText>Teléfono: (1) 3403340</StyledContactText>
      </StyledContact>
      <StyledTitle>Colegio Champagnat</StyledTitle>
    </StyledFooter>
  );
};

export { Footer };
