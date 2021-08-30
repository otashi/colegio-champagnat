import styled from 'styled-components';

const StyledPartnerCard = styled.div`
  width: 11.2rem;
  height: 11.2rem;
  padding: 0.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--n10);
  border-radius: 0.4rem;
  box-shadow: 0 0.3rem 0.5rem 0 var(--n50a);
`;

const StyledPartnerIcon = styled.img`
  width: inherit;
  height: auto;
  border-radius: 0.4rem;
  background-color: var(--n10);
`;

export { StyledPartnerCard, StyledPartnerIcon };
