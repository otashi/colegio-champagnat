import styled from 'styled-components';

const StyledLastNewsSection = styled.section`
  padding: 1.6rem 0 1.6rem 1.6rem;
  max-width: 1026px;
  margin: 0 auto;
`;

const StyledPartnerSection = styled.section`
  text-align: center;
  padding: 1.6rem 0;
  background-color: var(--n100);
  color: var(--n0);
`;

const StyledPartnerSectionTitle = styled.h2`
  font-weight: normal;
  font-size: 1.6rem;
  line-height: 2rem;
  margin-bottom: 1.6rem;
`;

const StyledPartnersContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.8rem;
`;

export {
  StyledLastNewsSection,
  StyledPartnerSection,
  StyledPartnerSectionTitle,
  StyledPartnersContainer,
};
