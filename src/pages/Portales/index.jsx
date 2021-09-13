import React from 'react';
import { FullwidePhoto } from '../../components/FullwidePhoto';
import { QuickNav } from '../../components/QuickNav';
import { Section } from '../../components/Section';
import { SectionTitle } from '../../components/SectionTitle';
import { Markdown } from '../../components/Markdown';

const Portales = ({ content }) => {
  if (content.length >= 1) {
    return (
      <>
        <FullwidePhoto coverURL={content[0].coverURL} />
        <QuickNav section='Contacto' />
        <Section>
          <SectionTitle title={content[0].title} />
          <Markdown linkTarget='_blank'>{content[0].content}</Markdown>
        </Section>
      </>
    );
  } else {
    return (
      <>
        <FullwidePhoto />
        <QuickNav section='Portales' />
        <Section>
          <SectionTitle title='Portales' />
        </Section>
      </>
    );
  }
};

export { Portales };
