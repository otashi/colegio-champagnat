import React from 'react';
import { FullwideNews } from '../../../components/FullwideNews';
import { QuickNav } from '../../../components/QuickNav';
import { Section } from '../../../components/Section';
import { SectionTitle } from '../../../components/SectionTitle';
import { Button } from '../../../components/Buttons';
import { SectionCards } from '../../../components/SectionCards';
import { CardNews } from '../../../components/CardNews';
import { Page } from '../../../components/Page';

const Noticias = ({ titular, news = [], handleClick }) => {
  return (
    <Page>
      <FullwideNews news={titular} />
      <QuickNav section='Noticias' />
      <Section>
        <SectionTitle title='Noticias' />
        {news.length >= 1 && (
          <>
            <SectionCards>
              {news.map((article) => (
                <CardNews {...article} key={article.id} />
              ))}
            </SectionCards>
            <Button label='Cargar más' handleClick={handleClick} />
          </>
        )}
      </Section>
    </Page>
  );
};

export { Noticias };
