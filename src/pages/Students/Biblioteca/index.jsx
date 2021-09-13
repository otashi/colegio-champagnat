import React from 'react';
import { Button } from '../../../components/Buttons';
import { FullwidePhoto } from '../../../components/FullwidePhoto';
import { QuickNav } from '../../../components/QuickNav';
import { Section } from '../../../components/Section';
import { SectionTitle } from '../../../components/SectionTitle';
import { Markdown } from '../../../components/Markdown';

const Biblioteca = ({ content }) => {
  if (content.length >= 1) {
    return (
      <>
        <FullwidePhoto coverURL={content[0].coverURL} />
        <QuickNav section='Estudiantes' />
        <Section>
          <SectionTitle title={content[0].title} />
          <Markdown linkTarget='_blank'>{content[0].content}</Markdown>
          <Button
            label='Ir al sitio'
            type='Anchor'
            href={content[0].externalSiteURL}
          />
        </Section>
      </>
    );
  } else {
    return (
      <>
        <FullwidePhoto />
        <QuickNav section='Estudiantes' />
        <Section>
          <SectionTitle title='Biblioteca' />
        </Section>
      </>
    );
  }
};

export { Biblioteca };
