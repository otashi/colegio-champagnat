import React from 'react';
import { FullwideNews } from '../../components/FullwideNews';
import { SectionTitle } from '../../components/SectionTitle';
import { Carousel } from '../../components/Carousel';
import { PartnerCard } from '../../components/PartnerCard';

import {
  StyledLastNewsSection,
  StyledPartnerSection,
  StyledPartnerSectionTitle,
  StyledPartnersContainer,
} from './style';

const Home = ({
  titular = [],
  news = [],
  sponsors = [],
  allies = [],
  networks = [],
}) => {
  return (
    <>
      <FullwideNews news={titular} />
      <StyledLastNewsSection>
        <SectionTitle title='Últimas noticias' />
        <Carousel news={news} />
      </StyledLastNewsSection>
      <StyledPartnerSection>
        <StyledPartnerSectionTitle>Alianzas</StyledPartnerSectionTitle>
        <StyledPartnersContainer>
          {allies.map((ally) => (
            <PartnerCard {...ally} key={ally.id} />
          ))}
        </StyledPartnersContainer>
      </StyledPartnerSection>
      <StyledPartnerSection>
        <StyledPartnerSectionTitle>Sponsors</StyledPartnerSectionTitle>
        <StyledPartnersContainer>
          {sponsors.map((sponsor) => (
            <PartnerCard {...sponsor} key={sponsor.id} />
          ))}
        </StyledPartnersContainer>
      </StyledPartnerSection>
      <StyledPartnerSection>
        <StyledPartnerSectionTitle>Redes</StyledPartnerSectionTitle>
        <StyledPartnersContainer>
          {networks.map((network) => (
            <PartnerCard {...network} key={network.id} />
          ))}
        </StyledPartnersContainer>
      </StyledPartnerSection>
    </>
  );
};

export { Home };
