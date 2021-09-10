import React from 'react';
import { FullwidePhoto } from '../../../components/FullwidePhoto';
import { QuickNav } from '../../../components/QuickNav';
import { Section } from '../../../components/Section';
import { SectionTitle } from '../../../components/SectionTitle';
import { Button } from '../../../components/Buttons';
import { SectionCards } from '../../../components/SectionCards';
import { CardNews } from '../../../components/CardNews';

const Noticias = ({ news = [], handleClick }) => {
  return (
    <>
      <FullwidePhoto />
      <QuickNav section='Noticias' />
      <Section>
        <SectionTitle title='Noticias' />
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

export { Noticias };
