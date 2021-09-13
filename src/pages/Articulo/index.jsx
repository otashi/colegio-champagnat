import React from 'react';
import { FullwidePhoto } from '../../components/FullwidePhoto';
import { Section } from '../../components/Section';
import { ArticleTitle } from '../../components/ArticleTitle';
import { Markdown } from '../../components/Markdown';

const Articulo = ({ content }) => {
  if (Object.keys(content).length >= 1) {
    return (
      <>
        <FullwidePhoto coverURL={content.coverURL} />
        <Section>
          <ArticleTitle
            title={content.title}
            category={content.category.category}
          />
          <Markdown>{content.content}</Markdown>
        </Section>
      </>
    );
  } else {
    return <></>;
  }
};

export { Articulo };
