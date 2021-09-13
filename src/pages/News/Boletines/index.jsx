import React from 'react';
import { QuickNav } from '../../../components/QuickNav';
import { Section } from '../../../components/Section';
import { SectionTitle } from '../../../components/SectionTitle';
import { Button } from '../../../components/Buttons';
import { SectionCards } from '../../../components/SectionCards';
import { CardNews } from '../../../components/CardNews';
import { FullwideNews } from '../../../components/FullwideNews';

const Boletines = ({ titular, news, handleClick }) => {
  return (
    <>
      <FullwideNews news={titular} />
      <QuickNav section='Noticias' />
      <Section>
        <SectionTitle title='Boletines' />
        <SectionCards>
          {news.map((article) => (
            <CardNews {...article} key={article.id} />
          ))}
        </SectionCards>
        <Button label='Cargar más' handleClick={handleClick} />
      </Section>
    </>
  );
};

export { Boletines };
