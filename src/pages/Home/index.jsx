import React, { useState } from 'react';
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

const Home = () => {
  const [news] = useState([
    {
      title: 'Title of the article',
      category: 'Category',
      text:
        'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia....',
    },
    {
      title: 'Title of the article',
      category: 'Category',
      text:
        'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia....',
    },
    {
      title: 'Title of the article',
      category: 'Category',
      text:
        'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia....',
    },
  ]);

  return (
    <>
      <FullwideNews />
      <StyledLastNewsSection>
        <SectionTitle title='Últimas noticias' />
        <Carousel news={news} />
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
