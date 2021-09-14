import React from 'react';
import { FullwidePhoto } from '../../../components/FullwidePhoto';
import { QuickNav } from '../../../components/QuickNav';
import { Section } from '../../../components/Section';
import { SectionTitle } from '../../../components/SectionTitle';
import { Markdown } from '../../../components/Markdown';
import { Page } from '../../../components/Page';

const Padres = ({ content }) => {
  if (content.length >= 1) {
    return (
      <Page>
        <FullwidePhoto
          coverURL={content[0].coverURL}
          setPhotoFilter={content[0].setPhotoFilter}
        />
        <QuickNav section='Padres' />
        <Section>
          <SectionTitle title={content[0].title} />
          <Markdown linkTarget='_blank'>{content[0].content}</Markdown>
        </Section>
      </Page>
    );
  } else {
    return (
      <Page>
        <FullwidePhoto />
        <QuickNav section='Padres' />
        <Section>
          <SectionTitle title='Padres' />
        </Section>
      </Page>
    );
  }
};

export { Padres };
