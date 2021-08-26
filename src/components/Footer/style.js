import styled from 'styled-components';

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--n900);
  color: var(--n0);
`;

const StyledSocialMedia = styled.div`
  display: flex;
  gap: 1.6rem;
  margin: 2.8rem 0 1.6rem;
`;

const StyledSocialMediaAnchor = styled.a`
  text-transform: none;
  color: var(--n0);
  &:hover {
    scale: 1.2;
  }
`;

const StyledSocialMediaIcon = styled.i`
  cursor: pointer;
`;

const StyledContact = styled.div`
  text-align: center;
`;

const StyledContactText = styled.p`
  margin: 0.4rem 0;
`;

const StyledTitle = styled.h3`
  text-transform: capitalize;
  font-size: 1.6rem;
  font-weight: 600;
  margin: 3.4rem 0 2.8rem;
`;

export {
  StyledFooter,
  StyledSocialMedia,
  StyledSocialMediaIcon,
  StyledSocialMediaAnchor,
  StyledContact,
  StyledContactText,
  StyledTitle,
};
