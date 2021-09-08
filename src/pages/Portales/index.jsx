import React from 'react';
import { FullwidePhoto } from '../../components/FullwidePhoto';
import { QuickNav } from '../../components/QuickNav';
import { Section } from '../../components/Section';
import { SectionTitle } from '../../components/SectionTitle';

const Portales = () => {
  return (
    <>
      <FullwidePhoto />
      <QuickNav section='Portales' />
      <Section>
        <SectionTitle title='Portales' />
        <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </p>
      </Section>
    </>
  );
};

export { Portales };
