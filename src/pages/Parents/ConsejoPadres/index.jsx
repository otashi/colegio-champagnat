import React, { useState } from 'react';
import { FullwidePhoto } from '../../../components/FullwidePhoto';
import { QuickNav } from '../../../components/QuickNav';
import { Section } from '../../../components/Section';
import { SectionTitle } from '../../../components/SectionTitle';
import { SectionCards } from '../../../components/SectionCards';
import { CardNews } from '../../../components/CardNews';
import { Button } from '../../../components/Buttons';

const ConsejoPadres = () => {
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
      <QuickNav section='Padres' />
      <Section>
        <SectionTitle title='Consejo de padres' />
        <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </p>
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

export { ConsejoPadres };
