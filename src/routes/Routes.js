import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { QuienesSomos } from '../pages/About/QuienesSomos';
import { Historia } from '../pages/About/Historia';
import { Identidad } from '../pages/About/Identidad';
import { EvangelizacionMarista } from '../pages/About/EvangelizacionMarista';
import { Pei } from '../pages/About/Pei';
import { SistemaEvaluacionInstitucional } from '../pages/About/SistemaEvaluacionInstitucional';
import { ProyectoEcologico } from '../pages/About/ProyectoEcologico';
import { ManualConvivencia } from '../pages/About/ManualConvivencia';
import { Protocolos } from '../pages/About/Protocolos';
import { TratamientoDatos } from '../pages/About/TratamientoDatos';

import { Admisiones } from '../pages/Admissions/Admisiones';
import { Pasos } from '../pages/Admissions/Pasos';
import { Politicas } from '../pages/Admissions/Politicas';
import { Info } from '../pages/Admissions/Info';

import { Noticias } from '../pages/News/Noticias';
import { Boletines } from '../pages/News/Boletines';
import { CuartoPiso } from '../pages/News/CuartoPiso';
import { Articulo } from '../pages/News/Articulo';

import { Estudiantes } from '../pages/Students/Estudiantes';
import { CampusVirtual } from '../pages/Students/CampusVirtual';
import { Calendario } from '../pages/Students/Calendario';
import { Recursos } from '../pages/Students/Recursos';
import { Biblioteca } from '../pages/Students/Biblioteca';

import { Padres } from '../pages/Parents/Padres';
import { Circulares } from '../pages/Parents/Circulares';
import { ContactoDocente } from '../pages/Parents/ContactoDocente';
import { ConsejoPadres } from '../pages/Parents/ConsejoPadres';
import { Rutas } from '../pages/Parents/Rutas';
import { Utiles } from '../pages/Parents/Utiles';
import { Asofamilia } from '../pages/Asofamilia';
import { Contacto } from '../pages/Contact/Contacto';
import { PQRSF } from '../pages/Contact/PQRSF';
import { RutasAtencion } from '../pages/Contact/RutasAtencion';
import { Portales } from '../pages/Portales';

const RoutesSwitch = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />

      <Route exact path='/quienes-somos' component={QuienesSomos} />
      <Route exact path='/quienes-somos/historia' component={Historia} />
      <Route exact path='/quienes-somos/identidad' component={Identidad} />
      <Route
        exact
        path='/quienes-somos/evangelizacion-marista'
        component={EvangelizacionMarista}
      />
      <Route exact path='/quienes-somos/pei' component={Pei} />
      <Route
        exact
        path='/quienes-somos/sistema-evaluacion-institucional'
        component={SistemaEvaluacionInstitucional}
      />
      <Route
        exact
        path='/quienes-somos/proyecto-ecologico'
        component={ProyectoEcologico}
      />
      <Route
        exact
        path='/quienes-somos/manual-convivencia'
        component={ManualConvivencia}
      />
      <Route exact path='/quienes-somos/protocolos' component={Protocolos} />
      <Route
        exact
        path='/quienes-somos/tratamiento-datos'
        component={TratamientoDatos}
      />

      <Route exact path='/admisiones' component={Admisiones} />
      <Route exact path='/admisiones/pasos' component={Pasos} />
      <Route exact path='/admisiones/politicas' component={Politicas} />
      <Route exact path='/admisiones/info' component={Info} />

      <Route exact path='/noticias' component={Noticias} />
      <Route exact path='/noticias/boletines' component={Boletines} />
      <Route exact path='/noticias/cuarto-piso' component={CuartoPiso} />
      <Route exact path='/articulo/:id' component={Articulo} />

      <Route exact path='/estudiantes' component={Estudiantes} />
      <Route
        exact
        path='/estudiantes/campus-virtual'
        component={CampusVirtual}
      />
      <Route exact path='/estudiantes/calendario' component={Calendario} />
      <Route exact path='/estudiantes/recursos' component={Recursos} />
      <Route exact path='/estudiantes/biblioteca' component={Biblioteca} />

      <Route exact path='/padres' component={Padres} />
      <Route exact path='/padres/circulares' component={Circulares} />
      <Route
        exact
        path='/padres/contacto-docente'
        component={ContactoDocente}
      />
      <Route exact path='/padres/consejo-padres' component={ConsejoPadres} />
      <Route exact path='/padres/rutas' component={Rutas} />
      <Route exact path='/padres/utiles' component={Utiles} />

      <Route exact path='/asofamilia' component={Asofamilia} />

      <Route exact path='/contacto' component={Contacto} />
      <Route exact path='/contacto/pqrsf' component={PQRSF} />
      <Route exact path='/contacto/rutas-atencion' component={RutasAtencion} />

      <Route exact path='/portales' component={Portales} />
    </Switch>
  );
};

export { RoutesSwitch };
