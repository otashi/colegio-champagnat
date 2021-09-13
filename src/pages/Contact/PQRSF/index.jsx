import React from 'react';
import { StyledForm } from './style';

import { FullwidePhoto } from '../../../components/FullwidePhoto';
import { QuickNav } from '../../../components/QuickNav';
import { Section } from '../../../components/Section';
import { SectionTitle } from '../../../components/SectionTitle';
import { Button } from '../../../components/Buttons';
import { Markdown } from '../../../components/Markdown';
import {
  SelectInput,
  Input,
  RadioInput,
  TextAreaInput,
} from '../../../components/Inputs';

const PQRSF = ({ content }) => {
  return (
    <>
      {content.length >= 1 && <FullwidePhoto coverURL={content[0].coverURL} />}
      <QuickNav section='Contacto' />
      <Section>
        <SectionTitle title='PQRSF' />
        {content.length >= 1 && (
          <Markdown linkTarget='_blank'>{content[0].content}</Markdown>
        )}
        <StyledForm>
          <SelectInput
            label='Area a la que desea dirigirse'
            placeholder='Seleccione una opción'
            options={[
              'Administración',
              'Coord. Académica',
              'Coord. Bachillerato',
              'Coord. Pastoral',
              'Coord. Preescolar',
              'Coord. Primaria',
              'Rectoria',
              'Talento humano',
            ]}
          />
          <Input label='Nombre completo' type='text' />
          <Input label='Teléfono' type='phone' />
          <Input label='Correo electrónico' type='email' />
          <Input label='Dirección de correspondencia' type='text' />
          <RadioInput
            label='Vinculación'
            options={['Padre o acudiente', 'Estudiante', 'Otro']}
          />
          <SelectInput
            label='Motivo'
            placeholder='Seleccione una opción'
            options={[
              'Petición',
              'Queja',
              'Reclamo',
              'Sugerencia',
              'Felicitación',
            ]}
          />
          <TextAreaInput label='Detalle' />
          <Button label='Enviar' />
        </StyledForm>
      </Section>
    </>
  );
};

export { PQRSF };
