import React from 'react';
import ReactMarkdown from 'react-markdown';
import { StyledMarkdown } from './style';

const Markdown = ({ children, linkTarget }) => {
  return (
    <StyledMarkdown>
      <ReactMarkdown linkTarget={linkTarget}>{children}</ReactMarkdown>
    </StyledMarkdown>
  );
};

export { Markdown };
