import React, { useState } from 'react';
import { FullwidePhoto } from '../../components/FullwidePhoto';
import { QuickNav } from '../../components/QuickNav';
import { Section } from '../../components/Section';
import { SectionTitle } from '../../components/SectionTitle';
import { Button } from '../../components/Buttons';
import { SectionCards } from '../../components/SectionCards';
import { CardNews } from '../../components/CardNews';

const CuartoPiso = () => {
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
  ]);

  return (
    <>
      <FullwidePhoto />
      <QuickNav section='Noticias' />
      <Section>
        <SectionTitle title='Desde el cuarto piso' />
        <SectionCards>
          {news.map((article) => (
            <CardNews {...article} />
          ))}
        </SectionCards>
        <Button label='Cargar más' />
      </Section>
    </>
  );
};

export { CuartoPiso };
