import React from 'react';
import { Button } from '../../../components/Buttons';
import { FullwidePhoto } from '../../../components/FullwidePhoto';
import { QuickNav } from '../../../components/QuickNav';
import { Section } from '../../../components/Section';
import { SectionTitle } from '../../../components/SectionTitle';
import { Markdown } from '../../../components/Markdown';
import { Page } from '../../../components/Page';

const CampusVirtual = ({ content }) => {
  if (content.length >= 1) {
    return (
      <Page>
        <FullwidePhoto
          coverURL={content[0].coverURL}
          setPhotoFilter={content[0].setPhotoFilter}
        />
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
      </Page>
    );
  } else {
    return (
      <Page>
        <FullwidePhoto />
        <QuickNav section='Estudiantes' />
        <Section>
          <SectionTitle title='Campus Virtual' />
        </Section>
      </Page>
    );
  }
};

export { CampusVirtual };
