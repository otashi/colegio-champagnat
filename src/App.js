import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { GlobalStyles } from './styles/GlobalStyles';
import { Nav } from './components/Nav';
import { Footer } from './components/Footer';

import { Home } from './pages/Home';
import { QuienesSomos } from './pages/QuienesSomos';
import { Historia } from './pages/Historia';
import { Identidad } from './pages/Identidad';
import { EvangelizacionMarista } from './pages/EvangelizacionMarista';
import { Pei } from './pages/Pei';
import { SistemaEvaluacionInstitucional } from './pages/SistemaEvaluacionInstitucional';
import { ProyectoEcologico } from './pages/ProyectoEcologico';
import { ManualConvivencia } from './pages/ManualConvivencia';
import { Protocolos } from './pages/Protocolos';
import { TratamientoDatos } from './pages/TratamientoDatos';
import { Admisiones } from './pages/Admisiones';
import { Pasos } from './pages/Pasos';
import { Politicas } from './pages/Politicas';
import { Info } from './pages/Info';
import { Noticias } from './pages/Noticias';
import { Boletines } from './pages/Boletines';
import { CuartoPiso } from './pages/CuartoPiso';
import { Articulo } from './pages/Articulo';

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

          
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
