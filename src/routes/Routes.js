import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { HomeContainer } from '../containers/HomeContainer';
import { QuienesSomosContainer } from '../containers/About/QuienesSomosContainer';
import { HistoriaContainer } from '../containers/About/HistoriaContainer';
import { IdentidadContainer } from '../containers/About/IdentidadContainer';
import { EvangelizacionMaristaContainer } from '../containers/About/EvangelizacionMaristaContainer';
import { PeiContainer } from '../containers/About/PeiContainer';
import { SistemaEvaluacionInstitucionalContainer } from '../containers/About/SistemaEvaluacionInstitucionalContainer';
import { ProyectoEcologicoContainer } from '../containers/About/ProyectoEcologicoContainer';
import { ManualConvivenciaContainer } from '../containers/About/ManualConvivenciaContainer';
import { ProtocolosContainer } from '../containers/About/ProtocolosContainer';
import { TratamientoDatosContainer } from '../containers/About/TratamientoDatosContainer';

import { AdmisionesContainer } from '../containers/Admissions/AdmisionesContainer';
import { PasosContainer } from '../containers/Admissions/PasosContainer';
import { PoliticasContainer } from '../containers/Admissions/PoliticasContainer';
import { InfoContainer } from '../containers/Admissions/InfoContainer';

import { NoticiasContainer } from '../containers/News/NoticiasContainer';
import { BoletinesContainer } from '../containers/News/BoletinesContainer';
import { CuartoPisoContainer } from '../containers/News/CuartoPisoContainer';
import { Articulo } from '../pages/News/Articulo';

import { EstudiantesContainer } from '../containers/Students/EstudiantesContainer';
import { CampusVirtualContainer } from '../containers/Students/CampusVirtualContainer';
import { CalendarioContainer } from '../containers/Students/CalendarioContainer';
import { RecursosContainer } from '../containers/Students/RecursosContainer';
import { BibliotecaContainer } from '../containers/Students/BibliotecaContainer';

import { PadresContainer } from '../containers/Parents/PadresContainer';
import { CircularesContainer } from '../containers/Parents/CircularesContainer';
import { ContactoDocenteContainer } from '../containers/Parents/ContactoDocenteContainer';
import { ConsejoPadresContainer } from '../containers/Parents/ConsejoPadresContainer';
import { RutasContainer } from '../containers/Parents/RutasContainer';
import { UtilesContainer } from '../containers/Parents/UtilesContainer';
import { AsofamiliaContainer } from '../containers/AsofamiliaContainer';


import { ContactoContainer } from '../containers/Contact/ContactoContainer';
import { PQRSF } from '../pages/Contact/PQRSF';
import { RutasAtencion } from '../pages/Contact/RutasAtencion';
import { Portales } from '../pages/Portales';
import { NotFound } from '../pages/NotFound';

const RoutesSwitch = () => {
  return (
    <Switch>
      <Route exact path='/' component={HomeContainer} />

      <Route exact path='/quienes-somos' component={QuienesSomosContainer} />
      <Route
        exact
        path='/quienes-somos/historia'
        component={HistoriaContainer}
      />
      <Route
        exact
        path='/quienes-somos/identidad'
        component={IdentidadContainer}
      />
      <Route
        exact
        path='/quienes-somos/evangelizacion-marista'
        component={EvangelizacionMaristaContainer}
      />
      <Route exact path='/quienes-somos/pei' component={PeiContainer} />
      <Route
        exact
        path='/quienes-somos/sistema-evaluacion-institucional'
        component={SistemaEvaluacionInstitucionalContainer}
      />
      <Route
        exact
        path='/quienes-somos/proyecto-ecologico'
        component={ProyectoEcologicoContainer}
      />
      <Route
        exact
        path='/quienes-somos/manual-convivencia'
        component={ManualConvivenciaContainer}
      />
      <Route
        exact
        path='/quienes-somos/protocolos'
        component={ProtocolosContainer}
      />
      <Route
        exact
        path='/quienes-somos/tratamiento-datos'
        component={TratamientoDatosContainer}
      />

      <Route exact path='/admisiones' component={AdmisionesContainer} />
      <Route exact path='/admisiones/pasos' component={PasosContainer} />
      <Route
        exact
        path='/admisiones/politicas'
        component={PoliticasContainer}
      />
      <Route exact path='/admisiones/info' component={InfoContainer} />

      <Route exact path='/noticias' component={NoticiasContainer} />
      <Route exact path='/noticias/boletines' component={BoletinesContainer} />
      <Route
        exact
        path='/noticias/cuarto-piso'
        component={CuartoPisoContainer}
      />
      <Route exact path='/articulo/:id' component={Articulo} />

      <Route exact path='/estudiantes' component={EstudiantesContainer} />
      <Route
        exact
        path='/estudiantes/campus-virtual'
        component={CampusVirtualContainer}
      />
      <Route
        exact
        path='/estudiantes/calendario'
        component={CalendarioContainer}
      />
      <Route exact path='/estudiantes/recursos' component={RecursosContainer} />
      <Route
        exact
        path='/estudiantes/biblioteca'
        component={BibliotecaContainer}
      />

      <Route exact path='/padres' component={PadresContainer} />
      <Route exact path='/padres/circulares' component={CircularesContainer} />
      <Route
        exact
        path='/padres/contacto-docente'
        component={ContactoDocenteContainer}
      />
      <Route
        exact
        path='/padres/consejo-padres'
        component={ConsejoPadresContainer}
      />
      <Route exact path='/padres/rutas' component={RutasContainer} />
      <Route exact path='/padres/utiles' component={UtilesContainer} />

      <Route exact path='/asofamilia' component={AsofamiliaContainer} />

      <Route exact path='/contacto' component={ContactoContainer} />
      <Route exact path='/contacto/pqrsf' component={PQRSF} />
      <Route exact path='/contacto/rutas-atencion' component={RutasAtencion} />

      <Route exact path='/portales' component={Portales} />

      <Route component={NotFound} />
    </Switch>
  );
};

export { RoutesSwitch };
