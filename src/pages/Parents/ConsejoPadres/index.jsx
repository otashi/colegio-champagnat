import React from 'react';
import { QuickNav } from '../../../components/QuickNav';
import { Section } from '../../../components/Section';
import { SectionTitle } from '../../../components/SectionTitle';
import { SectionCards } from '../../../components/SectionCards';
import { CardNews } from '../../../components/CardNews';
import { Button } from '../../../components/Buttons';
import { Markdown } from '../../../components/Markdown';
import { FullwideNews } from '../../../components/FullwideNews';
import { Page } from '../../../components/Page';

const ConsejoPadres = ({ content, titular, news, handleClick }) => {
  if (content.length >= 1) {
    return (
      <Page>
        <FullwideNews news={titular} />
        <QuickNav section='Padres' />
        <Section>
          <SectionTitle title='Consejo de padres' />
          <Markdown linkTarget='_blank'>{content[0].content}</Markdown>
          <SectionCards>
            {news.map((article) => (
              <CardNews {...article} key={article.id} />
            ))}
          </SectionCards>
          <Button label='Cargar más' handleClick={handleClick} />
        </Section>
      </Page>
    );
  } else {
    return <></>;
  }
};

export { ConsejoPadres };
