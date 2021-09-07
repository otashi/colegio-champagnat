import React from 'react';
import { FullwideNews } from '../../components/FullwideNews';
import { SectionTitle } from '../../components/SectionTitle';
import { Carousel } from '../../components/Carousel';
import { PartnerCard } from '../../components/PartnerCard';
import { Footer } from '../../components/Footer';

import {
  StyledLastNewsSection,
  StyledPartnerSection,
  StyledPartnerSectionTitle,
  StyledPartnersContainer,
} from './style';

const Home = () => {
  return (
    <>
      <FullwideNews />
      <StyledLastNewsSection>
        <SectionTitle title='Últimas noticias' />
        <Carousel />
      </StyledLastNewsSection>
      <StyledPartnerSection>
        <StyledPartnerSectionTitle>Alianzas</StyledPartnerSectionTitle>
        <StyledPartnersContainer>
          <PartnerCard />
          <PartnerCard />
          <PartnerCard />
          <PartnerCard />
          <PartnerCard />
          <PartnerCard />
        </StyledPartnersContainer>
      </StyledPartnerSection>
      <StyledPartnerSection>
        <StyledPartnerSectionTitle>Sponsors</StyledPartnerSectionTitle>
        <StyledPartnersContainer>
          <PartnerCard />
          <PartnerCard />
          <PartnerCard />
        </StyledPartnersContainer>
      </StyledPartnerSection>
      <StyledPartnerSection>
        <StyledPartnerSectionTitle>Redes</StyledPartnerSectionTitle>
        <StyledPartnersContainer>
          <PartnerCard />
        </StyledPartnersContainer>
      </StyledPartnerSection>
    </>
  );
};

export { Home };
