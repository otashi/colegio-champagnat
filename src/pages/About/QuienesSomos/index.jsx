import React from 'react';
import { FullwidePhoto } from '../../../components/FullwidePhoto';
import { QuickNav } from '../../../components/QuickNav';
import { Section } from '../../../components/Section';
import { SectionTitle } from '../../../components/SectionTitle';

const QuienesSomos = ({ content = [] }) => {
  if (content.length >= 1) {
    return (
      <>
        <FullwidePhoto coverURL={content[0].coverURL} />
        <QuickNav section='Quienes somos' />
        <Section>
          <SectionTitle title='Quiénes somos' />
          <p>{content[0].content}</p>
        </Section>
      </>
    );
  } else {
    return (
      <>
        <FullwidePhoto />
        <QuickNav section='Quienes somos' />
        <Section>
          <SectionTitle title='Quiénes somos' />
        </Section>
      </>
    );
  }
};

export { QuienesSomos };
