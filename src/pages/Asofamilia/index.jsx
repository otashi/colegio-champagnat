import React from 'react';
import { FullwidePhoto } from '../../components/FullwidePhoto';
import { Section } from '../../components/Section';
import { SectionTitle } from '../../components/SectionTitle';
import { Button } from '../../components/Buttons';
import { Markdown } from '../../components/Markdown';

const Asofamilia = ({ content }) => {
  if (content.length >= 1) {
    return (
      <>
        <FullwidePhoto coverURL={content[0].coverURL} />
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
        <Section>
          <SectionTitle title='Asofamilia' />
        </Section>
      </>
    );
  }
};

export { Asofamilia };
