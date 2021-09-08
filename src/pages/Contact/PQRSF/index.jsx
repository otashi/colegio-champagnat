import React from 'react';
import { StyledForm } from './style';

import { FullwidePhoto } from '../../../components/FullwidePhoto';
import { QuickNav } from '../../../components/QuickNav';
import { Section } from '../../../components/Section';
import { SectionTitle } from '../../../components/SectionTitle';
import { Button } from '../../../components/Buttons';
import {
  SelectInput,
  Input,
  RadioInput,
  TextAreaInput,
} from '../../../components/Inputs';

const PQRSF = () => {
  return (
    <>
      <FullwidePhoto />
      <QuickNav section='Contacto' />
      <Section>
        <SectionTitle title='PQRSF' />
        <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </p>
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
