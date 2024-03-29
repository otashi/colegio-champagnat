import React from 'react';
import { Button } from '../../../components/Buttons';
import { QuickNav } from '../../../components/QuickNav';
import { Section } from '../../../components/Section';
import { SectionTitle } from '../../../components/SectionTitle';
import { SectionCards } from '../../../components/SectionCards';
import { CardNews } from '../../../components/CardNews';
import { FullwideNews } from '../../../components/FullwideNews';
import { Page } from '../../../components/Page';

const Circulares = ({ titular, news, handleClick }) => {
  return (
    <Page>
      <FullwideNews news={titular} />
      <QuickNav section='Padres' />
      <Section>
        <SectionTitle title='Circulares' />
        <SectionCards>
          {news.map((article) => (
            <CardNews {...article} key={article.id} />
          ))}
        </SectionCards>
        <Button label='Cargar más' handleClick={handleClick} />
      </Section>
    </Page>
  );
};

export { Circulares };
