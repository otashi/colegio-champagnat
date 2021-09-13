import React from 'react';
import { FullwidePhoto } from '../../../components/FullwidePhoto';
import { QuickNav } from '../../../components/QuickNav';
import { Section } from '../../../components/Section';
import { SectionTitle } from '../../../components/SectionTitle';
import { Markdown } from '../../../components/Markdown';

const SistemaEvaluacionInstitucional = ({ content = [] }) => {
  if (content.length >= 1) {
    return (
      <>
        <FullwidePhoto coverURL={content[0].coverURL} />
        <QuickNav section='Quienes somos' />
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
        <QuickNav section='Quienes somos' />
        <Section>
          <SectionTitle title='Sistema Institucional de Evaluación de Estudiantes' />
        </Section>
      </>
    );
  }
};

export { SistemaEvaluacionInstitucional };
