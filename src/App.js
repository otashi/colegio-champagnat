import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { GlobalStyles } from './styles/GlobalStyles';
import { Nav } from './components/Nav';
import { Footer } from './components/Footer';

import { Home } from './pages/Home';
import { QuienesSomos } from './pages/About/QuienesSomos';
import { Historia } from './pages/About/Historia';
import { Identidad } from './pages/About/Identidad';
import { EvangelizacionMarista } from './pages/About/EvangelizacionMarista';
import { Pei } from './pages/About/Pei';
import { SistemaEvaluacionInstitucional } from './pages/About/SistemaEvaluacionInstitucional';
import { ProyectoEcologico } from './pages/About/ProyectoEcologico';
import { ManualConvivencia } from './pages/About/ManualConvivencia';
import { Protocolos } from './pages/About/Protocolos';
import { TratamientoDatos } from './pages/About/TratamientoDatos';

import { Admisiones } from './pages/Admissions/Admisiones';
import { Pasos } from './pages/Admissions/Pasos';
import { Politicas } from './pages/Admissions/Politicas';
import { Info } from './pages/Admissions/Info';

import { Noticias } from './pages/News/Noticias';
import { Boletines } from './pages/News/Boletines';
import { CuartoPiso } from './pages/News/CuartoPiso';
import { Articulo } from './pages/News/Articulo';

import { Estudiantes } from './pages/Students/Estudiantes';
import { CampusVirtual } from './pages/Students/CampusVirtual';
import { Calendario } from './pages/Students/Calendario';
import { Recursos } from './pages/Students/Recursos';

import { Padres } from './pages/Parents/Padres';
import { Biblioteca } from './pages/Students/Biblioteca';

function App() {
  return (
    <div className='App'>
      <GlobalStyles />
      <BrowserRouter>
        <Nav />
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
          <Route
            exact
            path='/quienes-somos/protocolos'
            component={Protocolos}
          />
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
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
